---
name: pr-review
description: Five specialist agents in parallel: correctness, error-handling, type-design, test-risk, security.
triggers:
  - "GitHub pull request review requested"
tokens: ~819
---

# PR Review

## Description
Review pull requests using five specialist agents running in parallel. Each agent focuses on a specific dimension of code quality. Combine their findings into a comprehensive review.

## When to Activate
- Pull request is ready for review
- Need comprehensive code quality analysis
- Before merging significant changes
- When code touches critical systems
- After receiving review requests from team

## Process

### Step 1: Prepare Review Context
Gather information for agents:
- Full diff of the PR
- Description and linked issues
- Related code files
- Test files and coverage
- CI/CD results

### Step 2: Dispatch Five Specialist Agents

**Agent 1: Correctness Specialist**
- Does the code do what it claims?
- Are edge cases handled?
- Are assumptions documented?
- Are algorithms correct?

**Agent 2: Error Handling Specialist**
- Are all error paths covered?
- Are errors properly propagated?
- Are user-facing errors helpful?
- Are there unhandled promise rejections?

**Agent 3: Type Design Specialist**
- Are types precise (not too loose)?
- Are there unnecessary type assertions?
- Is the API surface well-typed?
- Are generics used appropriately?

**Agent 4: Test Risk Specialist**
- Are new code paths tested?
- Are edge cases covered?
- Do tests verify behavior, not implementation?
- Are tests reliable (no flakiness)?

**Agent 5: Security Specialist**
- Are inputs validated?
- Is authentication/authorization checked?
- Are secrets handled properly?
- Are there injection vulnerabilities?

### Step 3: Collect Findings
Each agent reports:
- **Critical**: Must fix before merge
- **Warning**: Should fix, potential issues
- **Suggestion**: Could improve, optional
- **Praise**: Good patterns worth noting

### Step 4: Synthesize Review
Combine agent findings into:
- Prioritized list of issues
- Positive observations
- Specific code suggestions
- Overall assessment

### Step 5: Present Review
Format review as:
1. Summary (1-2 sentences)
2. Critical issues (must fix)
3. Warnings (should fix)
4. Suggestions (could improve)
5. Positive observations

## Review Quality Criteria
- All five dimensions covered
- Findings are specific (line numbers, code snippets)
- Suggestions include concrete fixes
- Positive feedback included
- No false positives

## Severity Levels
- **Critical**: Bugs, security vulnerabilities, data loss risks
- **Warning**: Potential bugs, poor error handling, type issues
- **Suggestion**: Style improvements, minor optimizations
- **Praise**: Good patterns, clean code, thorough testing

## Examples

### Review Output
```markdown
## PR Review: Add user authentication

### Summary
Adds JWT-based authentication with proper error handling and tests.

### Critical Issues
None

### Warnings
1. `auth.ts:45` - Token expiry not checked before use
2. `auth.ts:78` - Error message leaks internal details

### Suggestions
1. `auth.ts:23` - Consider using `as const` for token types
2. `auth.test.ts:45` - Add test for expired token case

### Praises
- Excellent error handling in middleware
- Clear type definitions for auth state
- Good test coverage for happy paths
```
