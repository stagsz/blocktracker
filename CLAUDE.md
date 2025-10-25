# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BlockTracker is a beginner-friendly Web3 OSINT (Open Source Intelligence) tool for analyzing Ethereum blockchain data. It's built with vanilla JavaScript (no frameworks) and uses ethers.js v6 for blockchain interactions. The application runs as a client-side web app served by a simple Node.js HTTP server.

## Development Commands

### Running the Application
```bash
npm start        # Start dev server on http://localhost:3000
npm run dev      # Same as npm start
```

The server serves static files from `src/` and configuration from `config/`. No build step required.

### Initial Setup
```bash
npm install      # Install ethers.js dependency
cp config/api-keys.example.js config/api-keys.js  # Create API keys file
# Then edit config/api-keys.js with actual API keys
```

### Required API Keys
- **Alchemy API Key**: For blockchain RPC access (free tier: 300M compute units/month)
- **Etherscan API Key**: For transaction history and contract verification (free tier: 5 calls/second)

Configuration is in `config/api-keys.js` (gitignored). Template at `config/api-keys.example.js`.

## Architecture

### Module Structure
The codebase uses ES modules with a clean separation of concerns:

1. **server.js** (Root)
   - Simple HTTP server using Node.js built-in modules
   - Serves static files from `src/` directory
   - Serves config files from `config/` directory
   - No framework dependencies (just Node.js stdlib)

2. **src/js/web3-service.js** (Data Layer)
   - Singleton service managing blockchain interactions
   - Handles provider initialization via Alchemy
   - All blockchain queries go through this module
   - Key methods:
     - `getWalletInfo()`: ETH balance, tx count, block number
     - `getRecentTransactions()`: Transaction history via Etherscan API v2
     - `getTokenBalances()`: ERC-20 token holdings
     - `getContractInfo()`: Smart contract source and ABI
     - `getNFTInfo()`: ERC-721 collection metadata
     - `getENSName()`: Reverse ENS lookup (mainnet only)

3. **src/js/app.js** (UI Layer)
   - Main application controller
   - Manages UI state and DOM interactions
   - Orchestrates data fetching from web3-service
   - Three analysis modes: wallet, contract, NFT
   - Handles result display and AI prompt generation

4. **src/utils/helpers.js** (Utilities)
   - Pure utility functions (no dependencies)
   - Address validation and formatting
   - Date/number formatting
   - XSS prevention (escapeHTML)
   - AI prompt generation for intelligence reports

### Data Flow
```
User Input → app.js (validation) → web3-service.js (blockchain API) → app.js (display)
                                                    ↓
                              Alchemy RPC + Etherscan API v2
```

### API Integration Architecture
- **Alchemy**: Primary RPC provider for on-chain data (balance, code, contract calls)
- **Etherscan API v2**: Transaction history and contract source code
  - Note: Uses v2 endpoints with `chainid=1` parameter
  - Base URL pattern: `https://api.etherscan.io/v2/api?chainid=1&...`
- **Provider Pattern**: Single JsonRpcProvider instance created in web3-service singleton

## Important Implementation Details

### API Key Security
- Never commit `config/api-keys.js` (already in .gitignore)
- API keys are loaded by browser at runtime via ES module import
- Server serves config files directly from `/config/` path

### Network Configuration
- Default network configurable in `config/api-keys.js` (mainnet/sepolia)
- ENS lookups only work on mainnet
- Etherscan API endpoints change based on network setting

### Token Balance Fetching
- Token discovery: Query Etherscan API for token transfers
- Balance calculation: Direct contract calls using ERC-20 ABI
- Limited to 10 tokens for performance (in getTokenBalances)
- Only shows tokens with non-zero balance

### Error Handling Philosophy
- Graceful degradation for non-critical features (transactions, tokens)
- Hard failures for critical features (invalid addresses, provider init)
- Etherscan API failures return empty arrays rather than throwing

### Browser Compatibility
- Uses modern JavaScript (ES modules, async/await)
- ethers.js loaded from CDN in HTML (not bundled)
- Requires browser support for: ES modules, fetch API, clipboard API

## Common Patterns

### Adding New Blockchain Queries
1. Add method to Web3Service class in `web3-service.js`
2. Use `this.provider` for on-chain calls
3. Use fetch() for Etherscan API calls
4. Handle errors gracefully with try/catch
5. Call from appropriate analyze function in `app.js`

### Adding New Analysis Types
1. Add button with `data-type` attribute in HTML
2. Add case to `handleAnalyze()` switch in `app.js`
3. Create analyze function (e.g., `analyzeContract`)
4. Create display function (e.g., `displayContractResults`)
5. Add result card section in HTML

### Working with Ethers.js v6
- Provider: `new ethers.JsonRpcProvider(url)`
- Format Wei: `ethers.formatEther(balance)`
- Format tokens: `ethers.formatUnits(balance, decimals)`
- Contract calls: `new ethers.Contract(address, abi, provider)`
- Address validation: Use custom regex in helpers.js

## Testing Notes

### Manual Testing Addresses
Example addresses are embedded in the UI:
- Vitalik's wallet: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
- USDC Contract: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
- Bored Apes NFT: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D

### API Rate Limits
- Alchemy: 300M compute units/month free tier
- Etherscan: 5 calls/second free tier
- Consider rate limiting when adding bulk operations

## File Organization

```
web3-osint/
├── server.js                    # HTTP server (Node.js)
├── config/
│   ├── api-keys.example.js     # Template (committed)
│   └── api-keys.js             # Actual keys (gitignored)
├── src/
│   ├── index.html              # Main UI
│   ├── test-api.html           # API testing page
│   ├── css/styles.css          # Styling
│   ├── js/
│   │   ├── app.js              # UI controller
│   │   └── web3-service.js     # Blockchain service
│   └── utils/
│       └── helpers.js          # Pure utilities
└── package.json                # ethers.js dependency only
```

## Git Workflow

Current branch: `blocktracker`
Main branch: `main`

The project uses feature branches. Merge to `main` when features are complete and tested.