---
type: before-after-baseline-experiment
id: baseline-001
condition: praxis
status: prepared
agent: opencode
model: opencode/big-pickle
comparison_fixture_hash: d3f05a7f6a78238136c404c1646e93cd6b14bb0e14c2edfeb5a9b1ef92a4e519
---

# Baseline 001 — Matched Before/After Protocol

## Purpose

This experiment compares one **unguided baseline** session with one **Praxis-guided** session on the same reporting task. It is a single controlled observation, not a benchmark series or proof of general performance.

## Matched Fixture

Both fixtures are byte-equivalent copies of the approved Evolution 001 trial before this protocol and prompt files were added. Their shared pre-session file manifest SHA-256 is `d3f05a7f6a78238136c404c1646e93cd6b14bb0e14c2edfeb5a9b1ef92a4e519`.

## Shared Task

Create `trials/baseline-001/task-output.md` that truthfully summarizes what the project can say about Cross-Agent Continuity 001, in which OpenCode created a semantic decision and Pi retrieved and applied it with a shared `opencode/big-pickle` backend.

The report must contain a headline, direct evidence scope, bounded conclusion, unsupported claims, next evidence needed, provenance sources, and a final headline/body consistency check. It must not modify any other file.

## Conditions

| Condition | Invocation rule | Prompt treatment |
|---|---|---|
| Baseline | `opencode run --pure --auto` | No Praxis startup or skill-loading instruction; the task request alone is supplied. |
| Praxis | `opencode run --auto` | Follow `.opencode/OPENCODE.md` and explicitly load `skills/verification/evidence-scope-validation/SKILL.md` before writing. |

The fixture, model, output path, task, permission mode, and acceptance criteria are otherwise identical. The `--pure` baseline flag is recorded as a condition difference because it disables external plugins; it is intended to suppress automatic project-agent integration, not to simulate an empty repository.

## Acceptance Criteria

| Criterion | Expected evidence |
|---|---|
| Output exists | `trials/baseline-001/task-output.md` exists and is the only agent-created task output. |
| Core conclusion is correct | The result is described as one observed OpenCode-to-Pi cross-harness run with a shared Big Pickle backend, not model- or provider-independent. |
| Claim scope is explicit | Report names unsupported generalizations and the next evidence required for each. |
| Provenance is direct | Report cites raw transcripts, evaluations, or hashes rather than only generated self-report. |
| No task-boundary breach | No memory, skill, evolve, or evidence file is modified. |

## Measurements

The evaluation records: whether the approved skill was read; direct source discovery; claim-correctness and scope-violation counts against the acceptance criteria; repeated-context requests; raw-tool evidence; output length and token metadata if exposed; and human intervention count. A single outcome difference will be reported as `observed`, not as causal or general improvement.

## Failure Rules

Mark a condition incomplete if it fails to create the report, edits protected knowledge, or makes a false cross-model/provider claim. Do not manually correct either agent output. Preserve the raw transcript and assess it as produced.
