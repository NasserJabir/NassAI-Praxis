# Component Architecture Skill

## Principles
1. Single Responsibility — one component, one job
2. Composition over inheritance
3. Props down, events up
4. Container/presentational separation when warranted

## Checklist
- [ ] Component has clear props interface (TypeScript)
- [ ] Handles loading, error, and empty states
- [ ] Accessible (ARIA labels, keyboard nav, focus management)
- [ ] Responsive (mobile-first)
- [ ] Tests cover key interactions
- [ ] No hardcoded colors/tokens
- [ ] Under 300 lines

## Patterns
- Compound components for complex UIs
- Render props for flexible rendering
- Hooks for shared stateful logic
- Polymorphic `as` prop for element flexibility
