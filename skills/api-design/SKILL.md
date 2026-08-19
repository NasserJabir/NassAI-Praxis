---
name: api-design
description: Contract-first API design with Hyrum's Law awareness, versioning strategies, error semantics, and boundary validation.
---

# API Design

## Description
Structured approach to designing robust, maintainable APIs: contract-first development, semantic versioning, error handling semantics, and input validation at system boundaries. Derived from addyosmani/agent-skills.

## When to Activate
- Designing new REST, GraphQL, or gRPC APIs
- Defining API contracts or OpenAPI/protobuf schemas
- Implementing versioning or deprecation strategies
- Reviewing error handling patterns in API layers
- Validating inputs at service boundaries
- Integrating third-party APIs

## Process

### 1. Contract-First Design
- Define the schema (OpenAPI 3.1, protobuf, GraphQL SDL) before writing implementation
- Use code generation from contracts to ensure client/server alignment
- Version the contract alongside the implementation in source control
- Publish contracts to a registry (e.g., Apicurio, Buf Schema Registry)

### 2. Hyrum's Law Awareness
- Every observable behavior of your API will be depended upon by someone
- Document which behaviors are guaranteed vs. incidental
- Avoid breaking changes to undocumented behavior; treat the entire surface as the contract
- Use `sunsetting` headers and deprecation timelines for planned removals

### 3. One-Version Rule
- Prefer a single, current API version at all times
- Use additive (non-breaking) evolution instead of version increments
- Only create a new version when breaking changes are unavoidable
- Maintain at most N-1 previous version; set clear sunset dates

### 4. Error Semantics
- Use appropriate HTTP status codes: 4xx for client errors, 5xx for server errors
- Return structured error responses with `code`, `message`, and `details` fields
- Use RFC 7807 Problem Details for HTTP APIs format
- Never expose internal stack traces, SQL errors, or implementation details
- Distinguish between validation errors (422), not-found (404), and unauthorized (401/403)

### 5. Boundary Validation
- Validate all inputs at the API boundary; never trust client data
- Use schema validation libraries (Zod, Joi, Ajv) for request body/query/params
- Enforce type safety at serialization/deserialization boundaries
- Validate file uploads: size limits, MIME types, virus scanning
- Rate limit per-client and per-endpoint

## Quality Criteria
- API schema exists before implementation begins
- All endpoints return RFC 7807 error responses on failure
- No `any` types in API contracts
- Input validation covers all user-supplied fields
- Breaking changes follow semver with documented migration path
- API documentation is generated from the contract, not manually maintained

## References
- [addyosmani/agent-skills — API Design](https://github.com/addyosmani/agent-skills)
- [Hyrum's Law — hyrumslaw.com](https://www.hyrumslaw.com/)
- [RFC 7807 Problem Details](https://tools.ietf.org/html/rfc7807)
- [OpenAPI 3.1 Specification](https://spec.openapis.org/oas/latest.html)
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)

## Examples

### RFC 7807 Error Response
```json
{
  "type": "https://api.example.com/errors/validation-failed",
  "title": "Validation Failed",
  "status": 422,
  "detail": "The request body contains 2 invalid fields.",
  "errors": [
    { "field": "email", "reason": "must be a valid email address" },
    { "field": "age", "reason": "must be between 0 and 150" }
  ]
}
```

### Zod Boundary Validation
```typescript
const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
  age: z.number().int().min(0).max(150),
});

app.post('/users', (req, res) => {
  const result = CreateUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(422).json({
      type: 'https://api.example.com/errors/validation-failed',
      title: 'Validation Failed',
      status: 422,
      errors: result.error.issues.map(i => ({
        field: i.path.join('.'),
        reason: i.message,
      })),
    });
  }
  // proceed with result.data
});
```
