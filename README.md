# Omo Distro Limited Website

A premium, modern, responsive 4-page website for Omo Distro Limited - a creative platform connecting ideas, people and stories from Africa with the world.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **CSS** - Custom styling with CSS variables

## Brand Colors

- Primary Brand Color: `#F56100` (Orange)
- Main Background: `#FFFFFF` (White)
- Primary Text: `#111111` (Black)
- Secondary Text: `#666666` (Gray)

## Pages

### 1. Home (`/`)
- Hero section with bold typography and African-inspired imagery
- "Africa has never lacked stories" statement section
- "What We Do" editorial sections (Ideas, Stories, Connections)
- Call-to-action section

### 2. Who We Are (`/who-we-are`)
- Company story and history
- Three editorial pillars (Where We Come From, What We Believe, Where We're Going)
- Orange statement section
- Values section (Culture, Creativity, Community, Impact)

### 3. Work With Us (`/work-with-us`)
- Services overview (Creative Direction, Brand & Digital, Content & Storytelling, Strategy & Consulting)
- Contact form with validation
- CEO booking CTA section

### 4. The African Story (`/the-african-story`)
- Orange hero section
- Featured story section
- Editorial content grid with categories
- Category filter section

## Components

### Layout Components
- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Site footer with navigation and social links

### UI Components
- `Button` - Reusable button component with variants (primary, secondary, outline, ghost)
- `SectionHeading` - Editorial section headings with eyebrow labels
- `EditorialImage` - Image component with optional captions
- `ContactForm` - Form with validation and success state

## Project Structure

```
omo-distro/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── Footer.tsx
│   │   ├── Footer.css
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── SectionHeading.tsx
│   │   ├── SectionHeading.css
│   │   ├── EditorialImage.tsx
│   │   ├── EditorialImage.css
│   │   ├── ContactForm.tsx
│   │   └── ContactForm.css
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── WhoWeAre.tsx
│   │   ├── WhoWeAre.css
│   │   ├── WorkWithUs.tsx
│   │   ├── WorkWithUs.css
│   │   ├── TheAfricanStory.tsx
│   │   └── TheAfricanStory.css
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Design Features

- **Editorial Typography**: Large, bold headlines with strong hierarchy
- **African Aesthetic**: Orange accent color with African-inspired imagery
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Subtle Animations**: Premium micro-interactions and transitions
- **Accessibility**: Proper focus states and reduced motion support
- **Modern Layouts**: Asymmetric compositions and editorial grids

## Placeholder Content

The website currently contains placeholder content that can be easily replaced:
- Placeholder images from Unsplash (can be replaced with official Omo Distro photography)
- Placeholder copy for company story and values
- Placeholder social media links (can be updated with real URLs)
- Placeholder CEO booking link (can be updated with real booking URL)

## Future Enhancements

- Connect contact form to backend/API
- Add real social media links
- Replace placeholder images with official brand photography
- Add more editorial content to The African Story page
- Implement actual booking system for CEO conversations
- Add analytics tracking
- SEO optimization

## License

© 2026 Omo Distro Limited. All rights reserved.