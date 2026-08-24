---
name: planning
description: Breaking down complex tasks into manageable, ordered steps before execution.
version: "1.0.0"
triggers:
  - "multi-step feature work is about to start"
tokens: ~439
---
# Planning

## Description
Breaking down complex tasks into manageable, ordered steps before execution.

## When to Activate
- Before complex, multi-step tasks
- When tasks have dependencies
- When estimation is needed
- Before starting a sprint or work session

## Process

### 1. Break Down
- Decompose the goal into atomic tasks
- Each task should be:
  - Independently completable
  - Estimable (1-4 hours)
  - Testable

### 2. Estimate
- Size each task (S/M/L/XL)
- Note unknowns and risks
- Add buffer for uncertainty

### 3. Order
- Identify dependencies
- Sequence for parallel work where possible
- Start with highest risk or most uncertain

### 4. Document
- Write a clear plan with:
  - Goal statement
  - Task list with estimates
  - Dependencies
  - Success criteria

## Plan Format
```
## Goal
[What we're building]

## Tasks
- [ ] Task 1 (S) - no dependencies
- [ ] Task 2 (M) - depends on Task 1
- [ ] Task 3 (L) - can parallel with Task 2

## Success Criteria
- [ ] All tests pass
- [ ] Feature works as described
- [ ] No regressions
```

## Quality Criteria
- All tasks are actionable
- Estimates are reasonable
- Dependencies are clear
- Plan is visible and agreed upon

## Anti-Patterns
- Planning forever without starting
- Skipping planning for "simple" tasks
- Not updating the plan as you learn
- Over-planning (tasks too granular)

## Graph and Loop Integration

This skill participates in the Execution Loop. Record the relevant task, selected skill, agent, persona, verification evidence, and any resulting experience using the controlled vocabulary in `graph/relationships.md`. If verification fails, return to diagnosis and correction rather than ending the task. Feed only useful, validated learning into the Learning Loop.
