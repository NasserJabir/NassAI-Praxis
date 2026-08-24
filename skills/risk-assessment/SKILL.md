---
name: risk-assessment
description: Risk-based question flow. Security, external API, data changes trigger different question sets.
triggers:
  - "evaluating blast radius of risky changes"
tokens: ~929
---

# Risk Assessment

## Description
Assess risk level of changes and apply appropriate scrutiny. Security, external API, and data schema changes trigger specific question sets. Scale review depth to actual risk.

## When to Activate
- Starting work on any code change
- Before implementing features that touch security
- When modifying database schemas
- When integrating external APIs
- When changing authentication or authorization
- When handling sensitive data

## Process

### Step 1: Classify Change Risk Level

**Low Risk** (standard review)
- UI text changes
- Internal documentation
- Comment updates
- Test additions
- Refactoring with full test coverage

**Medium Risk** (enhanced review)
- New features with tests
- Internal API changes
- Configuration changes
- Dependency updates

**High Risk** (rigorous review)
- Security-related changes
- Authentication/authorization changes
- Database schema changes
- External API integrations
- Payment processing changes
- Data migration scripts

### Step 2: Apply Risk-Specific Questions

**Security Questions** (if security-related):
- Are all inputs validated and sanitized?
- Is authentication required for this endpoint?
- Are permissions checked for this action?
- Are secrets stored securely (not in code)?
- Is sensitive data encrypted at rest and in transit?
- Are there SQL injection or XSS vulnerabilities?

**External API Questions** (if integrating with external services):
- What happens when the external API is down?
- Is there a timeout configured?
- Is there retry logic with backoff?
- Is the API response validated?
- Are API keys stored securely?
- Is there rate limiting?

**Data Change Questions** (if modifying schema):
- Is there a migration script?
- Can the migration be rolled back?
- Does it preserve existing data?
- Are indexes updated appropriately?
- Is there a backup strategy?
- Are foreign key constraints maintained?

### Step 3: Determine Review Depth

| Risk Level | Review Depth | Approval Required |
|------------|--------------|-------------------|
| Low | Standard | Any reviewer |
| Medium | Enhanced | Senior reviewer |
| High | Rigorous | Security + Senior |

### Step 4: Execute Risk-Appropriate Checks
- Run additional tests for high-risk changes
- Perform security scan for security changes
- Verify rollback procedures for data changes
- Test failure modes for external API changes

### Step 5: Document Risk Assessment
Include in PR description:
- Risk level classification
- Specific questions addressed
- Additional checks performed
- Any remaining concerns

## Risk Assessment Checklist
- [ ] Change classified as Low/Medium/High
- [ ] Risk-specific questions answered
- [ ] Appropriate tests added
- [ ] Rollback plan documented (if High risk)
- [ ] Security review completed (if security-related)

## Quality Criteria
- Risk level accurately reflects actual danger
- High-risk changes get appropriate scrutiny
- Low-risk changes don't block progress
- All risk-specific questions are answered
- Assessment is documented for future reference

## Examples

### Low Risk Change
```
Change: Update button text from "Submit" to "Send"
Risk Level: Low
Questions: None required
Review: Standard code review
```

### High Risk Change
```
Change: Add password reset endpoint
Risk Level: High
Security Questions:
- [x] Input validation (email format)
- [x] Rate limiting (5 attempts/hour)
- [x] Token expiry (1 hour)
- [x] Secure token generation
- [x] No user enumeration in error messages
Additional Checks:
- Penetration test recommended
- Security team review required
```
