# 🚀 Deploy BlockTracker in 5 Minutes

Quick guide to get your Web3 OSINT tool live on GitHub Pages!

## ✅ Prerequisites

- GitHub account
- Your Alchemy & Etherscan API keys ready

## 📝 5-Step Deployment

### 1. Create GitHub Repository (2 min)

1. Go to https://github.com/new
2. Repository name: `blocktracker`
3. Make it **Public**
4. ✅ Check "Add a README file"
5. Click "Create repository"

### 2. Push Your Code (2 min)

Open terminal in the `web3-osint` folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: BlockTracker Web3 OSINT tool"

# Add your repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/blocktracker.git

# Push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages (30 seconds)

1. Go to your repository → **Settings** → **Pages**
2. Under "Source":
   - Branch: **main**
   - Folder: **/docs**
3. Click **Save**

### 4. Configure API Keys (30 seconds)

Your API keys are already in `docs/config/api-keys.js`!

⚠️ **Note**: They'll be publicly visible. This is OK because:
- Free tier has usage limits
- You can regenerate anytime
- For personal/demo use

If you want different keys for deployment, edit the file and push:

```bash
# Edit docs/config/api-keys.js with new keys
git add docs/config/api-keys.js
git commit -m "Update API keys"
git push
```

### 5. Access Your Site! (Wait 1-2 min)

Your URL will be:
```
https://YOUR_USERNAME.github.io/blocktracker/
```

Check the GitHub Pages section in Settings to see the URL.

## 🎉 Done!

Your Web3 OSINT tool is now live and accessible to anyone!

---

## 🔧 Quick Fixes

**Page not loading?**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages shows "Your site is published at..."
- Verify `/docs` folder exists in your repository

**API errors?**
- Check browser console (Press F12)
- Verify API keys in `docs/config/api-keys.js`
- Make sure keys are valid (test locally first)

---

## 📚 Full Guide

For detailed instructions, security best practices, and customization options, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

**Happy deploying!** 🚀

Share your deployed tool:
- Tweet it with #Web3 #OSINT #Ethereum
- Add it to your portfolio
- Share on LinkedIn as a project showcase
