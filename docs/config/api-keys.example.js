/**
 * API Keys Configuration Template
 *
 * Copy this file to api-keys.js and fill in your actual API keys
 *
 * Get your free API keys:
 * - Alchemy: https://www.alchemy.com/ (300M compute units/month free)
 * - Etherscan: https://etherscan.io/apis (5 calls/second free)
 */

const API_KEYS = {
  // Alchemy API Key
  // Sign up: https://www.alchemy.com/ → Dashboard → Create App → Copy API Key
  ALCHEMY_API_KEY: 'your-alchemy-api-key-here',

  // Etherscan API Key
  // Sign up: https://etherscan.io/apis → My API Keys → Create API Key
  ETHERSCAN_API_KEY: 'your-etherscan-api-key-here',

  // Network Configuration
  // 'mainnet' = Ethereum mainnet (real ETH, real data)
  // 'sepolia' = Ethereum testnet (free test ETH, for learning)
  NETWORK: 'mainnet'  // Start with 'sepolia' for testing!
};

// For browser usage (we'll use ES modules)
export default API_KEYS;
