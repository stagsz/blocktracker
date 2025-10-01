# Quickstart: OSINT 2.1 Manual Testing

**Feature**: OSINT 2.1 Intelligence Prompt Generator
**Purpose**: Manual testing scenario to validate core functionality
**Test Type**: Integration test covering complete 3-step workflow

---

## Prerequisites

- Modern web browser (Chrome 90+, Firefox 88+, Safari 15.4+, Edge 90+)
- `src/index.html` file deployed locally or via web server
- No internet connection required (offline test)

---

## Test Scenario: Person Investigation Workflow

### Objective
Validate end-to-end user journey: Intelligence Type Selection → Discovery Configuration → Prompt Generation → Template Management

### Expected Duration
< 3 minutes for complete scenario

---

## Test Steps

### Step 1: Open Application
**Action**: Open `src/index.html` in web browser
**Expected Result**:
- Page loads in < 1 second (on 3G connection)
- Title displays: "OSINT 2.1 Intelligence Prompt Generator"
- "New Prompt" button visible and enabled
- No console errors

---

### Step 2: Initiate Workflow
**Action**: Click "New Prompt" button
**Expected Result**:
- Modal opens with heading "Step 1: Intelligence Setup"
- 8 intelligence type cards displayed in grid layout:
  1. Person Investigation
  2. Company Research
  3. Location Analysis
  4. Threat Assessment
  5. Technology Profiling
  6. Market Intelligence
  7. Reputation Analysis
  8. Event Investigation
- Each card shows: name, description, icon/image
- Modal is keyboard accessible (Tab key navigates cards)
- ESC key closes modal

---

### Step 3: Select Intelligence Type
**Action**: Click "Person Investigation" card
**Expected Result**:
- Card highlights with blue border/background
- Description visible: "Deep-dive into an individual's background, connections, and online presence"
- "Next" button at bottom of modal becomes enabled
- Other cards remain visible but not selected
- Clicking different card deselects previous selection

---

### Step 4: Proceed to Discovery Configuration
**Action**: Click "Next" button
**Expected Result**:
- Modal transitions to "Step 2: Discovery Configuration"
- Discovery areas displayed as toggleable checkboxes/switches:
  - ✓ Social Media Presence (pre-selected)
  - ✓ Employment History (pre-selected)
  - ✓ Education Background (pre-selected)
  - ☐ Criminal Records
  - ☐ Financial Records
  - ✓ Family & Personal Connections (pre-selected)
- Target input field visible with label "Investigation Target"
- Timeframe dropdown visible with options: Last 7 days, Last 30 days, Last 6 months, Last 1 year, All time, Custom Range
- "Add Custom Discovery Area" input field visible
- "Back" and "Generate Prompt" buttons visible

---

### Step 5: Verify Pre-selected Discovery Areas
**Action**: Observe default selections
**Expected Result**:
- 4 areas pre-selected (per `defaultEnabled: true` in discovery-areas.json):
  - Social Media Presence ✓
  - Employment History ✓
  - Education Background ✓
  - Family & Personal Connections ✓
- 2 areas not selected:
  - Criminal Records ☐
  - Financial Records ☐

---

### Step 6: Toggle Discovery Area
**Action**: Click "Criminal Records" checkbox/toggle to enable
**Expected Result**:
- Checkbox becomes checked ✓
- Area added to enabled list
- Visual feedback (checkbox state change, possible animation)

---

### Step 7: Add Custom Discovery Area
**Action**:
1. Type "Known Aliases" in "Add Custom Discovery Area" input
2. Click "Add" button (or press Enter)

**Expected Result**:
- "Known Aliases" appears in discovery area list with checkbox checked ✓
- Input field clears
- Custom area visually distinguished (e.g., different color, "Custom" badge)
- Can be toggled on/off like predefined areas

---

### Step 8: Enter Investigation Target
**Action**: Type "John Smith" in Target input field
**Expected Result**:
- Text appears in input field
- No validation errors
- Input accepts alphanumeric characters and spaces
- HTML characters (e.g., `<script>`) are visually displayed but internally escaped

---

### Step 9: Select Timeframe
**Action**: Click timeframe dropdown and select "Last 6 months"
**Expected Result**:
- Dropdown displays 6 options
- "Last 6 months" becomes selected
- Dropdown closes
- Selection persists (visible in collapsed dropdown)

---

### Step 10: Generate Prompt
**Action**: Click "Generate Prompt" button
**Expected Result**:
- Modal transitions to "Step 3: Prompt Generated"
- Generated prompt displayed in read-only textarea
- Character count shown below textarea: "~4,200 / 8,000 characters" (approximate)
- No truncation warning (character count < 8000)
- "Copy to Clipboard" and "Save Template" buttons visible

---

### Step 11: Verify Prompt Content
**Action**: Read generated prompt in textarea
**Expected Result**: Prompt contains:
- **Header**: "OSINT Intelligence Report: Person Investigation"
- **Target**: "Subject: John Smith" (HTML-escaped)
- **Timeframe**: "Timeframe: Last 6 months"
- **Discovery Areas**: Lists all 7 enabled areas (including "Known Aliases")
- **Phase 1**: "Discovery (Target Identification & Scoping)"
- **Phase 2**: "Signals (Raw Data Collection)"
- **Phase 3**: "Insights (Analysis & Pattern Recognition)"
- **Phase 4**: "Receipts (Evidence Documentation)"
- **Evidence Requirements**: Source URLs, timestamps, confidence levels (High/Medium/Low), corroboration
- **Report Structure**: Executive Summary, Background, Findings, Analysis, Recommendations, Sources

---

### Step 12: Verify Character Count
**Action**: Observe character count display
**Expected Result**:
- Shows actual character count: e.g., "4,237 / 8,000 characters"
- No warning icon/message (since count < 8000)
- Green indicator or neutral color

---

### Step 13: Copy to Clipboard
**Action**: Click "Copy to Clipboard" button
**Expected Result**:
- Success notification appears: "Prompt copied to clipboard!" (toast/alert)
- Notification disappears after 3 seconds
- Can paste prompt into external application (manually verify)
- Button remains enabled (can copy multiple times)

---

### Step 14: Save Template
**Action**: Click "Save Template" button
**Expected Result**:
- Prompt modal appears: "Enter template name"
- Input field with placeholder: "e.g., John Smith Investigation"
- "Save" and "Cancel" buttons visible

---

### Step 15: Name and Save Template
**Action**:
1. Type "John Smith Template" in input field
2. Click "Save" button

**Expected Result**:
- Success notification: "Template saved!"
- Prompt modal closes
- Template persisted to LocalStorage (key: `osint_templates`)

---

### Step 16: Refresh Page and Load Template
**Action**:
1. Press F5 or Ctrl+R to refresh browser page
2. Click "Load Template" button (if visible on main page)
3. Select "John Smith Template" from list

**Expected Result**:
- Template list modal opens showing "John Smith Template"
- Each template shows: name, intelligence type, creation date
- Click template → All fields restore:
  - Intelligence Type: Person Investigation
  - Discovery Areas: Social Media, Employment History, Education, Criminal Records, Family Connections, **Known Aliases** (custom)
  - Target: "John Smith"
  - Timeframe: "Last 6 months"
- Modal closes after loading

---

### Step 17: Delete Template
**Action**:
1. Click "Load Template" button again
2. Hover over "John Smith Template"
3. Click delete icon (trash can, X, etc.)

**Expected Result**:
- Confirmation modal appears: "Delete 'John Smith Template'? This cannot be undone."
- "Confirm" and "Cancel" buttons visible
- Click "Confirm" →:
  - Template removed from list
  - Template deleted from LocalStorage
  - Success notification: "Template deleted"

---

## Pass Criteria

### Functional Requirements Met
- ✅ All 17 test steps completed without errors
- ✅ 3-step workflow functional: Intelligence Setup → Discovery Configuration → Prompt Generation
- ✅ Custom discovery areas can be added
- ✅ Templates save, load, and delete correctly
- ✅ Prompt contains all 4 OSINT phases
- ✅ HTML escaping prevents XSS (target "John Smith" not executable if contains `<script>`)

### Performance Requirements Met
- ✅ Page load < 1 second (on 3G connection)
- ✅ UI interactions < 100ms response time (button clicks, toggles)
- ✅ Prompt generation < 500ms

### Accessibility Requirements Met (Manual Check)
- ✅ Keyboard navigation works (Tab, Enter, ESC keys)
- ✅ Focus indicators visible on all interactive elements
- ✅ Screen reader announces modal titles and state changes (test with NVDA/JAWS)
- ✅ Color contrast meets WCAG 2.1 AA (4.5:1 for text, 3:1 for interactive)

### Cross-Browser Compatibility (Test in All)
- ✅ Chrome 90+ (desktop + mobile)
- ✅ Firefox 88+ (desktop + mobile)
- ✅ Safari 15.4+ (desktop + mobile)
- ✅ Edge 90+

---

## External Validation (Optional)

**Purpose**: Verify generated prompt produces professional intelligence reports

**Steps**:
1. Copy generated prompt from Step 13
2. Paste into AI assistant (Claude, ChatGPT, Gemini, etc.)
3. Submit prompt

**Expected AI Output**:
- Executive Summary (≤ 200 words)
- Background section with context
- Findings organized by discovery area:
  - Social Media Presence: [findings with sources]
  - Employment History: [findings with sources]
  - Education Background: [findings with sources]
  - Criminal Records: [findings with sources]
  - Family Connections: [findings with sources]
  - Known Aliases: [findings with sources]
- Analysis section with patterns/insights
- Recommendations section
- Sources section with URLs and timestamps
- Each finding includes confidence level (High/Medium/Low)
- Professional tone, structured format

**Pass Criteria**:
- ✅ AI generates report following prompt structure
- ✅ Report includes all 4 OSINT phases
- ✅ Findings cite sources with URLs
- ✅ Confidence levels assigned to claims
- ✅ Professional intelligence quality (enterprise-ready)

---

## Failure Scenarios

### If Test Fails at Any Step

1. **Console Errors**: Open browser DevTools (F12) → Console tab → Note error messages
2. **UI Not Rendering**: Check for JavaScript errors, CSS loading issues
3. **LocalStorage Not Working**: Verify browser allows LocalStorage (not in incognito mode)
4. **Template Not Persisting**: Check LocalStorage quota, verify JSON serialization
5. **XSS Vulnerability**: If `<script>` executes in target field, HTML escaping is broken

### Report Failures
Document:
- Step number where failure occurred
- Expected vs. actual result
- Browser/OS details
- Screenshots if UI issue
- Console error messages

---

## Success Criteria Summary

**All checks must pass**:
- [x] 17 test steps completed
- [x] No console errors
- [x] Performance targets met (load < 1s, interactions < 100ms)
- [x] Accessibility functional (keyboard navigation, screen reader)
- [x] Templates persist across page refresh
- [x] Prompt generates valid 4-phase OSINT structure
- [x] HTML escaping prevents XSS
- [x] Cross-browser compatible (4 browsers tested)
- [x] External AI validation produces professional intelligence report

**If all criteria pass**: Implementation meets specification requirements ✅

---

*This quickstart serves as both user acceptance testing (UAT) and integration testing for OSINT 2.1.*
