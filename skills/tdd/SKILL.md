# Test-Driven Development

## Description
Discipline of writing tests before implementation code to ensure correctness and maintainability.

## When to Activate
- Implementing any new feature
- Fixing a bug
- Refactoring existing code

## Process

### RED Phase
1. Write a failing test
2. Run the test to confirm it fails for the right reason
3. Keep the test visible as your target

### GREEN Phase
1. Write the minimal code to make the test pass
2. Run the test to confirm it passes
3. Do not over-engineer

### REFACTOR Phase
1. Improve code structure while tests pass
2. Remove duplication
3. Enhance readability
4. Run tests again to confirm nothing broke

## Quality Criteria
- Every feature has tests
- Tests run quickly and reliably
- Tests cover edge cases
- Code is simple and testable

## When to Skip
- Exploratory prototyping
- Trivial one-off scripts
- UI layout tweaks

## Anti-Patterns
- Writing tests after implementation (harder to get coverage)
- Testing implementation details instead of behavior
- Skipping the refactor phase
- Writing brittle tests that break on internal changes

## Example
```
# RED: Write failing test
test "calculates total with tax":
    assert calculate_total(100, 0.1) == 110

# GREEN: Minimal implementation
def calculate_total(amount, tax_rate):
    return amount * (1 + tax_rate)

# REFACTOR: Extract constant
TAX_MULTIPLIER = 1 + TAX_RATE
def calculate_total(amount):
    return amount * TAX_MULTIPLIER
```

## Graph and Loop Integration

This skill participates in the Execution Loop. Record the relevant task, selected skill, agent, persona, verification evidence, and any resulting experience using the controlled vocabulary in `graph/relationships.md`. If verification fails, return to diagnosis and correction rather than ending the task. Feed only useful, validated learning into the Learning Loop.
