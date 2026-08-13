# Omo Distro Website - Project Notes

## Project Information

This is a premium website for Omo Distro Limited, built with React + TypeScript + Vite.

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Type Check**: `npx tsc --noEmit`

## Design Guidelines

### Brand Colors
- Primary Orange: `#F56100`
- Black: `#111111`
- White: `#FFFFFF`
- Gray: `#666666`
- Light Gray: `#F5F5F5`

### Typography
- Font: System sans-serif (Inter, Segoe UI, Roboto)
- Headlines: Large, bold, tight letter-spacing (-0.02em)
- Body: 1.6 line height, readable size

### Design Principles
- Editorial/magazine aesthetic
- African creative agency feel
- Bold orange accents
- Strong typography hierarchy
- Minimal generic SaaS patterns
- Premium micro-interactions

## Architecture

### Component Structure
- Layout components in `src/components/`
- Page components in `src/pages/`
- Global styles in `src/styles/`
- CSS modules for component-specific styles

### Routing
- Uses React Router DOM
- Routes: `/`, `/who-we-are`, `/work-with-us`, `/the-african-story`
- Client-side navigation with smooth transitions

### Styling Approach
- CSS custom properties for theming
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for layouts
- BEM-inspired naming conventions

## Key Features

### Responsive Navigation
- Desktop: Horizontal links with CTA
- Mobile: Hamburger menu with slide-down panel
- Scroll-based background blur effect

### Contact Form
- Client-side validation
- Success state handling
- Styled for orange background section
- Ready for backend integration

### Animations
- Page transitions
- Staggered content reveals
- Hover effects on cards and buttons
- Respects `prefers-reduced-motion`

## Placeholder Items

The following items are placeholders and need to be replaced:

### Images
- All Unsplash images should be replaced with official Omo Distro photography
- Image URLs are centralized in components for easy replacement

### Links
- Social media links in Footer are currently `#`
- CEO booking link in Work With Us page is currently `#`
- Story links in The African Story page are currently `#`

### Content
- Company story copy in Who We Are page
- Values descriptions can be refined
- Editorial stories in The African Story page can be replaced with real content

## Development Notes

### Icon Library
- Using Lucide React for icons
- Some icons replaced with text labels due to import issues (Instagram, LinkedIn, YouTube in Footer)

### TypeScript
- Strict mode enabled
- No build errors
- Proper type definitions for all components

### Browser Support
- Modern browsers (ES6+)
- CSS Grid and Flexbox support required
- Custom properties support required

## Testing Checklist

Before deploying:
- [ ] Test all routes work correctly
- [ ] Test mobile navigation
- [ ] Test contact form validation
- [ ] Test all links and buttons
- [ ] Test responsive breakpoints
- [ ] Test animations with reduced motion
- [ ] Verify orange color consistency (#F56100)
- [ ] Check image loading
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Verify no console errors

## Deployment

The project builds successfully with `npm run build`. Output is in the `dist/` directory and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).