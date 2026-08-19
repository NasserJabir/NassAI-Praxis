---
name: writing-plans
description: Break work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.
---

# Writing Plans

## Description
Transform vague requirements into executable plans with concrete, verifiable tasks. Each task is small enough to complete in 2-5 minutes and includes exact file paths, complete code snippets, and verification steps.

## When to Activate
- User provides a spec, feature request, or set of requirements
- Before starting any multi-file implementation work
- When requirements are complex enough to need decomposition
- Before dispatching subagents for parallel work

## Process

### Step 1: Understand Requirements
- Read any provided specs, tickets, or descriptions
- Identify the core goal and success criteria
- List all files that will need to change
- Note any dependencies between components

### Step 2: Decompose into Tasks
Break the work into tasks where each task:
- Can be completed in 2-5 minutes
- Has a single clear outcome
- Includes exact file paths for all changes
- Contains complete code (not pseudocode)
- Has a concrete verification step

### Step 3: Order Tasks by Dependencies
- Tasks with no dependencies come first
- Dependent tasks follow their prerequisites
- Group related tasks that touch the same file

### Step 4: Write the Plan
Format each task as:
```
## Task N: [Clear outcome]
- **Files**: exact paths
- **Changes**: complete code to write
- **Verify**: specific command or check
```

### Step 5: Review Checklist
Before finalizing, verify:
- [ ] Every task has exact file paths
- [ ] Every task has complete code (no placeholders)
- [ ] Every task has a verification step
- [ ] Tasks are ordered by dependency
- [ ] No task takes more than 5 minutes

## Quality Criteria
- A developer unfamiliar with the project could execute each task
- Each task produces a working state (no broken intermediate states)
- Verification steps are commands that can be run, not subjective checks
- The plan covers all requirements from the spec

## Examples

### Bad Task
```
- Update the user model
```

### Good Task
```
## Task 3: Add `role` field to User model
- **Files**: `src/models/user.ts`
- **Changes**:
  ```typescript
  // Add after line 12:
  role: 'admin' | 'user' | 'guest';
  ```
- **Verify**: `npx tsc --noEmit` passes
```
