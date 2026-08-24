---
name: multi-agent-patterns
description: Orchestrator, peer-to-peer, and hierarchical multi-agent architectures.
triggers:
  - "orchestrating multiple cooperating agents"
tokens: ~781
---

# Multi-Agent Patterns

## Description
Design and implement multi-agent systems using proven architectural patterns. Choose between orchestrator, peer-to-peer, and hierarchical patterns based on task requirements.

## When to Activate
- Task requires coordination between multiple agents
- Work can be parallelized across independent subtasks
- Complex workflows need specialized roles
- Building agent teams or swarms
- Debugging multi-agent communication issues

## Process

### Step 1: Analyze Task Requirements
Determine the best pattern:
- **Orchestrator**: One agent coordinates, others execute
- **Peer-to-Peer**: Agents communicate directly, no central coordinator
- **Hierarchical**: Tree structure with delegation chains
- **Pipeline**: Sequential handoff between specialized agents

### Step 2: Define Agent Roles
For each agent, specify:
- **Responsibility**: What this agent owns
- **Inputs**: What information it needs
- **Outputs**: What it produces
- **Constraints**: What it cannot do

### Step 3: Design Communication
- Define message formats between agents
- Establish error handling protocols
- Set timeout and retry policies
- Plan for partial failure scenarios

### Step 4: Implement Coordination
Choose coordination mechanism:
- **Shared state**: Agents read/write to common store
- **Message passing**: Agents send messages to each other
- **Event-driven**: Agents react to events
- **Queue-based**: Agents pull from task queues

### Step 5: Monitor and Debug
- Log all inter-agent communication
- Track agent state and progress
- Handle agent failures gracefully
- Provide visibility into the system

## Pattern Selection Guide

| Pattern | Use When | Avoid When |
|---------|----------|------------|
| Orchestrator | Clear hierarchy, coordination needed | Simple tasks, single agent sufficient |
| Peer-to-Peer | Equal agents, distributed decisions | Need strict ordering |
| Hierarchical | Large teams, delegation needed | Small teams, flat structure |
| Pipeline | Sequential processing, specialization | Tasks aren't sequential |

## Quality Criteria
- Agents have clear, non-overlapping responsibilities
- Communication is well-defined and typed
- Failure in one agent doesn't crash the system
- Progress is visible and trackable
- Adding new agents doesn't require rewriting existing ones

## Examples

### Orchestrator Pattern
```
Orchestrator Agent
├── Research Agent (finds information)
├── Writing Agent (drafts content)
└── Review Agent (checks quality)

Flow:
1. Orchestrator assigns Research Agent
2. Research Agent returns findings
3. Orchestrator assigns Writing Agent
4. Writing Agent returns draft
5. Orchestrator assigns Review Agent
6. Review Agent returns feedback
7. Orchestrator decides: iterate or complete
```

### Pipeline Pattern
```
Input → Parser Agent → Validator Agent → Transform Agent → Output

Each agent:
- Receives input from previous agent
- Transforms and passes to next
- Can reject and send back to previous
```
