---
type: controlled-multi-pair-evaluation
id: baseline-002
status: frozen_with_preflight_limit
project: examples/laravel-vue-api/scenario-b
model: opencode/big-pickle
pair_count: 3
conditions_per_pair: 2
random_order: A-praxis, C-praxis, A-baseline, B-baseline, B-praxis, C-baseline
---

# Baseline 002 — Controlled Multi-Pair Evaluation

## Purpose and Boundary

Baseline 002 tests whether Praxis has a **narrow measurable effect** on three ordinary maintenance tasks in the existing Laravel/Vue API benchmark fixture. It does not add a Praxis feature, promote a trial skill, alter Praxis Core behavior, or establish a general performance claim from three pairs.

Every pair starts from an identical copy of `examples/laravel-vue-api/scenario-b`, uses `opencode/big-pickle`, has the same permissions, receives the same task specification, and is scored from files, diffs, and native checks rather than the agent's self-report. The condition difference is only the context-treatment instruction: the Praxis condition is asked to read a fixture-local Markdown context pack before work; the baseline condition is not.

## Task Set

| Task | Natural maintenance work | Required acceptance evidence |
|---|---|---|
| A — Order flow | Replace the existing placeholder `OrderController::store` and stub `show` behavior with validated creation and authenticated user-owned retrieval. | A request class, repository-level creation path, proper 201 create response, item persistence/total calculation, user-ownership protection, and feature tests. |
| B — Category CRUD regression coverage | Extend incomplete existing category feature coverage to the already-routed `show`, `update`, and `destroy` actions without changing API design. | Feature tests for successful admin show/update/destroy plus user-forbidden mutation; native backend tests pass. |
| C — Admin orders view | Replace the existing `Orders.vue` placeholder with an admin orders list using the configured API client. | Loading, error, and populated states; fetch from `/admin/orders`; visible order identifier, status, and total; frontend build passes. |

These are pre-existing implementation/coverage gaps in the benchmark fixture, not tasks introduced to showcase a Praxis-only feature.

## Conditions

| Condition | Prompt treatment | Prohibited behavior |
|---|---|---|
| Baseline | Receives only the task specification, acceptance criteria, and location of the task fixture. | Do not read `praxis-context/` or load its policies/skills. |
| Praxis | Receives the identical task specification and acceptance criteria, plus a directive to read `praxis-context/START.md` and load only task-relevant context. | Do not modify `praxis-context/`, use it as a reason to overclaim, or change work outside task scope. |

Both conditions run with `opencode run --auto --model opencode/big-pickle --format json` in a fresh fixture and no session continuation. The fixture-local context pack is present in both copies to retain a matching file system; only the Praxis prompt directs the agent to load it.

## Randomized Execution Order

The order was drawn before any Baseline 002 condition ran:

```text
1. A-praxis
2. C-praxis
3. A-baseline
4. B-baseline
5. B-praxis
6. C-baseline
```

## Preflight Amendment

Before any condition ran, the neutral fixture completed dependency installation and the frontend baseline build. The Laravel artifact could not execute its declared native test command because the benchmark fixture has no `backend/artisan` bootstrap file; `composer test` exits with `Could not open input file: artisan`. This is an artifact limitation, not an agent outcome.

For Tasks A and B, the independent evaluator will therefore use PHP syntax linting plus deterministic static checks of the required controller, request, repository, route, and feature-test structures. Agents must still add the requested feature tests, but no agent is penalized for the fixture's pre-existing inability to run `php artisan test`. Task C retains `pnpm run build` as an executable native check. This amendment was made before the first randomized condition and applies identically to both conditions.

## Independent Scoring Rubric

| Metric | Scoring source | Direction |
|---|---|---|
| Correctness | Native `php artisan test` or `pnpm run build`, plus task-specific deterministic checks | Higher is better; failures are recorded, not repaired. |
| Rework | Human follow-up prompts after first submission | Lower is better; count is zero unless an explicit repair prompt occurs. |
| Context repetition | Raw transcript requests for project rules or task restatement after initial prompt | Lower is better. |
| Relevant knowledge reused | Raw transcript evidence that Praxis condition read relevant context and applied it; baseline records accidental reads as protocol deviations | Descriptive, not automatically a quality score. |
| Policy/convention violations | Deterministic checks against task-specific constraints and the shared fixture conventions | Lower is better. |
| Human interventions | Count of human replies or corrective commands after each original task prompt | Lower is better. |

An independent evaluator script operates only on saved outputs, diffs, raw transcripts, and native check logs. It does not use agent-generated success text as a score.

## Decision Rule

An advantage is reported only if Praxis wins or ties correctness on all completed pairs and shows a clearly documented improvement in at least one other pre-registered metric without more rework or policy violations. Any unresolved native-check failure, protocol breach, or non-comparable pair prevents a performance claim. If no clear advantage appears, Praxis remains positioned around continuity, governance, portability, and knowledge evolution.
