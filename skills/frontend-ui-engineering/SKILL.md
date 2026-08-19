---
name: frontend-ui-engineering
description: Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility for modern frontend applications.
---

# Frontend UI Engineering

## Description
Comprehensive guidance for building production-grade frontend interfaces: component architecture, design system integration, state management patterns, responsive layouts, and accessibility compliance. Derived from addyosmani/agent-skills best practices.

## When to Activate
- Building or refactoring UI components
- Implementing responsive layouts or design systems
- Setting up state management (Redux, Zustand, Jotai, MobX, Context)
- Reviewing frontend code for accessibility or performance
- Creating or modifying component libraries
- Integrating with design tokens or theming systems

## Process

### 1. Component Architecture
- Follow Atomic Design: atoms → molecules → organisms → templates → pages
- Prefer composition over inheritance; use render props or compound components
- Keep components single-responsibility; split when a component manages two concerns
- Colocate related files (component, styles, tests, types) in a single directory
- Use TypeScript interfaces for all prop definitions; export them publicly

### 2. State Management
- **Local state**: `useState` / `useReducer` for component-scoped concerns
- **Shared state**: Zustand or Jotai for lightweight global state; Redux Toolkit only when middleware (sagas, thunks) is required
- **Server state**: React Query / SWR for fetching, caching, and synchronization
- **Derived state**: Prefer memoization (`useMemo`, selectors) over duplicating state
- Avoid prop-drilling beyond 3 levels; use context or state stores instead

### 3. Responsive Design
- Mobile-first approach: base styles for mobile, `min-width` media queries for larger screens
- Use CSS Grid or Flexbox for layout; avoid floats for page structure
- Define breakpoints consistently (e.g., 640px, 768px, 1024px, 1280px)
- Use relative units (`rem`, `%`, `vw/vh`) instead of fixed pixels
- Test at all breakpoints; ensure no horizontal overflow

### 4. Design System Integration
- Reference design tokens for colors, typography, spacing, and shadows
- Use CSS custom properties or a token transformation pipeline (Style Dictionary)
- Build components against the token layer, not hardcoded values
- Document component API (props, slots, variants) in a storybook or docs site

### 5. Accessibility (WCAG 2.1 AA)
- Use semantic HTML elements (`<nav>`, `<main>`, `<button>`, `<h1>`–`<h6>`)
- All interactive elements must be keyboard-navigable with visible focus indicators
- Images require `alt` text; decorative images use `alt=""`
- Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- Announce dynamic content changes via `aria-live` regions
- Test with screen readers (VoiceOver, NVDA) and axe-core

## Quality Criteria
- All components have TypeScript prop interfaces with no `any` types
- Lighthouse accessibility score ≥ 90
- All interactive elements reachable and operable via keyboard alone
- No layout shift on page load (CLS < 0.1)
- Component storybook覆盖率 ≥ 80%
- Responsive layout works at 320px, 768px, 1024px, 1440px

## References
- [addyosmani/agent-skills — Frontend UI Engineering](https://github.com/addyosmani/agent-skills)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [React Patterns](https://reactpatterns.com/)
- [Web.dev Accessibility Docs](https://web.dev/accessibility/)

## Examples

### Compound Component Pattern
```tsx
function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.List = function TabList({ children }: { children: React.ReactNode }) {
  return <div role="tablist">{children}</div>;
};

Tabs.Panel = function TabPanel({ index, children }: { index: number; children: React.ReactNode }) {
  const { active } = useTabsContext();
  if (active !== index) return null;
  return <div role="tabpanel">{children}</div>;
};
```

### Responsive Grid with Design Tokens
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```
