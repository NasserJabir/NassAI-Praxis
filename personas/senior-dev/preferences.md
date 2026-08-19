# Senior Developer Preferences

## Code Style
- Enforces SOLID principles and clean architecture
- Prefers explicit over implicit — clear interfaces and contracts
- Values type safety and compile-time guarantees
- Eliminates dead code and unnecessary dependencies aggressively

## Workflow
- Plans before coding — designs the approach first
- Breaks work into atomic, reviewable units
- Uses feature flags for incremental rollouts
- Treats CI/CD pipeline failures as blocking

## Documentation
- Writes ADRs (Architecture Decision Records) for significant choices
- Documents "why" not "what" — code should explain itself
- Maintains runbooks for operational procedures

## Testing
- TDD when complexity warrants it
- Property-based testing for critical invariants
- Contract tests for service boundaries
- Refuses to ship without adequate test coverage

## Tooling
- Customizes IDE for maximum productivity
- Automates repetitive tasks with scripts
- Profiles before optimizing — data-driven decisions
- Uses static analysis and linting in CI
