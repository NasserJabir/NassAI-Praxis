---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "memory-graph-mapping"
---

# Four Memory Layers as Graph Roles

The existing four-layer architecture remains unchanged; Graph Engineering clarifies how each layer participates in the graph.

| Layer | Graph role | Typical path |
|---|---|---|
| Working Memory | Current nodes and relationships required for the active task: current task → active agent → active skills → relevant memories. | `memory/working/` |
| Episodic Memory | Historical events: task → action → outcome → error → solution. | `memory/episodic/` |
| Semantic Memory | Generalized knowledge: pattern → rule → project convention → architecture decision. | `memory/semantic/` |
| Procedural Memory | Reusable procedures: problem → procedure → skill. | `memory/procedural/` |

Graph links are additive. Existing memories remain valid even when they do not yet have entity metadata. Security scanning, classification, retention, and lazy loading still apply.
