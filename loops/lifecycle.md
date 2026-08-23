---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
type: "loop-lifecycle"
---

# Unified Loop Lifecycle

The loops compose without creating a mandatory runtime:

```text
Execution Loop
      ↓
Learning Loop
      ↓
Evolution Loop
      ↓
Future Execution
```

```text
Understand → Plan → Execute → Verify
                         ↓
                  Observation → Evaluation → Reflection → Memory
                                                              ↓
                         Pattern → Skill / Agent / Persona refinement
                                                              ↓
                                                     Future Task
```

Execution creates graph relationships. Learning decides what is durable. Evolution changes capabilities only when configured thresholds and human review permit it. The next execution traverses the updated graph and loads the new capability lazily.

## Stop Conditions

Stop execution when acceptance criteria pass, stop learning when no useful durable knowledge exists, and stop evolution when evidence is insufficient, the candidate is unsafe, or human review rejects promotion.
