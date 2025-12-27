# Quick Test Guide - AI Provider Buttons

**⏱️ Estimated Time**: 5-10 minutes per AI provider

---

## Prerequisites

- ✅ Chrome/Edge/Brave browser
- ✅ Extension loaded in unpacked mode
- ✅ At least one AI account (Claude, ChatGPT, Perplexity, or Gemini)

---

## Quick Test Procedure

### Step 1: Open Extension
```
1. Click OSINT 2.1 icon in Chrome toolbar
2. Extension popup should open
```

### Step 2: Generate a Test Prompt
```
1. Click "New Prompt" button
2. Select "Person Investigation" intelligence type
3. Click "Next"
4. Select default discovery areas
5. Click "Next"
6. Enter target name: "Elon Musk"
7. Keep timeframe as "All time"
8. Click "Generate Prompt"
```

### Step 3: Test Each AI Button

#### Test Claude Button 🔵
```
1. Click "Claude" button
2. Expected:
   - ✓ Toast notification: "Prompt copied! Opening claude..."
   - ✓ New tab opens to https://claude.ai/new
   - ✓ Clipboard has the prompt (paste with Ctrl+V)
3. Action: Paste prompt into Claude chat
4. Result: Prompt successfully inserted
```

#### Test ChatGPT Button 🟢
```
1. Click "ChatGPT" button
2. Expected:
   - ✓ Toast notification: "Prompt copied! Opening chatgpt..."
   - ✓ New tab opens to https://chat.openai.com
   - ✓ Clipboard has the prompt
3. Action: Paste prompt into ChatGPT chat
4. Result: Prompt successfully inserted
```

#### Test Perplexity Button 🟣
```
1. Click "Perplexity" button
2. Expected:
   - ✓ Toast notification: "Prompt copied! Opening perplexity..."
   - ✓ New tab opens to https://www.perplexity.ai
   - ✓ Clipboard has the prompt
3. Action: Paste prompt into Perplexity chat
4. Result: Prompt successfully inserted
```

#### Test Gemini Button 🔷
```
1. Click "Gemini" button
2. Expected:
   - ✓ Toast notification: "Prompt copied! Opening gemini..."
   - ✓ New tab opens to https://gemini.google.com
   - ✓ Clipboard has the prompt
3. Action: Paste prompt into Gemini chat
4. Result: Prompt successfully inserted
```

---

## Test with Claude Desktop

### Setup
1. Install Claude Desktop from https://claude.ai/download
2. Login to Claude Desktop

### Test Procedure
```
1. Generate prompt in extension (see Step 2 above)
2. Click "Claude" button in extension
3. Toast notification: "Prompt copied! Opening claude..."
4. Switch to Claude Desktop window
5. Click in chat input field
6. Paste (Ctrl+V or Cmd+V on Mac)
7. Prompt should appear in chat input
8. Send message to Claude
```

---

## What to Check

### ✅ Success Indicators
- [ ] Toast notification appears immediately
- [ ] Browser tab opens with correct URL
- [ ] Prompt is in clipboard (can paste with Ctrl+V)
- [ ] Prompt text appears completely (not truncated)
- [ ] No errors in browser console (F12)
- [ ] Extension popup doesn't close unexpectedly

### ❌ Failure Indicators
- [ ] Toast notification doesn't appear
- [ ] Wrong URL opens
- [ ] Clipboard is empty (can't paste anything)
- [ ] Prompt is truncated or corrupted
- [ ] Error message in browser console
- [ ] Extension crashes

---

## Troubleshooting

### Problem: Toast notification doesn't appear
**Solution**: Check browser console (F12) for JavaScript errors

### Problem: Clipboard is empty (nothing to paste)
**Solution**:
- Verify extension has clipboard permissions
- Try reloading extension (chrome://extensions/)
- Check manifest.json has "clipboardWrite" permission

### Problem: Wrong URL opens
**Solution**:
- Check popup.js button event listeners
- Verify correct URL in copyAndOpenProvider() call
- Reload extension

### Problem: Prompt is truncated
**Solution**:
- This is expected if prompt > 8000 characters
- Check "Truncation warning" message in popup
- Use fewer discovery areas for shorter prompt

### Problem: Browser console shows errors
**Solution**:
- Note the exact error message
- Check manifest.json permissions
- Verify host_permissions include the AI provider URL

---

## Advanced Testing (Console)

### Test Clipboard Directly
```javascript
// In browser console (F12):
navigator.clipboard.writeText("Test clipboard").then(() => {
  alert("Clipboard test successful!");
});
```

### Test Message Passing
```javascript
// Send test message to background script:
chrome.runtime.sendMessage(
  { action: 'test', message: 'Hello' },
  (response) => {
    console.log('Response:', response);
  }
);
```

### Check Storage
```javascript
// View saved templates:
chrome.storage.local.get(['osint_templates'], (result) => {
  console.log('Saved templates:', result);
});

// View premium status:
chrome.storage.local.get(['isPremium'], (result) => {
  console.log('Premium status:', result);
});
```

---

## Test Results Template

```
Date: [Date]
Tester: [Name]
Browser: [Chrome/Edge/Brave]

Claude Button:      [ ] Pass [ ] Fail
ChatGPT Button:     [ ] Pass [ ] Fail
Perplexity Button:  [ ] Pass [ ] Fail
Gemini Button:      [ ] Pass [ ] Fail

Issues Found:
- [List any issues]

Notes:
- [Additional observations]
```

---

## Performance Notes

### Expected Performance
- **Button click to clipboard**: <100ms
- **Tab opening**: <500ms
- **Total time**: <1 second

### Large Prompt Handling
- Prompts up to 8,000 characters supported
- Automatic truncation if exceeds limit
- Warning message shown if truncated

---

## Browser Support Matrix

| Browser | Version | Support | Test Status |
|---------|---------|---------|-------------|
| Chrome | 88+ | ✅ | [ ] Tested |
| Edge | 88+ | ✅ | [ ] Tested |
| Brave | Latest | ✅ | [ ] Tested |
| Firefox | Latest | ⏳ | [ ] Not Tested |
| Safari | Latest | ❌ | [ ] N/A |

---

## Next Steps After Testing

1. **If all tests pass**: Extension is ready for daily use
2. **If some tests fail**:
   - Check troubleshooting guide
   - Review manifest.json permissions
   - Reload extension
3. **If major issues**:
   - Check browser console for errors
   - Review popup.js code
   - Verify all files are in correct locations

---

## File Integrity Check

Before testing, verify all required files exist:

```bash
# Run in terminal:
ls -la /d/osint-2.1.1/osint-extension/
# Should show:
# - manifest.json
# - popup.html
# - popup.js
# - popup.css
# - background.js
# - content-scripts/ (folder)
```

---

**Ready to test? Start with Step 1 above! 🚀**
