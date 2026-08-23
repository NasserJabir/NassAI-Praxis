---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
security_scan: "passed"
---

# Praxis Secret Deny-List

All patterns are matched case-insensitively before a memory write. Examples are safe placeholders, not usable credentials.

| Name | Regex | Severity | Example match |
|---|---|---|---|
| OpenAI API key | `\bsk-(?:proj|live|test)-[A-Za-z0-9_-]{20,}\b` | critical | `sk-proj-<redacted-placeholder>` |
| AWS access key | `\bAKIA[0-9A-Z]{16}\b` | critical | `AKIA<redacted-16-chars>` |
| AWS secret key | `(?i)aws_secret_access_key\s*[:=]\s*[^\s]+` | critical | `aws_secret_access_key=<redacted>` |
| GitHub token | `\bgh[pousr]_[A-Za-z0-9_]{20,}\b` | critical | `ghp_<redacted-placeholder>` |
| Stripe secret key | `\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b` | critical | `sk_test_<redacted-placeholder>` |
| Generic API key | `(?i)\bapi[_-]?key\b\s*[:=]\s*["']?[A-Za-z0-9_./+-]{20,}` | critical | `api_key=<redacted-long-value>` |
| Password assignment | `(?i)\bpassword\b\s*[:=]\s*["']?[^\s"']{8,}` | critical | `password=<redacted-value>` |
| Database URL credential | `(?i)\b(?:mysql|postgres(?:ql)?|mongodb(?:\+srv)?|redis)://[^\s:@]+:[^\s@]+@` | critical | `postgres://user:<redacted>@host/db` |
| JWT secret assignment | `(?i)\b(?:jwt[_-]?secret|jwt_secret_key)\b\s*[:=]\s*[^\s]+` | critical | `jwt_secret=<redacted-value>` |
| Private key header | `-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----` | critical | `-----BEGIN PRIVATE KEY-----` |
| OAuth bearer token | `(?i)\bBearer\s+[A-Za-z0-9._~-]{20,}` | critical | `Bearer <redacted-token>` |
| OAuth client secret | `(?i)\bclient[_-]?secret\b\s*[:=]\s*[^\s]+` | critical | `client_secret=<redacted>` |
| Secret environment variable | `(?i)\b[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|API_KEY|PRIVATE_KEY)[A-Z0-9_]*\s*=\s*[^\s]+` | critical | `SERVICE_TOKEN=<redacted>` |
| Authorization header | `(?i)\bAuthorization\s*:\s*(?:Basic|Bearer)\s+[^\s]+` | critical | `Authorization: Bearer <redacted>` |
| Credential file reference | `(?i)\b(?:credentials?|.npmrc|.pypirc|kubeconfig)\b.*(?:token|password|secret)` | warning | `credentials file contains <redacted>` |
| High-entropy opaque value | `\b[A-Za-z0-9+/=_-]{40,}\b` | warning | `<redacted-high-entropy-value>` |

A warning is still blocked when the value is written to memory. The severity indicates escalation priority, not permission to store the value.
