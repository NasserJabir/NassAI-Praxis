---
name: system-architecture
description: Microservices, event-driven architecture, CQRS, saga patterns, and service mesh design for distributed systems.
triggers:
  - "cross-service boundaries or architecture decisions"
tokens: ~1217
---

# System Architecture

## Description
Guidance for designing scalable distributed systems: microservice decomposition, event-driven communication, CQRS/Event Sourcing, saga orchestration, and service mesh patterns. Derived from vasilyu1983/ai-agents-public.

## When to Activate
- Decomposing a monolith into services
- Designing inter-service communication patterns
- Implementing CQRS or Event Sourcing
- Orchestrating multi-service business processes (sagas)
- Evaluating service mesh or API gateway adoption
- Reviewing system architecture for scalability or reliability

## Process

### 1. Microservice Decomposition
- Decompose by business domain (DDD bounded contexts), not by technical layer
- Each service owns its data; no shared databases
- Start with a modular monolith; extract services only when clear boundaries emerge
- Define clear API contracts between services; prefer asynchronous over synchronous
- Size services by team ownership: one team, one service (two-pizza rule)

### 2. Event-Driven Architecture
- Use events for state changes that other services need to react to
- Publish events to a message broker (Kafka, RabbitMQ, NATS)
- Design events as immutable facts: entity.action (e.g., order.placed)
- Include correlation IDs for distributed tracing across event chains
- Handle event ordering requirements explicitly (partition by entity ID)
- Implement dead letter queues for failed event processing

### 3. CQRS and Event Sourcing
- **CQRS**: Separate read and write models when read/write workloads differ significantly
- **Event Sourcing**: Store state as a sequence of events; derive current state via replay
- Use CQRS for query-heavy domains (analytics dashboards, search)
- Use Event Sourcing when audit trail or temporal queries are required
- Project read models from event streams; rebuild projections on schema changes

### 4. Saga Patterns
- **Choreography**: Each service listens for events and decides next action; simple but hard to debug
- **Orchestration**: A central coordinator directs the workflow; easier to understand and modify
- Compensating transactions for rollback: every step must have a defined undo
- Use sagas for distributed transactions spanning 3+ services
- Persist saga state for crash recovery

### 5. Service Mesh and API Gateway
- API Gateway for external clients: authentication, rate limiting, request routing
- Service mesh (Istio, Linkerd) for internal traffic: mTLS, retries, circuit breaking
- Start without a service mesh; add only when cross-cutting network concerns justify the complexity
- Use sidecar pattern for observability and security without application changes

## Quality Criteria
- Services are independently deployable and scalable
- Inter-service communication uses well-defined contracts
- Failures are isolated (circuit breakers prevent cascading failures)
- Saga compensation logic is tested for every distributed transaction
- Event schemas are versioned and backward-compatible
- System handles partial failures gracefully (bulkhead pattern)

## References
- [vasilyu1983/ai-agents-public — System Architecture](https://github.com/vasilyu1983/ai-agents-public)
- [Building Microservices by Sam Newman](https://samnewman.io/books/building_microservices_2nd_edition/)
- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/)
- [Martin Fowler — CQRS](https://martinfowler.com/bliki/CQRS.html)
- [CNCF Landscape](https://landscape.cncf.io/)

## Examples

### Saga Orchestrator Pattern
```typescript
class OrderSaga {
  private steps: SagaStep[] = [
    { execute: (ctx) => inventory.reserve(ctx.orderId), compensate: (ctx) => inventory.release(ctx.orderId) },
    { execute: (ctx) => payment.charge(ctx.orderId, ctx.amount), compensate: (ctx) => payment.refund(ctx.orderId) },
    { execute: (ctx) => shipping.schedule(ctx.orderId), compensate: (ctx) => shipping.cancel(ctx.orderId) },
  ];

  async run(context: SagaContext) {
    const completed: number[] = [];
    for (let i = 0; i < this.steps.length; i++) {
      try {
        await this.steps[i].execute(context);
        completed.push(i);
      } catch (e) {
        for (const idx of completed.reverse()) {
          await this.steps[idx].compensate(context);
        }
        throw e;
      }
    }
  }
}
```

### Event-Driven Message with Correlation
```typescript
interface DomainEvent {
  eventType: string;
  aggregateId: string;
  correlationId: string;
  timestamp: string;
  payload: Record<string, unknown>;
}

const event: DomainEvent = {
  eventType: 'order.placed',
  aggregateId: 'ord_123',
  correlationId: 'corr_abc',
  timestamp: new Date().toISOString(),
  payload: { items: [...], total: 99.99 },
};
```
