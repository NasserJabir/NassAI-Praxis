---
type: continuity-experiment-evaluation
status: reviewed
result: observed
agent: opencode
model: opencode/big-pickle
opencode_version: 1.18.21
scope: isolated-copy
---

# Continuity Experiment 001 — Evaluation

## Conclusion

The controlled experiment **passed its defined continuity criteria**. A first OpenCode session created a durable semantic decision, and a separately invoked second session located the exact Markdown source, explained the rule, applied `not_run` to an unexecuted task, and left `memory/` unchanged. This is **observed evidence for one controlled OpenCode + Big Pickle continuity run**. It is not evidence of a matched baseline comparison, a performance improvement, or universal portability across agents.

## Execution Record

| Item | Session 1 | Session 2 |
|---|---|---|
| Invocation | Fresh `opencode run`; no continuation flag | Fresh `opencode run`; no continuation flag |
| OpenCode session ID | `ses_fd6cd1775ffelRFJxqyZsfGmgJ` | `ses_fd6c9effdffeFIziA9JrcI2xc4` |
| Model | `opencode/big-pickle` | `opencode/big-pickle` |
| Final token record | 20,086 total; 362 input; 263 output; 69 reasoning; 19,392 cache-read | 31,633 total; 1,663 input; 439 output; 91 reasoning; 29,440 cache-read |
| Raw transcript | [`raw/session-001.jsonl`](raw/session-001.jsonl) | [`raw/session-002.jsonl`](raw/session-002.jsonl) |

The distinct session identifiers, separate invocations, and absence of `--continue` establish that the second prompt did not reuse the first OpenCode conversation. Both sessions used the same isolated project fixture, as required for testing project-owned Markdown continuity.

## Criterion-by-Criterion Result

| Criterion from [`EXPERIMENT.md`](EXPERIMENT.md) | Result | Direct evidence |
|---|---|---|
| Session 1 records the decision in semantic memory | Pass | [`generated/continuity-status-policy.md`](generated/continuity-status-policy.md) preserves the Session 1-created source, and [`generated/session-001-note.md`](generated/session-001-note.md) names the source and changes. |
| Session 2 finds the source | Pass | The raw Session 2 log contains six references to `memory/semantic/continuity-status-policy.md` and records read-tool activity; [`generated/session-002-report.md`](generated/session-002-report.md) names the exact path. |
| Session 2 understands the policy | Pass | The report explains that an unexecuted task cannot be claimed as a success or failure. |
| Session 2 reuses the policy | Pass | The report applies **`Status: not_run`** to its assigned unexecuted behavioral task. |
| Session 2 preserves the memory boundary | Pass | The Session 2 report is the sole Session 2 output artifact. A recursive comparison against the pre-trial Praxis `memory/` directory shows only the Session 1-created semantic policy file; no additional memory file differs. |

> Session 2 explicitly stated that it read `memory/semantic/continuity-status-policy.md` before applying the rule, and its report records `Status: not_run` rather than a fabricated success or failure claim.

## Artifact Integrity

| Raw artifact | Lines | Bytes | SHA-256 |
|---|---:|---:|---|
| `raw/session-001.jsonl` | 30 | 34,532 | `7bb87ebac3d90c8ae4b3572a741f18b36d340df67a0d297f6633e9c676104736` |
| `raw/session-002.jsonl` | 24 | 109,973 | `2f685496ce5bc82c9dd22d9d94d6fe08e72c43d4d56b5daf84c50a5e48701819` |

## Boundaries and Limitations

The evidence is intentionally narrow. It demonstrates retrieval and reuse of one semantic policy in one isolated fixture with one model. It does not measure baseline-versus-Praxis differences, coding quality, token savings, long-term retention, or behavior by the other supported agents. The fixture's OpenCode entry instructions may have influenced what the model inspected; that is compatible with this test, which tests a documented Markdown-native integration, but it limits any claim beyond the defined environment.

No credentials, personal data, or confidential project data were placed in the prompts or artifacts. The original `/home/ubuntu/NassAI-Praxis` memory directory was not edited by either agent session.
