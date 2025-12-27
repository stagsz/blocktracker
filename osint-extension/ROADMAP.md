# BrightScope Feature Roadmap

**Created**: December 2025
**Status**: Active Planning
**Current Version**: 1.0.1

---

## Priority Matrix

Features scored on: **Value** (user impact) × **Effort** (dev time) × **Risk** (maintenance burden)

| Priority | Criteria |
|----------|----------|
| P0 | Must have. Blocks revenue or core functionality. |
| P1 | High value, reasonable effort. Ship in next release. |
| P2 | Good value, moderate effort. Ship when P1 complete. |
| P3 | Nice to have. Consider for future. |
| P4 | Defer or skip. Low ROI or scope creep. |

---

## Phase 0: Foundation (Week 1-2)
*Prerequisites for sustainable growth*

### P0 - Critical Infrastructure

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Server-side licensing** | Replace client-side checksum with server validation. Refresh tokens, offline grace period. | `license-validator.js`, `background.js`, new API endpoint | 3-5 days |
| **E2E test suite** | Puppeteer/Playwright tests for extension load, prompt generation, and injection flows per provider. | New `tests/` directory | 2-3 days |
| **Content script SDK** | Refactor 4 inject scripts into single SDK with provider profiles (selectors, delays, behaviors). | `content-scripts/*.js` → `content-scripts/inject-sdk.js` + `providers.json` | 2 days |

**Deliverables:**
- [ ] License validation API (can be simple Cloudflare Worker or Supabase Edge Function)
- [ ] Test coverage for: extension load, all 16 intelligence types, 4 AI providers
- [ ] Single inject SDK replacing 4 separate scripts

---

## Phase 1: Core Value (Week 3-4)
*Features that directly improve the product*

### P1 - High Priority

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Provider-aware formatting** | Different prompt structures for Claude/ChatGPT/Perplexity/Gemini. System instruction vs inline, chunking, safety wording. | `popup.js` (prompt generation), `data/prompt-templates.json` | 1-2 days |
| **Robust injection** | Retry logic with DOM readiness checks. Success/failure toast. Handle rate limits. | `content-scripts/inject-sdk.js` | 1 day |
| **Report export (Markdown)** | Export generated prompts + metadata to `.md` file. Match intelligence type report structure. | `popup.js`, new export module | 1 day |
| **Saved workflows** | Save full config (type + areas + timeframe + provider + format settings). JSON export/import. | `popup.js`, update storage schema | 1-2 days |
| **Source packs** | Curated discovery area presets: "US Startup", "EU Fintech", "Crypto Exchange", "Government Contractor", etc. | `data/source-packs.json`, `popup.js` | 1 day |

**Deliverables:**
- [ ] 4 provider-specific prompt templates
- [ ] Injection success rate > 95%
- [ ] One-click Markdown export
- [ ] 5+ source pack presets
- [ ] Workflow import/export via JSON

---

## Phase 2: Premium Differentiation (Week 5-6)
*Features that justify premium pricing*

### P1 - Premium Features

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Report export (PDF)** | Generate professional PDF reports with branding, table of contents, sections per intelligence type. | New `pdf-generator.js`, use jsPDF or similar | 2-3 days |
| **Multi-target batching** | Generate prompts for list of entities. Open/inject sequentially with configurable delay. | `popup.js`, `background.js` | 2 days |
| **Smart prompt composer** | Sliders for: depth (brief/standard/comprehensive), formality (casual/professional/formal), risk tolerance (conservative/balanced/aggressive). | `popup.html`, `popup.js`, update templates | 2-3 days |
| **Keyboard shortcuts** | Global command to open popup. Shortcuts for: new prompt, last workflow, copy, inject. | `manifest.json` commands, `background.js` | 1 day |

### P2 - Medium Priority

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Template versioning** | Version history for templates. One-click rollback. | Storage schema update, `popup.js` | 1-2 days |
| **Configurable data files** | Fetch `discovery-areas.json` and `intelligence-types.json` from remote with versioning. Update without extension release. | `popup.js`, hosting for JSON files | 1 day |
| **Session restoration** | Detect logged-out state on AI provider pages. Show inline nudge with login deep link. | `content-scripts/inject-sdk.js` | 1 day |

**Deliverables:**
- [ ] PDF export with professional formatting
- [ ] Batch processing for up to 50 targets
- [ ] 3-axis prompt customization (depth/formality/risk)
- [ ] Cmd/Ctrl+Shift+O opens BrightScope

---

## Phase 3: Team & Growth (Week 7-8)
*Features for team adoption and scaling*

### P2 - Team Features

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Shared templates** | Sync templates via GitHub Gist or Google Drive. Permissioned sharing links. | New `sync-provider.js`, OAuth flows | 3-5 days |
| **Team tier licensing** | Multi-seat licenses. Admin dashboard for seat management. | License API update, new admin UI | 3-5 days |
| **Audit trail** | Log: who generated which prompt, when, for what target. Local storage or webhook export. | Storage schema, `popup.js` | 2 days |

### P2 - UX Polish

| Feature | Description | Files to Modify | Effort |
|---------|-------------|-----------------|--------|
| **Completion checklist** | Show: ✓ target specified, ✓ timeframe set, ✓ 3+ discovery areas, ✓ custom areas added. | `popup.html`, `popup.js` | 0.5 days |
| **Workflow quick-access** | Recent workflows dropdown in main screen. One-click regenerate. | `popup.html`, `popup.js` | 1 day |
| **Dark mode** | System-aware dark theme. | `popup.css` | 0.5 days |

**Deliverables:**
- [ ] Template sharing via Gist
- [ ] Team licenses with 5+ seats
- [ ] Audit log export (CSV/JSON)
- [ ] Dark mode toggle

---

## Phase 4: Advanced (Future)
*Consider after Phases 0-3 complete*

### P3 - Nice to Have

| Feature | Description | Effort | Notes |
|---------|-------------|--------|-------|
| **Visual prompt diff** | Show what changed when toggling discovery areas or sliders. | 2 days | Nice demo, rarely used |
| **One-click follow-ups** | Generate contextual follow-up questions from AI responses. | 3-5 days | Complex, fragile |
| **Undo stack** | Ctrl+Z for prompt edits and configuration changes. | 2 days | Low demand |
| **Telemetry (anonymous)** | Privacy-safe event pings for feature usage. | 2 days | Wait for scale |

### P4 - Defer or Skip

| Feature | Reason to Skip |
|---------|----------------|
| **Enrichment lookups** | Scope creep. Changes product category. Maintenance burden. |
| **Live scraping helpers** | Fragile (page structures change). Different product. |
| **IOC utilities** | Too niche. Only 1/16 types would use. Build separately if needed. |
| **Redaction layer** | Complex edge cases. Legal liability. Better as user responsibility. |
| **Ethical guidelines overlay** | Annoying UX. One-time onboarding note is sufficient. |
| **Inline quality score** | Gimmicky. Users game metrics instead of thinking. Use checklist instead. |

---

## Implementation Order Summary

```
Week 1-2: Foundation
├── Server-side licensing API
├── E2E test suite (Puppeteer)
└── Content script SDK refactor

Week 3-4: Core Value
├── Provider-aware prompt formatting
├── Robust injection with retry
├── Markdown export
├── Saved workflows + JSON import/export
└── Source packs (5+ presets)

Week 5-6: Premium Features
├── PDF export
├── Multi-target batching
├── Smart prompt composer (sliders)
└── Keyboard shortcuts

Week 7-8: Team & Polish
├── Shared templates (Gist/Drive)
├── Team licensing
├── Audit trail
├── Completion checklist
└── Dark mode
```

---

## Tier Mapping

| Feature | Free | Pro ($9.99/mo) | Team ($29.99/mo) |
|---------|------|----------------|------------------|
| 16 intelligence types | ✓ | ✓ | ✓ |
| 5 templates | ✓ | - | - |
| 500 templates | - | ✓ | ✓ |
| Copy to clipboard | ✓ | ✓ | ✓ |
| Open in AI providers | ✓ | ✓ | ✓ |
| Auto-inject | - | ✓ | ✓ |
| Source packs | 2 | All | All |
| Prompt composer sliders | - | ✓ | ✓ |
| Multi-target batching | - | ✓ | ✓ |
| Markdown export | ✓ | ✓ | ✓ |
| PDF export | - | ✓ | ✓ |
| Prompt history (100) | - | ✓ | ✓ |
| Keyboard shortcuts | - | ✓ | ✓ |
| Shared templates | - | - | ✓ |
| Team seats | - | - | 5+ |
| Audit trail | - | - | ✓ |
| Priority support | - | ✓ | ✓ |

---

## Quick Wins (Can Ship This Week)

1. **Provider-aware formatting** - Update `prompt-templates.json` with 4 variants
2. **Source packs** - Add `data/source-packs.json` with 5 presets
3. **Completion checklist** - Simple UI addition to prompt modal
4. **Markdown export** - Download button in prompt modal
5. **Robust injection** - Add retry logic to inject SDK

---

## Technical Debt to Address

- [ ] Replace 4 content scripts with unified SDK
- [ ] Move inline styles in `popup.html` to `popup.css`
- [ ] Add JSDoc comments to `popup.js` functions
- [ ] Create proper error boundaries (try/catch with user feedback)
- [ ] Implement proper loading states for async operations

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Extension installs | 1,000 | Chrome Web Store |
| Premium conversion | 5% | License activations / installs |
| Injection success rate | >95% | E2E test pass rate |
| Prompt generation time | <500ms | Performance monitoring |
| Template saves per user | >3 | Storage analytics |

---

## Next Steps

1. **Decide Phase 0 approach**: Self-hosted API vs Cloudflare Workers vs Supabase?
2. **Set up test infrastructure**: Choose Puppeteer vs Playwright
3. **Design license API schema**: Endpoints, token format, grace periods
4. **Create source packs content**: Research industry-specific discovery areas

---

*This roadmap is a living document. Update priorities based on user feedback and usage data.*
