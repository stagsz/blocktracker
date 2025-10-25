/**
 * Web3 Service Layer
 *
 * Handles all blockchain interactions using ethers.js
 * This is where we connect to Ethereum and fetch data
 */

// Import ethers.js from CDN (loaded in HTML)
// API keys loaded from localStorage for GitHub Pages compatibility

/**
 * Web3Service class - Manages blockchain connections and queries
 */
class Web3Service {
  constructor() {
    this.provider = null;
    this.network = this.getFromStorage('NETWORK') || 'mainnet';
    this.alchemyKey = this.getFromStorage('ALCHEMY_API_KEY');
    this.etherscanKey = this.getFromStorage('ETHERSCAN_API_KEY');
  }

  /**
   * Get API key from localStorage
   */
  getFromStorage(key) {
    return localStorage.getItem(`blocktracker_${key}`);
  }

  /**
   * Save API key to localStorage
   */
  saveToStorage(key, value) {
    localStorage.setItem(`blocktracker_${key}`, value);
  }

  /**
   * Check if API keys are configured
   */
  hasApiKeys() {
    return this.alchemyKey && this.etherscanKey;
  }

  /**
   * Initialize the provider connection
   * This connects us to the Ethereum blockchain
   */
  async initialize() {
    try {
      // Check if API keys are configured
      if (!this.hasApiKeys()) {
        throw new Error('Please configure your API keys in Settings (⚙️ button)');
      }

      // Create provider using Alchemy
      // Provider = our connection to the blockchain
      const alchemyUrl = `https://eth-${this.network}.g.alchemy.com/v2/${this.alchemyKey}`;
      this.provider = new ethers.JsonRpcProvider(alchemyUrl);

      // Test the connection
      const network = await this.provider.getNetwork();
      console.log(`✅ Connected to Ethereum ${this.network}`, network);

      return true;
    } catch (error) {
      console.error('Failed to initialize Web3 service:', error);
      throw error;
    }
  }

  /**
   * Get wallet balance and basic info
   * @param {string} address - Ethereum address
   * @returns {object} - Wallet data
   */
  async getWalletInfo(address) {
    if (!this.provider) {
      await this.initialize();
    }

    try {
      // Get ETH balance (returns in Wei - smallest unit of ETH)
      // 1 ETH = 1,000,000,000,000,000,000 Wei
      const balanceWei = await this.provider.getBalance(address);

      // Convert Wei to ETH for human readability
      const balanceEth = ethers.formatEther(balanceWei);

      // Get transaction count (how many transactions this wallet has sent)
      const txCount = await this.provider.getTransactionCount(address);

      // Get current block number (for context)
      const blockNumber = await this.provider.getBlockNumber();

      return {
        address,
        balance: `${parseFloat(balanceEth).toFixed(4)} ETH`,
        balanceWei: balanceWei.toString(),
        txCount,
        blockNumber
      };
    } catch (error) {
      console.error('Error fetching wallet info:', error);
      throw new Error(`Failed to fetch wallet data: ${error.message}`);
    }
  }

  /**
   * Get recent transactions using Etherscan API
   * @param {string} address - Ethereum address
   * @param {number} limit - Number of transactions to fetch
   * @returns {array} - Transaction list
   */
  async getRecentTransactions(address, limit = 10) {
    try {
      // Etherscan API v2 endpoint for transaction history
      const baseUrl = this.network === 'mainnet'
        ? 'https://api.etherscan.io/v2/api'
        : `https://api-${this.network}.etherscan.io/v2/api`;

      const url = `${baseUrl}?chainid=1&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=${limit}&sort=desc&apikey=${this.etherscanKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== '1') {
        console.warn('Etherscan API warning:', data.message);
        return [];
      }

      // Format transactions for display
      return data.result.map(tx => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to || 'Contract Creation',
        value: `${ethers.formatEther(tx.value)} ETH`,
        timestamp: parseInt(tx.timeStamp),
        blockNumber: tx.blockNumber,
        isError: tx.isError === '1'
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
      // Return empty array if Etherscan fails (graceful degradation)
      return [];
    }
  }

  /**
   * Get ERC-20 token balances for an address
   * @param {string} address - Ethereum address
   * @returns {array} - Array of token holdings
   */
  async getTokenBalances(address) {
    try {
      // Etherscan API v2 endpoint for ERC-20 token balance
      const baseUrl = this.network === 'mainnet'
        ? 'https://api.etherscan.io/v2/api'
        : `https://api-${this.network}.etherscan.io/v2/api`;

      const url = `${baseUrl}?chainid=1&module=account&action=tokentx&address=${address}&page=1&offset=100&sort=desc&apikey=${this.etherscanKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== '1') {
        console.warn('Etherscan token API warning:', data.message);
        return [];
      }

      // Group transactions by token contract to get unique tokens
      const tokenMap = new Map();

      data.result.forEach(tx => {
        const tokenAddress = tx.contractAddress;
        if (!tokenMap.has(tokenAddress)) {
          tokenMap.set(tokenAddress, {
            contractAddress: tokenAddress,
            name: tx.tokenName,
            symbol: tx.tokenSymbol,
            decimals: parseInt(tx.tokenDecimal)
          });
        }
      });

      // Get actual balances for each token
      const tokens = Array.from(tokenMap.values());
      const tokensWithBalances = [];

      for (const token of tokens.slice(0, 10)) { // Limit to 10 tokens for performance
        try {
          const erc20Abi = ['function balanceOf(address) view returns (uint256)'];
          const contract = new ethers.Contract(token.contractAddress, erc20Abi, this.provider);
          const balance = await contract.balanceOf(address);

          if (balance > 0) {
            const formattedBalance = ethers.formatUnits(balance, token.decimals);
            tokensWithBalances.push({
              ...token,
              balance: parseFloat(formattedBalance).toFixed(4),
              rawBalance: balance.toString()
            });
          }
        } catch (error) {
          console.warn(`Failed to get balance for token ${token.symbol}:`, error);
        }
      }

      return tokensWithBalances.sort((a, b) => parseFloat(b.balance) - parseFloat(a.balance));
    } catch (error) {
      console.error('Error fetching token balances:', error);
      return [];
    }
  }

  /**
   * Get smart contract information using Etherscan API
   * @param {string} address - Contract address
   * @returns {object} - Contract data
   */
  async getContractInfo(address) {
    try {
      // First, check if this address is actually a contract
      const code = await this.provider.getCode(address);

      if (code === '0x') {
        throw new Error('This address is not a smart contract (no code deployed)');
      }

      // Get contract source code and ABI from Etherscan API v2
      const baseUrl = this.network === 'mainnet'
        ? 'https://api.etherscan.io/v2/api'
        : `https://api-${this.network}.etherscan.io/v2/api`;

      const url = `${baseUrl}?chainid=1&module=contract&action=getsourcecode&address=${address}&apikey=${this.etherscanKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== '1' || !data.result[0]) {
        throw new Error('Failed to fetch contract information');
      }

      const contractData = data.result[0];

      return {
        address,
        name: contractData.ContractName || 'Unknown',
        compiler: contractData.CompilerVersion || 'Unknown',
        verified: contractData.SourceCode !== '' && contractData.SourceCode !== '0x',
        abi: contractData.ABI !== 'Contract source code not verified' ? contractData.ABI : null,
        sourceCode: contractData.SourceCode || null,
        constructorArguments: contractData.ConstructorArguments || null
      };
    } catch (error) {
      console.error('Error fetching contract info:', error);
      throw error;
    }
  }

  /**
   * Get NFT/ERC-721 contract information
   * @param {string} address - NFT contract address
   * @returns {object} - NFT collection data
   */
  async getNFTInfo(address) {
    try {
      // First verify it's a contract
      const code = await this.provider.getCode(address);

      if (code === '0x') {
        throw new Error('This address is not a smart contract');
      }

      // ERC-721 standard interface
      // We'll try to call common NFT functions: name(), symbol(), totalSupply()
      const erc721Abi = [
        'function name() view returns (string)',
        'function symbol() view returns (string)',
        'function totalSupply() view returns (uint256)'
      ];

      const contract = new ethers.Contract(address, erc721Abi, this.provider);

      let name, symbol, totalSupply;

      try {
        name = await contract.name();
      } catch {
        name = 'Unknown';
      }

      try {
        symbol = await contract.symbol();
      } catch {
        symbol = 'Unknown';
      }

      try {
        totalSupply = await contract.totalSupply();
        totalSupply = totalSupply.toString();
      } catch {
        totalSupply = 'Unknown';
      }

      return {
        address,
        name,
        symbol,
        totalSupply,
        type: 'ERC-721' // Could enhance to detect ERC-1155
      };
    } catch (error) {
      console.error('Error fetching NFT info:', error);
      throw error;
    }
  }

  /**
   * Get ENS (Ethereum Name Service) name for address
   * @param {string} address - Ethereum address
   * @returns {string|null} - ENS name or null
   */
  async getENSName(address) {
    try {
      // ENS is only on mainnet
      if (this.network !== 'mainnet') {
        return null;
      }

      const ensName = await this.provider.lookupAddress(address);
      return ensName;
    } catch (error) {
      console.error('Error fetching ENS name:', error);
      return null;
    }
  }
}

// Export a singleton instance
const web3Service = new Web3Service();
export default web3Service;
