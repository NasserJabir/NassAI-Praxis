---
name: performance-tuning
description: Core Web Vitals optimization, query performance, caching strategies, CDN configuration, and bundle analysis.
triggers:
  - "latency/throughput optimization required"
tokens: ~1134
---

# Performance Tuning

## Description
Practical guidance for measuring and improving application performance: Core Web Vitals, database query optimization, multi-layer caching, CDN configuration, and JavaScript bundle analysis. Derived from addyosmani/agent-skills.

## When to Activate
- Lighthouse or Core Web Vitals scores are below target
- Investigating slow page loads or API response times
- Optimizing JavaScript bundle size
- Configuring caching layers (browser, CDN, application)
- Analyzing and reducing time to first byte (TTFB)
- Reviewing code for performance regressions

## Process

### 1. Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5 seconds
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1
- Measure using CrUX (field data), Lighthouse, and Web Vitals library
- Track metrics in production via RUM (Real User Monitoring)

### 2. JavaScript Bundle Optimization
- Code-split by route: each page loads only its dependencies
- Tree-shake unused code; audit with `webpack-bundle-analyzer` or `source-map-explorer`
- Lazy-load below-the-fold images and non-critical components
- Use dynamic `import()` for heavy libraries (charts, editors, PDF renderers)
- Target: initial bundle < 200KB gzipped; per-route chunks < 50KB gzipped
- Avoid monolithic frameworks when a lighter alternative suffices

### 3. Caching Strategy
- **Browser**: Set `Cache-Control` headers; use `immutable` for versioned assets
- **CDN**: Cache static assets at edge; use `stale-while-revalidate` for freshness
- **Application**: Cache expensive computations with TTL; use LRU cache
- **Database**: Query result caching; materialized views for complex aggregations
- Use cache invalidation patterns: TTL-based, event-based, or versioned keys

### 4. CDN Configuration
- Serve all static assets via CDN (images, JS, CSS, fonts)
- Use `contenthash` in filenames for cache-busting on deployments
- Enable Brotli compression for text assets (30% better than gzip)
- Configure proper `Vary` headers for personalized content
- Use edge functions for A/B testing and personalization at the edge

### 5. Query and API Performance
- Profile slow endpoints with APM tools (Datadog, New Relic, OpenTelemetry)
- Use database connection pooling to avoid connection overhead
- Implement pagination with cursors, not offsets
- Batch API calls; use GraphQL or BFF (Backend for Frontend) to reduce round trips
- Set performance budgets: p50 < 200ms, p95 < 500ms, p99 < 1s

## Quality Criteria
- Lighthouse performance score >= 90
- LCP < 2.5s, INP < 200ms, CLS < 0.1 on mobile
- Initial JS bundle < 200KB gzipped
- TTFB < 800ms
- All static assets served from CDN with proper cache headers
- No render-blocking resources in critical path

## References
- [addyosmani/agent-skills — Performance Tuning](https://github.com/addyosmani/agent-skills)
- [web.dev Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Vercel Performance Best Practices](https://web.dev/articles/vite-performance-metrics)
- [Node.js Performance Guide](https://nodejs.org/en/docs/guides/diagnostics)

## Examples

### Route-Level Code Splitting
```typescript
// React with lazy loading
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

### Cache-Control Headers
```
# Immutable static assets (hashed filenames)
Cache-Control: public, max-age=31536000, immutable

# API responses with revalidation
Cache-Control: public, max-age=60, stale-while-revalidate=300

# HTML pages (always revalidate)
Cache-Control: no-cache
ETag: "abc123"
```

### LRU Cache for Expensive Computations
```typescript
import { LRUCache } from 'lru-cache';

const resultCache = new LRUCache<string, ComputedResult>({
  max: 500,
  ttl: 1000 * 60 * 5, // 5 minutes
});

function getDashboardData(userId: string): ComputedResult {
  const cached = resultCache.get(userId);
  if (cached) return cached;
  const result = computeExpensiveDashboard(userId);
  resultCache.set(userId, result);
  return result;
}
```
