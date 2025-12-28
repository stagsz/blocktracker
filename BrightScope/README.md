# BrightScope Chrome Extension

Professional Intelligence Prompt Generator - now as a browser extension with direct AI integration.

## ✨ Features

### Free Tier
- ✅ 16 intelligence types (Person, Company, Location, Threat, Technology, Market, Reputation, Event, Recruitment, Energy, Trend, AI, Cross-Platform, Digital Forensics, Supply Chain, Geopolitical)
- ✅ 43+ predefined discovery areas + custom areas (max 3)
- ✅ 4-phase methodology prompt generation
- ✅ Copy to clipboard
- ✅ Save up to 5 templates
- ✅ One-click open in Claude, ChatGPT, Perplexity, Gemini

### Premium Tier ($9.99/month)
- ⭐ **Auto-inject prompts** directly into AI chat interfaces (no manual paste)
- ⭐ **Unlimited templates** (save up to 500)
- ⭐ **4 premium intelligence types**: Legal Intelligence, Financial Forensics, Cyber Threat Intel, Competitive Intelligence
- ⭐ **Prompt history** - access last 100 generated prompts
- ⭐ **10 custom discovery areas** per template (vs 3 in free)

---

## 🚀 Installation (Development Mode)

### Chrome / Edge / Brave

1. **Clone or download** this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer Mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select the `osint-extension` folder
6. The extension icon should appear in your toolbar

### Firefox

1. **Clone or download** this repository
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Navigate to `osint-extension` folder and select `manifest.json`
5. Extension will be loaded (temporary - will need to reload after browser restart)

---

## 📖 How to Use

### Basic Workflow

1. **Click the BrightScope extension icon** in your browser toolbar
2. **Click "New Prompt"**
3. **Select intelligence type** (e.g., Person Investigation)
4. **Configure discovery areas** - check boxes for what you want to investigate
5. **Enter target name** (e.g., "John Smith", "Acme Corp")
6. **Select timeframe** (optional)
7. **Click "Generate Prompt"**
8. **Choose your action**:
   - 📋 **Copy** - Copy prompt to clipboard
   - 🔵 **Claude** - Open Claude with prompt (auto-inject if premium)
   - 🟢 **ChatGPT** - Open ChatGPT with prompt
   - 🟣 **Perplexity** - Open Perplexity with prompt
   - 💾 **Save Template** - Save configuration for reuse

### Saving & Loading Templates

**To Save:**
1. After generating a prompt, click **Save Template**
2. Enter a template name (e.g., "Executive Background Check")
3. Click Save

**To Load:**
1. Click **Load Template** from main screen
2. Select a template from the list
3. Your configuration will be restored
4. Edit as needed and generate

### Premium Features

**Activate License:**
1. Click the ⭐ icon or any premium feature
2. In upgrade modal, enter your license key: `OSINT-PRO-XXXX-XXXX-XXXX-XXXX-XXXX`
3. Click **Activate**
4. Premium features are now unlocked!

**Test License Key (Development Only):**
```
OSINT-PRO-550e8400-e29b-41d4-a716-446655440000-F3A4
```

To generate more test keys, open browser console and run:
```javascript
// In popup.js context
console.log(generateLicenseKey());
```

---

## 🛠️ Development

### Project Structure

```
osint-extension/
├── manifest.json              # Extension configuration
├── popup.html                 # Main UI
├── popup.css                  # Styles
├── popup.js                   # Main logic
├── background.js              # Service worker
├── license-validator.js       # Premium validation
├── content-scripts/           # AI injection scripts
│   ├── claude-inject.js
│   ├── chatgpt-inject.js
│   └── perplexity-inject.js
├── data/                      # JSON contracts
│   ├── intelligence-types.json
│   ├── discovery-areas.json
│   └── prompt-templates.json
└── assets/                    # Icons (placeholder)
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

### Testing Locally

1. Make changes to source files
2. Go to `chrome://extensions/`
3. Click **Reload** button on BrightScope extension
4. Test changes in popup

### Debugging

**Popup Console:**
- Right-click extension icon → **Inspect popup**
- Console will show errors and logs

**Background Worker:**
- Go to `chrome://extensions/`
- Click **Service Worker** link under BrightScope
- Console will show background script logs

**Content Scripts:**
- Open Claude/ChatGPT/Perplexity in a tab
- Press F12 for DevTools
- Content script errors will appear in console

---

## 🔐 Storage & Privacy

### What's Stored Locally

**chrome.storage.local** (device-only):
- `osint_templates` - Your saved templates (BrightScope uses chrome.storage.local)
- `isPremium` - Premium status (boolean)
- `licenseKey` - Your license key (if activated)
- `promptHistory` - Last 100 prompts (premium only)

**No data is transmitted** to external servers. All processing happens locally in your browser.

### Clear All Data

```javascript
// Open extension popup, press F12, run in console:
chrome.storage.local.clear(() => {
  console.log('All data cleared');
  location.reload();
});
```

---

## 🐛 Troubleshooting

### Extension won't load
- **Check manifest version**: Ensure Chrome is v88+ (for Manifest V3)
- **Check console**: Look for errors in `chrome://extensions/`
- **Try Firefox**: Use Firefox if Chrome isn't compatible

### AI injection not working (Premium)
- **Verify premium status**: Check if premium badge shows in prompt modal
- **Check AI page URL**: Must be exact match (claude.ai, chat.openai.com, etc.)
- **Reload AI page**: Refresh after activating premium
- **Check console**: Look for content script errors

### Templates not saving
- **Check storage quota**: Browser may limit extension storage
- **Check limits**: Free = 5 templates max, Premium = 500 max
- **Clear old data**: Delete unused templates

### License key won't activate
- **Check format**: Must be `OSINT-PRO-{uuid}-{checksum}`
- **Copy carefully**: No extra spaces or line breaks
- **Contact support**: If purchased key doesn't work

---

## 📦 Production Build (Future)

### Chrome Web Store

1. Zip the `osint-extension` folder
2. Create Chrome Web Store developer account ($5 one-time)
3. Upload ZIP file
4. Fill out store listing (screenshots, description)
5. Submit for review (~3 days)

### Firefox Add-ons

1. Create `manifest_v2.json` for Firefox compatibility
2. Zip extension folder
3. Submit to addons.mozilla.org (free)
4. Review process (~2 weeks)

---

## 📄 License

OSINT 2.1 Extension
Copyright © 2025

**Free Tier**: Free for personal and commercial use
**Premium Tier**: Requires active license subscription

---

## 🆘 Support

- **Issues**: Report at [GitHub Issues](https://github.com/your-repo/issues)
- **Email**: support@osint21.com
- **Docs**: https://docs.osint21.com

---

## 🔄 Version History

### v1.0.1 (2025-01-XX)
- ✅ Renamed to BrightScope
- ✅ 16 intelligence types (expanded from 8)
- ✅ 43 discovery areas
- ✅ Template management
- ✅ Quick AI actions (open in Claude/ChatGPT/Perplexity/Gemini)
- ✅ Premium tier with license validation
- ✅ Auto-inject prompts (premium)
- ✅ Chrome + Firefox support

---

**Built with ❤️ by BrightScope**
