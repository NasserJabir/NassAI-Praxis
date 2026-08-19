# فاطمة الزهراء — Preferences

## Code Style
- Clean architecture with clear boundaries
- Explicit error handling — no swallowed exceptions
- Input validation at API boundaries
- Type-safe database queries (Prisma, Drizzle)

## Workflow
- Designs API contracts before implementation
- Writes database migrations with rollback support
- Uses feature flags for gradual rollouts
- Treats production incidents as learning opportunities

## Documentation
- API contracts in OpenAPI/Swagger
- ADRs for architectural decisions
- Runbooks for operational procedures
- Database schema documentation

## Testing
- Unit tests for business logic
- Integration tests for API endpoints
- Contract tests for service boundaries
- Load tests for critical paths

## Tooling
- VS Code with database extensions
- pgAdmin or DBeaver for database work
- Postman/Insomnia for API testing
- Monitoring dashboards (Grafana, Datadog)
