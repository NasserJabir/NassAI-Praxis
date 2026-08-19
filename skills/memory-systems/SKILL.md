---
name: memory-systems
description: Design short-term, long-term, and graph-based memory architectures for AI agents.
---

# Memory Systems

## Description
Design memory architectures that let agents retain and recall information across sessions. Implement short-term (working), long-term (persistent), and graph-based (relational) memory systems.

## When to Activate
- Building agents that need to remember context across sessions
- Agents are re-discovering information repeatedly
- Need to track relationships between concepts
- Building knowledge bases or learning systems
- Designing multi-session workflows

## Process

### Step 1: Identify Memory Needs
Determine what the agent needs to remember:
- **Working memory**: Current task context, recent decisions
- **Short-term**: Session-specific state, user preferences
- **Long-term**: Project knowledge, learned patterns
- **Episodic**: Past interactions and their outcomes
- **Semantic**: Facts, rules, relationships

### Step 2: Design Memory Architecture

**Short-Term Memory (Working)**
- Store in variables or session state
- Automatic cleanup when session ends
- Use for: current task, recent context, active decisions

**Long-Term Memory (Persistent)**
- Store in files or database
- Explicit save/load operations
- Use for: project knowledge, user preferences, learned patterns

**Graph Memory (Relational)**
- Store as nodes and edges
- Enable relationship queries
- Use for: concept maps, dependency graphs, knowledge networks

### Step 3: Implement Storage Layer
```
memory/
├── working/          # Ephemeral, per-session
│   └── state.json
├── longterm/         # Persistent across sessions
│   ├── knowledge/
│   ├── patterns/
│   └── preferences/
└── graph/            # Relational knowledge
    ├── nodes.json
    └── edges.json
```

### Step 4: Implement Retrieval
- **Keyword search**: For finding specific facts
- **Semantic search**: For finding related concepts
- **Recency**: For recent context
- **Relevance**: For task-appropriate information

### Step 5: Implement Maintenance
- Prune stale short-term memory
- Consolidate repeated patterns into long-term
- Update graph relationships as knowledge evolves
- Periodic cleanup of orphaned nodes

## Memory Operations
- **Store**: Save new information with metadata
- **Retrieve**: Find relevant information for current task
- **Update**: Modify existing memories with new info
- **Forget**: Remove irrelevant or outdated information
- **Consolidate**: Merge related memories into summaries

## Quality Criteria
- Agent retains relevant context across sessions
- Memory retrieval is fast and relevant
- No information overload from excessive memory
- Stale information is automatically cleaned up
- Relationships between concepts are preserved

## Examples

### Long-Term Memory Entry
```json
{
  "id": "pattern-auth-flow",
  "type": "pattern",
  "created": "2024-01-15",
  "content": "This project uses JWT with httpOnly cookies. Tokens are refreshed via /api/auth/refresh. Never store tokens in localStorage.",
  "tags": ["auth", "security", "jwt"],
  "confidence": 0.95
}
```

### Graph Memory
```json
{
  "nodes": [
    {"id": "auth-module", "type": "module", "label": "Authentication"},
    {"id": "user-model", "type": "model", "label": "User Model"},
    {"id": "jwt-utils", "type": "utility", "label": "JWT Utilities"}
  ],
  "edges": [
    {"from": "auth-module", "to": "user-model", "relation": "uses"},
    {"from": "auth-module", "to": "jwt-utils", "relation": "imports"},
    {"from": "jwt-utils", "to": "user-model", "relation": "references"}
  ]
}
```
