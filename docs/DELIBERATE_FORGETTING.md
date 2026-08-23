---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "deliberate-forgetting-test"
---

# Deliberate Forgetting Test

This test measures Persistent Project Context by checking whether a later task finds and uses an earlier decision rather than rediscovering it.

## Setup

Record an accepted decision in a frozen project snapshot:

```text
We use X because <rationale>.
```

Create two comparable later sessions:

| Condition | Context |
|---|---|
| Without Praxis | The agent receives the task without the project memory context. |
| With Praxis | The agent receives the same task with the canonical Praxis context. |

## Observe

- Does the agent rediscover the decision?
- Does it find the existing decision?
- Does it follow the decision?
- Does it contradict or preserve the rationale?
- How many explanations or rework cycles are needed?

## Evidence

Record the prompt, transcript, decision path, changed files, evaluation, and limitations. A pass requires the Praxis condition to locate and apply the decision with evidence; mere mention of the decision file is insufficient.
