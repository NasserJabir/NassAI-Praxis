# Pattern Selection Skill

## Decision Framework
1. Start with the simplest solution that works
2. Add complexity only when requirements demand it
3. Consider operational overhead
4. Document the decision (ADR)

## Pattern Matrix

| Need | Pattern |
|------|---------|
| Simple CRUD | Monolith |
| Multiple teams, independent deploys | Microservices |
| High write throughput | Event sourcing |
| Complex queries on events | CQRS |
| Real-time updates | WebSockets / SSE |
| Async processing | Message queue |
| Serverless-friendly | Functions as a Service |

## Anti-Patterns to Avoid
- Distributed monolith (microservices without proper boundaries)
- Premature optimization
- Over-engineering from day one
- Skipping monitoring/observability

## ADR Template
```markdown
# ADR-NNN: [Decision Title]
- Status: proposed | accepted | deprecated
- Context: [situation]
- Decision: [what we decided]
- Consequences: [tradeoffs]
```
