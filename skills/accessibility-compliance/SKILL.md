---
name: accessibility-compliance
description: WCAG 2.2 compliance, ARIA patterns, keyboard navigation, screen reader support, and color contrast requirements.
---

# Accessibility Compliance

## Description
Comprehensive guidance for building accessible digital experiences: WCAG 2.2 AA compliance, ARIA patterns, keyboard navigation, screen reader compatibility, and contrast requirements. Derived from plugin87/ux-ui-agent-skills.

## When to Activate
- Building or auditing accessible UI components
- Implementing keyboard navigation or focus management
- Adding screen reader support or ARIA attributes
- Reviewing color contrast or visual design for accessibility
- Fixing accessibility bugs from audits or user reports
- Ensuring compliance with ADA, Section 508, or EN 301 549

## Process

### 1. WCAG 2.2 AA Compliance
- **Perceivable**: Provide text alternatives for non-text content; ensure content is presentable in different ways
- **Operable**: All functionality available via keyboard; enough time to read content; no seizure-inducing content
- **Understandable**: Readable text, predictable navigation, input assistance for forms
- **Robust**: Content works with assistive technologies; valid, parseable markup
- WCAG 2.2 adds: focus appearance, dragging movements, target size (minimum 24x24px)

### 2. Keyboard Navigation
- All interactive elements must be reachable via Tab key
- Use logical tab order that follows visual layout
- Provide skip links to bypass repetitive navigation
- Implement focus trapping for modals and dialogs
- Use `roving tabindex` for composite widgets (tabs, toolbars, grids)
- Never remove focus outlines; style them with `:focus-visible` for keyboard users
- Support Escape to close overlays and return focus to trigger element

### 3. ARIA Patterns
- Use semantic HTML first; add ARIA only when native semantics are insufficient
- Follow WAI-ARIA Authoring Practices for common widgets
- Required ARIA attributes: `role`, `aria-label`, `aria-labelledby`, `aria-describedby`
- Live regions: use `aria-live="polite"` for status updates, `"assertive"` for errors
- State attributes: `aria-expanded`, `aria-selected`, `aria-checked`, `aria-disabled`
- Test with screen readers; ARIA is meaningless without proper semantics

### 4. Screen Reader Support
- Test with VoiceOver (macOS), NVDA (Windows), and TalkBack (Android)
- Provide meaningful `alt` text for informative images; `alt=""` for decorative
- Use `aria-label` or `aria-labelledby` for elements without visible text labels
- Announce dynamic content changes via live regions
- Ensure form fields have associated `<label>` elements
- Provide error messages linked to fields via `aria-describedby`

### 5. Visual Accessibility
- Color contrast ratio >= 4.5:1 for normal text (< 18pt / 14pt bold)
- Color contrast ratio >= 3:1 for large text (>= 18pt / 14pt bold)
- Never use color alone to convey information; use icons, patterns, or text
- Support `prefers-reduced-motion` media query
- Support `prefers-color-scheme` for dark mode
- Ensure text can be resized up to 200% without loss of content or functionality

## Quality Criteria
- All pages pass axe-core automated checks with zero violations
- All interactive elements keyboard-operable in logical order
- Screen reader announces all meaningful content and state changes
- Color contrast meets AA requirements for all text and UI components
- Skip links are present and functional
- Focus indicators are visible and meet 3:1 contrast ratio

## References
- [plugin87/ux-ui-agent-skills — Accessibility](https://github.com/plugin87/ux-ui-agent-skills)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apd/)
- [axe-core Documentation](https://dequeuniversity.com/rules/axe/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Examples

### Accessible Modal Dialog
```tsx
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
    >
      <h2 id="modal-title">{title}</h2>
      {children}
      <button ref={closeRef} onClick={onClose} aria-label="Close dialog">
        Close
      </button>
    </div>
  );
}
```

### Skip Link
```tsx
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
      }}
      onFocus={(e) => {
        e.currentTarget.style.left = '0';
      }}
      onBlur={(e) => {
        e.currentTarget.style.left = '-10000px';
      }}
    >
      Skip to main content
    </a>
  );
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
