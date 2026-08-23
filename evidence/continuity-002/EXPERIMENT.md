---
type: continuity-experiment
id: continuity-002
status: prepared
agent: opencode
model: opencode/big-pickle
scope: isolated-copy
predecessor: continuity-001
---

# Project Continuity Experiment 002

## Purpose

Continuity 002 tests whether a later independent OpenCode session can retrieve and apply a **different** semantic decision from Continuity 001. The decision governs how a report scopes evidence from a single controlled run; it is not a status-label policy.

## Controlled Boundary

The experiment runs only in `/home/ubuntu/praxis-continuity-trial-002`, an isolated copy of Praxis. The original `/home/ubuntu/NassAI-Praxis` is never made available for agent writes. Session 2 must be a separate `opencode run` invocation with no `--continue`, session identifier, or conversation reuse.

## Session 1 Prompt

```text
Work in this isolated project. Follow the OpenCode Praxis startup protocol. Do not edit files outside this project.

Create a durable semantic project decision at `memory/semantic/evidence-scope-policy.md`. The decision must state that a result from one controlled agent-and-model run can be described only as a narrow observed outcome for that exact environment. It must not be represented as repeatability, cross-agent portability, universal compatibility, or a general product benefit. Explain the rationale and require reports to state their claim scope, limitations, and the next needed replication. Record that this decision was created in Session 1.

Create `trials/continuity-002/session-001-note.md` with the decision source, a concise decision summary, and the files changed. Do not modify any other memory file. Reply with the files changed and the decision source.
```

## Session 2 Prompt

```text
You are an independent new session in this project. A validation result was produced by exactly one controlled run with one agent and one model. Create `trials/continuity-002/session-002-report.md` that states the credible evidence level and the next validation needed.

Before editing, locate the relevant existing project decision. State its exact source path and explain why it applies. Do not use the decision's scope vocabulary in your reasoning or report until you have located the source. Then apply the established policy in the report. Do not modify any file under `memory/`. Reply with the source you read, the policy you applied, and the files changed.
```

## Pass Criteria

| Question | Required evidence |
|---|---|
| Found? | Raw Session 2 transcript records a read of `memory/semantic/evidence-scope-policy.md` and the agent names that source correctly. |
| Understood? | The Session 2 report explains why one controlled agent/model run has limited claim scope. |
| Reused? | The report limits the result to its exact environment and identifies replication or a cross-agent run as the next evidence needed. |
| Preserved boundary? | Session 2 leaves all `memory/` files unchanged. |

## Failure Rules

Mark the experiment failed or inconclusive if Session 2 does not read the source, makes a broad portability or product-benefit claim from the single run, omits the next evidence needed, or changes semantic memory. Do not infer retrieval solely from a plausible final report.
