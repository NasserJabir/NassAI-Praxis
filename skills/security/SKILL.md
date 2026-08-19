# Security

## Description
Background security awareness to prevent common vulnerabilities in code.

## When to Activate
- Always (background check during development)
- When handling user input
- When working with authentication
- When accessing sensitive data

## Process

### 1. Check Inputs
- Validate all external input
- Sanitize before processing
- Use parameterized queries
- Reject unexpected data

### 2. Check Authentication
- Use established libraries (don't roll your own)
- Store passwords securely (bcrypt, argon2)
- Implement proper session management
- Use HTTPS everywhere

### 3. Check Data
- Encrypt sensitive data at rest
- Minimize data collection
- Implement proper access controls
- Log security events

### 4. Check Dependencies
- Use known, maintained libraries
- Keep dependencies updated
- Scan for vulnerabilities
- Avoid deprecated packages

## OWASP Top 10
1. Injection (SQL, NoSQL, OS, LDAP)
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting (XSS)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring

## Common Vulnerabilities
- SQL Injection: Use parameterized queries
- XSS: Escape output, use CSP headers
- CSRF: Use tokens, SameSite cookies
- SSRF: Validate and sanitize URLs
- Path Traversal: Validate file paths

## Quality Criteria
- No hardcoded secrets
- Input validation present
- Authentication uses best practices
- Dependencies are secure and updated

## Anti-Patterns
- Security through obscurity
- Rolling your own crypto
- Trusting client-side validation
- Logging sensitive data
