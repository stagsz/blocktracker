# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BrightScope is a professional intelligence prompt generator Chrome extension that transforms intelligence research from manual research to AI-powered efficiency. The extension generates structured research investigation prompts following a 4-phase methodology (Discovery → Signals → Insights → Receipts) and can auto-inject them directly into AI chat interfaces (Claude, ChatGPT, Perplexity, Gemini).

**Current Status**: Phase 1 Complete - Free tier fully functional with premium infrastructure ready. 16 intelligence types supported.

## Architecture Overview

The extension follows **Manifest V3** (Chrome's modern extension standard) with a modular architecture:

```
popup.html → popup.js (UI + Business Logic)
         ↓
background.js (Service Worker - message relay, tab management)
         ↓
content-scripts/ (Auto-inject prompts into AI sites - premium)
         ↓
data/*.json (Intelligence types, discovery areas, prompt templates)
```

### Key Components

1. **popup.html/popup.css/popup.js** (3,600+ LOC combined)
   - Single popup window with modal-based navigation
   - 3 main sections: New Prompt → Type Selection → Discovery Configuration → Prompt Generation
   - State management via local variables and chrome.storage.local
   - Uses native `<dialog>` for modals (Safari polyfill support)

2. **background.js** (240 LOC)
   - Manifest V3 service worker (not persistent, wakes on events)
   - Handles message passing between popup and content scripts
   - License validation coordination
   - Tab management for AI integration
   - Service worker name: "BrightScope Background Service Worker"

3. **license-validator.js** (80+ LOC)
   - Client-side license key validation
   - Format: `OSINT-PRO-{UUID}-{CHECKSUM}`
   - Checksum algorithm for simple validation
   - Feature gating: free (5 templates, 3 custom areas) vs premium (500 templates, 10 custom areas)

4. **content-scripts/** (4 files for Claude, ChatGPT, Perplexity, Gemini)
   - Auto-inject prompts into AI chat input fields (premium feature)
   - Find correct input selectors and inject text
   - Handles both textarea and contenteditable inputs

5. **data/*.json**
   - `intelligence-types.json` - 16 investigation types with metadata
   - `discovery-areas.json` - 43+ discovery areas per type
   - `prompt-templates.json` - Base 4-phase OSINT methodology template

## Storage Architecture

Uses **chrome.storage.local** (not localStorage):
- **Key**: `osint_templates` → Array of SavedTemplate objects
- **Premium Features**: `isPremium`, `licenseKey`, `promptHistory` (max 100)
- All async with callbacks (no blocking operations)
- Max ~5MB total storage (supports ~500 templates)

## Key Technical Decisions

### 1. chrome.storage.local over localStorage
- Async (non-blocking UI)
- Larger quota
- Supports cross-device sync (chrome.storage.sync for future)
- Required for Manifest V3

### 2. Manifest V3 (Not V2)
- Modern standard (V2 deprecated)
- Service workers instead of persistent background pages
- Better security model
- Required for Chrome Web Store

### 3. Vanilla JavaScript (Zero Dependencies)
- No npm/build process needed
- Fast load times
- Single .html file deployable
- Trade-off: More boilerplate for common patterns

### 4. Content Scripts for Auto-Injection
- Runs in user's browser context (respects login sessions)
- No external dependencies (no Puppeteer/Selenium bloat)
- Limitation: HTML selectors may change if AI sites redesign UI

### 5. Modal-Based UI Pattern
- Native `<dialog>` element with Safari <15.4 polyfill
- Focus trap (Tab cycles within modal)
- ESC key closes
- Reduces complexity vs multi-page extension

## Development Workflow

### Installation & Testing

1. **Load in Chrome** (development mode):
   ```
   chrome://extensions → Developer mode → Load unpacked → select this folder
   ```

2. **Quick reload** (after code changes):
   ```
   chrome://extensions → Click reload on OSINT 2.1 extension
   ```

3. **Debug popup**:
   ```
   Right-click extension icon → Inspect popup → Console/Sources tabs
   ```

4. **Debug background worker**:
   ```
   chrome://extensions → Click "Service Worker" link under OSINT 2.1 → Console
   ```

5. **Debug content scripts**:
   ```
   Open AI provider (claude.ai, etc.) → F12 → Console shows content script logs
   ```

### Testing Strategy

- **Manual Testing**: Follow QUICK-TEST-GUIDE.md (17-step workflow)
- **Contract Validation**: JSON structure tests run on popup load (F12 console)
- **License Testing**: Use test key `OSINT-PRO-550e8400-e29b-41d4-a716-446655440000-F3A4`
- **Cross-Browser**: Chrome/Edge (Manifest V3 native), Firefox (requires manifest_v2.json adapter)

## Important Patterns & Conventions

### HTML Escaping (XSS Prevention)
All user input in generated prompts must be escaped:
```javascript
function escapeHTML(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return str.replace(/[&<>"']/g, c => map[c]);
}
```
Prefer using `textContent` (auto-escapes) over `innerHTML` when possible.

### Modal Navigation
```javascript
const modal = document.getElementById('modal-id');
modal.showModal();    // Open
modal.close();        // Close
modal.open = false;   // Also closes
```
All modals use ARIA attributes: `role="dialog"`, `aria-labelledby`, `aria-modal="true"`

### Chrome Storage Async Pattern
```javascript
// Always use callbacks (not promises in older API)
chrome.storage.local.get(['key'], (result) => {
  console.log(result.key);
});

chrome.storage.local.set({ key: value }, () => {
  console.log('Saved');
});
```

### Message Passing (popup ↔ background)
```javascript
// From popup to background
chrome.runtime.sendMessage({ action: 'validateLicense', licenseKey }, (response) => {
  if (response.success) { /* handle */ }
});

// Background listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'validateLicense') {
    validateLicenseKey(request.licenseKey)
      .then(isValid => sendResponse({ success: true, isValid }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async
  }
});
```

### Responsive Layout Breakpoints
- **Desktop**: 1024px+ (3-column grid if needed)
- **Tablet**: 768px-1023px (2-column)
- **Mobile**: <768px (1-column, full width)

## Feature Tiers

### Free Tier
- 8 core intelligence types (Person, Company, Location, Threat, Technology, Market, Reputation, Event)
- 43 discovery areas
- Save up to 5 templates
- 3 custom discovery areas per investigation
- Copy to clipboard + open AI providers
- Manual paste into AI chat

### Premium Tier ($9.99/month)
- All free features
- 8 additional intelligence types (Recruitment, Energy, Trend, AI, Cross-Platform, Digital Forensics, Supply Chain, Geopolitical)
- Unlimited templates (500 max storage)
- 10 custom discovery areas per investigation
- Auto-inject prompts into AI chats (no manual pasting)
- Prompt history (last 100 prompts)
- Coming: 4 premium types (Legal, Financial Forensics, Cyber Threat, Competitive)

## Branding Notes

The extension is branded as "BrightScope" (not "OSINT 2.1"). All user-facing text and documentation should use:
- **Official Name**: BrightScope
- **Tagline**: Professional Intelligence Research Platform
- **Avoid**: References to "OSINT 2.1" in UI/docs (internal code may still have old references)

## Common Development Tasks

### Adding a New Intelligence Type
1. Edit `data/intelligence-types.json` - add type object with id, name, discoveryAreas
2. Add corresponding discovery areas to `data/discovery-areas.json`
3. Update type selector in `popup.js` (renders from JSON automatically)
4. Set `isPremium: true` if premium-only type
5. Test: Load extension, verify type appears in selection screen

### Fixing AI Provider Injection
If auto-inject stops working for a provider:
1. Open that AI provider in Chrome (claude.ai, chat.openai.com, etc.)
2. Inspect the input element (F12, right-click input, Inspect)
3. Note the selector (usually `textarea#prompt-input` or `div.input-area`)
4. Update the corresponding content script (e.g., `claude-inject.js`)
5. Update the selector in the `findInputField()` function
6. Reload extension and test

### Adding a Premium Feature
1. Check if premium in `popup.js`:
   ```javascript
   const isPremium = await isPremiumUser();
   if (!isPremium && featureIsPremium) {
     showUpgradeModal();
     return;
   }
   ```
2. Feature gating happens in popup.js - no need to modify background.js unless it involves tab management

### Debugging chrome.storage.local
In popup console:
```javascript
// View all storage
chrome.storage.local.get(null, (result) => console.log(result));

// Clear all data (useful for testing)
chrome.storage.local.clear(() => location.reload());

// Check specific key
chrome.storage.local.get(['osint_templates'], (r) => console.log(r.osint_templates));
```

## Known Limitations & Trade-offs

1. **Auto-Inject Fragility**: If Claude.ai, ChatGPT, etc. change their HTML structure, selectors break
   - Mitigation: Regular testing, fallback to manual paste

2. **Client-Side License Validation**: Can be bypassed
   - Future: Add server-side validation API for production

3. **Manifest V3 Complexity**: Service workers are more complex than background pages
   - Trade-off worth it for Chrome Web Store requirement

4. **Firefox Compatibility**: Manifest V2 required, need separate manifest_v2.json
   - Not yet implemented; would require branching code

5. **No Real-Time Sync**: Storage changes don't sync across tabs/devices
   - Could use chrome.storage.sync for future enhancement

## File Structure Quick Reference

```
osint-extension/
├── manifest.json                 # Extension config (Manifest V3)
├── popup.html                    # Main UI structure
├── popup.css                     # All styles (responsive, modal)
├── popup.js                      # 2000+ LOC - core logic
├── background.js                 # Service worker (240 LOC)
├── license-validator.js          # Premium validation (80 LOC)
├── content-scripts/
│   ├── claude-inject.js         # Auto-inject for Claude
│   ├── chatgpt-inject.js        # Auto-inject for ChatGPT
│   ├── perplexity-inject.js     # Auto-inject for Perplexity
│   └── gemini-inject.js         # Auto-inject for Gemini
├── data/
│   ├── intelligence-types.json  # 16 types defined
│   ├── discovery-areas.json     # 43+ discovery areas
│   └── prompt-templates.json    # 4-phase methodology template
├── assets/
│   ├── icon-16.png             # Extension icon (16px)
│   ├── icon-48.png             # Extension icon (48px)
│   ├── icon-128.png            # Extension icon (128px)
│   └── generate-icons.html     # Canvas tool to create icons
├── README.md                     # User guide
├── IMPLEMENTATION-SUMMARY.md     # Phase 1 status
├── AI-INTEGRATION-SUMMARY.md     # AI provider integration details
└── QUICK-TEST-GUIDE.md          # Manual testing steps
```

## Performance Notes

- Popup opens in <1s (no external dependencies)
- Prompt generation <100ms
- Storage operations <50ms (async, non-blocking)
- Content script injection runs on document_idle (after page fully loads)
- Total extension size: ~500KB (icons included)

## Security Considerations

1. **XSS Prevention**: All user input in prompts escaped via `escapeHTML()`
2. **CSP Compliance**: No eval(), no inline scripts in Manifest V3
3. **Storage Security**: Data stored locally only, no external transmission
4. **License Key**: Client-side checksum only (MVP); server validation recommended for production
5. **Content Scripts**: Run in isolated context, can't access popup DOM

## Intelligence Types in BrightScope

The 16 intelligence types are:

**Free Tier (8):**
1. Person Investigation
2. Company Research
3. Location Analysis
4. Threat Assessment
5. Technology Profiling
6. Market Intelligence
7. Reputation Analysis
8. Event Investigation

**Premium Tier (8):**
9. Recruitment Intelligence
10. Energy Sector Analysis
11. Trend Analysis
12. AI System Analysis
13. Cross-Platform Investigation
14. Digital Forensics
15. Supply Chain Analysis
16. Geopolitical Analysis

(Coming: Legal Intelligence, Financial Forensics, Cyber Threat Intel, Competitive Intelligence)

Each type has 3-6 auto-selected discovery areas + ability to add custom areas.

## Helpful References

- **Manifest V3 Docs**: https://developer.chrome.com/docs/extensions/mv3/
- **Chrome Storage API**: https://developer.chrome.com/docs/extensions/reference/storage/
- **Content Scripts**: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
- **Message Passing**: https://developer.chrome.com/docs/extensions/mv3/messaging/

---

**Last Updated**: January 2025
**Version**: 1.0.1
**Extension Name**: BrightScope - Intelligence Prompt Generator
**Maintainer**: Claude Code AI Agent
