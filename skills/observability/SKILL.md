---
name: observability
description: Structured logging, RED metrics, OpenTelemetry distributed tracing, and alerting for production systems.
---

# Observability

## Description
Building observable systems: structured logging standards, RED metrics (Rate, Errors, Duration), OpenTelemetry distributed tracing, and actionable alerting. Derived from addyosmani/agent-skills.

## When to Activate
- Setting up logging, metrics, or tracing for a service
- Debugging production issues or incidents
- Configuring dashboards or alerts (Grafana, Datadog, PagerDuty)
- Instrumenting code with OpenTelemetry or similar frameworks
- Reviewing observability coverage or gaps
- Post-incident: improving observability to prevent recurrence

## Process

### 1. Structured Logging
- Output logs as structured JSON, not plain text
- Include standard fields: `timestamp`, `level`, `message`, `service`, `traceId`, `spanId`
- Use correlation IDs to link logs across service boundaries
- Never log sensitive data (passwords, tokens, PII); mask or redact
- Use appropriate log levels: DEBUG (development), INFO (operations), WARN (recoverable issues), ERROR (failures)
- Implement log aggregation (ELK, Loki, CloudWatch) for centralized search

### 2. RED Metrics
- **Rate**: Requests per second (throughput)
- **Errors**: Error rate (failed requests / total requests)
- **Duration**: Latency distribution (p50, p95, p99)
- Instrument every service endpoint with these three metrics
- Use histograms for duration to enable percentile-based alerts
- Label metrics by endpoint, method, status code, and service name
- Export via Prometheus, StatsD, or OpenTelemetry Metrics

### 3. Distributed Tracing
- Use OpenTelemetry for vendor-neutral instrumentation
- Create spans for every significant operation (HTTP calls, DB queries, cache lookups)
- Propagate trace context across service boundaries (W3C TraceContext)
- Add semantic attributes: `http.method`, `db.statement`, `user.id`
- Sample strategically: 100% for errors, 1-10% for successful requests
- Use Jaeger, Tempo, or Zipkin as trace backends

### 4. Alerting Strategy
- Alert on symptoms (user impact), not causes (CPU usage)
- Use multi-window multi-burn-rate alerts for SLO-based alerting
- Define SLOs: availability (99.9%), latency (p99 < 1s), error rate (< 0.1%)
- Severity levels: P1 (user-facing outage), P2 (degraded experience), P3 (internal issue)
- Route alerts via PagerDuty, Slack, or Opsgenie based on severity
- Require runbooks for every P1/P2 alert

### 5. Dashboard Design
- Service overview: RED metrics, SLO burn rate, dependency health
- Endpoint detail: per-route latency, error breakdown, throughput over time
- Infrastructure: CPU, memory, disk, network per instance
- Business metrics: signups, orders, revenue aligned with technical metrics
- Use consistent time ranges and refresh intervals across panels

## Quality Criteria
- Every service emits structured logs with correlation IDs
- RED metrics are collected for all endpoints
- Distributed traces cover critical user journeys end-to-end
- Alerts are actionable (on-call responds within 5 minutes for P1)
- Dashboards exist for every service and are maintained
- No PII or secrets appear in any observability signal

## References
- [addyosmani/agent-skills — Observability](https://github.com/addyosmani/agent-skills)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [Google SRE Book — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Prometheus Best Practices](https://prometheus.io/docs/practices/)
- [Grafana Dashboard Best Practices](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/)

## Examples

### OpenTelemetry Instrumentation
```typescript
import { trace, SpanStatusCode } from '@opentelemetry/api';

const tracer = trace.getTracer('order-service');

async function processOrder(orderId: string) {
  return tracer.startActiveSpan('processOrder', async (span) => {
    try {
      span.setAttribute('order.id', orderId);
      const order = await fetchOrder(orderId);
      span.setAttribute('order.total', order.total);
      await chargePayment(order);
      span.setStatus({ code: SpanStatusCode.OK });
      return order;
    } catch (e) {
      span.setStatus({ code: SpanStatusCode.ERROR, message: e.message });
      span.recordException(e);
      throw e;
    } finally {
      span.end();
    }
  });
}
```

### Structured Log Format
```json
{
  "timestamp": "2026-08-19T17:00:00.000Z",
  "level": "ERROR",
  "service": "order-service",
  "message": "Payment processing failed",
  "traceId": "4bf92f3577b34da6a3ce929d0e0e4736",
  "spanId": "00f067aa0ba902b7",
  "orderId": "ord_123",
  "error": {
    "type": "PaymentDeclined",
    "message": "Card declined by issuer"
  }
}
```

### Prometheus RED Metrics
```typescript
import { Counter, Histogram } from 'prom-client';

const httpRequestTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5],
});

// In middleware:
httpRequestTotal.inc({ method, route, status });
httpRequestDuration.observe({ method, route }, duration);
```
