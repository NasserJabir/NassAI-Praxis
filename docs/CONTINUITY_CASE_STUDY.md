---
version: "1.3.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T13:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "continuity-case-study"
status: "observed"
---

# Project Continuity Case Study

Praxis makes a testable continuity claim: a project decision recorded in Markdown can be discovered and reused after one agent session ends. This document records the evidence boundary precisely.

## Observed Controlled Experiment: Continuity 001

On 2026-08-22, two separate OpenCode sessions using `opencode/big-pickle` ran in an isolated copy of Praxis. Session 1 created a semantic status-policy decision. Session 2 was invoked independently, without a continuation flag or Session 1 identifier, and was given a task that required the policy without restating it.

| Question | Result | Evidence |
|---|---|---|
| Did the later agent find the decision? | observed | Session 2 read and named `memory/semantic/continuity-status-policy.md`. |
| Did it understand the rule? | observed | It explained that unexecuted work cannot be reported as success or failure. |
| Did it reuse the rule? | observed | Its generated report applied `Status: not_run`. |
| Did it preserve the memory boundary? | observed | Session 2 created only its report; no `memory/` file changed during that session. |

The full prompts, generated artifacts, raw JSON transcripts, session identifiers, integrity hashes, and limitations are retained in [`Continuity 001 evidence`](../evidence/continuity-001/EVALUATION.md).

## Observed Controlled Experiment: Continuity 002

Continuity 002 used a distinct semantic decision: a policy that limits the claim scope of a single controlled validation run. Session 2 again began as a fresh `opencode run` invocation and was asked to determine the credible evidence level of a one-agent, one-model result without receiving the policy in its prompt.

| Question | Result | Evidence |
|---|---|---|
| Did the later agent find the distinct decision? | observed | Session 2 read and named `memory/semantic/evidence-scope-policy.md`. |
| Did it understand the constraint? | observed | It limited the claim to a narrow result for the exact agent, model, prompts, and fixture. |
| Did it reuse the policy? | observed | It ruled out repeatability, portability, compatibility, and product-benefit claims, then named the necessary replications. |
| Did it preserve the memory boundary? | observed | Session 2 created only its report; no `memory/` file changed during that session. |

The full audit package is retained in [`Continuity 002 evidence`](../evidence/continuity-002/EVALUATION.md).

## Observed Controlled Experiment: Cross-Agent Continuity 001

This experiment changed the coding-agent harness. OpenCode Session 1 created a semantic decision, then a fresh Pi Coding Agent Session 2 located and applied it. Pi used the `opencode-pi` bridge with the same `opencode/big-pickle` backend, so the result is intentionally classified as **cross-harness**, not cross-model or provider-independent.

| Question | Result | Evidence |
|---|---|---|
| Did the Pi harness find the OpenCode-created decision? | observed | The Pi raw transcript records reads of `memory/semantic/agent-interface-invariance-policy.md`. |
| Did it understand the decision authority? | observed | Its report explains why `memory/semantic/` outranks a harness adapter for the durable decision. |
| Did it reuse the decision? | observed | It generated a handoff rule for future coding-agent harnesses that preserves source naming and read-only consumption. |
| Did it preserve the memory boundary? | observed | Pi made one unique write call, targeting only its report; no memory file changed during Session 2. |
| Is the agent distinction fully independent? | not_established | OpenCode and Pi are different coding-agent harnesses, but their model backend was the same. |

The raw records, generated artifacts, integrity hashes, and report-metadata caveat are retained in [`Cross-Agent Continuity 001 evidence`](../evidence/cross-agent-continuity-001/EVALUATION.md).

## Current Evidence Boundary

Continuity 001 and 002 provide **two distinct observed examples** within OpenCode. Cross-Agent Continuity 001 adds one observed **OpenCode-to-Pi cross-harness** retrieval and reuse example. This is stronger than a single-harness-only record, but it is **not** an identical replication study, cross-model evidence, general agent independence, a baseline advantage, universal portability, or a coding-quality improvement.

## Pending Applied-Code Scenario

The earlier Student Manager scenario remains `not_run` as a behavioral continuity test. It would require a later independent session to retrieve and apply the documented date-boundary decision in a code change, then be evaluated with tests and review. The prior Student Manager implementation remains a preliminary case-study record, not evidence of this outcome.
