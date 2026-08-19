---
name: context-engineering
description: Feed agents the right information at the right time. Rules files, context packing, progressive disclosure.
---

# Context Engineering

## Description
Design and manage what information agents receive, when they receive it, and in what format. Optimize context windows by packing relevant information and excluding noise. Use progressive disclosure to reveal information as needed.

## When to Activate
- Setting up a new project with AI agents
- Agents are hitting context limits or producing unfocused output
- Creating rules files (CLAUDE.md, AGENTS.md, .cursorrules)
- Designing prompts for multi-step workflows
- Debugging agent performance issues related to context

## Process

### Step 1: Audit Current Context
- What information is currently available to agents?
- What's missing that agents keep asking for?
- What's present that agents never use?
- Where are agents making wrong assumptions?

### Step 2: Design Context Architecture
Structure information in layers:

**Layer 1: Always Present**
- Project overview (2-3 sentences)
- Tech stack and conventions
- File structure summary
- Critical rules (security, style)

**Layer 2: On Request**
- Detailed API documentation
- Architecture diagrams
- Test examples
- Deployment instructions

**Layer 3: Just-in-Time**
- Specific file contents (loaded via grep/glob)
- Related code context
- Error logs and stack traces

### Step 3: Create Rules Files
Write project-specific rules that agents always load:
- File naming conventions
- Import ordering rules
- Testing requirements
- Security constraints
- Common patterns and anti-patterns

### Step 4: Implement Progressive Disclosure
- Start with high-level context
- Load detailed context only when needed
- Use search tools to find relevant code
- Avoid dumping entire files unless necessary

### Step 5: Test and Iterate
- Run agents on real tasks
- Monitor where context is insufficient
- Adjust what's included in each layer
- Refine rules based on agent behavior

## Context Packing Guidelines
- Keep rules files under 200 lines
- Use concrete examples over abstract descriptions
- Include file paths, not just concepts
- Reference actual code patterns from the project
- Remove stale information immediately

## Quality Criteria
- Agents ask fewer clarifying questions
- Agents produce code that matches project conventions
- Agents don't repeat mistakes covered by rules
- Context fits within model limits without truncation
- Agents can handle tasks with minimal back-and-forth

## Examples

### Rules File Structure
```markdown
# Project Rules

## Tech Stack
- Next.js 14 with App Router
- TypeScript strict mode
- Prisma ORM
- PostgreSQL

## Conventions
- Components in src/components/ use PascalCase
- Utilities in src/lib/ use camelCase
- All API routes in src/app/api/

## Testing
- Unit tests: *.test.ts alongside source
- E2E tests: tests/ directory
- Minimum 80% coverage for src/lib/

## Security
- Never expose API keys in client code
- Always validate input with zod
- Use parameterized queries (Prisma handles this)
```
