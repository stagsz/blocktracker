# Feature Specification: OSINT 2.1 Intelligence Prompt Generator

**Feature Branch**: `001-build-osint-2`
**Created**: 2025-09-30
**Status**: Draft
**Input**: User description: "Build OSINT 2.1, a professional intelligence prompt generator that transforms OSINT analysis through a streamlined 3-step workflow: Intelligence Setup → Discovery Configuration → Prompt Generation."

## Execution Flow (main)
```
1. Parse user description from Input
   → ✓ Description provided
2. Extract key concepts from description
   → ✓ Identified: intelligence analysts (actors), generate prompts (action), 3-step workflow (constraint)
3. For each unclear aspect:
   → Marked with [NEEDS CLARIFICATION: specific question]
4. Fill User Scenarios & Testing section
   → ✓ User flow determined
5. Generate Functional Requirements
   → ✓ Each requirement testable
6. Identify Key Entities (if data involved)
   → ✓ Entities identified
7. Run Review Checklist
   → ⚠ Some [NEEDS CLARIFICATION] markers present
8. Return: SUCCESS (spec ready for planning after clarification)
```

---

## ⚡ Quick Guidelines
- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business stakeholders, not developers

---

## Clarifications

### Session 2025-09-30
- Q: Should analysts be able to add custom investigation areas beyond the predefined options, or should the system limit them to only the standard discovery areas? → A: Allow custom entry - users can type additional discovery areas as needed
- Q: Should the system support saving and loading multiple prompt templates across sessions, or focus on single-use prompt generation only? → A: Save templates - allow naming and storing multiple configured prompts for reuse
- Q: How should users specify investigation timeframes? → A: Both - relative presets plus custom date range option
- Q: What should happen when a generated prompt exceeds typical AI assistant input limits (e.g., >8000 characters)? → A: Auto-truncate - automatically shorten prompt to fit common limits
- Q: What validation rules should apply to the target specification field to prevent code injection or malformed prompts? → A: HTML escape all - allow any input but escape all HTML/special characters for safe display

---

## User Scenarios & Testing

### Primary User Story

An intelligence analyst needs to generate a comprehensive OSINT investigation prompt for an AI assistant. They open OSINT 2.1, select their analysis type (e.g., "Person Investigation"), configure what they want to discover (social media, employment, connections), and receive a professional prompt they can paste into any AI assistant to generate a structured intelligence report following the 4-phase OSINT methodology (Discovery → Signals → Insights → Receipts).

### Acceptance Scenarios

1. **Given** the analyst opens OSINT 2.1, **When** they complete the 3-step workflow in under 60 seconds, **Then** they receive a copyable prompt that produces professional intelligence reports when used in AI assistants

2. **Given** an analyst selects "Company Research" as their intelligence type, **When** they configure discovery areas and generate the prompt, **Then** the output prompt instructs the AI to investigate corporate structure, financial health, key personnel, and reputation

3. **Given** an analyst has generated a prompt, **When** they use it in an AI assistant, **Then** the AI produces a report with Executive Summary, Background, Findings, Analysis, and Recommendations sections

4. **Given** an analyst is working offline on a sensitive investigation, **When** they use OSINT 2.1, **Then** no data is transmitted to external servers and all functionality remains available

5. **Given** a new analyst unfamiliar with OSINT methodology, **When** they use OSINT 2.1, **Then** the interface guides them through proper intelligence gathering structure without requiring external documentation

### Edge Cases

- What happens when an analyst selects intelligence type but skips discovery configuration? System should use smart defaults based on analysis type
- What happens when the generated prompt is too long for an AI assistant's input limit? System automatically truncates prompt to fit 8000 character limit by prioritizing core instructions and reducing detail
- What happens when an analyst needs custom discovery areas not listed in standard options? System allows users to add custom discovery areas via text input
- What happens when an analyst loses connection mid-workflow? System should preserve progress in browser storage
- What happens when an analyst wants to save multiple prompt templates? System allows users to name and save configured prompts, then load them later for reuse or modification

---

## Requirements

### Functional Requirements

**Intelligence Setup (Step 1)**
- **FR-001**: System MUST present 8 distinct intelligence analysis types: Person Investigation, Company Research, Location Analysis, Threat Assessment, Technology Profiling, Market Intelligence, Reputation Analysis, Event Investigation
- **FR-002**: Each intelligence type MUST display a brief description explaining when to use it
- **FR-003**: User MUST be able to select exactly one intelligence type per prompt generation session
- **FR-004**: System MUST visually indicate the selected intelligence type and allow changing selection before proceeding

**Discovery Configuration (Step 2)**
- **FR-005**: System MUST display discovery areas relevant to the selected intelligence type (e.g., social media, employment history, criminal records for Person Investigation)
- **FR-006**: User MUST be able to toggle discovery areas on/off to customize investigation scope
- **FR-007**: System MUST provide smart defaults with commonly used discovery areas pre-selected
- **FR-008**: System MUST allow users to add custom discovery areas via text input beyond the predefined options
- **FR-009**: System MUST display a target input field where users specify what/who they're investigating (e.g., person name, company name, location)
- **FR-010**: System MUST allow optional timeframe specification via dropdown with preset relative periods (last 7 days, 30 days, 6 months, 1 year, all time) or custom date range with start/end date pickers

**Prompt Generation (Step 3)**
- **FR-011**: System MUST generate a comprehensive prompt incorporating: selected intelligence type, enabled discovery areas (predefined and custom), target specification, optional timeframe (relative period or custom date range), and 4-phase OSINT methodology structure
- **FR-012**: Generated prompt MUST instruct AI to produce reports with: Executive Summary, Background, Findings (organized by discovery area), Analysis (patterns/insights), Recommendations, and Sources
- **FR-013**: Generated prompt MUST specify evidence requirements: source URLs, collection timestamps, confidence levels (High/Medium/Low), corroboration status
- **FR-014**: System MUST automatically truncate generated prompts exceeding 8000 characters by prioritizing core OSINT methodology instructions and reducing optional detail
- **FR-015**: System MUST display generated prompt in copyable text format
- **FR-016**: System MUST provide one-click copy-to-clipboard functionality
- **FR-017**: System MUST allow users to restart workflow without refreshing the page

**Template Management**
- **FR-018**: System MUST allow users to save configured prompt templates with user-defined names
- **FR-019**: System MUST allow users to load previously saved templates to restore intelligence type, discovery areas, and target specification
- **FR-020**: System MUST store saved templates in browser local storage
- **FR-021**: System MUST allow users to delete saved templates
- **FR-022**: System MUST display a list of saved template names for selection

**Professional Standards**
- **FR-023**: Generated prompts MUST enforce professional intelligence report structure adhering to enterprise quality standards
- **FR-024**: Generated prompts MUST specify that AI should cite all sources with URLs and assessment timestamps
- **FR-025**: Generated prompts MUST instruct AI to use confidence scoring (High/Medium/Low) for all claims
- **FR-026**: System MUST complete entire 3-step workflow on a single page without navigation to external pages

**User Experience**
- **FR-027**: System MUST complete initial page load in under 1 second on 3G connections
- **FR-028**: System MUST respond to user interactions (clicks, toggles) in under 100 milliseconds
- **FR-029**: System MUST work identically across Chrome, Firefox, Safari, and Edge (latest 2 versions)
- **FR-030**: System MUST adapt layout for desktop, tablet, and mobile viewports
- **FR-031**: System MUST meet WCAG 2.1 Level AA accessibility standards (keyboard navigation, screen reader support, color contrast)

**Data & Privacy**
- **FR-032**: System MUST NOT transmit any user input or generated prompts to external servers
- **FR-033**: System MUST NOT persist user preferences across sessions (no default intelligence type or discovery area preferences stored); only saved templates are persisted
- **FR-034**: System MUST function fully offline after initial page load
- **FR-035**: System MUST NOT require user authentication or accounts

**Error Handling**
- **FR-036**: System MUST display human-readable error messages if user attempts to proceed without required selections
- **FR-037**: System MUST prevent prompt generation if no target is specified
- **FR-038**: System MUST validate target input by escaping all HTML and special characters before including in generated prompts to prevent code injection
- **FR-039**: System MUST allow any text input in target field (no character restrictions) but sanitize via HTML escaping for safe display and prompt generation

### Key Entities

- **Intelligence Type**: Represents one of 8 analysis categories (Person, Company, Location, Threat, Technology, Market, Reputation, Event). Each type has: name, description, associated discovery areas, default prompt template structure

- **Discovery Area**: Represents an investigation dimension (e.g., social media, financial records, criminal history). Attributes include: name, description, applicability to intelligence types, default enabled/disabled state

- **Target Specification**: Represents what/who is being investigated. Attributes include: target name/identifier, optional timeframe (either relative period: 7/30/180/365 days, all time, or custom date range with start/end dates), intelligence type context

- **Generated Prompt**: Represents the final output. Attributes include: intelligence type, enabled discovery areas, target specification, 4-phase OSINT structure instructions, evidence requirements, professional formatting rules

- **Saved Template**: Represents a reusable prompt configuration. Attributes include: template name (user-defined), intelligence type, selected discovery areas (predefined and custom), target specification, optional timeframe, creation timestamp, stored in browser local storage


---

## Review & Acceptance Checklist

### Content Quality
- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness
- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

---

## Execution Status

- [x] User description parsed
- [x] Key concepts extracted
- [x] Ambiguities resolved (5 clarifications completed)
- [x] User scenarios defined
- [x] Requirements generated (39 functional requirements)
- [x] Entities identified (5 key entities)
- [x] Review checklist passed

---

## Next Steps

1. ✅ Clarifications complete - all ambiguities resolved
2. Proceed to `/plan` for technical implementation planning
3. Constitution check will validate against Intelligence Excellence, Technical Principles, User Experience Standards, and Development Governance

---
