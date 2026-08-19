---
name: devops-pipelines
description: CI/CD pipeline design, Docker containerization, Kubernetes orchestration, deployment strategies, and rollback procedures.
---

# DevOps Pipelines

## Description
End-to-end guidance for building reliable deployment pipelines: from source control to production, container builds, orchestration, deployment strategies, and safe rollback procedures. Derived from github/awesome-copilot.

## When to Activate
- Creating or modifying CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)
- Writing or optimizing Dockerfiles
- Deploying to Kubernetes or container orchestration platforms
- Implementing blue-green, canary, or rolling deployments
- Designing rollback procedures
- Configuring infrastructure as code (Terraform, Pulumi)

## Process

### 1. Pipeline Design
- Keep pipelines fast: target < 10 minutes for the critical path
- Separate build, test, and deploy into distinct stages with clear gates
- Cache dependencies aggressively (Docker layer caching, npm/yarn cache, pip cache)
- Run linting and type-checking in parallel with tests, not sequentially
- Use matrix builds for multi-platform/multi-version testing
- Store artifacts from build stage; promote the same artifact through environments

### 2. Docker Best Practices
- Use multi-stage builds to minimize final image size
- Pin base image versions (e.g., `node:20-alpine`, not `node:latest`)
- Order Dockerfile commands by frequency of change (deps before source)
- Use `.dockerignore` to exclude node_modules, .git, tests from build context
- Run as non-root user; add `USER node` or equivalent
- Use health checks (`HEALTHCHECK`) in Dockerfiles
- Scan images with Trivy or Snyk before deployment

### 3. Kubernetes Deployment
- Use Deployment controllers (not bare Pods) for all workloads
- Define resource requests and limits for every container
- Use `livenessProbe`, `readinessProbe`, and `startupProbe` appropriately
- Use `RollingUpdate` strategy with `maxSurge: 1` and `maxUnavailable: 0` for zero-downtime deploys
- Store configuration in ConfigMaps; secrets in external vault (not plain Secrets)
- Use namespaces for environment isolation
- Apply Pod Disruption Budgets for critical services

### 4. Deployment Strategies
- **Rolling Update**: Default Kubernetes strategy; gradual replacement
- **Blue-Green**: Two identical environments; switch traffic atomically
- **Canary**: Route a percentage of traffic to new version; monitor; promote or rollback
- Choose based on risk tolerance and rollback speed requirements

### 5. Rollback Procedures
- Kubernetes: `kubectl rollout undo deployment/<name>` for instant rollback
- Maintain previous image tag in release metadata
- Automate rollback triggers on health check failures or error rate spikes
- Test rollback procedures as part of the pipeline (chaos engineering)
- Keep database migrations backward-compatible to support rollback

## Quality Criteria
- Pipeline completes in < 10 minutes for the critical path
- All images pass vulnerability scanning with no critical/high findings
- Deployment uses zero-downtime strategy with health checks
- Rollback can be executed in < 60 seconds
- Infrastructure changes are code-reviewed and applied via IaC
- All environments are reproducible from code

## References
- [github/awesome-copilot — DevOps Pipelines](https://github.com/github/awesome-copilot)
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Kubernetes Deployment Docs](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Google SRE Book](https://sre.google/sre-book/table-of-contents/)
- [DORA Metrics](https://dora.dev/)

## Examples

### GitHub Actions CI/CD Pipeline
```yaml
name: CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --coverage
      - uses: docker/build-push-action@v5
        with:
          push: ${{ github.ref == 'refs/heads/main' }}
          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}
```

### Zero-Downtime Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
        - name: api
          image: ghcr.io/org/api:v1.2.3
          resources:
            requests:
              cpu: 250m
              memory: 256Mi
            limits:
              cpu: 500m
              memory: 512Mi
          livenessProbe:
            httpGet:
              path: /healthz
              port: 3000
            initialDelaySeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
```
