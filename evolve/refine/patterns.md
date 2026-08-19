# Pattern Tracking

Track what works, what fails, and what should change. Update after every significant task.

---

## Successful Patterns

Patterns that worked well and should be repeated:

### Pattern: [Name]
- **Discovered:** YYYY-MM-DD
- **Context:** When this applies
- **Steps:**
  1. Step one
  2. Step two
- **Why it works:** Reason
- **Confidence:** 0.0 - 1.0 (increases with repetition)
- **Used in:** Task A, Task B, Task C

---

## Anti-Patterns

Patterns that failed and should be avoided:

### Anti-Pattern: [Name]
- **Discovered:** YYYY-MM-DD
- **Context:** When this went wrong
- **What happened:** Description of failure
- **Root cause:** Why it failed
- **Prevention:** How to avoid it
- **Severity:** low / medium / high / critical

---

## User Preferences

Track what the user likes and dislikes:

### Likes
- [ ] Prefers functional programming over OOP
- [ ] Wants detailed error messages
- [ ] Likes verbose commit messages
- [ ] ...

### Dislikes
- [ ] Dislikes inline styles
- [ ] Dislikes unnecessary comments
- [ ] Dislikes long functions
- [ ] ...

### Communication Style
- Prefers: brief / moderate / detailed
- Language: English / Arabic / Bilingual
- Examples: yes / no
- Tone: formal / casual / technical

---

## Codebase Conventions

Project-specific patterns discovered during work:

### Naming
- Components: PascalCase
- Functions: camelCase
- Files: kebab-case
- Constants: UPPER_SNAKE_CASE

### Architecture
- State management: [pattern]
- API calls: [pattern]
- Error handling: [pattern]
- Testing: [pattern]

### Performance
- Lazy loading: [strategy]
- Caching: [strategy]
- Optimization: [priority]

---

## Decision Log

Record significant decisions and their rationale:

### Decision: [Title]
- **Date:** YYYY-MM-DD
- **Context:** Why this decision was needed
- **Options considered:**
  1. Option A — pros/cons
  2. Option B — pros/cons
- **Chosen:** Option X
- **Rationale:** Why this was selected
- **Outcome:** What actually happened
- **Confidence:** 0.0 - 1.0

---

## Update Protocol

After each task:

1. **If approach worked:** Add to Successful Patterns
2. **If approach failed:** Add to Anti-Patterns
3. **If user gave feedback:** Update User Preferences
4. **If discovered convention:** Add to Codebase Conventions
5. **If made a choice:** Add to Decision Log

### Confidence Scoring

- **0.0-0.3:** Initial observation, needs more data
- **0.3-0.6:** Partially validated, used 1-2 times
- **0.6-0.8:** Well validated, used 3+ times
- **0.8-1.0:** Highly validated, universally applicable
