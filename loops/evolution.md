---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "evolution-loop"
---

# Evolution Loop

**Purpose:** Improve Praxis capabilities from repeated, validated patterns while preserving human control.

```text
Repeated Pattern
        ↓
Evaluate Evidence
        ↓
Generalize
        ↓
Candidate Skill / Agent / Persona refinement
        ↓
Validate
        ↓
Promote after human review
```

## Evidence Policy

```text
Repeated Pattern
+
Successful Outcomes
+
Evaluation Evidence
+
Clear Generalization
=
Evolution Candidate
```

The initial thresholds are configured in `praxis.config.md`: repetition threshold 3, minimum score 30/33, and human review required. A single action never creates a permanent skill or agent. Automatic promotion remains disabled.

## Candidate Record

```markdown
## Candidate: <name>

- Pattern: [Pattern](../evolve/refine/patterns.md)
- Evidence: <links to experiences and evaluations>
- Generalization: <why this applies beyond one task>
- Proposed target: skill | agent | persona refinement
- Risk and boundaries: <what it must not do>
- Review status: pending human review
```

A rejected candidate remains evidence, not active capability. A promoted candidate must update the canonical skill, agent, or persona and record the decision in `evolve/log.md`.
