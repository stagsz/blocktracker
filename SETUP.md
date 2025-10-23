# Setup Guide - BlockTracker

Complete guide to get your Web3 OSINT tool up and running!

## Step 1: Verify Node.js Installation ✅

You already have:
- Node.js v22.18.0 ✅
- npm v10.9.3 ✅

## Step 2: Get Your Free API Keys

### A. Alchemy API Key (Required)

Alchemy provides access to Ethereum blockchain data.

1. **Sign up**: Go to https://www.alchemy.com/
2. **Create account**: Use your email (no credit card required)
3. **Create an app**:
   - Click "Create App" button
   - Name: `BlockTracker`
   - Chain: `Ethereum`
   - Network: Choose `Ethereum Mainnet` (or `Sepolia Testnet` for learning)
4. **Copy API Key**:
   - Click "View Key" button
   - Copy the "API KEY" (not the HTTPS URL, just the key)
   - Should look like: `abc123def456...`

**Free Tier**: 300 million compute units/month (plenty for learning!)

### B. Etherscan API Key (Required)

Etherscan provides transaction history and contract verification data.

1. **Sign up**: Go to https://etherscan.io/register
2. **Verify email**: Check your inbox and verify
3. **Create API Key**:
   - Go to https://etherscan.io/myapikey
   - Click "Add" button
   - App Name: `BlockTracker`
   - Copy your API Key
   - Should look like: `ABC123DEF456...`

**Free Tier**: 5 calls/second, 100,000 calls/day (more than enough!)

## Step 3: Configure API Keys

1. **Open the configuration file**:
   ```
   web3-osint/config/api-keys.js
   ```

2. **Replace the placeholder values**:
   ```javascript
   const API_KEYS = {
     ALCHEMY_API_KEY: 'paste-your-alchemy-key-here',
     ETHERSCAN_API_KEY: 'paste-your-etherscan-key-here',
     NETWORK: 'sepolia'  // Start with testnet for learning!
   };
   ```

3. **Save the file**

⚠️ **Important**:
- Use `'sepolia'` network for testing (free test ETH)
- Switch to `'mainnet'` when you're ready for real data
- Never commit api-keys.js to Git (it's gitignored)

## Step 4: Install Dependencies

Open your terminal in the `web3-osint` directory and run:

```bash
cd web3-osint
npm install
```

This installs ethers.js (already done if you followed the setup).

## Step 5: Start the Application

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════╗
║   🔍 BlockTracker Web3 OSINT Tool         ║
╚════════════════════════════════════════════╝

✅ Server running at: http://localhost:3000
```

## Step 6: Test the Application

1. **Open your browser**: http://localhost:3000

2. **Try example wallet**: Click "Vitalik.eth" button

3. **View results**:
   - ETH balance
   - Transaction count
   - Recent transactions
   - AI analysis prompt

4. **Copy AI prompt**: Click "Copy Prompt" and paste into ChatGPT or Claude for deeper analysis

## Troubleshooting

### "Please configure your Alchemy API key"
- Double-check you replaced `'your-alchemy-api-key-here'` with your actual key
- Make sure there are no extra spaces or quotes
- Verify the file is saved

### "Invalid Ethereum address"
- Address must start with `0x`
- Must be exactly 42 characters long
- Example: `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`

### "Failed to fetch wallet data"
- Check your internet connection
- Verify API keys are correct
- Check if you've exceeded free tier limits (unlikely)

### Port 3000 already in use
- Close other applications using port 3000
- Or edit `server.js` to change `PORT = 3000` to another port

### Module not found errors
- Run `npm install` in the web3-osint directory
- Make sure you're in the correct folder

## Next Steps

Once everything is working:

1. **Learn the basics**: Try different wallet addresses
2. **Explore contracts**: Switch to "Smart Contract" tab
3. **Analyze NFTs**: Try popular NFT collection addresses
4. **Read the code**: Open `src/js/app.js` and follow along with comments
5. **Customize**: Add your own features!

## Learning Resources

- **Ethers.js Docs**: https://docs.ethers.org/v6/
- **Ethereum Basics**: https://ethereum.org/en/developers/docs/
- **Web3 Glossary**: https://ethereum.org/en/glossary/

## Need Help?

- Check inline code comments in the JavaScript files
- Read the ethers.js documentation
- Search for error messages online
- Ask in Ethereum developer communities

Happy hacking! 🚀
