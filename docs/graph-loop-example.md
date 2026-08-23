---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Manus AI"
classification: "internal"
type: "graph-loop-example"
---

# Beginner Example: Add a Product Search Endpoint

This small Laravel + Vue-style task demonstrates the full graph and loop path without adding a runtime dependency.

```text
Task: Add product search
   ↓ assigned_to
Agent: Backend Developer
   ↓ uses
Persona: Hassan — prioritize clear boundaries and maintainability
   ↓ uses
Skill: API Design
   ↓ execution loop
Understand → Plan → Execute → Verify
   ↓ produces
Evaluation: endpoint is tested, authorized, paginated, and consistent
   ↓ creates
Experience: repository query reused the project’s API convention
   ↓ creates
Pattern: list endpoints use validated filters and stable pagination
   ↓ updates
Memory: semantic convention and episodic task record
   ↓ suggests
Future Task: reuse the search procedure for Orders
```

## What the Agent Reads

The agent starts with `praxis.config.md`, `memory/semantic/conventions.md`, and `memory/working/current.md`. It then traverses to the API-design skill, the Backend Developer agent, Hassan’s persona, and any relevant decision about API versioning or pagination. It does not load unrelated personas or all private memory.

## Example Result

```php
public function index(ProductSearchRequest $request): JsonResponse
{
    $products = $this->products->search($request->validated());

    return ProductResource::collection($products);
}
```

Verification checks authorization, request validation, pagination, response shape, and a feature test. If a query bug appears, the execution loop diagnoses and corrects it. The learning loop records the solution only if it is useful beyond this endpoint. After repeated successful use and a strong evaluation score, the evolution loop may propose a reusable search skill; a human must approve it before promotion.

This is Graph + Loop integration: a task produces an experience, the experience reveals a pattern, and the pattern informs a future task through explicit Markdown links and metadata.
