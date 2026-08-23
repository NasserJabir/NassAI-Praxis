---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-006 (opencode)"
classification: "internal"
type: "reuse-report"
status: "observed"
experiment: "evidence/cross-agent-continuity-001/"
skill_applied: "skills/verification/evidence-scope-validation/SKILL.md"
scope: "cross-harness-not-cross-model"
promotion_status: "report_only_not_a_skill_not_a_candidate_not_a_proposal"
---

# Cross-Agent Continuity 001 Reuse Report — Observed Cross-Harness Continuity Only, Not Cross-Model

This report applies the human-approved trial skill **evidence-scope-validation** to state exactly what the project can truthfully claim about Cross-Agent Continuity Experiment 001. Per the skill, evidence is enumerated first, every claim matches that scope, shared infrastructure is disclosed, unsupported generalizations are explicitly excluded, and each exclusion names the next validation step. Headline and body assert the same scope: **one observed instance of cross-harness continuity on a shared model backend — nothing stronger**.

## Skill Source and How It Was Used

| Item | Value |
|---|---|
| Exact path | `skills/verification/evidence-scope-validation/SKILL.md` |
| Authorization | `status: approved` and `skill_creation_authorized: true` in [`trials/evolution-001/review/HUMAN_REVIEW.md`](../review/HUMAN_REVIEW.md); trial-scoped to Evolution 001 |

Application: procedure steps 1–7 were followed in order. Step 1 (enumerate evidence) is the section below and preceded every claim. Steps 2–4 shaped the conclusion and exclusions. Step 5 populated the next-evidence column. Step 6 was executed actively: this session independently recomputed transcript hashes and re-checked session identifiers, policy-path reads, and bridge/backend strings in the raw JSONL records rather than trusting generated metadata alone. Step 7 (headline/body re-read) is recorded at the end. The skill file itself was read-only; it was not modified.

## Evidence Enumeration (Before Any Claim)

What ran, where, on what, how many times, and how runs differ:

| Item | Session 1 | Session 2 |
|---|---|---|
| Fixture | `/home/ubuntu/praxis-cross-agent-trial-001` (isolated copy; original project not writable) | Same fixture |
| Harness | OpenCode CLI `1.18.21` | Pi Coding Agent `0.74.2` (fresh non-interactive `pi -p --mode json`, temporary config and session directory) |
| Model backend | `opencode/big-pickle` | `opencode/big-pickle` via Pi's `opencode-cli` provider bridge |
| Session identifier | `ses_fd6a3e0e6ffeyS7703TaVKEK7q` | `01a02960-1410-7167-81c3-0502a7408293` |
| Action | Created durable semantic decision `memory/semantic/agent-interface-invariance-policy.md` plus `trials/cross-agent-continuity-001/session-001-note.md` | Located and read the exact policy path, explained why semantic project memory outranks a harness adapter, wrote a compliant handoff rule in `session-002-report.md`; left all of `memory/` unchanged |
| Raw transcript | `raw/session-001-opencode.jsonl` | `raw/session-002-pi.jsonl` |

Runs compared: none rerun; this is a single run of a two-session configuration, pre-registered in [`EXPERIMENT.md`](../../../evidence/cross-agent-continuity-001/EXPERIMENT.md) before execution and evaluated in [`EVALUATION.md`](../../../evidence/cross-agent-continuity-001/EVALUATION.md) with all five criteria passing (honesty criterion passes with limitation). A third session — this one — is a fresh OpenCode reuse session on the same backend that consumed the approved skill and this evidence package; it produces this report and adds no new evidence about the experiment itself.

Independent verification performed this session (step 6):

- SHA-256 recomputed and matching the evaluation record exactly: `9421a498…467e2` (Session 1, 53 lines / 228,990 bytes) and `959824c…d5614` (Session 2, 70 lines / 114,599 bytes).
- Both session identifiers found in their respective raw transcripts.
- 25 transcript lines in the Pi record reference `memory/semantic/agent-interface-invariance-policy.md`.
- `opencode-cli` appears 124 times and `opencode/big-pickle` 62 times in the Pi transcript, confirming the shared-backend disclosure from raw events.
- The preserved copy of the policy (`generated/agent-interface-invariance-policy.md`) is byte-identical to the live file in the fixture, and the live policy still exists there.
- The flagged caveat is confirmed present: line 4 of `generated/session-002-report.md` reads `session_agent: opencode`, mislabeling the Pi session.

## 1. Direct Evidence Scope

The direct evidence supports exactly these statements:

- Two **distinct coding-agent harnesses** (OpenCode CLI 1.18.21 and Pi Coding Agent 0.74.2), invoked freshly with no continuation flag, shared conversation, or prior-session identifier, operated on the same durable semantic decision in one isolated fixture.
- The Pi session **found and read the exact semantic source**, correctly identified `memory/semantic/` as the decision's authority over any harness adapter, and **applied the decision** by writing a handoff rule requiring future harnesses to name, read, justify, and consume the semantic source read-only.
- The Pi session **preserved the memory boundary**: its evaluation-recorded sole write target was the report file, and the semantic decision file is unchanged.
- Both harnesses reached the **same `opencode/big-pickle` model backend**; Pi did so through its own provider bridge (`opencode-cli`). This is disclosed shared infrastructure that limits every conclusion below.

## 2. Bounded Conclusion

In **one observed run**, semantic Markdown knowledge created by an OpenCode session was retrieved, understood, and applied by a separately invoked Pi Coding Agent session — **cross-harness continuity, not cross-model continuity** — because both harnesses executed on the same shared `opencode/big-pickle` backend. This is an `observed` result scoped to this fixture, these two fixed prompts, these two harness versions, and this single run. It is not a reusable capability, not a replicated result, and not a generalization about models, providers, agents, or products.

## 3. Claims That Remain Unsupported

Each term below is explicitly excluded from every claim in this report:

| Unsupported claim | Why the evidence cannot support it |
|---|---|
| Model-independent behavior | One backend only (`opencode/big-pickle`) served both sessions. |
| Provider-independent behavior | Pi reached the model through a bridge into the OpenCode provider ecosystem; no independent provider was exercised. |
| Cross-model portability | No second model ever participated. |
| General agent independence / universal result | Two purpose-built sessions, one fixture, one run, one prompt pair. |
| Repeatability / replication | Nothing was rerun; distinct prior experiments (continuity-001, continuity-002) differ in design and are separate observations, not replications of this one. |
| Capability or product benefit | No benchmark comparison, no user-facing system, no improvement measurement exists in this package. |
| `session_agent: opencode` frontmatter as Session 2 provenance | Generated metadata is wrong, remains uncorrected, and is barred from use; the audited invocation and raw Pi transcript are the authoritative harness record. |
| Any change to architecture, schema, runtime, CLI requirements, memory design, personas, or freeze rules | None occurred and none were authorized by this experiment. |

## 4. Next Evidence Required to Strengthen Those Claims

For each excluded term, the validation step that would legitimately support it:

1. **Model/provider independence:** rerun the same fixture with a second harness backed by a *different* provider/model (for example, an authorized Codex or Claude Code session), with that harness explicitly self-identifying in its generated report and the identity verified against raw runner metadata rather than generated frontmatter.
2. **Repeatability:** an identical rerun of the current two-session configuration producing equivalent results.
3. **Replication across designs:** a comparable retrieval-and-reuse test repeated under varied prompts/fixtures before any pattern-level generalization is attempted.
4. **Understanding robustness (negative control):** run Session 2's prompt where the semantic source is absent or superseded by an adapter-only setup, and require the session to fail honestly rather than fabricate authority.
5. **Provenance hygiene:** corrected or self-reported harness identity in generated artifacts, checked against transcripts, so future packages do not carry misleading metadata forward.

## 5. Provenance Sources

Verified against raw records and hashes this session (not generated metadata alone):

| Source | Path / Identifier |
|---|---|
| Pre-registered design, prompts, criteria | `evidence/cross-agent-continuity-001/EXPERIMENT.md` |
| Evaluation with per-criterion results, hashes, limitations | `evidence/cross-agent-continuity-001/EVALUATION.md` |
| Preserved Session 1 semantic decision (byte-identical to live copy) | `evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md` |
| Session 1 note | `evidence/cross-agent-continuity-001/generated/session-001-note.md` |
| Session 2 report (contains barred `session_agent: opencode` frontmatter) | `evidence/cross-agent-continuity-001/generated/session-002-report.md` |
| Raw transcript, Session 1 — OpenCode, `ses_fd6a3e0e6ffeyS7703TaVKEK7q`, SHA-256 `9421a498b1d94fdb1625f9d10850749e0adf1ce8b937c0fb8b3602a57e2467e2` | `evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl` |
| Raw transcript, Session 2 — Pi, `01a02960-1410-7167-81c3-0502a7408293`, SHA-256 `959824c6cdf3cf10ca74be5c65836eb1d47b7e61b1e7bf04e8cc9e9b1d3d5614` | `evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl` |
| Experience note derived from this package | `trials/evolution-001/experiences/experience-003.md` |
| Approved skill applied by this report | `skills/verification/evidence-scope-validation/SKILL.md` |
| Human approval authorizing that skill | `trials/evolution-001/review/HUMAN_REVIEW.md` |
| This session's raw transcript | `trials/evolution-001/raw/session-006-reuse.jsonl` |

## Headline/Body Scope Check (Skill Step 7)

The headline states "observed cross-harness continuity only, not cross-model." The body enumerates the evidence first, discloses the shared `opencode/big-pickle` backend wherever continuity is asserted, bounds the conclusion to one run in one fixture, excludes every generalizing term with reasons, names the concrete next validation for each exclusion, and grounds provenance in recomputed hashes and raw session identifiers. The headline asserts nothing the body does not disclaim or support. This session modified only the file listed below; the skill, `memory/`, `evolve/`, candidates, proposals, evaluations, and `HUMAN_REVIEW.md` were left untouched.

## Files Changed

- `trials/evolution-001/reuse/session-006-reuse-report.md` (created — this report)
