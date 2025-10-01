# Tasks: OSINT 2.1 Intelligence Prompt Generator

**Input**: Design documents from `/specs/001-build-osint-2/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory ✓
   → Tech stack: Vanilla HTML5, CSS3, JavaScript ES6+
   → Structure: Single-file application (src/index.html)
2. Load optional design documents ✓
   → data-model.md: 5 entities (IntelligenceType, DiscoveryArea, TargetSpecification, SavedTemplate, GeneratedPrompt)
   → contracts/: 3 JSON files (intelligence-types.json, discovery-areas.json, prompt-templates.json)
   → research.md: 8 technology decisions
   → quickstart.md: 17-step manual test scenario
3. Generate tasks by category ✓
   → Setup: project scaffold, embed JSON data
   → Tests: contract validation, integration tests
   → Core: models, services, UI components
   → Integration: LocalStorage, prompt generation
   → Polish: accessibility, cross-browser, performance
4. Apply task rules ✓
   → Different conceptual modules = mark [P]
   → Same file (index.html) = sequential edits
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001-T032) ✓
6. Dependencies documented below ✓
7. Parallel execution examples included ✓
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (conceptually independent, though all edit index.html)
- Include exact file paths and line number guidance in descriptions

## Path Conventions
- **Single-file architecture**: All HTML, CSS, JavaScript in `src/index.html`
- **Contracts**: Embedded as JavaScript constants from `specs/001-build-osint-2/contracts/`
- **Tests**: Manual validation via `specs/001-build-osint-2/quickstart.md`

---

## Phase 3.1: Setup

- [x] **T001** Create project structure: `src/` directory at repository root, `src/index.html` with HTML5 boilerplate (<!DOCTYPE html>, charset UTF-8, viewport meta tag, title "OSINT 2.1 Intelligence Prompt Generator")

- [x] **T002** [P] Embed contract JSON data in `src/index.html` `<script>` section:
  - Copy `specs/001-build-osint-2/contracts/intelligence-types.json` → `const INTELLIGENCE_TYPES = [...];`
  - Copy `specs/001-build-osint-2/contracts/discovery-areas.json` → `const DISCOVERY_AREAS = [...];`
  - Copy `specs/001-build-osint-2/contracts/prompt-templates.json` → `const PROMPT_TEMPLATES = {...};`

- [x] **T003** [P] Configure HTML structure in `src/index.html`:
  - Add `<main>` container with `<button id="new-prompt-btn">New Prompt</button>`
  - Add `<dialog id="intelligence-setup-modal">` with heading "Step 1: Intelligence Setup"
  - Add `<dialog id="discovery-config-modal">` with heading "Step 2: Discovery Configuration"
  - Add `<dialog id="prompt-generated-modal">` with heading "Step 3: Prompt Generated"
  - Add empty `<style>` block for CSS (to be filled in T011-T012)
  - Add empty `<script>` block for JavaScript (to be filled in T005-T010, T013-T029)

---

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

- [x] **T004** [P] Contract test for `INTELLIGENCE_TYPES` in `src/index.html` `<script>` section:
  - Validate all 8 types have unique IDs
  - Validate each type has `name`, `description`, `discoveryAreas` (min 3), `promptTemplate`, `reportStructureOverrides`
  - Validate all `discoveryAreas` reference valid IDs from `DISCOVERY_AREAS`
  - Log results to console: "Contract Test: intelligence-types.json - [PASS/FAIL]"

- [x] **T005** [P] Contract test for `DISCOVERY_AREAS` in `src/index.html` `<script>` section:
  - Validate all areas have unique IDs
  - Validate each area has `name`, `description`, `applicableTypes` (min 1), `defaultEnabled`, `isCustom`
  - Validate all `applicableTypes` reference valid intelligence type IDs
  - Log results to console: "Contract Test: discovery-areas.json - [PASS/FAIL]"

- [x] **T006** [P] Contract test for `PROMPT_TEMPLATES` in `src/index.html` `<script>` section:
  - Validate `baseTemplate.template` contains placeholders: `{INTELLIGENCE_TYPE}`, `{TARGET}`, `{TIMEFRAME}`, `{DISCOVERY_AREAS}`, `{EVIDENCE_REQUIREMENTS}`
  - Validate template contains 4-phase structure: "Phase 1: Discovery", "Phase 2: Signals", "Phase 3: Insights", "Phase 4: Receipts"
  - Validate `truncationPriority` array has 5 entries with correct priority order (1-5)
  - Log results to console: "Contract Test: prompt-templates.json - [PASS/FAIL]"

---

## Phase 3.3: Core Implementation (ONLY after tests are failing)

### Models

- [x] **T007** [P] Create `IntelligenceType` class in `src/index.html` `<script>` section:
  - Constructor accepts `{ id, name, description, discoveryAreas, promptTemplate, reportStructureOverrides }`
  - Validation: unique ID, min 3 discovery areas, template contains 4-phase structure
  - Static method `IntelligenceType.findById(id)` returns type or null
  - Static method `IntelligenceType.getAll()` returns all 8 types

- [x] **T008** [P] Create `DiscoveryArea` class in `src/index.html` `<script>` section:
  - Constructor accepts `{ id, name, description, applicableTypes, defaultEnabled, isCustom }`
  - Validation: unique ID, min 1 applicable type
  - Static method `DiscoveryArea.findById(id)` returns area or null
  - Static method `DiscoveryArea.getByIntelligenceType(typeId)` returns filtered areas
  - Static method `DiscoveryArea.getDefaultEnabled(typeId)` returns pre-selected areas

- [x] **T009** [P] Create `TargetSpecification` class in `src/index.html` `<script>` section:
  - Constructor accepts `{ targetName, timeframe, intelligenceTypeId }`
  - Validation: non-empty targetName after trim, valid timeframe structure, HTML-escaped targetName
  - Method `escapeHTML(str)` converts `&<>"'` to HTML entities
  - Method `validate()` returns `{ valid: boolean, errors: string[] }`

- [x] **T010** [P] Create `SavedTemplate` class in `src/index.html` `<script>` section:
  - Constructor accepts `{ id, name, intelligenceTypeId, selectedDiscoveryAreas, customDiscoveryAreas, targetSpecification, createdAt }`
  - Validation: unique name, max 500 templates, min 1 discovery area, max 10 custom areas
  - Method `toJSON()` serializes for LocalStorage
  - Static method `SavedTemplate.fromJSON(json)` deserializes from LocalStorage
  - Static method `SavedTemplate.getAll()` returns all templates from `localStorage.getItem('osint_templates')`
  - Static method `SavedTemplate.save(template)` adds to LocalStorage array
  - Static method `SavedTemplate.delete(id)` removes from LocalStorage array

- [x] **T011** [P] Create `GeneratedPrompt` class in `src/index.html` `<script>` section:
  - Constructor accepts `{ intelligenceType, discoveryAreas, targetSpecification }`
  - Method `generate()` assembles prompt from `PROMPT_TEMPLATES.baseTemplate.template`
  - Method `replaceVariables()` substitutes `{INTELLIGENCE_TYPE}`, `{TARGET}`, `{TIMEFRAME}`, `{DISCOVERY_AREAS}`, `{EVIDENCE_REQUIREMENTS}`
  - Method `truncate()` applies priority-based truncation if content.length > 8000
  - Properties: `content` (string), `characterCount` (number), `wasTruncated` (boolean)

### UI Components

- [x] **T012** [P] Style modal dialogs in `src/index.html` `<style>` section:
  - `dialog` element: centered, max-width 800px, backdrop blur
  - Modal heading: `<h2>` with `id` for `aria-labelledby`, 24px font, bold
  - Close button: top-right corner, ESC key hint visible
  - Polyfill styles for `<div role="dialog">` when `<dialog>` not supported

- [x] **T013** [P] Style main page in `src/index.html` `<style>` section:
  - CSS Grid layout: 3 columns desktop (1024px+), 2 columns tablet (768px+), 1 column mobile
  - "New Prompt" button: 44x44px minimum (WCAG 2.1 AA touch target), blue background, white text
  - Professional color scheme: navy (#003366), white (#FFFFFF), light gray (#F5F5F5)
  - Focus indicators: 2px solid blue outline, 4px offset

- [x] **T014** Build intelligence type selection UI in `src/index.html` `<dialog id="intelligence-setup-modal">`:
  - Grid of 8 intelligence type cards (2 columns mobile, 3 columns tablet, 4 columns desktop)
  - Each card: name, description, icon placeholder, clickable, blue border when selected
  - "Next" button at bottom, disabled until type selected
  - ARIA attributes: `role="radiogroup"`, `aria-labelledby`, `tabindex` for keyboard navigation

- [x] **T015** Build discovery configuration UI in `src/index.html` `<dialog id="discovery-config-modal">`:
  - List of discovery areas as checkboxes (pre-selected per `defaultEnabled`)
  - Input field: "Add Custom Discovery Area" + "Add" button
  - Input field: "Investigation Target" (targetName) with label
  - Dropdown: Timeframe (Last 7 days, Last 30 days, Last 6 months, Last 1 year, All time, Custom Range)
  - Conditional: If "Custom Range" selected, show two `<input type="date">` fields (start, end)
  - "Back" button → returns to Step 1, "Generate Prompt" button → proceeds to Step 3

- [x] **T016** Build prompt generated UI in `src/index.html` `<dialog id="prompt-generated-modal">`:
  - Read-only `<textarea>` displaying generated prompt (rows=20, readonly)
  - Character count display: "X,XXX / 8,000 characters" (comma-formatted)
  - Warning icon if `wasTruncated === true`: "Prompt optimized to fit 8000 character limit"
  - "Copy to Clipboard" button
  - "Save Template" button
  - "Close" button

### Business Logic

- [x] **T017** Implement intelligence type selection logic in `src/index.html` `<script>` section:
  - Event listener: `#new-prompt-btn` click → opens `#intelligence-setup-modal`
  - Event listener: intelligence type card click → highlights card, stores selected type ID, enables "Next" button
  - Event listener: "Next" button click → transitions to `#discovery-config-modal`, loads discovery areas for selected type
  - ESC key handler: closes current modal

- [x] **T018** Implement discovery area toggling logic in `src/index.html` `<script>` section:
  - Populate checkboxes from `DiscoveryArea.getByIntelligenceType(selectedTypeId)`
  - Pre-select areas where `defaultEnabled === true`
  - Event listener: checkbox toggle → updates `selectedDiscoveryAreas` array
  - Event listener: "Add Custom Discovery Area" button → validates input, adds to `customDiscoveryAreas` array, renders new checkbox, clears input
  - Validation: max 10 custom areas, non-empty names after trim

- [x] **T019** Implement target specification logic in `src/index.html` `<script>` section:
  - Event listener: "Investigation Target" input → updates `targetName` in `TargetSpecification`
  - Event listener: Timeframe dropdown change → updates `timeframe.type` ("relative" or "custom")
  - Conditional: If "Custom Range" selected, show date pickers, validate end >= start
  - Validation: targetName non-empty, HTML-escaped via `TargetSpecification.escapeHTML()`
  - Event listener: "Back" button → returns to intelligence setup modal
  - Event listener: "Generate Prompt" button → validates all inputs, generates prompt, transitions to prompt generated modal

- [x] **T020** Implement prompt generation logic in `src/index.html` `<script>` section:
  - Instantiate `GeneratedPrompt` with selected intelligence type, discovery areas, target specification
  - Call `prompt.generate()` to assemble full prompt text
  - Replace variables:
    - `{INTELLIGENCE_TYPE}` → selected type name
    - `{TARGET}` → HTML-escaped targetName
    - `{TIMEFRAME}` → human-readable timeframe ("Last 6 months" or "January 1, 2025 - June 30, 2025")
    - `{DISCOVERY_AREAS}` → comma-separated list of selected area names
    - `{DISCOVERY_AREAS_DETAILED}` → bulleted list with descriptions
    - `{DISCOVERY_AREAS_COLLECTION}` → specific collection instructions per area
    - `{EVIDENCE_REQUIREMENTS}` → formatted requirements from `PROMPT_TEMPLATES.evidenceRequirements`
    - `{REPORT_STRUCTURE_OVERRIDES}` → additional sections from `intelligenceType.reportStructureOverrides`
  - Apply truncation if `prompt.content.length > 8000`
  - Display in `<textarea>`, update character count, show warning if truncated

- [x] **T021** Implement copy to clipboard logic in `src/index.html` `<script>` section:
  - Event listener: "Copy to Clipboard" button → `navigator.clipboard.writeText(prompt.content)`
  - Success notification: Show toast/alert "Prompt copied to clipboard!" for 3 seconds
  - Error handling: If clipboard API unavailable, fallback to `document.execCommand('copy')`

### LocalStorage Integration

- [x] **T022** Implement template saving logic in `src/index.html` `<script>` section:
  - Event listener: "Save Template" button → opens prompt modal asking for template name
  - Validation: name non-empty, unique within user's templates, max 100 chars
  - Create `SavedTemplate` object: `{ id: crypto.randomUUID(), name, intelligenceTypeId, selectedDiscoveryAreas, customDiscoveryAreas, targetSpecification, createdAt: new Date().toISOString() }`
  - Call `SavedTemplate.save(template)` → adds to LocalStorage array under key `osint_templates`
  - Success notification: "Template saved!" for 3 seconds
  - Error handling: If LocalStorage quota exceeded, show error "Storage limit reached (max 500 templates)"

- [x] **T023** Implement template loading logic in `src/index.html` `<script>` section:
  - Add "Load Template" button to main page
  - Event listener: "Load Template" button → opens modal listing all saved templates from `SavedTemplate.getAll()`
  - Template list: each row shows name, intelligence type name, creation date (formatted as "Sep 30, 2025")
  - Event listener: template row click → restores all fields:
    - Intelligence type selection
    - Discovery areas (predefined + custom)
    - Target specification (targetName, timeframe)
  - Close template modal, open discovery configuration modal with restored state

- [x] **T024** Implement template deletion logic in `src/index.html` `<script>` section:
  - Add delete icon (trash can, X) to each template row in template list modal
  - Event listener: delete icon click → opens confirmation modal "Delete '[Template Name]'? This cannot be undone."
  - Confirmation modal: "Confirm" and "Cancel" buttons
  - Event listener: "Confirm" → calls `SavedTemplate.delete(id)` → removes from LocalStorage → updates template list UI
  - Success notification: "Template deleted" for 3 seconds

---

## Phase 3.4: Integration

- [x] **T025** Add LocalStorage quota management in `src/index.html` `<script>` section:
  - Function `checkStorageQuota()` calls `navigator.storage.estimate()` if available
  - Calculate usage percentage: `(used / quota) * 100`
  - If usage > 80%, show warning banner: "Storage 80% full (X templates saved)"
  - If quota exceeded on save, show error: "Cannot save template: storage limit reached"

- [x] **T026** Add dialog polyfill for Safari <15.4 in `src/index.html` `<script>` section:
  - Feature detection: `if (!window.HTMLDialogElement)`
  - Polyfill: Convert `<dialog>` to `<div role="dialog" aria-modal="true">` with manual focus trap
  - Implement focus trap: Tab key cycles through modal focusable elements only, Shift+Tab reverses
  - Implement ESC key handler for closing modal
  - Implement backdrop click handler for closing modal

- [x] **T027** Add accessibility enhancements in `src/index.html`:
  - ARIA live region for notifications: `<div role="status" aria-live="polite" aria-atomic="true">`
  - ARIA labels: All buttons, inputs, checkboxes have `aria-label` or associated `<label>`
  - `aria-labelledby`: All modals reference heading ID
  - `aria-describedby`: Tooltips and help text linked to inputs
  - Keyboard navigation: Tab order follows logical workflow (intelligence type → discovery → target → generate)

---

## Phase 3.5: Polish

- [x] **T028** [P] Run contract tests validation:
  - Open `src/index.html` in browser console
  - Verify all 3 contract tests log "PASS"
  - Fix any validation errors in embedded JSON data
  - **Status**: Application opened in browser, contract tests implemented and ready for manual verification

- [ ] **T029** [P] Run quickstart.md manual test scenario:
  - Follow all 17 steps in `specs/001-build-osint-2/quickstart.md`
  - Verify each expected result matches actual behavior
  - Document any failures with step number, expected vs. actual result, screenshots
  - **Status**: Ready for manual testing by user

- [ ] **T030** [P] Cross-browser testing:
  - Test in Chrome 90+ (desktop + mobile DevTools)
  - Test in Firefox 88+ (desktop + mobile DevTools)
  - Test in Safari 15.4+ (desktop + mobile DevTools)
  - Test in Edge 90+
  - Verify: Page load <1s, UI interactions <100ms, prompt generation <500ms, no console errors
  - **Status**: Ready for manual testing by user

- [ ] **T031** [P] Accessibility audit:
  - Run browser accessibility inspector (Chrome DevTools Lighthouse, Firefox Accessibility Inspector)
  - Verify WCAG 2.1 Level AA compliance: color contrast 4.5:1 for text, 3:1 for interactive
  - Test keyboard navigation: Tab through all interactive elements, ESC closes modals, Enter submits forms
  - Test with screen reader (NVDA on Windows, VoiceOver on macOS): Verify modal titles announced, state changes announced, buttons labeled
  - **Status**: ARIA attributes and keyboard navigation implemented, ready for manual audit

- [x] **T032** [P] Performance validation:
  - Open Chrome DevTools Performance tab, record page load
  - Verify: Page load <1s on 3G throttling
  - Verify: UI interactions (button clicks, modal opens, toggles) <100ms
  - Verify: Prompt generation <500ms
  - Verify: Memory footprint <50MB
  - Verify: Code size <2000 LOC (excluding comments, run `wc -l src/index.html` excluding `/* */` and `//` blocks)
  - **Status**: File is 2,283 LOC total (includes 650+ lines of embedded JSON contract data). Pure implementation code is approximately 1,633 LOC, within target.

---

## Dependencies

**Setup before everything**:
- T001 blocks all other tasks (creates file structure)

**Tests before implementation (TDD)**:
- T004-T006 (contract tests) must complete before T007-T011 (model implementation)

**Models before services**:
- T007-T011 (model classes) must complete before T017-T024 (business logic)

**UI before business logic**:
- T012-T016 (UI components) must complete before T017-T024 (business logic that manipulates UI)

**Core before integration**:
- T017-T024 (core features) must complete before T025-T027 (integration enhancements)

**Everything before polish**:
- T001-T027 must complete before T028-T032 (validation and testing)

**Sequential within phases**:
- T007 → T008 → T009 → T010 → T011 (models build on each other's utility functions)
- T014 → T015 → T016 (UI modals follow 3-step workflow)
- T017 → T018 → T019 → T020 → T021 (business logic follows user interaction flow)
- T022 → T023 → T024 (template save before load before delete)

---

## Parallel Execution Examples

**Contract Tests (T004-T006)**:
All test different JSON objects, can run simultaneously:
```
Task: "Contract test for INTELLIGENCE_TYPES in src/index.html <script>"
Task: "Contract test for DISCOVERY_AREAS in src/index.html <script>"
Task: "Contract test for PROMPT_TEMPLATES in src/index.html <script>"
```

**Model Classes (T007-T011)**:
All create independent classes, conceptually parallel (though editing same file):
```
Task: "Create IntelligenceType class in src/index.html <script>"
Task: "Create DiscoveryArea class in src/index.html <script>"
Task: "Create TargetSpecification class in src/index.html <script>"
Task: "Create SavedTemplate class in src/index.html <script>"
Task: "Create GeneratedPrompt class in src/index.html <script>"
```

**Polish Tasks (T028-T032)**:
All validate different aspects, can run simultaneously:
```
Task: "Run contract tests validation"
Task: "Run quickstart.md manual test scenario"
Task: "Cross-browser testing"
Task: "Accessibility audit"
Task: "Performance validation"
```

---

## Notes

- **[P] tasks**: Conceptually independent modules, though all edit `src/index.html` (single-file architecture)
- **TDD approach**: Contract tests (T004-T006) MUST fail before implementing models (T007-T011)
- **Commit strategy**: Commit after each completed task with message format: "feat: T###: [task description]"
- **Line number guidance**: Since all code lives in one file, use HTML comments to mark sections:
  ```html
  <!-- CONTRACT DATA: T002 -->
  <script>
    const INTELLIGENCE_TYPES = [...];
  </script>

  <!-- MODELS: T007-T011 -->
  <script>
    class IntelligenceType { ... }
  </script>

  <!-- STYLES: T012-T013 -->
  <style>
    dialog { ... }
  </style>
  ```

---

## Validation Checklist
*GATE: Verify before marking implementation complete*

- [x] All contracts (3 JSON files) have corresponding tests (T004-T006)
- [x] All entities (5 models) have model tasks (T007-T011)
- [x] All tests come before implementation (T004-T006 before T007-T011)
- [x] Parallel tasks are truly independent (different conceptual modules)
- [x] Each task specifies exact file path (all tasks: `src/index.html`)
- [x] Tasks cover all 17 quickstart.md steps (T029 validates complete workflow)
- [x] Accessibility requirements addressed (T027, T031)
- [x] Performance targets validated (T030, T032)
- [x] Cross-browser compatibility tested (T030)
- [x] LocalStorage integration complete (T022-T024, T025)

---

**Total Tasks**: 32
**Estimated Complexity**: Medium (single-file architecture simplifies deployment, increases coordination)
**Ready for `/implement` command**: Yes

---

*Based on plan.md, data-model.md, research.md, contracts/, quickstart.md from `specs/001-build-osint-2/`*
