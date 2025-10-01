
# Implementation Plan: OSINT 2.1 Intelligence Prompt Generator

**Branch**: `001-build-osint-2` | **Date**: 2025-09-30 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-build-osint-2/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → ✓ Loaded successfully
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → ✓ No NEEDS CLARIFICATION markers remaining
   → Project Type: single (frontend-only web application)
   → Structure Decision: Single HTML file with embedded CSS/JS
3. Fill the Constitution Check section
   → ✓ Completed based on constitution v1.0.0
4. Evaluate Constitution Check section
   → ✓ PASS - No violations
   → Update Progress Tracking: Initial Constitution Check ✓
5. Execute Phase 0 → research.md
   → ✓ Complete - 8 research decisions documented
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, CLAUDE.md
   → ✓ Complete - All Phase 1 artifacts generated
7. Re-evaluate Constitution Check section
   → ✓ PASS - No new violations introduced
8. Plan Phase 2 → Describe task generation approach
   → ✓ Complete - Task strategy documented
9. STOP - Ready for /tasks command
   → ✓ COMPLETE
```

**IMPORTANT**: The /plan command STOPS at step 9. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

Build OSINT 2.1, a professional intelligence prompt generator that transforms OSINT analysis from manual research to AI-powered efficiency. Users follow a streamlined 3-step workflow (Intelligence Setup → Discovery Configuration → Prompt Generation) to generate professional OSINT prompts in under 60 seconds. The system supports 8 intelligence analysis types, custom discovery areas, template saving/loading, and produces prompts that generate enterprise-quality intelligence reports when used in AI assistants.

**Technical Approach**: Single-page application using vanilla HTML5, CSS3, and JavaScript ES6+ with zero external dependencies. Modal-based professional UI for 3-step workflow. All data stored in browser LocalStorage. Offline-first architecture with automatic prompt truncation to 8000 chars and HTML escaping for security.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (no transpilation required)
**Primary Dependencies**: ZERO - Vanilla web technologies only, no frameworks or libraries
**Storage**: Browser LocalStorage (for saved templates only, ~5-10MB max)
**Testing**: Manual testing checklist + browser DevTools console validation
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge latest 2 versions), responsive desktop/tablet/mobile
**Project Type**: single (frontend-only, no backend)
**Performance Goals**: <1s initial load on 3G, <100ms UI interactions, <500ms prompt generation
**Constraints**: <2000 LOC excluding comments, single HTML file deployment, <50MB memory footprint, 8000 char prompt limit
**Scale/Scope**: Single-user browser application, 8 intelligence types, unlimited saved templates (LocalStorage limit), offline-capable

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Article I: Intelligence Excellence
- ✅ **Accuracy First**: Generated prompts enforce evidence-based analysis with confidence scoring (FR-023, FR-025)
- ✅ **Methodology Adherence**: All 8 intelligence types implement 4-phase OSINT process (Discovery/Signals/Insights/Receipts) (FR-011, FR-012)
- ✅ **Professional Standards**: Prompts require Executive Summary (200 words), source attribution, confidence levels, structured format (FR-012, FR-013, FR-024)
- ✅ **Source Transparency**: Generated prompts mandate source URLs, timestamps, reliability assessment, corroboration (FR-013)

### Article II: Technical Principles
- ✅ **Simplicity by Design**: Vanilla HTML/CSS/JS only, zero dependencies, single file deployment (user requirement + constitution)
- ✅ **Performance Focus**: <1s load, <100ms interactions, <500ms generation, <50MB memory (FR-027, FR-028)
- ✅ **Cross-Platform Reliability**: Chrome/Firefox/Safari/Edge latest 2 versions, desktop/tablet/mobile, offline support (FR-029, FR-030, FR-034)
- ✅ **Graceful Degradation**: Human-readable errors, HTML escaping, no crashes on invalid input (FR-036, FR-038, FR-039)

### Article III: User Experience Standards
- ✅ **Intuitive Workflow**: 3-step process completable in <60 seconds, single-page UI, smart defaults (FR-026, acceptance scenario 1, FR-007)
- ✅ **Professional Aesthetics**: Modal-based UI matching enterprise tools (user requirement), structured layouts
- ✅ **Accessibility**: WCAG 2.1 Level AA compliance - keyboard navigation, screen readers, color contrast (FR-031)
- ✅ **Minimal Cognitive Load**: Single page, modal-based flow, tooltips for technical terms, confirmation for destructive actions (FR-026, template deletion)

### Article IV: Development Governance
- ✅ **Code Quality**: <2000 LOC limit enforces clean code, JSDoc required for functions, cyclomatic complexity <10
- ✅ **Testing Requirements**: Manual testing checklist via quickstart.md, contract tests for data model validation
- ✅ **Security Practices**: HTML escaping all user input, no data transmission, LocalStorage only, CSP headers (FR-038, FR-039, FR-032)
- ✅ **Documentation Standards**: Inline comments for "why", user guide accessible in-app, quickstart.md for validation

### Complexity Tracking
*No constitutional violations detected*

**GATE STATUS**: ✅ PASS - All constitutional requirements satisfied

---

## Project Structure

### Documentation (this feature)
```
specs/001-build-osint-2/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
│   ├── intelligence-types.json      # 8 intelligence type definitions
│   ├── discovery-areas.json         # Discovery areas per intelligence type
│   └── prompt-templates.json        # Base prompt templates
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
src/
└── index.html           # Single-file application containing:
                         # - HTML structure (modals, forms, outputs)
                         # - <style> block with CSS
                         # - <script> block with JavaScript

docs/
└── user-guide.md       # Embedded in index.html as help modal content

tests/
└── manual-testing.md   # Manual test scenarios from quickstart.md
```

**Structure Decision**: Single-file architecture chosen per constitution Article II (zero dependencies, single file deployment). All HTML, CSS, and JavaScript embedded in one index.html file. LocalStorage provides data persistence. No build process or external resources required.

---

## Phase 0: Outline & Research

### Unknowns Extracted from Technical Context
*No NEEDS CLARIFICATION markers remain in spec - all ambiguities resolved via /clarify*

### Research Tasks

1. **Modal UI Best Practices (Vanilla JS)**
   - **Decision**: Use native `<dialog>` element with polyfill fallback for older browsers
   - **Rationale**: `<dialog>` provides built-in accessibility (focus trap, ESC key handling, backdrop) without external libraries. Semantic HTML improves screen reader support (WCAG 2.1 AA). Fallback to `<div role="dialog">` for browsers without support.
   - **Alternatives Considered**: Custom div-based modals (more code, manual accessibility), CSS-only modals (limited keyboard navigation), third-party libraries (violates zero-dependency constraint)

2. **LocalStorage Data Structure for Templates**
   - **Decision**: JSON array of template objects stored under key `osint_templates`, max 5MB allocation
   - **Rationale**: JSON serialization native to JS, easy CRUD operations, survives page refresh. 5MB limit supports ~500 templates (avg 10KB each including custom discovery areas).
   - **Alternatives Considered**: IndexedDB (overkill for simple key-value storage), SessionStorage (lost on tab close), Cookies (4KB limit insufficient)

3. **8000 Character Truncation Strategy**
   - **Decision**: Priority-based template sections: (1) OSINT 4-phase structure [required], (2) Intelligence type context [required], (3) Discovery areas [truncate from bottom], (4) Evidence requirements [summarize], (5) Examples [remove first]
   - **Rationale**: Core methodology must remain intact for valid intelligence reports. Discovery areas truncate gracefully (fewer areas = narrower scope but still functional). Examples are helpful but optional.
   - **Alternatives Considered**: Proportional reduction (distorts all sections), user-selectable truncation (adds complexity), no truncation (fails in AI assistants)

4. **HTML Escaping for XSS Prevention**
   - **Decision**: Use `textContent` for DOM insertion, `encodeURIComponent` for URL parameters, regex-based sanitization for prompt generation: `str.replace(/[&<>"']/g, char => escapeMap[char])`
   - **Rationale**: `textContent` prevents HTML injection without manual escaping. Regex escaping converts `<script>` to `&lt;script&gt;` for safe prompt inclusion. No external sanitization library needed.
   - **Alternatives Considered**: DOMPurify library (adds dependency), server-side sanitization (no backend), whitelist-only characters (blocks legitimate international names)

5. **Responsive Layout Strategy (Desktop/Tablet/Mobile)**
   - **Decision**: CSS Grid for main layout, Flexbox for modals, mobile-first media queries at 768px (tablet) and 1024px (desktop)
   - **Rationale**: Grid provides 2D layout control for complex step workflows. Flexbox excels at centering modals and distributing buttons. Mobile-first ensures performance on slowest devices.
   - **Alternatives Considered**: Float-based layout (outdated, browser quirks), table layout (semantically incorrect), CSS frameworks like Bootstrap (violates dependency constraint)

6. **Accessibility: Keyboard Navigation & Screen Readers**
   - **Decision**: ARIA labels for all interactive elements, `tabindex` for logical tab order, `role="dialog"` + `aria-labelledby` for modals, visible focus indicators (2px blue outline)
   - **Rationale**: ARIA attributes expose application state to assistive tech. Logical tab order guides keyboard-only users through 3-step workflow. Visible focus prevents "lost cursor" confusion.
   - **Alternatives Considered**: JavaScript focus management only (misses screen reader users), skip nav links (adds visual clutter), browser defaults (insufficient for complex UI)

7. **8 Intelligence Types: Prompt Template Differentiation**
   - **Decision**: Base template with variable sections per type. Each intelligence type defines: (1) unique discovery areas, (2) report structure overrides (e.g., Threat Assessment adds "Mitigation Strategies"), (3) example queries
   - **Rationale**: Shared 4-phase OSINT structure ensures consistency. Type-specific sections address domain requirements (e.g., Company Research needs "Financial Health", Person Investigation needs "Social Media Presence").
   - **Alternatives Considered**: Completely separate templates (duplicate 4-phase structure), AI-generated templates (inconsistent output), user-created templates (lacks professional standards)

8. **Date Picker Implementation (Vanilla JS)**
   - **Decision**: Native `<input type="date">` for custom range, `<select>` dropdown for relative periods (7/30/180/365 days, all time)
   - **Rationale**: Native date inputs work cross-browser with built-in validation and mobile calendar UI. Avoids 10KB+ date picker libraries. Fallback to text input on older browsers with pattern validation.
   - **Alternatives Considered**: Flatpickr library (adds dependency), custom calendar widget (300+ LOC), text-only input (poor UX, validation complexity)

**Output**: research.md created with 8 decision records

---

## Phase 1: Design & Contracts

### Data Model (data-model.md)

**Entity: IntelligenceType**
- `id` (string, required): Unique identifier (e.g., "person-investigation")
- `name` (string, required): Display name (e.g., "Person Investigation")
- `description` (string, required): When to use this type (max 200 chars)
- `discoveryAreas` (array of DiscoveryArea IDs, required): Default areas for this type
- `promptTemplate` (string, required): Base template with variable placeholders
- `reportStructureOverrides` (object, optional): Custom sections for this type
- **Validation**: All 8 types must have unique IDs, at least 3 discovery areas each

**Entity: DiscoveryArea**
- `id` (string, required): Unique identifier (e.g., "social-media")
- `name` (string, required): Display name (e.g., "Social Media Presence")
- `description` (string, required): What this area investigates (max 150 chars)
- `applicableTypes` (array of IntelligenceType IDs, required): Which types use this area
- `defaultEnabled` (boolean, required): Pre-selected in UI by default
- `isCustom` (boolean, required): User-created vs. predefined
- **Validation**: At least 1 applicable type, custom areas stored per-template

**Entity: TargetSpecification**
- `targetName` (string, required): Who/what is being investigated (max 500 chars)
- `timeframe` (object, optional): `{ type: "relative"|"custom", value: string|{start, end} }`
- `intelligenceTypeId` (string, required): FK to IntelligenceType
- **Validation**: targetName must be non-empty after trim, HTML-escaped before storage

**Entity: SavedTemplate**
- `id` (string, required): UUID v4
- `name` (string, required): User-defined name (max 100 chars)
- `intelligenceTypeId` (string, required): FK to IntelligenceType
- `selectedDiscoveryAreas` (array of DiscoveryArea IDs, required): Enabled areas
- `customDiscoveryAreas` (array of strings, optional): User-added areas
- `targetSpecification` (TargetSpecification, optional): Pre-filled target
- `createdAt` (ISO 8601 timestamp, required): Creation date
- **Validation**: Name must be unique within user's templates, max 500 templates per user

**Entity: GeneratedPrompt**
- `content` (string, required): Full prompt text (max 8000 chars)
- `intelligenceType` (IntelligenceType, required): Source type
- `discoveryAreas` (array of DiscoveryArea, required): Enabled areas
- `targetSpecification` (TargetSpecification, required): Investigation target
- `characterCount` (number, required): Length for truncation warning
- `wasTruncated` (boolean, required): Exceeded 8000 char limit
- **Lifecycle**: Ephemeral - regenerated on demand, not persisted

### API Contracts (contracts/)

**Contract: intelligence-types.json**
```json
[
  {
    "id": "person-investigation",
    "name": "Person Investigation",
    "description": "Deep-dive into an individual's background, connections, and online presence",
    "discoveryAreas": ["social-media", "employment-history", "education", "criminal-records", "financial-records", "family-connections"],
    "promptTemplate": "...",
    "reportStructureOverrides": {}
  },
  {
    "id": "company-research",
    "name": "Company Research",
    "description": "Analyze corporate structure, financial health, key personnel, and reputation",
    "discoveryAreas": ["corporate-structure", "financial-health", "key-personnel", "reputation", "regulatory-compliance", "market-position"],
    "promptTemplate": "...",
    "reportStructureOverrides": { "additionalSections": ["Competitive Landscape"] }
  },
  {
    "id": "location-analysis",
    "name": "Location Analysis",
    "description": "Investigate geographic area, demographics, infrastructure, and activity patterns",
    "discoveryAreas": ["demographics", "infrastructure", "economic-indicators", "safety-crime", "points-of-interest", "historical-events"],
    "promptTemplate": "...",
    "reportStructureOverrides": {}
  },
  {
    "id": "threat-assessment",
    "name": "Threat Assessment",
    "description": "Evaluate security risks, vulnerabilities, and potential threat actors",
    "discoveryAreas": ["threat-actors", "attack-vectors", "vulnerabilities", "historical-incidents", "indicators-of-compromise"],
    "promptTemplate": "...",
    "reportStructureOverrides": { "additionalSections": ["Mitigation Strategies", "Likelihood Assessment"] }
  },
  {
    "id": "technology-profiling",
    "name": "Technology Profiling",
    "description": "Assess technology stack, digital footprint, and technical capabilities",
    "discoveryAreas": ["tech-stack", "digital-infrastructure", "code-repositories", "security-posture", "patents-publications"],
    "promptTemplate": "...",
    "reportStructureOverrides": {}
  },
  {
    "id": "market-intelligence",
    "name": "Market Intelligence",
    "description": "Gather competitive insights, market trends, and industry analysis",
    "discoveryAreas": ["market-trends", "competitor-analysis", "customer-sentiment", "pricing-strategies", "regulatory-landscape"],
    "promptTemplate": "...",
    "reportStructureOverrides": { "additionalSections": ["Market Opportunities", "Threats"] }
  },
  {
    "id": "reputation-analysis",
    "name": "Reputation Analysis",
    "description": "Evaluate public perception, media coverage, and stakeholder sentiment",
    "discoveryAreas": ["media-coverage", "social-sentiment", "reviews-ratings", "controversies", "brand-associations"],
    "promptTemplate": "...",
    "reportStructureOverrides": {}
  },
  {
    "id": "event-investigation",
    "name": "Event Investigation",
    "description": "Reconstruct timeline, participants, and context of specific events",
    "discoveryAreas": ["timeline-reconstruction", "participants", "location-context", "media-reports", "witness-accounts"],
    "promptTemplate": "...",
    "reportStructureOverrides": { "additionalSections": ["Chronological Timeline"] }
  }
]
```

**Contract: discovery-areas.json**
Schema: All discovery areas with IDs, names, descriptions, applicable types, default enabled state

**Contract: prompt-templates.json**
Schema: Base template structure with 4-phase OSINT methodology, variable placeholders for {INTELLIGENCE_TYPE}, {TARGET}, {TIMEFRAME}, {DISCOVERY_AREAS}, {EVIDENCE_REQUIREMENTS}

### Quickstart (quickstart.md)

**Quickstart Test Scenario: Person Investigation**
1. Open index.html in browser
2. Click "New Prompt" button → Modal opens with 8 intelligence types
3. Select "Person Investigation" → Card highlights, description visible
4. Click "Next" → Discovery Configuration modal opens
5. Verify pre-selected areas: Social Media ✓, Employment History ✓, Education ✓, Criminal Records, Financial Records, Family Connections ✓
6. Toggle "Criminal Records" ON
7. Add custom discovery area: Type "Known Aliases" → Click "Add" → Appears in list
8. Enter target: "John Smith"
9. Select timeframe: "Last 6 months" from dropdown
10. Click "Generate Prompt" → Generated prompt appears in read-only textarea
11. Verify prompt contains:
    - "Person Investigation" intelligence type
    - All 4 phases: Discovery, Signals, Insights, Receipts
    - Selected discovery areas (7 total including "Known Aliases")
    - Target "John Smith" (HTML-escaped)
    - Timeframe "last 6 months"
    - Evidence requirements (source URLs, timestamps, confidence levels)
12. Verify character count displayed: "~4,200 characters"
13. Click "Copy to Clipboard" → Success notification
14. Click "Save Template" → Prompt for name: "John Smith Template"
15. Refresh page → Click "Load Template" → Verify "John Smith Template" in list
16. Select template → Verify all fields restored correctly
17. Delete template → Confirmation modal → Confirm → Template removed

**PASS CRITERIA**: All 17 steps complete without errors, prompt produces professional intelligence report when pasted into AI assistant (manual external validation)

### CLAUDE.md Update

Incremental update to repository root CLAUDE.md file with:
- Tech stack: Vanilla HTML/CSS/JS, single-file architecture
- Key entities: 8 intelligence types, discovery areas, saved templates
- LocalStorage schema: `osint_templates` key
- Development conventions: HTML escaping via `textContent`, modal-based UI with `<dialog>` element
- Testing approach: Manual quickstart.md validation
- Recent change: Initial OSINT 2.1 implementation planned

---

## Phase 1 Constitution Re-Check
*GATE: Must pass before proceeding to Phase 2*

### Re-evaluation After Design

**Article I: Intelligence Excellence**
- ✅ Data model enforces 4-phase OSINT structure in prompt templates
- ✅ All 8 intelligence types defined with specific discovery areas
- ✅ Evidence requirements embedded in prompt generation logic (source URLs, timestamps, confidence)

**Article II: Technical Principles**
- ✅ Single-file architecture confirmed (index.html only)
- ✅ LocalStorage schema designed for <5MB footprint (500 templates max)
- ✅ Native HTML elements (`<dialog>`, `<input type="date">`) eliminate dependencies

**Article III: User Experience Standards**
- ✅ Modal-based workflow keeps 3 steps on single page
- ✅ Smart defaults defined per intelligence type (defaultEnabled flags)
- ✅ ARIA attributes in design ensure WCAG 2.1 AA compliance

**Article IV: Development Governance**
- ✅ Data model validation rules enforce data integrity
- ✅ Quickstart scenario provides contract test coverage
- ✅ HTML escaping strategy prevents XSS attacks

**GATE STATUS**: ✅ PASS - No new constitutional violations introduced

---

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

### Task Generation Strategy

**From Contracts**:
- `intelligence-types.json` → Contract test task: Validate all 8 types have required fields [P]
- `discovery-areas.json` → Contract test task: Validate discovery areas link to valid intelligence types [P]
- `prompt-templates.json` → Contract test task: Validate templates contain 4-phase structure [P]
- Each contract → Implementation task: Embed JSON data in index.html `<script>` section

**From Data Model**:
- IntelligenceType entity → Model creation task: Define JS class with validation methods [P]
- DiscoveryArea entity → Model creation task: Define JS class with applicableTypes validation [P]
- TargetSpecification entity → Model creation task: Define JS class with HTML escaping [P]
- SavedTemplate entity → Model creation task: Define JS class with LocalStorage serialization [P]
- GeneratedPrompt entity → Model creation task: Define JS class with truncation logic [P]

**From User Stories (Quickstart)**:
- Step 1-3 (Intelligence Type Selection) → Integration test: Modal opens, 8 types render, selection works
- Step 4-9 (Discovery Configuration) → Integration test: Discovery areas load, toggles work, custom areas add, target validates
- Step 10-13 (Prompt Generation) → Integration test: Prompt generates with all inputs, character count accurate, copy works
- Step 14-17 (Template Management) → Integration test: Save/load/delete templates persist across page refresh

**Ordering Strategy**:
1. **Setup**: Create index.html scaffold, embed contract JSON data [P]
2. **Contract Tests (TDD)**: Validate JSON contracts fail (no implementation yet) [P]
3. **Models**: Create 5 entity classes with validation [P - different files mentally, same file physically]
4. **UI Components**: Build modal HTML structure, CSS styling [P]
5. **Business Logic**: Intelligence type selection, discovery area toggling, prompt generation
6. **LocalStorage Integration**: Template save/load/delete
7. **Integration Tests**: Run quickstart.md manual scenarios
8. **Polish**: Accessibility audit, cross-browser testing, performance validation

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**Parallel Execution Notes**: Since this is a single-file architecture, tasks marked [P] are conceptually parallel (independent logic) but will modify the same index.html file. Task descriptions will specify "Add to index.html lines X-Y" to avoid merge conflicts.

---

## Progress Tracking

**Phase Status**:
- [x] Phase 0: Research complete (/plan command) - 8 research decisions documented
- [x] Phase 1: Design complete (/plan command) - data-model.md, contracts/, quickstart.md, CLAUDE.md created
- [x] Phase 2: Task planning complete (/plan command - approach described, tasks.md NOT created)
- [ ] Phase 3: Tasks generated (/tasks command - NEXT STEP)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS (no violations)
- [x] Post-Design Constitution Check: PASS (no new violations)
- [x] All NEEDS CLARIFICATION resolved (via /clarify session 2025-09-30)
- [x] Complexity deviations documented (none required)

**Artifacts Generated**:
- [x] plan.md (this file)
- [x] research.md (Phase 0)
- [x] data-model.md (Phase 1)
- [x] contracts/intelligence-types.json (Phase 1)
- [x] contracts/discovery-areas.json (Phase 1)
- [x] contracts/prompt-templates.json (Phase 1)
- [x] quickstart.md (Phase 1)
- [x] CLAUDE.md updated (Phase 1)

---

**STOP**: Ready for `/tasks` command to generate executable task breakdown.

---

*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
