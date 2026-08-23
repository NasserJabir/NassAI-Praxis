---
type: trial-session-execution
trial: persona-validation-001
session: 001
date: "2026-08-22T00:00:00Z"
---

# Session 001 — Execution

## Assessment Question

How should persona-validation-001 preserve raw transcripts while preventing secrets or sensitive values from entering Persona or project memory?

## Findings

1. A raw transcript exists as host-captured evidence at `trials/persona-validation-001/raw/session-001.jsonl`. Its value is forensic — exact inputs, outputs, and ordering. Any in-place modification (redaction, truncation, reformatting) destroys that value and makes tampering undetectable.
2. The project deny-list (`memory/security/deny-list.md`) is defined as a gate applied before a memory write; severity indicates escalation priority, and even warning-severity matches are blocked from memory. It therefore governs promotion, not capture.
3. The protocol's Knowledge Boundary forbids silent promotion of experience into semantic/project memory, and all canonical mutation is proposal-first behind a human gate.

Together these imply a tiered flow rather than a sanitizing proxy.

## Decision (one, scoped)

**Keep the raw tier verbatim and quarantined; make session-authored Markdown the sole promotion path, applying deny-list redaction as an authoring discipline.**

```text
trials/<trial>/raw/*.jsonl   Tier 0 — verbatim evidence, never edited, never quoted
        │
        ▼  (no automated copy path)
sessions/session-NNN/*.md    Tier 1 — authored records; deny-list-checked at write time;
        │                               values replaced by placeholders + location pointers
        ▼  (only via human-approved proposal)
personas/* · memory/*        Tier 2 — canonical layers
```

Rules that follow:

- R1: Raw transcripts are never edited, reformatted, or partially copied. A reviewer who must see a sensitive value consults Tier 0 directly at a recorded line pointer.
- R2: Session records may reference a secret's existence only as a named placeholder plus location ("credential-shaped token near line 12"), never the matched value or a close paraphrase of its shape.
- R3: No process reads Tier 0 to produce Tier 2 content. Promotion to Persona or project memory occurs exclusively through Tier 1 records and the protocol's human gate.
- R4: Deny-list warning severities block Tier 1 authorship too, matching the deny-list's own rule that a warning is still blocked on memory write.

## Rationale

- **Evidence integrity:** verbatim Tier 0 keeps the experiment auditable and reproducible; redaction-in-place would be irreversible and suspicious.
- **Secret hygiene:** because Tier 1 is the only bridge between tiers, and it is authored under the deny-list discipline, no secret reaches Persona/project memory unaudited. Residual exposure reduces to deliberate hand-copying, which review can catch.
- **Policy fit:** uses only mechanisms the trial already permits — isolated Markdown records, proposal-first mutation, human gate. No scanner, hook, lock, or daemon, consistent with the Markdown-only architectural boundary and YAGNI.
- **Fatima-lens check:** the trust boundary sits between capture and promotion; least privilege means Tier 0 grants reviewers access only through pointers; "what must never be persisted" is answered — matched values persist nowhere outside Tier 0.

## Boundaries

In scope: classification of the three tiers; authoring rules for this trial's session records; this session's four files.

Out of scope (explicitly not done): modifying anything under `raw/`; changing `memory/security/deny-list.md`; adding scanning scripts, hooks, locks, or daemons; editing `personas/`, `skills/`, or `evolve/`; creating any pattern, proposal, or skill (Sessions 004–005 concerns, human-gated).
