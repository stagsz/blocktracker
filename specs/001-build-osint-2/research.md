# Research & Technology Decisions: OSINT 2.1

**Feature**: OSINT 2.1 Intelligence Prompt Generator
**Date**: 2025-09-30
**Purpose**: Document technology choices, alternatives considered, and rationale for implementation decisions

---

## Decision 1: Modal UI Best Practices (Vanilla JS)

**Decision**: Use native `<dialog>` element with polyfill fallback for older browsers

**Rationale**:
- `<dialog>` provides built-in accessibility features:
  - Automatic focus trapping within modal
  - ESC key handling for closing
  - Backdrop click handling
  - Proper ARIA semantics for screen readers
- Semantic HTML improves screen reader support (WCAG 2.1 Level AA requirement)
- Fallback to `<div role="dialog">` for browsers without `<dialog>` support (Safari <15.4)
- Zero external dependencies maintained

**Alternatives Considered**:
1. **Custom div-based modals**: Requires manual accessibility implementation (focus trap, ESC key, backdrop), increases code complexity (~100 LOC)
2. **CSS-only modals**: Limited keyboard navigation support, poor accessibility for screen readers
3. **Third-party libraries** (e.g., Micromodal.js): Violates zero-dependency constitutional requirement

**Implementation Notes**:
- Feature detection: `if (!window.HTMLDialogElement)` triggers polyfill
- Polyfill uses `<div role="dialog" aria-modal="true">` with manual focus management
- All modals include `aria-labelledby` pointing to modal title

---

## Decision 2: LocalStorage Data Structure for Templates

**Decision**: JSON array of template objects stored under key `osint_templates`, max 5MB allocation

**Rationale**:
- JSON serialization is native to JavaScript (no library needed)
- Easy CRUD operations: `JSON.parse(localStorage.getItem('osint_templates'))`
- Data survives page refresh and browser restarts
- 5MB localStorage limit supports ~500 templates (assuming avg 10KB each including custom discovery areas)
- Single key simplifies data management vs. per-template keys

**Alternatives Considered**:
1. **IndexedDB**: Overkill for simple key-value storage, adds async complexity, harder to debug
2. **SessionStorage**: Data lost on tab close, unacceptable for "saved templates" feature
3. **Cookies**: 4KB limit insufficient for even one template with custom discovery areas

**Implementation Notes**:
- Template schema: `{ id: UUID, name: string, intelligenceTypeId: string, selectedDiscoveryAreas: string[], customDiscoveryAreas: string[], targetSpecification: object, createdAt: ISO8601 }`
- Storage quota check: `navigator.storage.estimate()` warns user at 80% capacity
- Error handling: Try/catch on `localStorage.setItem()` handles quota exceeded errors

---

## Decision 3: 8000 Character Truncation Strategy

**Decision**: Priority-based template sections:
1. **OSINT 4-phase structure** [required] - Never truncate
2. **Intelligence type context** [required] - Never truncate
3. **Discovery areas** [truncate from bottom] - Remove least important areas first
4. **Evidence requirements** [summarize] - Condense from detailed to concise
5. **Examples** [remove first] - Optional, enhance usability but not critical

**Rationale**:
- Core 4-phase OSINT methodology must remain intact for valid intelligence reports
- Discovery areas truncate gracefully: fewer areas = narrower investigation scope but still functional
- Evidence requirements can be summarized without losing meaning (e.g., "Cite sources with URLs and timestamps" vs. detailed formatting instructions)
- Examples are helpful for new users but not essential for AI prompt execution

**Alternatives Considered**:
1. **Proportional reduction**: Reduces all sections equally, distorts methodology structure
2. **User-selectable truncation**: Adds UI complexity, requires user understanding of prompt structure
3. **No truncation**: Prompts fail when pasted into AI assistants with input limits (Claude: 8K, ChatGPT: 8K-32K)

**Implementation Notes**:
- Truncation function checks character count incrementally after each priority level
- UI displays warning icon when truncation occurs: "Prompt optimized to fit 8000 character limit"
- Character count shown in real-time: "4,237 / 8,000 characters"

---

## Decision 4: HTML Escaping for XSS Prevention

**Decision**: Multi-layer escaping strategy:
- **DOM insertion**: Use `textContent` property (auto-escapes HTML)
- **URL parameters**: Use `encodeURIComponent()` for query strings
- **Prompt generation**: Regex-based sanitization `str.replace(/[&<>"']/g, char => escapeMap[char])`

**Rationale**:
- `textContent` prevents HTML injection without manual escaping (e.g., `<script>` renders as literal text)
- Regex escaping converts special characters for safe prompt inclusion: `<script>` → `&lt;script&gt;`
- No external sanitization library needed (DOMPurify = 45KB minified)
- Handles international characters and special symbols in names

**Alternatives Considered**:
1. **DOMPurify library**: Comprehensive but adds dependency (violates constitution)
2. **Server-side sanitization**: No backend available in this architecture
3. **Whitelist-only characters**: Blocks legitimate international names (e.g., José, François)

**Implementation Notes**:
```javascript
const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, char => escapeMap[char]);
}
```

---

## Decision 5: Responsive Layout Strategy (Desktop/Tablet/Mobile)

**Decision**: CSS Grid for main layout, Flexbox for modals, mobile-first media queries at 768px (tablet) and 1024px (desktop)

**Rationale**:
- **CSS Grid**: Provides 2D layout control for complex 3-step workflow, aligns intelligence type cards in responsive grid
- **Flexbox**: Excels at centering modals and distributing action buttons horizontally
- **Mobile-first**: Ensures performance on slowest devices (3G mobile), progressive enhancement for desktop
- **Breakpoints**: 768px = standard tablet landscape, 1024px = standard desktop minimum

**Alternatives Considered**:
1. **Float-based layout**: Outdated, browser-specific quirks, requires clearfix hacks
2. **Table layout**: Semantically incorrect for non-tabular data, accessibility issues
3. **CSS frameworks** (Bootstrap, Tailwind): Violates zero-dependency requirement

**Implementation Notes**:
- Base layout (mobile): Single column, stacked modals
- 768px+ (tablet): 2-column grid for intelligence types, wider modals
- 1024px+ (desktop): 3-column grid, max-width modals (800px)
- Touch targets: Minimum 44x44px for mobile (WCAG 2.1 AA)

---

## Decision 6: Accessibility - Keyboard Navigation & Screen Readers

**Decision**:
- ARIA labels for all interactive elements
- `tabindex` for logical tab order through 3-step workflow
- `role="dialog"` + `aria-labelledby` for modals
- Visible focus indicators (2px solid blue outline, 4px offset)

**Rationale**:
- ARIA attributes expose application state to assistive technologies
- Logical tab order guides keyboard-only users through intelligence type selection → discovery configuration → prompt generation
- Visible focus indicators prevent "lost cursor" confusion (common complaint in enterprise UX testing)
- Meets WCAG 2.1 Level AA requirements (FR-031)

**Alternatives Considered**:
1. **JavaScript focus management only**: Misses screen reader users who navigate by headings/landmarks
2. **Skip navigation links**: Adds visual clutter, less effective than proper heading structure
3. **Browser defaults**: Insufficient for complex modal-based UI

**Implementation Notes**:
- Focus trap in modals: First and last focusable elements cycle focus
- ARIA live regions announce dynamic content (e.g., "Prompt generated successfully")
- Semantic HTML structure: `<main>`, `<nav>`, `<section>`, `<article>` for landmark navigation
- Color contrast: 4.5:1 minimum for text, 3:1 for interactive components

---

## Decision 7: 8 Intelligence Types - Prompt Template Differentiation

**Decision**: Base template with variable sections per type. Each intelligence type defines:
1. **Unique discovery areas** (e.g., "Social Media" for Person, "Market Trends" for Market Intelligence)
2. **Report structure overrides** (e.g., Threat Assessment adds "Mitigation Strategies")
3. **Example queries** (e.g., "Investigate John Doe's employment history 2020-2025")

**Rationale**:
- Shared 4-phase OSINT structure (Discovery/Signals/Insights/Receipts) ensures consistency across all types
- Type-specific sections address domain requirements:
  - **Person Investigation**: Social media, criminal records, family connections
  - **Company Research**: Financial health, regulatory compliance, competitive landscape
  - **Threat Assessment**: Attack vectors, mitigation strategies, likelihood scoring
- Examples guide new users without cluttering professional use (hidden after first use)

**Alternatives Considered**:
1. **Completely separate templates**: Duplicates 4-phase structure across 8 types, violates DRY principle
2. **AI-generated templates**: Inconsistent output quality, may not follow professional standards
3. **User-created templates**: Lacks professional intelligence methodology, risky for enterprise use

**Implementation Notes**:
- Base template stored in `prompt-templates.json`
- Intelligence types in `intelligence-types.json` reference base template + overrides
- Template variables: `{INTELLIGENCE_TYPE}`, `{TARGET}`, `{TIMEFRAME}`, `{DISCOVERY_AREAS}`, `{EVIDENCE_REQUIREMENTS}`

---

## Decision 8: Date Picker Implementation (Vanilla JS)

**Decision**: Native `<input type="date">` for custom range, `<select>` dropdown for relative periods (7/30/180/365 days, all time)

**Rationale**:
- **Native date inputs**: Work cross-browser with built-in validation and mobile calendar UI
- **Zero dependencies**: Avoids 10KB+ date picker libraries (Flatpickr, Pikaday)
- **Mobile optimization**: Native inputs trigger OS-level date picker on iOS/Android
- **Fallback**: Text input with pattern validation `\d{4}-\d{2}-\d{2}` on older browsers (IE11)

**Alternatives Considered**:
1. **Flatpickr library**: Excellent UX but adds 15KB minified + dependency
2. **Custom calendar widget**: 300+ LOC, accessibility challenges, time-consuming
3. **Text-only input**: Poor UX, complex validation, error-prone

**Implementation Notes**:
- Relative periods: `<select>` with options: "Last 7 days", "Last 30 days", "Last 6 months", "Last 1 year", "All time"
- Custom range: Two `<input type="date">` fields (start, end) with validation (end >= start)
- Default: "All time" (no timeframe restriction in prompt)
- Timeframe rendered in prompt: "Focus investigation on data from the last 6 months" or specific date range

---

## Summary

All 8 research decisions prioritize:
1. **Zero external dependencies** (constitutional requirement)
2. **Accessibility** (WCAG 2.1 Level AA)
3. **Performance** (<1s load time, <100ms interactions)
4. **Professional standards** (4-phase OSINT methodology, evidence-based analysis)

These decisions enable a <2000 LOC single-file implementation that meets all constitutional and functional requirements.
