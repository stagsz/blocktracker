# OSINT 2.1 Extension - Quick Start Guide

Get your extension running in **5 minutes**!

---

## Step 1: Generate Icons (1 minute)

1. Open `assets/generate-icons.html` in your browser (double-click the file)
2. Click **"Download All"** button
3. You'll get 3 files downloaded:
   - `icon-16.png`
   - `icon-48.png`
   - `icon-128.png`
4. Move these 3 PNG files into the `assets/` folder (replace if asked)

---

## Step 2: Load Extension in Chrome (2 minutes)

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. **Enable Developer Mode** (toggle switch in top-right corner)
4. Click **"Load unpacked"** button
5. Navigate to and select the `osint-extension` folder
6. Click **"Select Folder"**
7. ✅ Extension should now appear in your toolbar!

**Can't see the icon?** Click the puzzle piece icon in Chrome toolbar → Pin OSINT 2.1

---

## Step 3: Test Free Tier Workflow (2 minutes)

### Generate Your First Prompt

1. **Click the OSINT 2.1 icon** in your toolbar
2. Click **"New Prompt"**
3. **Select an intelligence type** - click "Person Investigation"
4. Click **"Next"**
5. **Enter target name** - type "John Smith"
6. **Select timeframe** - choose "Last 6 months"
7. Check/uncheck **discovery areas** as desired (default selection is fine)
8. Click **"Generate Prompt"**

### Use the Quick Actions

**Option A**: Copy & Paste Manually
- Click **📋 Copy** button
- Open Claude/ChatGPT in new tab
- Paste the prompt
- Press Enter

**Option B**: One-Click Open
- Click **🔵 Claude** button
- Prompt is copied to clipboard
- Claude opens in new tab
- Paste manually (Ctrl+V or Cmd+V)

### Save Your Template

1. After generating a prompt, click **💾 Save Template**
2. Enter a name: "John Smith Investigation"
3. Click **Save**
4. Close the prompt modal
5. Click **"Load Template"** from main screen
6. You should see your saved template!

---

## Step 4: Test Premium Activation (1 minute)

1. Click the ⭐ icon or any premium feature
2. Upgrade modal appears
3. Enter test license key:
```
OSINT-PRO-550e8400-e29b-41d4-a716-446655440000-F3A4
```
4. Click **"Activate"**
5. You should see "✓ License activated successfully!"
6. Close and reopen the extension
7. Generate a new prompt
8. **Premium badge** should now show instead of "Free" badge

---

## Step 5: Test Premium Auto-Inject (1 minute)

**Prerequisites**: Premium activated (Step 4)

1. Open Claude in a new tab: https://claude.ai/new
2. Keep that tab open
3. Click OSINT 2.1 extension icon
4. Generate a new prompt (quick workflow: Person → John Smith → Generate)
5. Click **🔵 Claude** button
6. Switch to Claude tab
7. **Prompt should be auto-injected!** (if premium feature is working)

**Not working?** Check:
- Premium is activated (badge shows "✨ Premium: Auto-inject enabled")
- Claude tab is fully loaded before clicking button
- Check browser console (F12) for errors

---

## Troubleshooting

### Extension won't load
```
Error: "Manifest file is missing or unreadable"
```
**Fix**: Make sure you selected the `osint-extension` folder, not a parent/child folder

### Icons are missing
```
Extension loads but has broken image icons
```
**Fix**: Complete Step 1 (generate icons)

### Can't find extension in toolbar
**Fix**: Click puzzle piece icon → Pin OSINT 2.1

### Templates aren't saving
```
"Maximum templates reached" or no error but doesn't save
```
**Fix**:
- Free tier = max 5 templates
- Delete old templates to make room
- Or activate premium for 500 templates

### License key won't activate
```
"License key is invalid or corrupted"
```
**Fix**:
- Copy the test key exactly (no spaces/line breaks)
- Format must be: `OSINT-PRO-{uuid}-{checksum}`
- Try regenerating: Open console (F12) → Type `generateLicenseKey()` → Use new key

### Auto-inject not working (Premium)
```
Prompt doesn't inject into Claude/ChatGPT
```
**Fix**:
- Verify premium is activated (check badge)
- Refresh AI provider page after activating premium
- Make sure AI tab is fully loaded before clicking button
- Check console for content script errors

---

## Debug Mode

### View Popup Console
1. Right-click extension icon
2. Click **"Inspect popup"**
3. Console shows popup.js logs and errors

### View Background Worker Console
1. Go to `chrome://extensions/`
2. Find OSINT 2.1
3. Click **"Service Worker"** link
4. Console shows background.js logs

### View Content Script Console
1. Open Claude/ChatGPT/Perplexity
2. Press **F12** (DevTools)
3. Console shows content script logs and errors

---

## Next Steps

### For Users:
- Explore all 8 intelligence types
- Create templates for common investigations
- Try different AI providers (Claude, ChatGPT, Perplexity, Gemini)
- Add custom discovery areas

### For Developers:
- Read [IMPLEMENTATION-SUMMARY.md](IMPLEMENTATION-SUMMARY.md) for architecture details
- Proceed to Phase 2: Add 4 premium intelligence types
- Review TODO items in summary document
- Submit to Chrome Web Store when ready

---

## Test License Keys

### Valid Keys (for testing)
```
OSINT-PRO-550e8400-e29b-41d4-a716-446655440000-F3A4
OSINT-PRO-8f4a2b1c-9d3e-4a5f-b1c2-1234567890AB-C1D2
```

### Generate Your Own
1. Open extension popup
2. Press **F12** (DevTools)
3. In console, type: `generateLicenseKey()`
4. Press Enter
5. Copy the generated key
6. Use for testing

**IMPORTANT**: These are test keys only. For production, implement server-side generation.

---

## Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Docs**: See [README.md](README.md)
- **Implementation**: See [IMPLEMENTATION-SUMMARY.md](IMPLEMENTATION-SUMMARY.md)

---

**Total Setup Time**: ~5 minutes
**Your First Prompt**: ~2 minutes
**You're ready to investigate!** 🔍
