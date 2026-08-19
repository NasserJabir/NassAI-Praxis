---
name: refactoring
description: Safe refactoring with smell analysis and TDD verification. Chesterton's Fence principle.
---

# Refactoring

## Description
Refactor code safely using code smell analysis, test-driven verification, and Chesterton's Fence principle. Never refactor without understanding why the code exists as it does.

## When to Activate
- Code is working but hard to maintain
- Preparing to add new features to existing code
- Code review identifies structural issues
- Performance optimization requires restructuring
- Technical debt has accumulated

## Process

### Step 1: Understand Before Changing (Chesterton's Fence)
Before refactoring:
- Why does this code exist in its current form?
- What problems does it solve?
- Are there hidden constraints or requirements?
- What would break if we changed it?

### Step 2: Identify Code Smells
Scan for common issues:
- **Long Method**: Functions over 20 lines
- **Large Class**: Classes with too many responsibilities
- **Duplicate Code**: Same logic in multiple places
- **Feature Envy**: Method uses another class's data more than its own
- **Data Clumps**: Groups of data items that travel together
- **Shotgun Surgery**: One change requires many small edits
- **Switch Statements**: Complex conditional logic

### Step 3: Verify Current State
Before any refactoring:
- All existing tests must pass
- Capture current behavior with snapshot tests if needed
- Document what the code does now

### Step 4: Plan the Refactoring
Choose the appropriate technique:
- **Extract Method**: Break long methods
- **Extract Class**: Split large classes
- **Move Method**: Relocate misplaced logic
- **Replace Temp with Query**: Simplify expressions
- **Introduce Parameter Object**: Group related data
- **Replace Conditional with Polymorphism**: Remove switch statements

### Step 5: Refactor in Small Steps
- Make one small change at a time
- Run tests after each change
- Commit after each successful step
- Never refactor and add features simultaneously

### Step 6: Verify After Refactoring
- All original tests still pass
- No new code smells introduced
- Code coverage maintained or improved
- Behavior is identical (or intentionally different with tests)

## Refactoring Safety Rules
1. Never refactor without tests
2. Never refactor and add features in same commit
3. Always verify behavior is preserved
4. Commit after each successful step
5. If tests fail, revert and try smaller step

## Quality Criteria
- Code is simpler after refactoring
- All tests pass before and after
- No new code smells introduced
- Single responsibility principle improved
- Duplication reduced

## Examples

### Bad Refactoring
```
"This code is ugly, let me rewrite it completely."
(Rewrite breaks unknown edge cases, no tests to catch regressions)
```

### Good Refactoring
```
1. Identify smell: UserService.createUser is 50 lines
2. Chesterton's Fence: Why is it so long? 
   - Handles validation, creation, notification, logging
3. Plan: Extract each responsibility to its own method
4. Refactor step 1: Extract validateInput() method
5. Run tests: ✅ All pass
6. Commit: "Extract validation from createUser"
7. Repeat for each responsibility
```

### Chesterton's Fence Example
```
Before removing "unnecessary" null check:
- Ask: Why was this added?
- Check: Git blame shows it fixed production crash
- Decision: Keep the null check, add a comment explaining why
```
