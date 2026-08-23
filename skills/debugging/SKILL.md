# Debugging

## Description
Systematic approach to finding and fixing bugs in code.

## When to Activate
- When encountering a bug
- When a test fails unexpectedly
- When behavior differs from expectation

## Process

### 1. Reproduce
- Create a minimal reproduction case
- Document exact steps to trigger the bug
- Note the environment and conditions

### 2. Isolate
- Narrow down where the bug occurs
- Use binary search through code
- Add logging or breakpoints
- Check recent changes

### 3. Root Cause
- Understand WHY the bug happens
- Don't just fix symptoms
- Consider edge cases and race conditions

### 4. Fix
- Write a test that fails with the bug
- Implement the minimal fix
- Ensure all existing tests still pass

### 5. Verify
- Confirm the bug is fixed
- Run the full test suite
- Check for regression

## Quality Criteria
- Bug is fully understood before fixing
- Fix is minimal and targeted
- No side effects or regressions
- Test added to prevent recurrence

## Common Patterns
- Null/undefined access
- Race conditions
- Off-by-one errors
- Incorrect assumptions about data
- Missing error handling

## Anti-Patterns
- Random changes hoping to fix it
- Fixing symptoms without understanding cause
- Not writing a test for the bug
- Refactoring while debugging

## Graph and Loop Integration

This skill participates in the Execution Loop. Record the relevant task, selected skill, agent, persona, verification evidence, and any resulting experience using the controlled vocabulary in `graph/relationships.md`. If verification fails, return to diagnosis and correction rather than ending the task. Feed only useful, validated learning into the Learning Loop.
