---
type: cross-agent-continuity-evaluation
id: cross-agent-continuity-001
status: reviewed
result: observed
scope: cross-harness-not-cross-model
session_1_harness: opencode
session_2_harness: pi-coding-agent
shared_model_backend: opencode/big-pickle
---

# Cross-Agent Continuity Experiment 001 — Evaluation

## Conclusion

The experiment passed its defined retrieval, understanding, reuse, and memory-boundary criteria. An **OpenCode** session created a semantic Markdown decision, then a separately invoked **Pi Coding Agent** session read the exact source and generated a handoff rule that applied it without changing `memory/`.

This is **observed cross-harness continuity evidence**. It shows project-memory retrieval and reuse across two different coding-agent harnesses: OpenCode and Pi. It is **not** cross-model or provider-independent evidence, because Pi used the `opencode-pi` bridge and the same `opencode/big-pickle` model backend. It therefore must not be described as general agent independence, cross-model portability, or a universal result.

## Execution Record

| Item | Session 1 | Session 2 |
|---|---|---|
| Coding-agent harness | OpenCode CLI `1.18.21` | Pi Coding Agent `0.74.2` |
| Invocation | Fresh `opencode run` | Fresh `pi -p --mode json` invocation with temporary Pi configuration and session directory |
| Model backend | `opencode/big-pickle` | `opencode/big-pickle`, through Pi's `opencode-cli` provider bridge |
| Session identifier | `ses_fd6a3e0e6ffeyS7703TaVKEK7q` | `01a02960-1410-7167-81c3-0502a7408293` |
| Raw transcript | [`raw/session-001-opencode.jsonl`](raw/session-001-opencode.jsonl) | [`raw/session-002-pi.jsonl`](raw/session-002-pi.jsonl) |

The different clients, commands, raw event formats, session identifiers, and temporary Pi session state establish harness separation. The shared model backend is disclosed because it limits the conclusion.

## Criterion-by-Criterion Result

| Criterion from [`EXPERIMENT.md`](EXPERIMENT.md) | Result | Direct evidence |
|---|---|---|
| OpenCode records a distinct semantic decision | Pass | [`generated/agent-interface-invariance-policy.md`](generated/agent-interface-invariance-policy.md) preserves the Session 1-created source, and [`generated/session-001-note.md`](generated/session-001-note.md) records the source and changed files. |
| Pi finds the source | Pass | The raw Pi transcript records reads of `memory/semantic/agent-interface-invariance-policy.md`; [`generated/session-002-report.md`](generated/session-002-report.md) names the same exact path. |
| Pi understands the decision | Pass | The report explains why `memory/semantic/` is the durable authority for the decision and why an adapter may point to it but cannot replace it. |
| Pi reuses the decision | Pass | The report writes a handoff rule requiring future harnesses to read, name, explain, and consume the semantic source read-only. |
| Pi preserves the memory boundary | Pass | The raw Pi transcript has one unique write call, targeting only `trials/cross-agent-continuity-001/session-002-report.md`; recursive memory comparison shows only the Session 1-created policy file differs from the original fixture source. |
| Harness separation is stated honestly | Pass with limitation | The evaluation records OpenCode and Pi as distinct harnesses, but both used the Big Pickle backend. The result is cross-harness only. |

## Artifact Caveat

The Pi-generated report frontmatter labels `session_agent: opencode`. This generated metadata is **not corrected** and must not be used as provenance for the Session 2 harness. The audited invocation and the Pi raw transcript identify the Session 2 harness as Pi; its model-provider events identify `opencode-cli` and `opencode/big-pickle` as the backend. Future trials should require the second harness to report its own harness identity explicitly and verify it against raw runner metadata.

## Artifact Integrity

| Raw artifact | Lines | Bytes | SHA-256 |
|---|---:|---:|---|
| `raw/session-001-opencode.jsonl` | 53 | 228,990 | `9421a498b1d94fdb1625f9d10850749e0adf1ce8b937c0fb8b3602a57e2467e2` |
| `raw/session-002-pi.jsonl` | 70 | 114,599 | `959824c6cdf3cf10ca74be5c65836eb1d47b7e61b1e7bf04e8cc9e9b1d3d5614` |

## Boundaries and Next Evidence

The test does not prove that different models, providers, or fully independent agent ecosystems will behave the same way. The next stronger test should run the same fixture with a second harness backed by a different provider/model, such as an authorized Codex or Claude Code session, and should include explicit self-identification of the session harness in the second agent's report. No architecture, schema, runtime, CLI requirement, memory design, persona, or Architecture Freeze rule was changed by this experiment.
