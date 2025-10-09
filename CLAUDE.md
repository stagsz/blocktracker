# CLAUDE.md - OSINT 2.0 Development Context

## Project Overview

OSINT 2.1 is a professional intelligence prompt generator following GitHub Spec-Kit methodology. This project transforms traditional OSINT analysis from manual research to AI-powered efficiency through systematic prompt generation.

## Current Implementation: OSINT 2.1

**Feature Branch**: `001-build-osint-2`
**Status**: Planning Complete - Ready for Implementation
**Completion**: Phase 0 (Research) + Phase 1 (Design) ✅

### Technical Stack

- **Language**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Dependencies**: ZERO - No frameworks or libraries
- **Architecture**: Single-file application (`src/index.html`)
- **Storage**: Browser LocalStorage (for saved templates only)
- **Deployment**: Single HTML file, no build process required

### Key Entities

1. **IntelligenceType** (8 types):
   - Person Investigation, Company Research, Location Analysis, Threat Assessment
   - Technology Profiling, Market Intelligence, Reputation Analysis, Event Investigation

2. **DiscoveryArea** (43 predefined areas):
   - Social media, employment history, financial records, etc.
   - User can add custom discovery areas per investigation

3. **SavedTemplate**:
   - Stored in LocalStorage under key: `osint_templates`
   - Schema: `{ id, name, intelligenceTypeId, selectedDiscoveryAreas, customDiscoveryAreas, targetSpecification, createdAt }`

4. **GeneratedPrompt** (ephemeral):
   - 4-phase OSINT methodology (Discovery → Signals → Insights → Receipts)
   - Auto-truncates to 8000 characters if needed
   - HTML-escaped for XSS prevention

5. **TargetSpecification**:
   - `{ targetName, timeframe: { type, value }, intelligenceTypeId }`

### LocalStorage Schema

**Key**: `osint_templates`
**Value**: JSON array of SavedTemplate objects
**Max Size**: ~5MB (supports ~500 templates)

### Development Conventions

#### HTML Escaping (XSS Prevention)
```javascript
// Use textContent for DOM insertion (auto-escapes)
element.textContent = userInput;

// Manual escaping for prompt generation
const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, char => escapeMap[char]);
}
```

#### Modal-Based UI
- Use native `<dialog>` element with polyfill for Safari < 15.4
- ARIA attributes: `role="dialog"`, `aria-labelledby`, `aria-modal="true"`
- Focus trap: Tab cycles through modal elements only
- ESC key closes modal

#### Responsive Layout
- CSS Grid for main layout (3-column on desktop, 2-column tablet, 1-column mobile)
- Flexbox for modal centering and button distribution
- Breakpoints: 768px (tablet), 1024px (desktop)

### Testing Approach

- **Manual Testing**: Follow `specs/001-build-osint-2/quickstart.md` scenario
- **Contract Tests**: Validate JSON data structures in `contracts/` directory
- **Accessibility**: WCAG 2.1 Level AA compliance (keyboard navigation, screen readers, color contrast)
- **Cross-Browser**: Chrome 90+, Firefox 88+, Safari 15.4+, Edge 90+

### File Structure (Current Feature)

```
specs/001-build-osint-2/
├── spec.md                                    # Feature specification
├── plan.md                                    # Implementation plan (this phase)
├── research.md                                # Technology decisions
├── data-model.md                              # Entity definitions
├── quickstart.md                              # Manual testing scenario
└── contracts/
    ├── intelligence-types.json                # 8 intelligence type configs
    ├── discovery-areas.json                   # 43 discovery area definitions
    └── prompt-templates.json                  # Base OSINT prompt template

src/
└── index.html                                 # Single-file application (to be created)
```

### Recent Changes

- 2025-09-30: OSINT 2.1 implementation planned (Phase 0 & 1 complete)
  - Research decisions: Modal UI, LocalStorage, truncation strategy, HTML escaping, responsive layout, accessibility, 8 intelligence types, date picker
  - Data model: 5 entities defined with validation rules
  - Contracts: 8 intelligence types, 43 discovery areas, base prompt template
  - Quickstart: 17-step manual test scenario covering complete workflow

### Constitutional Requirements

**Version**: 1.0.0 (2025-09-30)

All development must comply with:
- **Article I** (Intelligence Excellence): 4-phase OSINT methodology, evidence-based analysis, confidence scoring
- **Article II** (Technical Principles): Zero dependencies, <2000 LOC, <1s load time, single-file deployment
- **Article III** (User Experience): <60s workflow, WCAG 2.1 AA, mobile-first, professional aesthetics
- **Article IV** (Development Governance): JSDoc comments, contract tests, HTML escaping, manual testing

### Next Steps

1. Run `/tasks` command to generate task breakdown from plan.md
2. Implement tasks in order (Setup → Contract Tests → Models → UI → Business Logic → LocalStorage → Integration Tests → Polish)
3. Validate against quickstart.md manual testing scenario
4. External validation: Test generated prompts in AI assistants (Claude, ChatGPT, etc.)

---

This file provides context for AI coding agents (Claude Code) to understand the project structure, technical decisions, and development standards.
