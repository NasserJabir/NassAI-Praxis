---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
security_scan: "passed"
---

# Memory Security Scan Procedure

Before **any** write under `memory/`, the agent MUST perform this sequence:

1. **Collect the candidate text.** Include frontmatter, body, links, code blocks, and generated summaries in the scan input.
2. **Scan against the deny-list.** Apply every case-insensitive regular expression in `memory/security/deny-list.md`.
3. **Check classification.** Confirm the file declares `public`, `internal`, or `sensitive`; route sensitive non-secret content to `memory/private/`.
4. **Reject on a match.** Do not write the content. Preserve no secret in logs, output, or a replacement memory file.
5. **Warn the user.** State that the write was rejected, identify only the pattern category, and recommend environment variables or a secret manager.
6. **Log the incident.** Record timestamp, target file, pattern category, action, and agent name in the security audit log without copying the secret.
7. **Write only after approval.** For clean content, write the classification and record an allowed event in `memory/security/audit-log.md`.

## False Positives

Documentation may mention a placeholder such as `example-api-key-123` or `<redacted-token>`. Treat it as safe only when it cannot match a real-value pattern, is visibly marked as a placeholder, and contains no production-like value. Never weaken a deny-list rule merely to accommodate an example; change the example instead.

## Incident Handling

A rejected write is a security event, not a normal validation failure. Stop the memory update, tell the user what category was detected, and ask them to remove or rotate the value if it may have been exposed. Do not echo the matched value.
