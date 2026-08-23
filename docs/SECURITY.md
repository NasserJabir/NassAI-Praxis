---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
classification: "internal"
---

# Memory Security Policy

Before **any** write to `memory/`, scan case-insensitively for the following patterns:

```text
api[_-]?key\s*[:=]\s*["']?[a-zA-Z0-9_-]{20,}
password\s*[:=]\s*["']?[^\s"']{8,}
token\s*[:=]\s*["']?[a-zA-Z0-9_-]{20,}
secret\s*[:=]\s*["']?[a-zA-Z0-9_-]{20,}
private[_-]?key
credential
aws_access_key_id
aws_secret_access_key
database_url (when it contains a password)
```

A match means **reject the write and warn the user**. Clean content must be classified as `public`, `internal`, or `sensitive`. Sensitive content without secrets belongs in `memory/private/`, and every allowed write must be recorded in `memory/security-audit.log`.
