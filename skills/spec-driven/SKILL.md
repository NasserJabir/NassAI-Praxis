---
name: spec-driven
description: Spec before code. Interface contracts with Given/When/Then + TypeScript interface + invariants.
---

# Spec-Driven Development

## Description
Write specifications before code. Define interface contracts with Given/When/Then scenarios, TypeScript interfaces, and explicit invariants. Never write implementation without a spec.

## When to Activate
- Starting any new feature or module
- Before writing API endpoints
- When designing data models
- Before implementing business logic
- When multiple developers will use the same interface

## Process

### Step 1: Write the Spec First
Before any code, create a spec file:
```
specs/
└── [feature-name].spec.md
```

### Step 2: Define the Interface Contract
Write the TypeScript interface:
```typescript
// What the interface looks like
interface UserService {
  createUser(input: CreateUserInput): Promise<User>;
  getUser(id: string): Promise<User | null>;
  updateUser(id: string, input: UpdateUserInput): Promise<User>;
}
```

### Step 3: Write Given/When/Then Scenarios
```markdown
## Scenario: Create valid user
- **Given** a valid CreateUserInput
- **When** createUser is called
- **Then** a new User is returned with generated id
- **And** the user is persisted

## Scenario: Create user with duplicate email
- **Given** a CreateUserInput with an existing email
- **When** createUser is called
- **Then** a ConflictError is thrown
- **And** no user is created
```

### Step 4: Define Invariants
```markdown
## Invariants
- User.id is always a valid UUID
- User.email is unique across all users
- User.createdAt is never modified after creation
- User.updatedAt changes on every update
```

### Step 5: Review and Approve
- Spec reviewed before implementation begins
- All edge cases identified in advance
- Tests derived directly from spec

### Step 6: Implement to Spec
- Code must satisfy all spec requirements
- Tests must cover all Given/When/Then scenarios
- Invariants must be enforced in code

## Spec File Structure
```markdown
# [Feature Name] Specification

## Interface Contract
[TypeScript interface]

## Scenarios
### Scenario: [Name]
- **Given** [precondition]
- **When** [action]
- **Then** [expected result]

## Invariants
- [Rule that must always be true]

## Edge Cases
- [Unusual but valid scenarios]
- [Error conditions]
- [Boundary values]
```

## Quality Criteria
- Spec is written before any implementation code
- Interface is complete and type-safe
- All scenarios have clear Given/When/Then
- Invariants are enforced in code
- Tests directly trace back to spec scenarios

## Examples

### Bad Approach
```
Let me write the function and figure out the edge cases as I go.
```

### Good Approach
```
1. Write spec with 5 scenarios
2. Define interface with all types
3. List 3 invariants
4. Review spec with team
5. Implement code that passes all scenarios
6. Add invariant checks
7. Write tests from scenarios
```
