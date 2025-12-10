# Landscape Mobile Responsiveness Fixes Plan

## Overview

This document outlines the responsiveness issues identified on the Bloomwise homepage for landscape mobile devices and provides a detailed implementation plan for fixes.

**Target Devices:**
- iPhone SE Landscape: 667 x 375
- iPhone 12/13/14 Landscape: 844 x 390
- iPad Mini Landscape: 1024 x 768

---

## Issues & Fixes

### 1. Hero Section (`src/components/blocks/hero.tsx`)

**Current Issues:**
- Line 7: `pt-24 pb-16 md:pt-32 md:pb-16 lg:pt-60 lg:pb-16` - excessive top padding on landscape mobile pushes content below the fold
- Line 50-51: `max-lg:h-[550px]` - fixed height doesn't adapt to limited vertical space on landscape phones

**Fixes:**
```tsx
// Line 7: Add landscape-aware padding
// Before:
className="pt-24 pb-16 md:pt-32 md:pb-16 lg:pt-60 lg:pb-16 relative"

// After:
className="pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-60 lg:pb-16 landscape:pt-12 landscape:pb-8 landscape:md:pt-24 landscape:md:pb-16 relative"

// Line 50-51: Use viewport-aware height
// Before:
<div className="mt-16 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:mt-24">

// After:
<div className="mt-12 max-lg:ml-6 max-lg:h-[min(550px,60vh)] max-lg:overflow-hidden md:mt-20 lg:mt-24 landscape:mt-8 landscape:max-lg:h-[min(400px,50vh)]">
```

**Tailwind Config Addition Required:**
```js
// tailwind.config.js - add landscape variant
screens: {
  'landscape': { 'raw': '(orientation: landscape) and (max-height: 500px)' },
}
```

---

### 2. Feature Capabilities Grid (`src/components/blocks/feature-capabilities.tsx`)

**Current Issue:**
- Line 24: `md:grid-cols-3` only activates at 768px+, leaving landscape phones (667px) with single-column layout when 2 columns would fit

**Fix:**
```tsx
// Line 24
// Before:
<div className="grid gap-8 md:gap-12 md:grid-cols-3">

// After:
<div className="grid gap-6 sm:gap-8 md:gap-12 sm:grid-cols-2 md:grid-cols-3">
```

---

### 3. Feature Showcase Grid (`src/components/blocks/feature-showcase-grid.tsx`)

**Current Issues:**
- SingleLayout (line 20): `lg:grid-cols-[1fr_1.5fr]` only at 1024px+
- ReversedLayout (line 96): Same issue
- DoubleLayout bleeding margins don't adapt for smaller screens

**Fixes:**

```tsx
// SingleLayout - Line 20
// Before:
<div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-start">

// After:
<div className="grid gap-6 md:gap-8 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.5fr] items-start">

// Line 41 - reduce bleeding on mobile
// Before:
<div className="-mr-12 -mb-8">

// After:
<div className="-mr-6 -mb-4 md:-mr-12 md:-mb-8">

// ReversedLayout - Line 96
// Before:
<div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">

// After:
<div className="grid gap-6 md:gap-8 md:grid-cols-[1.2fr_1fr] items-start">

// Line 98 - reduce bleeding on mobile
// Before:
<div className="-ml-12 -mb-8">

// After:
<div className="-ml-6 -mb-4 md:-ml-12 md:-mb-8">

// DoubleLayout - Line 79
// Before:
<div className={`mt-auto relative ${index === 0 ? '-ml-12 -mr-6' : '-mr-12 -ml-6'}`}>

// After:
<div className={`mt-auto relative ${index === 0 ? '-ml-6 -mr-3 md:-ml-12 md:-mr-6' : '-mr-6 -ml-3 md:-mr-12 md:-ml-6'}`}>
```

---

### 4. Waitlist Form (`src/components/blocks/waitlist.tsx`)

**Current Issue:**
- Line 29, 61: `md:grid-cols-2` - form fields stack on landscape phones when they could be side-by-side

**Fix:**
```tsx
// Lines 29 and 61
// Before:
<div className="grid gap-6 md:grid-cols-2">

// After:
<div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
```

---

### 5. FAQ Section (`src/components/blocks/faq.tsx`)

**Current Issue:**
- Line 49: `lg:grid-cols-2` - side-by-side layout only at 1024px+

**Fix:**
```tsx
// Line 49
// Before:
<div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>

// After:
<div className={cn("mx-auto grid gap-8 md:gap-16 md:grid-cols-2", className2)}>
```

---

### 6. Features Section (`src/components/blocks/features.tsx`)

**Current Issue:**
- Line 75: `lg:grid-cols-12` - doesn't utilize landscape mobile width effectively

**Fix:**
```tsx
// Line 75
// Before:
<div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

// After:
<div className="grid gap-6 md:gap-8 md:grid-cols-12 lg:gap-12">

// Line 77 - adjust column span for medium screens
// Before:
<div className="flex flex-col gap-4 lg:col-span-5">

// After:
<div className="flex flex-col gap-4 md:col-span-5">

// Line 136 - show image area on medium screens too
// Before:
<div className="relative hidden lg:col-span-7 lg:block">

// After:
<div className="relative hidden md:col-span-7 md:block">
```

---

### 7. Footer Form (`src/components/blocks/footer.tsx`)

**Current Issue:**
- Lines 20, 38: `md:grid-cols-2` - similar to waitlist form

**Fix:**
```tsx
// Lines 20 and 38
// Before:
<div className="grid gap-4 md:grid-cols-2">

// After:
<div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
```

---

### 8. Feature Carousel (`src/components/blocks/feature-carousel.tsx`)

**Current Issue:**
- Line 180: Padding calculation doesn't optimize for landscape mobile

**Fix:**
```tsx
// Line 180
// Before:
className="flex gap-6 overflow-x-auto scrollbar-hide px-[calc(50vw-140px)] md:px-[calc(50vw-160px)] py-6"

// After:
className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-[calc(50vw-120px)] sm:px-[calc(50vw-140px)] md:px-[calc(50vw-160px)] py-4 md:py-6"

// Line 191 - slightly smaller cards on small landscape
// Before:
className={cn(
  "flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer transition-all duration-300 ease-out",

// After:
className={cn(
  "flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] cursor-pointer transition-all duration-300 ease-out",
```

---

## Implementation Order

1. **Phase 1 - Tailwind Config** (if using landscape variant)
   - Add custom `landscape` screen variant to `tailwind.config.js`

2. **Phase 2 - High Impact Fixes**
   - Hero section (most visible, first thing users see)
   - Waitlist/Footer forms (critical conversion elements)

3. **Phase 3 - Content Sections**
   - Feature Capabilities grid
   - Feature Showcase grid
   - FAQ section

4. **Phase 4 - Interactive Components**
   - Features section (tabbed area)
   - Feature Carousel

---

## Testing Checklist

After implementing fixes, test on:

- [ ] iPhone SE Landscape (667 x 375)
- [ ] iPhone 12 Landscape (844 x 390)
- [ ] iPhone 14 Pro Max Landscape (932 x 430)
- [ ] iPad Mini Landscape (1024 x 768)
- [ ] Desktop (1440 x 900) - ensure no regressions

**Test each section:**
- [ ] Hero - content visible without excessive scrolling
- [ ] Feature Carousel - cards properly sized and centered
- [ ] Capabilities - 2 columns on landscape phones
- [ ] Feature Showcase - side-by-side layout on tablet
- [ ] Features - tabbed section usable on medium screens
- [ ] FAQ - 2-column layout on medium screens
- [ ] Waitlist Form - 2-column fields on landscape phones
- [ ] Footer - form fields side-by-side on landscape phones

---

## Alternative Approach: CSS-Only Landscape Detection

If adding Tailwind variants is not preferred, use CSS custom properties in `global.css`:

```css
/* src/styles/global.css */
@media (orientation: landscape) and (max-height: 500px) {
  :root {
    --hero-pt: 3rem;      /* 48px */
    --hero-pb: 2rem;      /* 32px */
    --hero-mt: 2rem;      /* 32px */
    --video-max-h: min(400px, 50vh);
  }
}
```

Then reference these in components via inline styles or additional CSS classes.

---

## Notes

- All fixes use Tailwind's standard breakpoints (`sm`: 640px, `md`: 768px, `lg`: 1024px)
- The `sm` breakpoint (640px) is key for landscape phones since most are 667px+ wide
- Vertical space is the main constraint on landscape mobile - reduce padding/margins
- Grid layouts should activate earlier to utilize horizontal space
