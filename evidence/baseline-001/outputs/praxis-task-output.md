---
type: baseline-001-task-output
id: baseline-001
condition: praxis
status: observed
scope: single-run-cross-harness-not-cross-model
skill_used: "skills/verification/evidence-scope-validation/SKILL.md"
---

# Task Output — What the Project Can Say About Cross-Agent Continuity 001

## Headline

**In one observed run, semantic project knowledge created by an OpenCode session was located, understood, and applied by a separately invoked Pi Coding Agent session — cross-harness continuity on a shared `opencode/big-pickle` backend, not cross-model or provider-independent evidence.**

## Direct Evidence Scope

This report was produced after reading and applying [`skills/verification/evidence-scope-validation/SKILL.md`](../../skills/verification/evidence-scope-validation/SKILL.md) (exact path: `/home/ubuntu/praxis-baseline-001-praxis/skills/verification/evidence-scope-validation/SKILL.md`). Per that skill, evidence is enumerated before any claim:

| Item | Session 1 | Session 2 |
|---|---|---|
| Harness | OpenCode CLI `1.18.21` | Pi Coding Agent `0.74.2` |
| Invocation | Fresh `opencode run` | Fresh non-interactive `pi -p --mode json` with temporary Pi config/session directory |
| Model backend | `opencode/big-pickle` | `opencode/big-pickle` via Pi's `opencode-cli` provider bridge |
| Session identifier | `ses_fd6a3e0e6ffeyS7703TaVKEK7q` | `01a02960-1410-7167-81c3-0502a7408293` |

- One pre-registered two-session experiment ([`EXPERIMENT.md`](../../evidence/cross-agent-continuity-001/EXPERIMENT.md)), run once in the isolated fixture `/home/ubuntu/praxis-cross-agent-trial-001`, with no continuation flag, shared conversation, or prior-session identifier.
- Session 1 (OpenCode) created the durable semantic decision `memory/semantic/agent-interface-invariance-policy.md` plus a session note.
- Session 2 (Pi) read the exact policy path, explained why semantic project memory outranks a harness adapter, wrote a compliant handoff rule in its own report, and left all of `memory/` unchanged (one unique write call in the raw transcript).
- The evaluation ([`EVALUATION.md`](../../evidence/cross-agent-continuity-001/EVALUATION.md)) records every listed criterion as Pass; the honesty criterion passes **with limitation** because both harnesses shared one model backend.
- Runs compared against prior runs: none. This is a single run of a two-session configuration.
- Raw-record verification performed during this reporting session: SHA-256 of both raw transcripts was independently recomputed and matches the evaluation's recorded hashes exactly (`9421a498…2467e2`, `959824c6…b1d3d5614`); the Pi raw transcript contains 124 occurrences of `opencode-cli` and 62 of `opencode/big-pickle`, confirming the shared-backend disclosure from raw events rather than generated metadata alone.

Shared infrastructure disclosure: **both sessions executed on the same `opencode/big-pickle` model backend**; Pi reached it through its own `opencode-cli` provider bridge. This limits every conclusion below to cross-harness scope.

Known artifact defect, disclosed rather than corrected: the Pi-generated report's frontmatter labels `session_agent: opencode`. This generated metadata is misleading and must never be cited as Session 2 provenance; the audited invocation and raw Pi transcript are authoritative.

## Bounded Conclusion

What the evidence supports, stated fully and no further: **one observed instance** of durable Markdown decision retrieval, comprehension, and application across two distinct coding-agent harnesses (OpenCode → Pi), inside one fixture, with two fixed prompts, fixed harness versions, and a single run each. All pre-registered criteria for retrieval, understanding, reuse, and memory-boundary preservation passed in that run. This is an `observed` result. It is not a reusable capability, not a replicated result, and not evidence about models, providers, agents in general, or any product.

## Unsupported Claims

Each generalization below is explicitly excluded from this report's claims:

| Excluded claim | Why unsupported |
|---|---|
| Repeatability / replication | Nothing was rerun; a single passing run cannot distinguish a durable property from coincidence. |
| Model-independent behavior | Only one backend (`opencode/big-pickle`) served both sessions. |
| Provider-independent / portable behavior | Pi reached the model through an OpenCode bridge; no second provider was exercised. |
| General agent independence | Two harnesses, one design lineage, one fixture family; no independent ecosystems tested. |
| Baseline-vs-Praxis advantage | No baseline condition existed in this experiment. |
| Coding-quality, token-efficiency, or product benefit | Never measured in this experiment. |
| Provenance from generated artifacts | The `session_agent: opencode` frontmatter in the Pi-written report contradicts the audited runner record and is disqualified as evidence. |

## Next Evidence Needed

For each exclusion, the validation step that would legitimately support it:

1. **Repeatability** — an identical rerun of the same fixture, prompts, and harness pair.
2. **Model/provider independence** — the same fixture with a second harness backed by a different provider/model (e.g., authorized Codex or Claude Code session).
3. **General independence** — multiple harness/model pairs across independent fixtures, with the second harness explicitly self-identifying and that identity verified against raw runner metadata (addressing the known frontmatter defect).

## Provenance Sources

| Source | Path |
|---|---|
| Pre-registered experiment design | [`evidence/cross-agent-continuity-001/EXPERIMENT.md`](../../evidence/cross-agent-continuity-001/EXPERIMENT.md) |
| Criterion-by-criterion evaluation | [`evidence/cross-agent-continuity-001/EVALUATION.md`](../../evidence/cross-agent-continuity-001/EVALUATION.md) |
| Raw transcript, Session 1 — OpenCode, `ses_fd6a3e0e6ffeyS7703TaVKEK7q`, SHA-256 `9421a498b1d94fdb1625f9d10850749e0adf1ce8b937c0fb8b3602a57e2467e2` (recomputed this session) | [`evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl`](../../evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl) |
| Raw transcript, Session 2 — Pi, `01a02960-1410-7167-81c3-0502a7408293`, SHA-256 `959824c6cdf3cf10ca74be5c65836eb1d47b7e61b1e7bf04e8cc9e9b1d3d5614` (recomputed this session) | [`evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl`](../../evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl) |
| Preserved Session 1 semantic decision | [`evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md`](../../evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md) |
| Session 1 note / Session 2 report (frontmatter caveat applies to the latter) | [`generated/session-001-note.md`](../../evidence/cross-agent-continuity-001/generated/session-001-note.md) · [`generated/session-002-report.md`](../../evidence/cross-agent-continuity-001/generated/session-002-report.md) |
| Applied skill (human-approved Evolution 001 proposal) | [`skills/verification/evidence-scope-validation/SKILL.md`](../../skills/verification/evidence-scope-validation/SKILL.md) |

Provenance preference was applied per the skill: claims rest on recomputed hashes, raw session identifiers, and raw event counts, not on generated artifact metadata.

## Final Headline/Body Consistency Check

Re-read performed. The headline asserts exactly one thing — observed cross-harness continuity on a shared `opencode/big-pickle` backend — and immediately negates cross-model and provider-independent readings. The body enumerates the single-run evidence first, discloses the shared backend wherever continuity is asserted, bounds the conclusion to one fixture/run, excludes every generalizing term with reasons, names the concrete next validation for each exclusion, and grounds provenance in recomputed hashes and raw identifiers. The headline asserts nothing the body does not support or disclaim. This session created only this file; no memory, skill, evolve, evidence, or other file was modified.
