---
version: "1.0.0"
created: "2026-08-22T00:00:00Z"
updated: "2026-08-22T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "memory-utility-test"
---

# Memory Utility Test

The relevant question is not whether memory exists. It is whether the agent discovers and uses the right memory when it should, and whether that improves a decision.

## Per-Session Chain

```text
Relevant Memory Available?
        ↓
Did the Agent Discover It?
        ↓
Did the Agent Use It?
        ↓
Did It Improve the Decision?
```

Record all four answers in every real-project session. Use `unknown` when the transcript does not prove an answer; do not infer use merely because a file was present.

## Scoring Guidance

| Result | Interpretation |
|---|---|
| Available + discovered + used + improved | Strong utility evidence. |
| Available + discovered + used + no improvement | Memory was relevant but did not change the result; record why. |
| Available + not discovered | Retrieval or navigation problem. |
| Discovered + not used | Relevance, trust, or instruction problem. |
| Not available | Coverage gap; do not count it as agent failure. |

Memory utility evidence should link to the session, decision, evaluation, and any later reuse. It remains separate from claims about memory size or file count.
