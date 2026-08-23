---
type: cross-agent-continuity-experiment
id: cross-agent-continuity-001
status: prepared
session_1_agent: opencode
session_1_model: opencode/big-pickle
session_2_agent: pi-coding-agent
session_2_model_backend: opencode/big-pickle
scope: isolated-copy
evidence_boundary: cross-harness-not-cross-model
---

# Cross-Agent Continuity Experiment 001

## Purpose

This experiment tests whether semantic Markdown knowledge created by **OpenCode** can be located and applied later by the distinct **Pi Coding Agent** harness. Pi's model provider bridges to the same `opencode/big-pickle` backend used by Session 1. The experiment therefore tests **cross-harness continuity**, not model-provider independence.

## Controlled Boundary

The experiment runs only in `/home/ubuntu/praxis-cross-agent-trial-001`, an isolated Praxis copy. Session 1 uses `opencode run`; Session 2 uses a fresh non-interactive `pi` invocation with a temporary Pi configuration and session directory. No continuation flag, shared conversation, or prior-session identifier is permitted. The original `/home/ubuntu/NassAI-Praxis` is not writable by either session.

## Session 1 Prompt — OpenCode

```text
Work in this isolated project. Follow the OpenCode Praxis startup protocol. Do not edit files outside this project.

Create a durable semantic project decision at `memory/semantic/agent-interface-invariance-policy.md`. The decision must state that semantic project decisions are owned by the Markdown project memory, not by an agent-specific instruction file or interface. A later coding-agent harness that relies on such a decision must name and read the exact semantic source, explain why the semantic source outranks a harness adapter for the decision itself, and consume the policy read-only. Explain the rationale and record that the decision was created in OpenCode Session 1.

Create `trials/cross-agent-continuity-001/session-001-note.md` with the decision source, a concise decision summary, and the files changed. Do not modify any other memory file. Reply with the files changed and the decision source.
```

## Session 2 Prompt — Pi Coding Agent

```text
You are a fresh coding-agent session using this project. Prepare `trials/cross-agent-continuity-001/session-002-report.md` for a task that needs a durable project decision which must remain valid even when the coding-agent harness changes.

Before editing, locate the relevant existing semantic project decision. State the exact source path and explain why it is the authority for the decision. Do not use the decision's interface or authority vocabulary in your reasoning or report until you have located the source. Then apply the decision by writing a concise handoff rule for a future coding-agent harness. Do not modify any file under `memory/`. Reply with the source you read, the policy you applied, and the files changed.
```

## Pass Criteria

| Question | Required evidence |
|---|---|
| Found? | Raw Pi Session 2 transcript records a read of `memory/semantic/agent-interface-invariance-policy.md` and names that source correctly. |
| Understood? | Session 2 explains why semantic project memory, rather than an agent adapter, is authoritative for the decision. |
| Reused? | `session-002-report.md` provides a handoff rule that preserves the semantic source and read-only consumption. |
| Preserved boundary? | Session 2 leaves all `memory/` files unchanged. |
| Agent separation stated honestly? | Evaluation identifies OpenCode and Pi as distinct coding-agent harnesses while documenting their shared Big Pickle model backend. |

## Failure Rules

Mark the experiment failed or inconclusive if Pi does not read the semantic source, treats an adapter as the decision authority, does not provide the required handoff rule, changes semantic memory, or if the evidence is presented as cross-model independence.
