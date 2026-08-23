---
type: evolution-experiment
id: evolution-001
status: prepared
agent: opencode
model: opencode/big-pickle
scope: isolated-copy
evolution_gate: explicit-human-review-required
repetition_threshold: 3
---

# Evolution Experiment 001

## Purpose

Evolution 001 tests the complete declarative Loop Engineering path:

```text
three observed experiences
→ candidate pattern
→ skill proposal + provenance + evaluation
→ explicit human review
→ approved skill
→ later independent reuse
```

The current Praxis configuration requires a repetition threshold of **three**, sets `auto_promote: false`, and requires human review. This protocol preserves those boundaries; it does not lower them to fit the experiment.

## Controlled Boundary

All agent work occurs only in `/home/ubuntu/praxis-evolution-trial-001`, an isolated copy of Praxis. Each agent invocation is fresh and uses no continuation flag or prior session identifier. Until an explicit human approval is written in `trials/evolution-001/review/HUMAN_REVIEW.md`, no session may create, modify, or promote any file under `skills/`.

## Repeated Problem Class

Each experience addresses the same class of problem: **how to report a validation result without claiming more than its direct evidence supports**. The evidence packages differ, so the repeated pattern must be based on a shared, documented decision process rather than copied wording.

| Experience | Source evidence package | Concrete scope-risk to address |
|---|---|---|
| 001 | `evidence/continuity-001/` | One observed continuity run must not become an approved or general result. |
| 002 | `evidence/continuity-002/` | Two distinct decisions must not be misreported as identical repeatability. |
| 003 | `evidence/cross-agent-continuity-001/` | Cross-harness evidence with a shared backend must not be misreported as model-independent. |

## Experience Session Prompt Pattern

Each fresh session receives one source path and must create only its assigned experience note under `trials/evolution-001/experiences/`. The note must contain: problem, action taken, direct evidence paths, observed outcome, limitation, and a statement that it is **not yet a reusable skill**. Sessions must not edit `skills/`, `memory/`, `evolve/`, candidates, proposals, evaluations, or the human-review file.

## Candidate Synthesis Prompt

After all three experience notes exist, a fresh session may read them and create only:

1. `trials/evolution-001/candidates/evidence-scope-validation-pattern.md` with status `candidate`;
2. `trials/evolution-001/proposals/evidence-scope-validation-skill-proposal.md` with provenance, scope, risks, and limitations;
3. `trials/evolution-001/evaluations/evidence-scope-validation-evaluation.md` with an honest score and outstanding conditions.

It must not create or edit a skill and must leave `review/HUMAN_REVIEW.md` unchanged.

## Human Review Gate

Only the human may change `review/HUMAN_REVIEW.md` from `pending` to either `approved` or `rejected`. An approval must explicitly name the proposal path and state whether creation of the proposed trial skill is authorized. No agent-generated text can substitute for this action.

## Approval and Reuse Prompts

If and only if the human approval file is explicitly `approved`, a fresh skill-authoring session may create the proposed skill in the **trial fixture only** at `skills/verification/evidence-scope-validation/SKILL.md`. A final fresh reuse session must then read that approved skill and create a reuse report without modifying the skill or any memory file.

## Pass Criteria

| Requirement | Required evidence |
|---|---|
| Three repeated problems | Three independently generated experience notes with distinct source packages and the same problem class. |
| Independent evidence | Raw transcript for each experience session and direct source links in each note. |
| Candidate pattern | Candidate artifact with three source experiences and explicit non-promotion status. |
| Proposal, provenance, and evaluation | Separate candidate proposal and evaluation artifacts with links, risks, and limitations. |
| Human review | Explicit human-written approval or rejection in `HUMAN_REVIEW.md`. |
| Skill creation or update | Only after approval, a skill created in the trial fixture with proposal provenance. |
| Later reuse | Fresh raw session reads the approved skill and applies it without modifying it. |

## Failure Rules

Mark the experiment failed or incomplete if an agent creates or edits a skill before human approval, fewer than three comparable experiences support the candidate, provenance is missing, approval is inferred rather than explicit, a later session fails to read the approved skill, or agent output is presented as human review.
