# Data Model: OSINT 2.1 Intelligence Prompt Generator

**Feature**: OSINT 2.1
**Date**: 2025-09-30
**Purpose**: Define entities, attributes, relationships, validation rules, and state transitions

---

## Entity: IntelligenceType

**Purpose**: Represents one of 8 intelligence analysis categories (Person, Company, Location, Threat, Technology, Market, Reputation, Event)

### Attributes

| Attribute | Type | Required | Constraints | Description |
|-----------|------|----------|-------------|-------------|
| `id` | string | Yes | Unique, kebab-case | Identifier (e.g., "person-investigation") |
| `name` | string | Yes | Max 50 chars | Display name (e.g., "Person Investigation") |
| `description` | string | Yes | Max 200 chars | When to use this type |
| `discoveryAreas` | array<string> | Yes | Min 3 area IDs | Default discovery areas for this type |
| `promptTemplate` | string | Yes | Contains 4-phase structure | Base template with variable placeholders |
| `reportStructureOverrides` | object | No | Valid JSON object | Custom sections for this type |

### Validation Rules

1. All 8 intelligence types must have unique IDs
2. Each type must reference at least 3 valid discovery area IDs
3. Prompt template must contain placeholders: `{INTELLIGENCE_TYPE}`, `{TARGET}`, `{DISCOVERY_AREAS}`, `{EVIDENCE_REQUIREMENTS}`
4. Prompt template must include 4-phase OSINT structure: Discovery, Signals, Insights, Receipts

### Relationships

- **Has Many**: DiscoveryArea (via `discoveryAreas` array)
- **Referenced By**: SavedTemplate (via `intelligenceTypeId`)
- **Referenced By**: TargetSpecification (via `intelligenceTypeId`)

---

## Entity: DiscoveryArea

**Purpose**: Represents an investigation dimension (e.g., social media, financial records, criminal history)

### Attributes

| Attribute | Type | Required | Constraints | Description |
|-----------|------|----------|-------------|-------------|
| `id` | string | Yes | Unique, kebab-case | Identifier (e.g., "social-media") |
| `name` | string | Yes | Max 100 chars | Display name (e.g., "Social Media Presence") |
| `description` | string | Yes | Max 150 chars | What this area investigates |
| `applicableTypes` | array<string> | Yes | Min 1 type ID | Which intelligence types use this area |
| `defaultEnabled` | boolean | Yes | true/false | Pre-selected in UI by default |
| `isCustom` | boolean | Yes | true/false | User-created vs. predefined |

### Validation Rules

1. ID must be unique across all predefined discovery areas
2. Must reference at least 1 valid intelligence type ID in `applicableTypes`
3. Custom discovery areas (`isCustom: true`) are stored per-template, not globally
4. Custom areas inherit `applicableTypes` from parent intelligence type

### Relationships

- **Belongs To Many**: IntelligenceType (via `applicableTypes` array)
- **Referenced By**: SavedTemplate (via `selectedDiscoveryAreas` array)
- **Referenced By**: GeneratedPrompt (via `discoveryAreas` array)

---

## Entity: TargetSpecification

**Purpose**: Represents what/who is being investigated (e.g., person name, company name, location)

### Attributes

| Attribute | Type | Required | Constraints | Description |
|-----------|------|----------|-------------|-------------|
| `targetName` | string | Yes | Max 500 chars, non-empty after trim | Who/what is being investigated |
| `timeframe` | object | No | `{ type: "relative"\|"custom", value: string\|{start, end} }` | Investigation timeframe |
| `intelligenceTypeId` | string | Yes | Valid IntelligenceType ID | Associated intelligence type |

### Validation Rules

1. `targetName` must be non-empty after trimming whitespace
2. `targetName` must be HTML-escaped before storage/display (prevent XSS)
3. If `timeframe.type === "relative"`, `value` must be one of: "7d", "30d", "180d", "365d", "all"
4. If `timeframe.type === "custom"`, `value.end` must be >= `value.start`
5. Dates in custom timeframe must be ISO 8601 format (YYYY-MM-DD)

### Relationships

- **Belongs To**: IntelligenceType (via `intelligenceTypeId`)
- **Embedded In**: SavedTemplate
- **Embedded In**: GeneratedPrompt

---

## Entity: SavedTemplate

**Purpose**: Represents a reusable prompt configuration saved by user in LocalStorage

### Attributes

| Attribute | Type | Required | Constraints | Description |
|-----------|------|----------|-------------|-------------|
| `id` | string | Yes | UUID v4 | Unique identifier |
| `name` | string | Yes | Max 100 chars, unique per user | User-defined template name |
| `intelligenceTypeId` | string | Yes | Valid IntelligenceType ID | Selected intelligence type |
| `selectedDiscoveryAreas` | array<string> | Yes | Min 1 area ID | Enabled predefined discovery areas |
| `customDiscoveryAreas` | array<string> | No | Max 10 custom areas | User-added discovery areas |
| `targetSpecification` | TargetSpecification | No | Valid object or null | Pre-filled target (optional) |
| `createdAt` | string | Yes | ISO 8601 timestamp | Creation date |

### Validation Rules

1. Template name must be unique within user's saved templates
2. Maximum 500 templates per user (LocalStorage quota management)
3. At least 1 discovery area must be selected (predefined or custom)
4. Custom discovery areas limited to 10 per template (prevent LocalStorage bloat)
5. Total template size should not exceed 10KB (estimated)

### State Transitions

1. **Create**: User clicks "Save Template" → Prompts for name → Validates uniqueness → Saves to LocalStorage
2. **Load**: User selects template from list → Restores intelligence type, discovery areas, target → Closes template modal
3. **Delete**: User clicks delete icon → Confirmation modal → Removes from LocalStorage array → Updates UI

### Relationships

- **References**: IntelligenceType (via `intelligenceTypeId`)
- **References**: DiscoveryArea (via `selectedDiscoveryAreas`)
- **Embeds**: TargetSpecification (optional)

---

## Entity: GeneratedPrompt

**Purpose**: Represents the final OSINT prompt output (ephemeral, regenerated on demand)

### Attributes

| Attribute | Type | Required | Constraints | Description |
|-----------|------|----------|-------------|-------------|
| `content` | string | Yes | Max 8000 chars | Full prompt text |
| `intelligenceType` | IntelligenceType | Yes | Valid object | Source intelligence type |
| `discoveryAreas` | array<DiscoveryArea> | Yes | Min 1 area | Enabled discovery areas |
| `targetSpecification` | TargetSpecification | Yes | Valid object | Investigation target |
| `characterCount` | number | Yes | Positive integer | Length of `content` |
| `wasTruncated` | boolean | Yes | true/false | Exceeded 8000 char limit |

### Validation Rules

1. `content` must not exceed 8000 characters (AI input limit)
2. If `content.length > 8000`, apply truncation strategy (see research.md Decision 3)
3. `content` must contain all 4 OSINT phases: Discovery, Signals, Insights, Receipts
4. `targetSpecification.targetName` must be HTML-escaped in `content`

### Lifecycle

**Ephemeral Entity** - Not persisted to LocalStorage
1. **Generate**: User clicks "Generate Prompt" → Validates inputs → Assembles template → Truncates if needed → Displays in UI
2. **Copy**: User clicks "Copy to Clipboard" → Copies `content` to clipboard → Shows success notification
3. **Regenerate**: User modifies any input → Prompt automatically discarded → Requires regeneration

### Relationships

- **References**: IntelligenceType (embedded)
- **References**: DiscoveryArea (array, embedded)
- **Embeds**: TargetSpecification

---

## Data Storage Schema

### LocalStorage Key-Value Store

**Key**: `osint_templates`
**Value**: JSON array of SavedTemplate objects

```json
[
  {
    "id": "uuid-v4-string",
    "name": "John Smith Investigation",
    "intelligenceTypeId": "person-investigation",
    "selectedDiscoveryAreas": ["social-media", "employment-history", "criminal-records"],
    "customDiscoveryAreas": ["Known Aliases"],
    "targetSpecification": {
      "targetName": "John Smith",
      "timeframe": {
        "type": "relative",
        "value": "180d"
      },
      "intelligenceTypeId": "person-investigation"
    },
    "createdAt": "2025-09-30T14:32:00Z"
  }
]
```

### Storage Constraints

- Max LocalStorage size: ~5-10MB (browser-dependent)
- Max templates: 500 (enforced by app)
- Max template size: ~10KB each
- Quota warning: Alert user at 80% capacity

---

## Validation Summary

### Cross-Entity Validation

1. **Referential Integrity**: All `intelligenceTypeId` references must point to valid IntelligenceType objects
2. **Discovery Area Validity**: All area IDs in `selectedDiscoveryAreas` must exist in predefined areas OR be listed in `customDiscoveryAreas`
3. **Timeframe Consistency**: Custom date ranges must have end >= start
4. **Character Limits**: Generated prompt truncation respects priority hierarchy (4-phase structure > type context > discovery areas)

### Input Sanitization

1. **HTML Escaping**: All user input (targetName, custom discovery areas, template names) escaped via `escapeHTML()` function
2. **Trim Whitespace**: Leading/trailing whitespace removed from all string inputs
3. **Length Validation**: Client-side validation prevents exceeding max character limits
4. **Type Coercion**: Ensure booleans, numbers, arrays are correct types before storage

---

This data model supports the 3-step workflow (Intelligence Setup → Discovery Configuration → Prompt Generation) while maintaining data integrity and preventing XSS attacks through comprehensive validation.
