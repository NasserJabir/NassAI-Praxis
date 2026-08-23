---
type: baseline-task-output
trial: baseline-001
subject: cross-agent-continuity-001
date: "2026-08-22"
---

# Cross-Agent Continuity 001 — Truthful Summary

## Headline

One observed cross-harness handoff: an **OpenCode** session created a semantic Markdown decision and a separately invoked **Pi Coding Agent** session located, explained, and applied it read-only — with both sessions on the same `opencode/big-pickle` backend, so the result is bounded to cross-harness reuse and does not show cross-model or provider-independent continuity.

## Direct Evidence Scope

Covers only the archived record in `evidence/cross-agent-continuity-001/`, documenting two sessions run in an isolated project copy (`/home/ubuntu/praxis-cross-agent-trial-001`) with no continuation flag or shared conversation ([EXPERIMENT.md](../../evidence/cross-agent-continuity-001/EXPERIMENT.md)).

Verified directly against raw artifacts in this repository:

| Check | Method | Result |
|---|---|---|
| Transcript integrity | Recomputed SHA-256 / lines / bytes of both raw files | Match [EVALUATION.md](../../evidence/cross-agent-continuity-001/EVALUATION.md): `9421a498…67e2` (53 lines, 228,990 bytes) and `959824c6…d614` (70 lines, 114,599 bytes) |
| Session 1 created the decision | Parsed write calls in [raw/session-001-opencode.jsonl](../../evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl) | Exactly two writes: `memory/semantic/agent-interface-invariance-policy.md` and the session note; session ID `ses_fd6a3e0e6ffeyS7703TaVKEK7q`; `big-pickle` present as backend |
| Session 2 retrieved the decision | Parsed read calls in [raw/session-002-pi.jsonl](../../evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl) | Read of `memory/semantic/agent-interface-invariance-policy.md` recorded; session ID `01a02960-1410-7167-81c3-0502a7408293` |
| Session 2 respected boundary | Extracted all write targets from same transcript | One unique write: `trials/cross-agent-continuity-001/session-002-report.md`; zero `memory/` writes |
| Shared backend disclosed | Searched Session 2 provider events | `opencode-cli` bridge and `opencode/big-pickle` both appear |

Recorded in the experiment docs but not independently re-verifiable from inside this repository: harness versions (OpenCode CLI `1.18.21`, Pi `0.74.2`), fresh-invocation isolation setup, and the recursive `memory/` comparison against the original fixture showing only the Session 1 policy file differs ([EVALUATION.md](../../evidence/cross-agent-continuity-001/EVALUATION.md), [generated/session-002-report.md](../../evidence/cross-agent-continuity-001/generated/session-002-report.md)).

## Bounded Conclusion

Within this scope the project can say: **in one observed run, a durable semantic decision authored by OpenCode under `memory/semantic/` was retrieved and correctly applied by a distinct Pi session, without modifying project memory, over a shared Big Pickle backend.** The evaluation marks all defined criteria — found, understood, reused, memory boundary preserved, honest separation — as passing, status `observed`, scope `cross-harness-not-cross-model`. This is evidence that project-memory continuity survives a change of coding-agent *harness*. It is not evidence about models or providers.

## Unsupported Claims

1. **Cross-model / provider independence** — both sessions used one `opencode/big-pickle` backend; the model was not a tested variable.
2. **Universal agent independence** ("any agent can continue any agent's work") — only two harnesses, once each.
3. **Repeatability/reliability** — a single run on one fixture cannot establish consistent retrieval or correct application.
4. **Agent self-reported harness identity** — Pi's generated report frontmatter mislabels `session_agent: opencode`; per the recorded caveat this metadata is uncorrected and unusable as harness provenance, so attribution rests on runner invocation and transcript inspection.

## Next Evidence Needed

For each unsupported claim:

1. **Cross-model:** rerun the identical fixture with a second harness backed by a different provider/model (the evaluation suggests an authorized Codex or Claude Code session).
2. **Generality:** repeat the pair test across additional harness combinations beyond OpenCode/Pi.
3. **Reliability:** multiple independent runs of the same protocol before treating retrieval-and-reuse as dependable behavior.
4. **Identity attribution:** require the second harness to self-identify explicitly in its output and verify that claim against raw runner metadata.

## Provenance Sources

- `evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl` — SHA-256 `9421a498b1d94fdb1625f9d10850749e0adf1ce8b937c0fb8b3602a57e2467e2`
- `evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl` — SHA-256 `959824c6cdf3cf10ca74be5c65836eb1d47b7e61b1e7bf04e8cc9e9b1d3d5614`
- `evidence/cross-agent-continuity-001/EVALUATION.md` — criterion results, artifact caveat, hashes
- `evidence/cross-agent-continuity-001/EXPERIMENT.md` — protocol, prompts, pass criteria, scope boundary
- `evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md` — Session 1-created semantic decision (preserved source)
- `evidence/cross-agent-continuity-001/generated/session-001-note.md` — Session 1 self-report
- `evidence/cross-agent-continuity-001/generated/session-002-report.md` — Pi-generated report (frontmatter harness label unreliable; see Unsupported Claim 4)
- `trials/baseline-001/EXPERIMENT.md` — this task's acceptance criteria

Raw transcripts were preferred over generated self-reports wherever both existed.

## Headline/Body Consistency Check

Checked against the headline's four assertions:

| Headline assertion | Body support | Consistent |
|---|---|---|
| "One observed" run | Single-run scope stated in Direct Evidence Scope; Bounded Conclusion says "one observed run"; Unsupported Claim 3 names repeatability as unproven | Yes |
| OpenCode created the decision | Verified Session 1 writes in Direct Evidence Scope table | Yes |
| Pi retrieved and applied it | Verified Session 2 read of exact source + sole write target; Bounded Conclusion | Yes |
| Shared `opencode/big-pickle` backend limits scope | Disclosed in headline, Direct Evidence Scope, and Bounded Conclusion; Unsupported Claim 1 excludes cross-model readings | Yes |

No headline statement exceeds what the body evidences. The headline claims a bounded cross-harness result only.
