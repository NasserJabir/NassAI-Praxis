---
type: continuity-experiment
status: prepared
agent: opencode
model: opencode/big-pickle
scope: isolated-copy
---

# Project Continuity Experiment 001

## Hypothesis

If a first OpenCode session records a project decision in the trial’s semantic memory, a later independent OpenCode session can locate, explain, and apply that decision without the decision being restated in the second task prompt.

## Controlled Boundary

The experiment runs only in `/home/ubuntu/praxis-continuity-trial`, which is an isolated copy of NassAI-Praxis. No file in the original `/home/ubuntu/NassAI-Praxis` repository is changed by the two agent sessions.

## Session 1 Prompt

```text
Work in this isolated project. Follow the OpenCode Praxis startup protocol. Do not edit files outside this project.

Create a durable, semantic project decision at `memory/semantic/continuity-status-policy.md`. The decision is: behavioral validation claims may use only `observed` when direct evidence exists, or `not_run` when the behavior has not been executed. A task that has not been executed must not be reported as a success or failure. Explain the rationale and record that this decision was created in Session 1.

Create `trials/continuity-001/session-001-note.md` with the source path, the decision summary, and the files changed. Do not modify any other memory file. Reply with the files changed and the decision source.
```

## Session 2 Prompt

```text
You are an independent new session in this project. A behavioral validation task has not been executed. Create `trials/continuity-001/session-002-report.md` that honestly records its current state.

Before editing, locate the relevant existing project decision. State the exact source path and explain why it applies. Do not use the decision's status label in your reasoning or output until you have located the source. Then apply the established policy in the report. Do not modify any file under `memory/`. Reply with the source you read, the policy you applied, and the files changed.
```

## Pass Criteria

| Question | Required evidence |
|---|---|
| Found? | Raw Session 2 transcript shows a read of `memory/semantic/continuity-status-policy.md` and names that source correctly. |
| Understood? | Session 2 explains that unexecuted work must not be reported as success or failure. |
| Reused? | `session-002-report.md` records the behavioral task as `not_run`. |
| Preserved boundary? | Session 2 leaves all `memory/` files unchanged. |

## Failure Rules

Mark the experiment failed or inconclusive if the second session does not read the source, uses an incorrect status, claims an unexecuted task succeeded or failed, or changes semantic memory. Do not infer retrieval solely from a correct final status.
