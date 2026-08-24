---
name: subagent-management
description: Orchestrating multiple agents to work on complex, multi-step tasks in parallel.
version: "1.0.0"
triggers:
  - "work should be parallelized across sub-agents"
tokens: ~433
---
# Subagent Management

## Description
Orchestrating multiple agents to work on complex, multi-step tasks in parallel.

## When to Activate
- Tasks have 2+ independent components
- Parallel work would speed up completion
- Different expertise is needed for different parts
- Task is too large for a single context window

## Process

### 1. Assess Need
- Can this be done sequentially by one agent?
- Are there independent subtasks?
- Will parallelism actually speed things up?

### 2. Create Agent
- Define clear scope and boundaries
- Provide necessary context
- Specify output format
- Set constraints

### 3. Assign Task
- Give each agent:
  - Specific, measurable goal
  - Access to required files
  - Clear success criteria
  - Time budget if needed

### 4. Monitor
- Check progress periodically
- Watch for blockers
- Coordinate dependencies

### 5. Collect Results
- Gather all outputs
- Verify each agent's work
- Integrate results
- Handle conflicts

## Agent Template
```
You are a [role] agent.

Task: [specific goal]
Input: [files/data to work with]
Output: [expected format]
Constraints: [limitations]
Success criteria: [how to know when done]
```

## Communication Patterns
- **Parallel**: Independent tasks, no coordination
- **Pipeline**: Output of one feeds another
- **Fan-out/Fan-in**: Split work, merge results
- **Leader/Worker**: One agent orchestrates others

## Quality Criteria
- Tasks are truly independent
- Each agent has clear scope
- Results are verified before integration
- No duplicate work

## Anti-Patterns
- Creating agents for trivial tasks
- Unclear task boundaries
- Not verifying agent output
- Agents with overlapping responsibilities
- Over-orchestration (too much coordination overhead)
