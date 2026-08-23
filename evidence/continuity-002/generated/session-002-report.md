---
type: continuity-002-session-report
session: 2
date: "2026-08-22"
decision_source: "memory/semantic/evidence-scope-policy.md"
---

# Session 002 Report — Continuity Experiment 002

## Decision Source Located

`memory/semantic/evidence-scope-policy.md`

This is the relevant existing project decision because its frontmatter marks it as a durable
project decision (`decision_type: project-decision`) and its Provenance section states it was
created in Session 1 of this experiment and "applies to all future reports of validation results
in this project." This report describes exactly that: a validation result from a controlled run.
The policy therefore governs the evidence level stated below.

## Credible Evidence Level

Per the policy, a result produced by exactly one controlled run with one agent and one model is
credible **only** as a narrow observed outcome for that exact environment. The honest summary of
the evidence level is: *this happened once, here, under these conditions.* That is the maximum
claim the current evidence supports.

### Claim Scope

The result covers exactly:

- **Agent:** opencode (one agent implementation, one CLI harness invocation per session).
- **Model:** `opencode/big-pickle`.
- **Prompts:** the fixed Session 1 and Session 2 prompts recorded in `trials/continuity-002/EXPERIMENT.md`.
- **Project state:** the isolated project copy at `/home/ubuntu/praxis-continuity-trial-002`
  (`scope: isolated-copy`), including the pre-session file manifest and the seeded memory state;
  the original `/home/ubuntu/NassAI-Praxis` was never available for writes.
- **Record of the run:** `trials/continuity-002/raw/session-001.jsonl`.

### Limitations

The following generalizations are excluded by policy and are not claimed by this report:

- **Repeatability** — no claim that an independent rerun would produce the same result.
- **Cross-agent portability** — no claim that another agent or harness would behave the same way.
- **Universal compatibility** — no claim that other models, versions, or configurations are covered.
- **General product benefit** — no claim that the result evidences a product-level capability or advantage.

## Next Validation Needed

In order of increasing strength, each step must pass before the next is meaningful:

1. **Independent-session replication** — rerun the same prompt set in a fresh `opencode run`
   invocation (no `--continue`, no session identifier reuse) against an identically prepared
   isolated copy. Passing this upgrades the result toward repeatability within the same
   environment only.
2. **Cross-agent comparison** — repeat the same trial boundary with at least one different
   coding agent/harness to test whether the behavior transfers beyond opencode.
3. **Multi-model replication** — repeat with additional model identifiers under the same harness
   to test model coverage.

Until at least step 1 succeeds independently, the existing single-run result remains a narrow
observed outcome and must not be cited as evidence of repeatability, portability, compatibility,
or product benefit.

## Files Changed

- `trials/continuity-002/session-002-report.md` — created (this report)

No files under `memory/` were modified.
