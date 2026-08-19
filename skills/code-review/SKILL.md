# Code Review

## Description
Systematic review of code changes to ensure quality, correctness, and adherence to standards.

## When to Activate
- Before commits
- Before pull requests
- After completing a feature or fix

## Process

### 1. Check Correctness
- Does the code do what it claims?
- Are edge cases handled?
- Are errors handled gracefully?
- Are tests comprehensive?

### 2. Check Style
- Follows project conventions?
- Clear naming?
- Appropriate comments?
- DRY (Don't Repeat Yourself)?

### 3. Check Security
- No hardcoded secrets
- Input validation present
- SQL injection prevented
- XSS vulnerabilities addressed

### 4. Check Performance
- No unnecessary computations
- Appropriate data structures
- No N+1 queries
- Memory leaks prevented

## Checklist
- [ ] Tests pass
- [ ] No TODO/FIXME comments
- [ ] Documentation updated
- [ ] No console.log/print statements
- [ ] Error messages are helpful
- [ ] Dependencies are necessary

## Severity Levels
- **Critical**: Security holes, data loss risks
- **Major**: Bugs, performance issues
- **Minor**: Style, naming, minor improvements
- **Nit**: Personal preferences, cosmetic

## Quality Criteria
- Code is correct, readable, and maintainable
- No critical or major issues
- Tests provide good coverage
- Security considerations addressed

## Anti-Patterns
- Rubber-stamping reviews
- Being too pedantic about style
- Not testing the code locally
- Approving without understanding
