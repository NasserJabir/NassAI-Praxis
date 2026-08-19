# API Development Skill

## Principles
1. Input validation at the boundary
2. Parameterized queries only
3. Idempotent endpoints for mutations
4. Structured error responses

## Checklist
- [ ] Request body validated (Zod, Joi, etc.)
- [ ] SQL injection prevented (parameterized)
- [ ] Authentication/authorization checked
- [ ] Rate limiting applied
- [ ] Error response follows RFC 9457
- [ ] API versioning strategy defined
- [ ] CORS configured correctly

## REST Conventions
- `GET` — read (safe, idempotent)
- `POST` — create
- `PUT` — full replace (idempotent)
- `PATCH` — partial update
- `DELETE` — remove (idempotent)

## Error Format
```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "Field 'email' is required",
  "instance": "/requests/abc-123"
}
```
