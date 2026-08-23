---
type: continuity-experiment-evaluation
id: continuity-002
status: reviewed
result: observed
agent: opencode
model: opencode/big-pickle
opencode_version: 1.18.21
scope: isolated-copy
---

# Continuity Experiment 002 — Evaluation

## Conclusion

The controlled experiment **passed its defined continuity criteria**. Session 1 created a semantic policy about the permitted scope of a single-run validation claim. A separately invoked Session 2 located the exact policy source, explained why it governed the task, constrained the report to a narrow observed outcome, named the needed replication, and left `memory/` unchanged.

This is a second **observed** continuity result using a policy that differs from Continuity 001. Taken together, Continuity 001 and 002 provide two controlled OpenCode + Big Pickle observations of Markdown decision retrieval and reuse. They do **not** establish repeatability in the strict experimental sense, because Continuity 002 tested a different decision and task rather than an identical rerun; nor do they establish cross-agent portability, baseline advantage, or general coding-quality benefit.

## Execution Record

| Item | Session 1 | Session 2 |
|---|---|---|
| Invocation | Fresh `opencode run`; no continuation flag | Fresh `opencode run`; no continuation flag |
| OpenCode session ID | `ses_fd6bc1d6affeKCp8hRZk8GPE32` | `ses_fd6b8cfe7ffe6GWuOzqvpjwggn` |
| Model | `opencode/big-pickle` | `opencode/big-pickle` |
| Final token record | 21,807 total; 716 input; 412 output; 199 reasoning; 20,480 cache-read | 25,859 total; 367 input; 358 output; 46 reasoning; 25,088 cache-read |
| Raw transcript | [`raw/session-001.jsonl`](raw/session-001.jsonl) | [`raw/session-002.jsonl`](raw/session-002.jsonl) |

The session identifiers differ, each invocation was new, and no continuation flag or prior session identifier was passed to the second invocation. The test therefore evaluates project-file continuity, rather than conversational context reuse.

## Criterion-by-Criterion Result

| Criterion from [`EXPERIMENT.md`](EXPERIMENT.md) | Result | Direct evidence |
|---|---|---|
| Session 1 records a distinct semantic decision | Pass | [`generated/evidence-scope-policy.md`](generated/evidence-scope-policy.md) preserves the Session 1-created source, and [`generated/session-001-note.md`](generated/session-001-note.md) identifies the decision and changed files. |
| Session 2 finds the source | Pass | The Session 2 raw transcript contains nine references to `memory/semantic/evidence-scope-policy.md` and reports read-tool activity; [`generated/session-002-report.md`](generated/session-002-report.md) names the exact source. |
| Session 2 understands the policy | Pass | The report limits its claim to a single controlled agent/model environment and explicitly rules out repeatability, cross-agent portability, universal compatibility, and general product-benefit conclusions. |
| Session 2 reuses the policy | Pass | The report identifies independent-session replication, cross-agent comparison, and multi-model replication as the necessary next evidence. |
| Session 2 preserves the memory boundary | Pass | Session 2 created only its report. A recursive comparison against the original Praxis `memory/` directory shows only the Session 1-created policy file; no other memory file differs. |

> The later session did not merely identify a file. It used that file to constrain the strength of its own claims and to define the appropriate next validation steps.

## Artifact Integrity

| Raw artifact | Lines | Bytes | SHA-256 |
|---|---:|---:|---|
| `raw/session-001.jsonl` | 29 | 35,345 | `5ac36b60ac5a04468b73175f8b2c7852db39b7c52af09cd948da0d418a035ee7` |
| `raw/session-002.jsonl` | 53 | 70,852 | `11e312adc8e6a332eef91fa4e7f578fa703e373596ab73ee1141504c72af212b` |

## Boundaries and Limitations

The evidence remains deliberately bounded to this isolated fixture, the `opencode/big-pickle` model, the prepared OpenCode integration, and two test prompts. It shows two distinct observed examples of cross-session semantic-decision retrieval and application; it does not substitute for an identical replication study. No secrets, credentials, personal data, or confidential client material were included in prompts or artifacts. The original Praxis memory directory was not edited by either session.
