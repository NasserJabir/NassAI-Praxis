---
type: controlled-multi-pair-evaluation
id: baseline-002
status: reviewed
result: observed_inconclusive_for_advantage
---

# Baseline 002 — Independent Scorecard

## Outcome

All three matched task pairs completed their stated maintenance work. PHP syntax checks passed for Tasks A and B; the independent Vite build passed for both Task C implementations. All three Praxis transcripts read the required context, while no baseline transcript read the project-conventions file. However, both conditions completed all deterministic acceptance checks in every pair, with zero human repair prompts and no observed policy breach. **Baseline 002 therefore demonstrates controlled context use, not a clear Praxis performance advantage.**

## Pair Results

| Task | Baseline | Praxis | Independent result |
|---|---|---|---|
| A — Order flow | Added request, repository, controller, and feature-test implementation; PHP syntax passed. | Added the same architectural layers and feature coverage; PHP syntax passed. | Tie on available correctness checks. Native Laravel test suite unavailable because benchmark fixture lacks `artisan`. |
| B — Category coverage | Added show/update/destroy and user-mutation feature coverage; PHP syntax passed. | Added the same coverage scope; PHP syntax passed. | Tie on available correctness checks. |
| C — Orders view | Replaced placeholder with loading/error/list states; Vite build passed. | Replaced placeholder with loading/error/list states; Vite build passed. | Tie on native frontend build and required UI structure. |

## Pre-Registered Metrics

| Metric | Baseline | Praxis | Interpretation |
|---|---:|---:|---|
| Correctness under available checks | 3/3 completed | 3/3 completed | No observed difference. |
| Rework prompts | 0 | 0 | No observed difference. |
| Context-repetition prompts | 0 | 0 | No observed difference. |
| Project-conventions file reads | 0/3 | 3/3 | The Praxis treatment produced the intended knowledge-loading behavior. |
| Policy/convention violations | 0 observed | 0 observed | No observed difference. |
| Human interventions after initial prompt | 0 | 0 | No observed difference. |

## Integrity and Limitations

The task-pair source manifest was `f75d307faecf82534290876eec1739635c75f4dcdba6b6f1d292e26820df81e1`. All six raw transcripts and fixture diffs are retained in the condition workspaces. The benchmark backend lacks its `artisan` bootstrap, so Tasks A and B could not run Laravel feature tests; they were scored with PHP syntax and deterministic structural checks instead. This is a material limitation. The three tasks are from one small benchmark fixture, all sessions use `opencode/big-pickle`, and there is one run per condition.

## Adoption Decision

No evidence-backed performance claim is warranted. Praxis may be positioned on **project continuity, governance, portability, and human-reviewed knowledge evolution**, all of which have separate observed evidence packages. A future performance study would require a runnable application fixture, repeated paired runs, and independent behavioral scoring; it is not required before adopting Praxis for its demonstrated continuity/governance value.
