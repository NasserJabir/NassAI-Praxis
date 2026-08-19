---
name: anti-patterns
description: Common excuses agents use to skip steps with counter-arguments.
---

# Anti-Patterns

## Description
Identify and counter common excuses agents use to skip important steps. Provides counter-arguments to prevent shortcuts that compromise quality.

## When to Activate
- Agent is about to skip a verification step
- Agent is rationalizing a shortcut
- Agent claims "it should work" without proof
- Agent is avoiding necessary complexity
- During self-review of agent behavior

## Common Anti-Patterns and Counter-Arguments

### 1. "This is just a simple change"
**Reality**: Simple changes cause production outages too.
**Counter**: Even simple changes need verification. Run the tests.

### 2. "I'll skip the tests this time"
**Reality**: "This time" becomes every time.
**Counter**: Tests are what make changes safe. Write them first.

### 3. "It should work based on the code"
**Reality**: "Should" isn't "does."
**Counter**: Run the command. Show the output.

### 4. "I don't need to read the file first"
**Reality**: Editing blind creates conflicts and errors.
**Counter**: Always read before writing. Context matters.

### 5. "The user didn't ask for tests"
**Reality**: Working code requires tests.
**Counter**: TDD is the process, not optional.

### 6. "I'll fix it in the next commit"
**Reality**: Technical debt compounds.
**Counter**: Fix it now while context is fresh.

### 7. "This pattern is standard, no need to check"
**Reality**: "Standard" varies by project.
**Counter**: Check the existing code first. Match conventions.

### 8. "I know this library well"
**Reality**: Knowledge fades, APIs change.
**Counter**: Verify against current documentation.

### 9. "The error won't happen in practice"
**Reality**: Production finds every edge case.
**Counter**: Handle it anyway. Errors always happen.

### 10. "I'll document it later"
**Reality**: "Later" never comes.
**Counter**: Document now. Future you will thank present you.

### 11. "This is too complex to test"
**Reality**: Complex code needs tests most.
**Counter**: Break it down. Test each piece.

### 12. "I'll just inline it"
**Reality**: Inlining creates duplication.
**Counter**: Extract to a function. Name it clearly.

## Detection Signals
Watch for these phrases that indicate rationalization:
- "Just this once"
- "I'll come back to it"
- "It's probably fine"
- "Nobody will notice"
- "It's not that important"
- "I don't have time"
- "It's just a small thing"

## Enforcement Rules
1. Every claim needs evidence
2. Every change needs tests
3. Every file needs to be read before editing
4. Every shortcut needs justification
5. Every "simple" change gets verified

## Quality Criteria
- No rationalizations accepted without evidence
- All steps completed, not skipped
- Verification always performed
- Documentation written with code
- Tests accompany all changes

## Examples

### Anti-Pattern: "I'll skip the linter"
**Agent**: "The code looks correct, I'll skip linting to save time."
**Counter**: "Run the linter. If it passes, we save 10 seconds. If it fails, we save a production bug."

### Anti-Pattern: "I'll fix the type error later"
**Agent**: "I'll add `as any` for now and fix the types later."
**Counter**: "Fix the types now. `as any` hides real problems."

### Anti-Pattern: "This edge case won't happen"
**Agent**: "Users won't submit empty strings, so I won't validate."
**Counter**: "Users submit everything. Validate all inputs."
