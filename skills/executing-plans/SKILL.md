---
name: executing-plans
description: Execute plans in batches with human checkpoints. Dispatch subagents per task.
triggers:
  - "an approved implementation plan exists"
tokens: ~569
---

# Executing Plans

## Description
Execute implementation plans systematically with review checkpoints between batches. Use subagents for parallel independent tasks. Never skip verification between batches.

## When to Activate
- A written plan exists and needs execution
- Multiple independent tasks can run in parallel
- After receiving a plan from writing-plans skill
- When working on multi-step implementations

## Process

### Step 1: Load the Plan
- Read the plan file completely
- Identify task dependencies and parallelism opportunities
- Group independent tasks that can run simultaneously

### Step 2: Dispatch First Batch
- Send independent tasks to subagents
- Each subagent gets: task description, exact files, exact code, verification command
- Subagents execute and report results

### Step 3: Verify Batch Results
- Run verification commands from each completed task
- Check that no regressions were introduced
- Confirm all files are in expected state

### Step 4: Human Checkpoint
After each batch:
- Summarize what was completed
- Show verification results
- Ask: "Continue with next batch?"
- Wait for confirmation before proceeding

### Step 5: Dispatch Next Batch
- Only after human confirmation
- Repeat Steps 2-4 until all tasks complete

### Step 6: Final Verification
- Run full test suite
- Run linter and type checker
- Confirm all requirements from the spec are met

## Quality Criteria
- No batch is dispatched without verifying the previous batch
- Human confirms before each new batch
- All verification commands pass before moving on
- Final state matches the spec requirements

## Parallel Execution Rules
- Tasks touching different files can run in parallel
- Tasks touching the same file must run sequentially
- Always verify before merging parallel results

## Examples

### Batch Dispatch
```
Batch 1 (3 parallel tasks):
- Task 1: Add User type to src/types/user.ts
- Task 2: Add AuthState to src/types/auth.ts  
- Task 3: Create src/utils/token.ts

Running verification...
✅ Task 1: tsc --noEmit passes
✅ Task 2: tsc --noEmit passes
✅ Task 3: tsc --noEmit passes

Batch 1 complete. Continue with Batch 2?
```
