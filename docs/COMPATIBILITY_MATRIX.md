---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# Praxis Agent Compatibility Matrix

| Agent | Memory | Persona | Skills | Evaluation | Evolution | Lazy Loading | Token Budget |
|---|---|---|---|---|---|---|---|
| Claude Code | Full | Full | Full | Full | Full | Yes | 8K / 200K |
| Cursor | Full | Full | Full | Full | Full | Yes | 8K / 128K |
| Copilot | Lite | Lite | Full | No | No | Yes | 2K / 8K |
| Kimi | Full | Full | Full | Full | Full | Yes | 10K / 200K+ |
| Codex | Full | Full | Full | Full | Full | Yes | 8K / 128K |
| Gemini CLI | Full | Full | Full | Full | Full | Aggressive | 15K / 1M+ |
| OpenCode | Full | Full | Full | Full | Full | Yes | 5K–10K / model-dependent |
| Pi | Lite | Full | Lite | No | No | Yes | 3K / lightweight |
| Windsurf | Full | Full | Full | Full | Full | Yes | 8K / 128K |

## Legend

- **Full:** Complete support for the feature through the four-file plugin pattern.
- **Lite:** Supported through a smaller context or lighter host integration.
- **No:** Not guaranteed by the host integration; the project files remain available for manual use.
- **Aggressive:** The host can load more context, but lazy loading remains recommended for efficiency.
