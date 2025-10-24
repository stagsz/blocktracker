/**
 * Helper Utilities for BlockTracker
 *
 * Collection of utility functions for formatting, validation, and common operations
 */

/**
 * Validate Ethereum address format
 * @param {string} address - The address to validate
 * @returns {boolean} - True if valid Ethereum address
 */
export function isValidAddress(address) {
  // Basic validation: starts with 0x and is 42 characters long
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(address);
}

/**
 * Shorten Ethereum address for display
 * @param {string} address - Full Ethereum address
 * @param {number} startChars - Number of characters to show at start
 * @param {number} endChars - Number of characters to show at end
 * @returns {string} - Shortened address (e.g., "0x1234...5678")
 */
export function shortenAddress(address, startChars = 6, endChars = 4) {
  if (!address) return '';
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Format ETH amount from Wei to ETH
 * @param {string|bigint} weiAmount - Amount in Wei
 * @returns {string} - Formatted ETH amount (e.g., "1.234 ETH")
 */
export function formatEth(weiAmount) {
  // We'll use ethers.js formatEther in the actual implementation
  // For now, this is a placeholder
  return `${weiAmount} ETH`;
}

/**
 * Format timestamp to readable date
 * @param {number} timestamp - Unix timestamp (seconds)
 * @returns {string} - Formatted date string
 */
export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Format large numbers with commas
 * @param {number|string} num - The number to format
 * @returns {string} - Formatted number (e.g., "1,234,567")
 */
export function formatNumber(num) {
  return Number(num).toLocaleString('en-US');
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export function escapeHTML(str) {
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, char => escapeMap[char]);
}

/**
 * Show notification to user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success', 'error', 'info')
 */
export function showNotification(message, type = 'info') {
  // Simple console log for now - we can enhance this later
  console.log(`[${type.toUpperCase()}] ${message}`);

  // TODO: Implement a proper toast notification system
}

/**
 * Generate AI analysis prompt
 * @param {object} data - Analysis data
 * @param {string} type - Analysis type ('wallet', 'contract', 'nft')
 * @returns {string} - Formatted AI prompt
 */
export function generateAIPrompt(data, type) {
  const timestamp = new Date().toISOString();

  let prompt = `# Blockchain Intelligence Analysis Request

**Analysis Type:** ${type.toUpperCase()}
**Generated:** ${timestamp}
**Network:** Ethereum

---

## Target Information

`;

  if (type === 'wallet') {
    prompt += `**Address:** ${data.address}
**ETH Balance:** ${data.balance}
**Transaction Count:** ${data.txCount}
**First Activity:** ${data.firstTx || 'Unknown'}

## ERC-20 Token Holdings

${data.tokens && data.tokens.length > 0
  ? data.tokens.map(token => `- **${token.name} (${token.symbol})**: ${token.balance}`).join('\n')
  : 'No ERC-20 tokens detected'}

## Analysis Tasks

Please analyze this Ethereum wallet and provide insights on:

1. **Activity Patterns**: Analyze transaction frequency, timing, and patterns
2. **Fund Flow**: Identify major inflows/outflows and unusual transfers
3. **Entity Classification**: Is this likely an exchange, individual, contract, or other entity?
4. **Risk Assessment**: Flag any suspicious patterns or high-risk behaviors
5. **Associated Addresses**: Identify frequently interacting addresses
6. **Token Portfolio Analysis**: Evaluate the token holdings for diversification and risk
7. **Wallet Behavior**: Based on tokens held, what type of investor/user is this?

## Recent Transaction Context

${data.transactions ? data.transactions.slice(0, 5).map((tx, i) => `${i + 1}. Hash: ${tx.hash}, Value: ${tx.value}, To: ${tx.to}`).join('\n') : 'No recent transactions available'}

`;
  } else if (type === 'contract') {
    prompt += `**Contract Address:** ${data.address}
**Name:** ${data.name || 'Unknown'}
**Verified:** ${data.verified ? 'Yes' : 'No'}

## Analysis Tasks

Please analyze this smart contract and provide insights on:

1. **Contract Purpose**: What does this contract do?
2. **Security Assessment**: Are there any known vulnerabilities or red flags?
3. **Usage Patterns**: How active is this contract?
4. **Token Analysis**: If this is a token contract, analyze tokenomics
5. **Upgrade Status**: Is this contract upgradeable? Who controls it?

`;
  } else if (type === 'nft') {
    prompt += `**Collection Address:** ${data.address}
**Name:** ${data.name || 'Unknown'}
**Symbol:** ${data.symbol || 'Unknown'}
**Total Supply:** ${data.totalSupply || 'Unknown'}

## Analysis Tasks

Please analyze this NFT collection and provide insights on:

1. **Collection Overview**: Project background and legitimacy
2. **Market Activity**: Trading volume, floor price trends
3. **Holder Analysis**: Distribution of ownership, whale concentration
4. **Rarity & Traits**: Notable trait distributions if available
5. **Contract Security**: Is the contract safe? Any mint/transfer restrictions?

`;
  }

  prompt += `
---

## Output Format

Please provide:
1. **Executive Summary** (2-3 sentences)
2. **Key Findings** (bullet points)
3. **Risk Level** (Low/Medium/High with justification)
4. **Recommendations** (actionable next steps)

**Note:** This is an automated intelligence request. Focus on factual, evidence-based analysis.`;

  return prompt;
}
