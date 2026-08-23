---
version: "1.0.0"
author: "NassAI-Praxis maintainers"
---

# Security Policy

## Supported Scope

Security reports are welcome for the repository’s published Markdown knowledge, agent adapters, installation material, automation scripts, and any future release artifacts. Praxis is deliberately not a hosted service or agent runtime, so it does not operate a production API, database, daemon, or credentials store.

## Reporting a Vulnerability

Please use GitHub’s **private vulnerability reporting** route for this repository when available. Do not open a public issue for an unpatched vulnerability. If private reporting is unavailable, contact the repository owner privately through GitHub and include only the minimum detail needed to establish a secure channel.

Do not include API keys, passwords, tokens, private keys, customer information, or unredacted logs in a report. Replace sensitive values with clear placeholders.

## What to Include

Provide a concise description, affected path or adapter, reproduction steps using non-sensitive data, expected and observed behavior, impact, and any proposed mitigation. A maintainer should acknowledge a valid report, assess scope, and coordinate a fix or documented decision before public disclosure.

## Project Memory Safety

The repository’s Markdown memory policy is documented in [`docs/SECURITY.md`](docs/SECURITY.md). That procedure defines deny-list patterns and classification rules for prospective memory writes. It is an agent/integration procedure, not a hidden runtime enforcement service.

## Disclosure

Please allow reasonable time for assessment and remediation before publishing details. Credit is offered when requested and appropriate after a fix or mitigation is available.
