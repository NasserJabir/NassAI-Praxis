---
name: brainstorming
description: Structured ideation process to explore requirements, alternatives, and design before writing any code.
version: "1.0.0"
triggers:
  - "requirements are vague; design alternatives needed"
tokens: ~366
---
# Brainstorming

## Description
Structured ideation process to explore requirements, alternatives, and design before writing any code.

## When to Activate
- Before writing any new code
- When receiving a new feature request
- When facing a design decision
- When the implementation approach is unclear

## Process

### 1. Understand Requirements
- Restate the goal in your own words
- Ask clarifying questions:
  - What problem does this solve?
  - Who is the user?
  - What are the constraints?
  - What is the success criteria?

### 2. Explore Alternatives
- List 2-3 possible approaches
- For each approach, note:
  - Pros
  - Cons
  - Complexity (low/medium/high)
  - Time estimate

### 3. Present Design
- Recommend one approach with rationale
- Include:
  - High-level architecture
  - Key components
  - Data flow
  - Edge cases

### 4. Get Approval
- Present to user
- Wait for explicit approval before proceeding
- Document decisions in code comments or PR description

## Quality Criteria
- Requirements fully understood before coding
- Multiple alternatives considered
- Trade-offs explicitly discussed
- User has approved the approach

## Examples
```
User: "Add user authentication"
Brainstorming output:
1. Questions: JWT vs session? Password reset flow? OAuth providers?
2. Alternatives: 
   - JWT (stateless, scalable, complex)
   - Sessions (simple, stateful, traditional)
3. Recommendation: JWT with refresh tokens
4. Awaiting approval...
```
