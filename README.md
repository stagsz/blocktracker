# BlockTracker - Web3 OSINT Tool

A beginner-friendly blockchain intelligence analyzer for investigating wallets, smart contracts, and NFT collections on Ethereum.

## Features

- 🔍 **Wallet Analysis**: Check ETH balance, transaction history, and token holdings
- 📄 **Smart Contract Investigation**: View contract details, functions, and events
- 🖼️ **NFT Collection Profiling**: Analyze NFT collections and holder patterns
- 🤖 **AI Intelligence Reports**: Generate structured analysis prompts

## Prerequisites

- Node.js v18+ (you have v22.18.0 ✅)
- npm v9+ (you have v10.9.3 ✅)
- Free API keys from:
  - [Alchemy](https://www.alchemy.com/) - Blockchain data provider
  - [Etherscan](https://etherscan.io/apis) - Block explorer API

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Keys

```bash
# Copy the example config
cp config/api-keys.example.js config/api-keys.js

# Edit config/api-keys.js with your actual API keys
```

Get your free API keys:
- **Alchemy**: Sign up at https://www.alchemy.com/ → Create App → Copy API Key
- **Etherscan**: Register at https://etherscan.io/apis → Create API Key

### 3. Run the Application

```bash
npm start
```

Open your browser to `http://localhost:3000`

## Project Structure

```
web3-osint/
├── config/
│   ├── api-keys.example.js   # Template for API keys
│   └── api-keys.js            # Your actual keys (gitignored)
├── src/
│   ├── index.html             # Main HTML file
│   ├── css/
│   │   └── styles.css         # Application styles
│   ├── js/
│   │   ├── app.js             # Main application logic
│   │   └── web3-service.js    # Web3 interaction layer
│   └── utils/
│       └── helpers.js         # Utility functions
├── public/                     # Static assets
├── package.json
└── README.md
```

## Learning Path

This project is designed for Web3 beginners. You'll learn:

1. **Week 1**: Connecting to Ethereum, reading wallet balances
2. **Week 2**: Querying transactions, analyzing token holdings
3. **Week 3**: Interacting with smart contracts, decoding events
4. **Week 4**: NFT analysis, metadata fetching
5. **Week 5**: MetaMask integration, advanced features

## Technologies Used

- **ethers.js v6**: Modern Ethereum library
- **Alchemy API**: Blockchain data provider (free tier)
- **Etherscan API**: Block explorer data (free tier)
- **Vanilla HTML/CSS/JS**: No frameworks needed!

## Next Steps

1. Get your API keys (see step 2 above)
2. Run the app and test wallet analysis
3. Read inline code comments to understand how it works
4. Experiment with different wallet addresses

## Resources

- [Ethers.js Documentation](https://docs.ethers.org/v6/)
- [Alchemy Tutorials](https://docs.alchemy.com/docs)
- [Ethereum Basics](https://ethereum.org/en/developers/docs/)

## Support

This is a learning project! If you get stuck:
1. Check the inline code comments
2. Read the ethers.js docs
3. Ask in Ethereum developer communities

Happy hacking! 🚀
