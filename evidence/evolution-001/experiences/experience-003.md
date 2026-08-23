---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "session-003 (opencode)"
classification: "internal"
type: "experience"
status: "observed"
experience_id: "evolution-001-experience-003"
source_evidence: "evidence/cross-agent-continuity-001/"
promotion_status: "not_a_skill_not_a_candidate_not_a_proposal"
---

# Experience 003 — Reporting OpenCode-to-Pi Cross-Harness Evidence With a Shared Big Pickle Backend Without Misrepresenting It as Model-Independent or Provider-Independent

## Problem

Cross-Agent Continuity Experiment 001 produced the first passing result in which two **distinct coding-agent harnesses** — an OpenCode CLI session and a separately invoked Pi Coding Agent session — each handled the same durable semantic decision across a fresh boundary. The concrete reporting risk was mischaracterization at the moment of summarizing: because Pi reached its model through its own provider bridge (`opencode-cli`) onto the **same** `opencode/big-pickle` backend used by the OpenCode session, the observation proves cross-harness retrieval and reuse of Markdown project memory, but it does **not** prove model independence, provider independence, cross-model portability, or general agent independence. Any summary that dropped the shared-backend qualifier would claim exactly what the evidence cannot support. Additionally, one generated artifact carried misleading provenance — the Pi-written report's frontmatter labels `session_agent: opencode` — which, if used as provenance, would corrupt the harness attribution itself.

## Action Taken in the Evidence Package

Two sessions ran in the isolated fixture at `/home/ubuntu/praxis-cross-agent-trial-001`, with no continuation flag, shared conversation, or prior-session identifier, and no write access to the original project:

1. **Session 1 — OpenCode CLI 1.18.21**, fresh `opencode run`, model `opencode/big-pickle`, session `ses_fd6a3e0e6ffeyS7703TaVKEK7q`: created the durable semantic decision `memory/semantic/agent-interface-invariance-policy.md` (semantic project decisions are owned by Markdown project memory, not by any agent-specific instruction file or interface; later harnesses must name and read the exact source, explain why it outranks a harness adapter, and consume it read-only), plus `session-001-note.md`.
2. **Session 2 — Pi Coding Agent 0.74.2**, fresh non-interactive `pi -p --mode json` invocation with a temporary Pi configuration and session directory, reaching `opencode/big-pickle` through the `opencode-cli` provider bridge, session `01a02960-1410-7167-81c3-0502a7408293`: located and read the exact policy source before using the decision's vocabulary, explained why `memory/semantic/` is the durable authority over any harness adapter, wrote a handoff rule requiring future harnesses to name, read, justify, and consume the semantic source read-only, and left all of `memory/` unchanged.

The package then evaluated criterion-by-criterion against pre-registered pass criteria, hashed both raw transcripts, recorded the distinct clients, commands, event formats, and session identifiers establishing harness separation, and disclosed the shared model backend as the limiting factor on the conclusion. The evaluation explicitly labeled the result **cross-harness, not cross-model**, flagged the incorrect `session_agent: opencode` frontmatter in the Pi report as uncorrected and unusable as Session 2 provenance, and named the next stronger test: a second harness backed by a different provider/model with explicit harness self-identification verified against raw runner metadata.

## Direct Evidence Paths

| Artifact | Path |
|---|---|
| Pre-registered purpose, controlled boundary, prompts, pass/fail criteria | [`evidence/cross-agent-continuity-001/EXPERIMENT.md`](../../../evidence/cross-agent-continuity-001/EXPERIMENT.md) |
| Evaluation with per-criterion results, artifact caveat, limitations | [`evidence/cross-agent-continuity-001/EVALUATION.md`](../../../evidence/cross-agent-continuity-001/EVALUATION.md) |
| Session 1-created semantic decision source (preserved copy) | [`evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md`](../../../evidence/cross-agent-continuity-001/generated/agent-interface-invariance-policy.md) |
| Session 1 note | [`evidence/cross-agent-continuity-001/generated/session-001-note.md`](../../../evidence/cross-agent-continuity-001/generated/session-001-note.md) |
| Session 2 report with misleading frontmatter (`session_agent: opencode`) | [`evidence/cross-agent-continuity-001/generated/session-002-report.md`](../../../evidence/cross-agent-continuity-001/generated/session-002-report.md) |
| Raw transcript, Session 1 — OpenCode (`ses_fd6a3e0e6ffeyS7703TaVKEK7q`) | [`evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl`](../../../evidence/cross-agent-continuity-001/raw/session-001-opencode.jsonl) |
| Raw transcript, Session 2 — Pi (`01a02960-1410-7167-81c3-0502a7408293`) | [`evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl`](../../../evidence/cross-agent-continuity-001/raw/session-002-pi.jsonl) |
| Pre-session file manifest | [`evidence/cross-agent-continuity-001/pre-session-file-manifest.txt`](../../../evidence/cross-agent-continuity-001/pre-session-file-manifest.txt) |

Verification performed while writing this note: the raw Pi transcript contains 25 references to `memory/semantic/agent-interface-invariance-policy.md`; both raw transcripts carry the distinct session identifiers listed above matching the evaluation's execution record; and `opencode-cli` appears in the Pi transcript's provider events, confirming the shared-backend disclosure.

## Observed Outcome

All five pre-registered criteria passed, with the honesty criterion passing **with limitation**: Session 1 recorded the decision; Session 2 found the exact source, understood why semantic memory outranks a harness adapter, reused the decision in a compliant handoff rule, and preserved the memory boundary; the evaluation identified OpenCode and Pi as distinct harnesses while disclosing their shared Big Pickle backend. This constitutes one **observed instance of cross-harness continuity**: project-memory retrieval and reuse spanning two different coding-agent harnesses. It is bounded by design to that claim.

## Limitation

Both sessions drew on the same `opencode/big-pickle` model backend — Pi via its `opencode-cli` provider bridge — so nothing here shows that different models, different providers, or fully independent agent ecosystems behave the same way. The result may not be described as model-independent, provider-independent, cross-model portable, universal agent independence, or a product benefit. The Pi-generated report's `session_agent: opencode` frontmatter remains uncorrected and must never be cited as Session 2 provenance; the audited invocation and raw Pi transcript are the authoritative harness record. Evidence stays bounded to this isolated fixture, these two fixed prompts, and this single run. No architecture, schema, runtime, CLI requirement, memory design, persona, or Architecture Freeze rule was changed by this experiment.

## Status Statement

This is an **`observed` experience**: a record of what was witnessed in one evidence package, reported strictly within the limits of its direct evidence. It is **not** a reusable skill, **not** a candidate pattern, and **not** a proposal. No artifact under `skills/` is authorized by this note, no pattern has been generalized into a candidate, and no proposal exists on the basis of this note. Under the evolution-001 protocol, any candidate pattern requires three comparable experiences plus explicit human review in `trials/evolution-001/review/HUMAN_REVIEW.md`, which remains `pending`.

## Files Changed

- `trials/evolution-001/experiences/experience-003.md` (created — this note)

No other file was created or modified. `skills/`, `memory/`, `evolve/`, `trials/evolution-001/candidates/`, `proposals/`, `evaluations/`, and `review/HUMAN_REVIEW.md` were left untouched.
