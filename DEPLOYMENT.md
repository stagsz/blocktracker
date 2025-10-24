# Deployment Guide - BlockTracker

Step-by-step guide to deploy your Web3 OSINT tool to GitHub Pages.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Git installed on your computer
- ✅ Alchemy API key
- ✅ Etherscan API key

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository

1. **Go to GitHub**: https://github.com/
2. **Create a new repository**:
   - Click the "+" button → "New repository"
   - Repository name: `blocktracker` (or your preferred name)
   - Description: "Web3 OSINT tool for analyzing Ethereum wallets, smart contracts, and NFTs"
   - Set to **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - Click "Create repository"

### Step 2: Clone and Push Your Code

Open your terminal in the `web3-osint` directory:

```bash
# Initialize git (if not already done)
cd D:/osint-2.1.1/web3-osint
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: BlockTracker Web3 OSINT tool"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/blocktracker.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Configure API Keys

**⚠️ IMPORTANT SECURITY CONSIDERATION:**

Your API keys will be visible in the deployed code. For this personal project, this is acceptable because:
- Alchemy free tier: 300M compute units/month (hard limit)
- Etherscan free tier: 5 calls/second (rate limited)
- You can regenerate keys anytime if abused

**To add your API keys:**

1. Edit `docs/config/api-keys.js` in your repository
2. Add your actual Alchemy and Etherscan API keys
3. Commit and push:

```bash
git add docs/config/api-keys.js
git commit -m "Configure API keys for deployment"
git push
```

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Click "Pages"** in the left sidebar
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/docs`
   - Click "Save"
5. **Wait 1-2 minutes** for deployment

### Step 5: Access Your Deployed App

GitHub will show your URL at the top of the Pages settings:

```
https://YOUR_USERNAME.github.io/blocktracker/
```

🎉 **Your Web3 OSINT tool is now live!**

## 🧪 Testing Your Deployment

1. Open the URL in your browser
2. Click "Vitalik.eth" example button
3. Verify:
   - ✅ ETH balance loads
   - ✅ Token holdings appear
   - ✅ Recent transactions display
   - ✅ AI prompt generates correctly

## 🔐 Security Best Practices

### Monitor Your API Usage

**Alchemy:**
- Dashboard: https://dashboard.alchemy.com/
- Check "Compute Units" usage daily
- Set up email alerts for high usage

**Etherscan:**
- Dashboard: https://etherscan.io/myapikey
- Monitor API calls
- Regenerate key if suspicious activity

### If Your Keys Get Abused

1. **Regenerate immediately**:
   - Alchemy: Create new app, get new key
   - Etherscan: Delete old key, create new one

2. **Update your repository**:
   ```bash
   # Update docs/config/api-keys.js with new keys
   git add docs/config/api-keys.js
   git commit -m "Update API keys"
   git push
   ```

3. **Wait 1-2 minutes** for GitHub Pages to redeploy

## 🎨 Customization

### Update Branding

Edit `docs/index.html`:
- Change the title
- Update header text
- Add your name/attribution

### Add Custom Examples

Edit example addresses in `docs/index.html`:
```html
<button class="btn-link" data-address="0x...">Your Custom Example</button>
```

### Modify Styling

Edit `docs/css/styles.css`:
- Change color scheme (CSS variables at top of file)
- Adjust layout
- Add dark mode

## 📊 Advanced: Add Analytics

Want to track usage? Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `docs/index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🐛 Troubleshooting

**"404 - Page Not Found"**
- Check GitHub Pages settings: Source should be `main` branch, `/docs` folder
- Wait 2-3 minutes after enabling Pages
- Verify `docs/index.html` exists in your repository

**"Failed to initialize" error**
- Check browser console (F12)
- Verify API keys are correct in `docs/config/api-keys.js`
- Make sure paths are correct (should use `../config/` not `../../config/`)

**"No transactions" or "No tokens"**
- Etherscan API may have rate limits
- Try again after a few seconds
- Check Etherscan API key is valid

## 🔄 Updating Your Deployment

Whenever you make changes:

```bash
# Make your changes to files in docs/
# Then commit and push:
git add .
git commit -m "Description of your changes"
git push

# GitHub Pages will auto-deploy in 1-2 minutes
```

## 🌟 Sharing Your Tool

Once deployed, share your tool:

- **Twitter**: "Built a Web3 OSINT tool with @AnthropicAI Claude Code! Analyze any Ethereum wallet: [your-url]"
- **Reddit**: r/ethereum, r/ethdev
- **GitHub**: Add topics to your repository (web3, ethereum, osint, blockchain)
- **Portfolio**: Add to your developer portfolio

## 🎓 Next Steps

**Enhancements to consider:**
- Add more chains (Polygon, Arbitrum, Base)
- Integrate token price APIs (CoinGecko)
- Add wallet connection (MetaMask)
- Create shareable reports (export to PDF)
- Add dark mode
- Implement caching to reduce API calls

**Learning resources:**
- Web3 basics: Read `WEB3-BASICS.md`
- GitHub Actions: Automate testing
- Progressive Web App: Make it installable
- Backend proxy: Hide API keys properly

---

**Congratulations on deploying your first Web3 application!** 🚀

For questions or issues, check the GitHub repository README or create an issue.
