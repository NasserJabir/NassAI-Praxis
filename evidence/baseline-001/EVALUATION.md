---
type: before-after-baseline-evaluation
id: baseline-001
status: reviewed
result: observed_inconclusive_for_advantage
baseline_agent: opencode
praxis_agent: opencode
model: opencode/big-pickle
fixture_manifest_sha256: d3f05a7f6a78238136c404c1646e93cd6b14bb0e14c2edfeb5a9b1ef92a4e519
---

# Baseline 001 — Before/After Evaluation

## Conclusion

Both conditions completed the frozen reporting task, cited direct raw evidence, preserved protected boundaries, and produced a correct bounded conclusion. The Praxis-guided condition demonstrably read and named the human-approved trial skill; the baseline condition did not read that skill. This confirms **skill discovery and use** under the Praxis instruction condition, but this single comparison does **not** demonstrate a correctness, rework, context-repetition, token-efficiency, or overall coding-quality advantage.

The correct status is therefore **observed / inconclusive for comparative advantage**. The result is a first transparent Before/After artifact, not a marketing performance claim.

## Condition Control

| Control | Baseline | Praxis |
|---|---|---|
| Source fixture | Matched copy, manifest SHA-256 `d3f05a7f6a78238136c404c1646e93cd6b14bb0e14c2edfeb5a9b1ef92a4e519` | Same matched copy and manifest |
| Model | `opencode/big-pickle` | `opencode/big-pickle` |
| Task and output path | Identical | Identical |
| Permission mode | `--auto` | `--auto` |
| Condition difference | `--pure`; no startup or skill-loading instruction | Standard run; explicit `.opencode/OPENCODE.md` and approved-skill load instruction |
| Human intervention after prompt | None | None |

The `--pure` flag is an additional runtime difference, recorded as a limitation. It was used to suppress external project plugins in the baseline condition; it means the comparison is not a pure prompt-only A/B test.

## Acceptance-Criteria Result

| Criterion | Baseline result | Praxis result |
|---|---|---|
| Output exists at required path | Pass | Pass |
| Correct cross-harness, shared-backend conclusion | Pass | Pass |
| Unsupported generalizations identified | Pass | Pass |
| Next evidence named | Pass | Pass |
| Direct raw provenance used | Pass | Pass |
| Protected knowledge unchanged | Pass | Pass |
| Approved skill read | Not required; not read | Pass; exact skill path read and named |

## Observed Measurements

| Measurement | Baseline | Praxis | Interpretation |
|---|---:|---:|---|
| Output lines / bytes | 74 / 6,500 | 80 / 8,130 | The guided report was longer; length is not a quality metric. |
| Raw-source references in output | 4 | 2 | Both cited raw transcripts; counts alone do not establish provenance quality. |
| Approved-skill path reads | 0 | 1+ | The baseline's sole string occurrence was inside the protocol it read, not a skill-file read; the guided transcript explicitly opened the skill. |
| Scope violations against frozen conclusion | 0 observed | 0 observed | Both reports correctly ruled out cross-model and provider-independent claims. |
| Context restatement requests | 0 | 0 | Neither session asked the human to restate context after its initial prompt. |
| Human interventions after prompt | 0 | 0 | No rework or clarifying intervention occurred. |

Raw token fields are preserved but are not compared as a performance metric: cache state, startup behavior, and the `--pure` condition differ. Likewise, the baseline report independently reached a strong bounded answer, so it would be false to call the guided condition a demonstrated correctness improvement.

## Direct Evidence

| Artifact | Baseline | Praxis |
|---|---|---|
| Raw transcript | [`raw/baseline.jsonl`](raw/baseline.jsonl), SHA-256 `25ecf4db94266d8ee479a13ef7fa22de1d5dfe1f7f51f4f6eb5f75b5afed318f` | [`raw/praxis.jsonl`](raw/praxis.jsonl), SHA-256 `d7cffc3b58523a453d3fb881fde29adc8957dc829f92e3444951c0468690077e` |
| Session ID | `ses_fd4dd6e32ffeNeftayJBZecc6y` | `ses_fd4d8a127ffeSE4piFWcP4FzOq` |
| Task output | [`outputs/baseline-task-output.md`](outputs/baseline-task-output.md) | [`outputs/praxis-task-output.md`](outputs/praxis-task-output.md) |
| Skill-use evidence | No skill-file read in raw event paths | Raw transcript records read of `skills/verification/evidence-scope-validation/SKILL.md` |

## Limitations and Next Evidence

This comparison used one task, one model, one run per condition, and related runtime differences. Both agents had access to the same repository evidence; the baseline also read the task protocol, which mentions the skill path, though its raw tool events show it did not open the skill. The task was a controlled reporting exercise derived from prior validation artifacts, not a naturally occurring code-change task.

The next valid comparison should use a naturally occurring coding task, multiple paired runs with randomized order, a baseline condition that removes only the relevant Praxis instruction while holding the host runtime constant, pre-registered scoring by a human or independent evaluator, and tests for defects/rework. Only then could Praxis performance or efficiency claims be assessed.
