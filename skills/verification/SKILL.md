---
name: verification
description: Evidence before assertions. Run tests, linters, build. Never claim success without proof.
triggers:
  - "confirming work is actually done and correct"
tokens: ~671
---

# Verification

## Description
Provide concrete evidence that code works before claiming completion. Never assert "done" without running verification commands. Every claim must be backed by command output.

## When to Activate
- Before claiming any task is complete
- Before committing changes
- Before creating PRs or reporting status
- After any code modification
- When receiving code review feedback

## Process

### Step 1: Identify What to Verify
Based on the change, determine which checks apply:
- **Type checking**: `tsc --noEmit`, `mypy`, etc.
- **Linting**: `eslint`, `ruff`, `prettier --check`
- **Tests**: `jest`, `pytest`, `cargo test`
- **Build**: `npm run build`, `cargo build`
- **Manual**: specific runtime checks

### Step 2: Run Verification Commands
- Execute each applicable check
- Capture the full output
- Do not truncate or summarize errors

### Step 3: Analyze Results
- All checks must pass
- If any check fails, fix the issue before proceeding
- Document what was checked and the result

### Step 4: Report Evidence
When reporting completion:
- State which verification commands were run
- Show the passing output
- Never claim "it should work" — show that it does

## Evidence Checklist
Before claiming done:
- [ ] Type checker passes (if applicable)
- [ ] Linter passes (if applicable)
- [ ] Tests pass (if applicable)
- [ ] Build succeeds (if applicable)
- [ ] Manual verification performed (if applicable)

## Anti-Patterns
- "It should work now" → Run the command
- "I fixed the bug" → Show the test passing
- "The code looks correct" → Show type check passing
- "Trust me, it works" → Never acceptable

## Quality Criteria
- Every completion claim includes command output
- Verification commands are appropriate for the change
- Failed verifications are fixed before reporting success
- Evidence is reproducible (same commands produce same results)

## Examples

### Bad Response
"The code has been updated and should work correctly now."

### Good Response
"Code updated. Verification:
```
$ npx tsc --noEmit
✓ No errors

$ npm test
✓ 42 tests passed

$ npm run lint
✓ No warnings
```
All checks pass."

## Graph and Loop Integration

This skill participates in the Execution Loop. Record the relevant task, selected skill, agent, persona, verification evidence, and any resulting experience using the controlled vocabulary in `graph/relationships.md`. If verification fails, return to diagnosis and correction rather than ending the task. Feed only useful, validated learning into the Learning Loop.
