---
name: design-systems
description: Design tokens (DTCG), component specifications, Atomic Design methodology, and theming systems for scalable UI.
triggers:
  - "design tokens or component library work"
tokens: ~1316
---

# Design Systems

## Description
Building and maintaining design systems: design token architecture following DTCG specification, component API design, Atomic Design methodology, and multi-brand theming. Derived from plugin87/ux-ui-agent-skills.

## When to Activate
- Creating or extending a design system or component library
- Defining or transforming design tokens
- Implementing theming or multi-brand support
- Establishing component API conventions
- Migrating from hardcoded values to token-based design
- Auditing component library for consistency

## Process

### 1. Design Token Architecture
- Follow DTCG (Design Token Community Group) specification for token format
- Organize tokens in three tiers:
  - **Primitive tokens**: raw values (colors, spacing scale, font sizes)
  - **Semantic tokens**: purpose-based aliases (color-text-primary, spacing-component-gap)
  - **Component tokens**: component-specific overrides (button-background-primary)
- Use a transformation pipeline (Style Dictionary, Tokens Studio) to generate platform outputs
- Store tokens as JSON; version them alongside code

### 2. Component API Design
- Follow consistent prop naming conventions across all components
- Use composition over configuration: prefer children/slots over complex prop objects
- Support polymorphic rendering (`as` prop) for semantic HTML elements
- Provide controlled and uncontrolled modes for form components
- Export TypeScript types for all component props
- Include required accessibility attributes in the component API

### 3. Atomic Design Methodology
- **Atoms**: smallest building blocks (Button, Input, Icon, Text)
- **Molecules**: combinations of atoms (SearchField = Input + Button)
- **Organisms**: complex UI sections (Header, CardList, NavigationBar)
- **Templates**: page-level layouts without real content
- **Pages**: templates with real content for validation
- Build bottom-up; atoms are the foundation everything else composes from

### 4. Theming System
- Use CSS custom properties for runtime theme switching
- Define theme tokens as a flat object mapping semantic names to values
- Support light and dark themes as minimum; extend for brand themes
- Implement theme provider at the root; consume via context or CSS variables
- Persist user theme preference in localStorage or system preference detection
- Ensure all components react to theme changes without page reload

### 5. Documentation and Governance
- Document every component: description, props, usage examples, do/don't
- Use Storybook or a dedicated docs site for interactive component exploration
- Define contribution guidelines: how to propose, review, and add new components
- Version the design system with semver; communicate breaking changes
- Run regular audits: check for unused components, inconsistent APIs, token drift

## Quality Criteria
- All visual values come from design tokens; no hardcoded colors, sizes, or spacing
- Tokens follow DTCG format and are generated for all target platforms
- Every component has TypeScript prop types and Storybook stories
- Theming supports light/dark mode with zero visual regressions
- Component API is consistent: prop names, patterns, and conventions are uniform
- Documentation covers usage, accessibility, and composition patterns

## References
- [plugin87/ux-ui-agent-skills — Design Systems](https://github.com/plugin87/ux-ui-agent-skills)
- [DTCG Token Format Specification](https://tr.designtokens.org/format/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Storybook Documentation](https://storybook.js.org/docs)

## Examples

### DTCG Token Format
```json
{
  "color": {
    "primitive": {
      "blue": {
        "500": {
          "$type": "color",
          "$value": "#3B82F6"
        }
      }
    },
    "semantic": {
      "text": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.blue.500}"
        }
      }
    }
  },
  "spacing": {
    "component": {
      "gap": {
        "$type": "dimension",
        "$value": "16px"
      }
    }
  }
}
```

### Multi-Brand Theme Provider
```tsx
const themes = {
  light: { 'color-bg-primary': '#FFFFFF', 'color-text-primary': '#1A1A1A' },
  dark: { 'color-bg-primary': '#1A1A1A', 'color-text-primary': '#FFFFFF' },
  brand: { 'color-bg-primary': '#FFF8E1', 'color-text-primary': '#5D4037' },
};

function ThemeProvider({ theme, children }: { theme: keyof typeof themes; children: React.ReactNode }) {
  return (
    <div style={themes[theme]} data-theme={theme}>
      {children}
    </div>
  );
}
```

### Polymorphic Component
```tsx
type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Button<T extends React.ElementType = 'button'>({ as, variant = 'primary', children, ...props }: ButtonProps<T>) {
  const Component = as || 'button';
  return <Component className={`btn btn--${variant}`} {...props}>{children}</Component>;
}
```
