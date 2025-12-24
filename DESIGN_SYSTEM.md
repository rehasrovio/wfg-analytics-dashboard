# SuperBryn Design System

A comprehensive design system document based on the SuperBryn website visual design. Use this document to replicate the same aesthetic and design patterns.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Effects & Animations](#effects--animations)
6. [Design Tokens](#design-tokens)

---

## Color Palette

### Primary Colors

```css
/* Background Colors */
--bg-primary: #0A0E27;           /* Deep indigo/dark purple - main background */
--bg-primary-gradient-start: #0A0E27;  /* Top of gradient */
--bg-primary-gradient-end: #1A1F3A;    /* Bottom of gradient (slightly lighter) */

/* Banner Background */
--bg-banner: #1A1F3A;            /* Dark purple-blue for top announcement banner */

/* Content Card Background */
--bg-card: #1E2339;              /* Slightly lighter purple-blue for content cards */

/* Text Colors */
--text-primary: #FFFFFF;         /* White - primary text */
--text-secondary: #E0E7FF;       /* Light blue/white - secondary text */
--text-accent: #06B6D4;          /* Light blue/teal - accent text (taglines, labels) */
--text-emphasis: #A855F7;        /* Vibrant purple - for emphasis (e.g., "break" in headline) */
--text-muted: #9CA3AF;           /* Muted gray for less important text */

/* Accent Colors */
--accent-purple: #A855F7;        /* Vibrant purple for emphasis */
--accent-teal: #06B6D4;          /* Light blue/teal for accents */
--accent-blue: #3B82F6;          /* Standard blue for links/CTAs */

/* UI Elements */
--border-color: rgba(255, 255, 255, 0.1);  /* Subtle borders */
--divider-color: rgba(255, 255, 255, 0.05); /* Very subtle dividers */
```

### Color Usage Guidelines

- **Primary Background**: Use gradient from `--bg-primary-gradient-start` to `--bg-primary-gradient-end` for main page background
- **Text on Dark**: Always use white or light colors for text on dark backgrounds
- **Emphasis**: Use `--text-emphasis` (vibrant purple) to highlight key words or phrases
- **Accents**: Use `--text-accent` (teal) for taglines, labels, and secondary headings
- **Cards**: Use `--bg-card` for content cards with rounded corners

---

## Typography

### Font Family

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', 
                'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
                'Helvetica Neue', sans-serif;
```

**Recommended**: Use Inter, System UI, or a modern sans-serif font stack.

### Type Scale

```css
/* Headings */
--text-6xl: 4.5rem;      /* 72px - Hero headline */
--text-5xl: 3.75rem;     /* 60px - Large headline */
--text-4xl: 3rem;        /* 48px - Section headline */
--text-3xl: 2.25rem;     /* 36px - Subsection headline */
--text-2xl: 1.875rem;    /* 30px - Card headline */
--text-xl: 1.5rem;       /* 24px - Large body */
--text-lg: 1.25rem;      /* 20px - Body text */
--text-base: 1rem;       /* 16px - Base text */
--text-sm: 0.875rem;     /* 14px - Small text */
--text-xs: 0.75rem;      /* 12px - Extra small text */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Typography Styles

#### Hero Headline
```css
.hero-headline {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* Emphasis word in headline */
.hero-headline .emphasis {
  color: var(--text-emphasis);
}
```

#### Tagline/Label
```css
.tagline {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
}
```

#### Section Heading
```css
.section-heading {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1rem;
}
```

#### Body Text
```css
.body-text {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: 1.6;
  color: var(--text-secondary);
}
```

#### Small Text
```css
.small-text {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: 1.5;
  color: var(--text-muted);
}
```

---

## Spacing & Layout

### Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Layout Guidelines

- **Container Max Width**: 1280px (80rem)
- **Container Padding**: 1.5rem on mobile, 2rem on desktop
- **Section Spacing**: 6rem (96px) between major sections
- **Content Spacing**: 2rem (32px) between related content blocks
- **Card Padding**: 2rem (32px) internal padding

### Grid System

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

---

## Components

### Top Banner

```css
.top-banner {
  background-color: var(--bg-banner);
  color: var(--text-primary);
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  position: relative;
}

.top-banner .close-button {
  position: absolute;
  right: var(--space-4);
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: var(--space-1);
}
```

### Navigation Header

```css
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) var(--space-8);
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: var(--space-8);
  list-style: none;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.8;
}
```

### Hero Section

```css
.hero-section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-20) var(--space-6);
  background: linear-gradient(
    180deg,
    var(--bg-primary-gradient-start) 0%,
    var(--bg-primary-gradient-end) 100%
  );
}

.hero-tagline {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
  margin-bottom: var(--space-4);
}

.hero-headline {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  max-width: 900px;
}

.hero-description {
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-10);
  max-width: 700px;
}

.hero-cta-group {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}
```

### Buttons

#### Primary Button (CTA)
```css
.btn-primary {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}
```

### Content Cards

```css
.content-card {
  background-color: var(--bg-card);
  border-radius: 1rem;
  padding: var(--space-8);
  border: 1px solid var(--border-color);
  transition: all 0.3s;
}

.content-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.card-icon {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.card-description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--text-secondary);
}
```

### Form Elements

```css
.form-input {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  padding: var(--space-4) var(--space-5);
  font-size: var(--text-base);
  color: var(--text-primary);
  width: 100%;
  transition: all 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--text-accent);
  background-color: rgba(255, 255, 255, 0.08);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-button {
  background-color: var(--text-primary);
  color: var(--bg-primary);
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.form-button:hover {
  opacity: 0.9;
}
```

### Newsletter Section

```css
.newsletter-section {
  background-color: var(--bg-card);
  border-radius: 1.5rem;
  padding: var(--space-12) var(--space-8);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.newsletter-headline {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.newsletter-description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.newsletter-form {
  display: flex;
  gap: var(--space-3);
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
  }
}
```

---

## Effects & Animations

### Transitions

```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

### Hover Effects

```css
.hover-lift {
  transition: transform var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-glow {
  transition: box-shadow var(--transition-base);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}
```

### Gradient Background

```css
.gradient-background {
  background: linear-gradient(
    180deg,
    var(--bg-primary-gradient-start) 0%,
    var(--bg-primary-gradient-end) 100%
  );
}
```

---

## Design Tokens

### Complete CSS Variables

```css
:root {
  /* Colors */
  --bg-primary: #0A0E27;
  --bg-primary-gradient-start: #0A0E27;
  --bg-primary-gradient-end: #1A1F3A;
  --bg-banner: #1A1F3A;
  --bg-card: #1E2339;
  
  --text-primary: #FFFFFF;
  --text-secondary: #E0E7FF;
  --text-accent: #06B6D4;
  --text-emphasis: #A855F7;
  --text-muted: #9CA3AF;
  
  --accent-purple: #A855F7;
  --accent-teal: #06B6D4;
  --accent-blue: #3B82F6;
  
  --border-color: rgba(255, 255, 255, 0.1);
  --divider-color: rgba(255, 255, 255, 0.05);
  
  /* Typography */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
  
  --text-6xl: 4.5rem;
  --text-5xl: 3.75rem;
  --text-4xl: 3rem;
  --text-3xl: 2.25rem;
  --text-2xl: 1.875rem;
  --text-xl: 1.5rem;
  --text-lg: 1.25rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  
  /* Spacing */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* Layout */
  --container-max-width: 1280px;
  --border-radius-sm: 0.5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 1.5rem;
}
```

---

## Implementation Notes

### Key Design Principles

1. **Dark Theme First**: The entire design is built on a dark background with high contrast text
2. **Gradient Backgrounds**: Use subtle gradients for depth and visual interest
3. **Strategic Color Accents**: Use vibrant purple and teal sparingly for emphasis
4. **Generous Spacing**: Large padding and margins create breathing room
5. **Rounded Corners**: All cards and buttons use rounded corners (0.5rem to 1.5rem)
6. **Typography Hierarchy**: Clear size and weight differences guide the eye
7. **Minimal Borders**: Use subtle borders (low opacity) for separation

### Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Accessibility

- Ensure sufficient color contrast (WCAG AA minimum)
- Use semantic HTML elements
- Provide focus states for interactive elements
- Maintain readable font sizes (minimum 16px for body text)

---

## Logo & Branding

### Logo Description
- **Icon**: Four vertical dotted lines forming a diamond/network pattern
- **Text**: "SuperBryn" in modern sans-serif
- **Color**: White (#FFFFFF)
- **Size**: Approximately 24px height for icon, 20px font size for text

### Logo Usage
- Always use white logo on dark backgrounds
- Maintain minimum clear space around logo (equal to icon height)
- Logo should link to homepage

---

## Example Implementation

### Basic Page Structure

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="design-system.css">
</head>
<body class="gradient-background">
  <!-- Top Banner -->
  <div class="top-banner">
    <span>SuperBryn raises 1.2 M USD from Kalaari Capital</span>
    <button class="close-button">×</button>
  </div>
  
  <!-- Navigation -->
  <nav class="nav-header">
    <a href="/" class="logo">SuperBryn</a>
    <ul class="nav-links">
      <li><a href="#problem" class="nav-link">Problem</a></li>
      <li><a href="#capabilities" class="nav-link">Capabilities</a></li>
      <li><a href="#research" class="nav-link">Research</a></li>
      <li><a href="#faq" class="nav-link">FAQ</a></li>
      <li><a href="#demo" class="nav-link">Book a Demo</a></li>
    </ul>
  </nav>
  
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <p class="hero-tagline">Voice AI Reliability Platform</p>
      <h1 class="hero-headline">
        Your voice agents work in the demo. 
        They <span class="emphasis">break</span> in production.
      </h1>
      <p class="hero-description">
        SuperBryn is the evaluation and observability platform that helps 
        you understand why your voice agents fail—and how to fix them.
      </p>
      <div class="hero-cta-group">
        <a href="#demo" class="btn-primary">Book a Demo →</a>
        <a href="#watch" class="btn-secondary">Watch Demo</a>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## Color Reference (Hex Values)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Background | `#0A0E27` | Main page background |
| Gradient End | `#1A1F3A` | Bottom of gradient |
| Banner Background | `#1A1F3A` | Top announcement banner |
| Card Background | `#1E2339` | Content cards |
| Primary Text | `#FFFFFF` | Main text color |
| Secondary Text | `#E0E7FF` | Secondary text |
| Accent Teal | `#06B6D4` | Taglines, labels |
| Emphasis Purple | `#A855F7` | Emphasis words |
| Muted Text | `#9CA3AF` | Less important text |

---

## Notes

- All color values are approximate based on visual analysis
- Font sizes may need adjustment based on viewport
- Spacing can be adjusted for different screen sizes
- Consider using CSS custom properties for easy theming
- Test color contrast ratios for accessibility compliance

---

**Last Updated**: Based on SuperBryn.com analysis (December 2024)

