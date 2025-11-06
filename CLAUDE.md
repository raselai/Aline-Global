# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a corporate website for **Aline Global Ltd**, a multinational enterprise with operations across 8 business sectors. The site is built with **Next.js 15** using the App Router and is configured for static export to deploy on cPanel hosting.

**Key Business Sectors:**
- Garments & Apparel
- Manufacturing
- Pharmaceutical
- Real Estate & Development
- IT & Software
- Media & TV Channel
- International Trade
- Brand Development

## Technology Stack

- **Framework:** Next.js 15.0.3 with App Router
- **React:** 18.3.1
- **Styling:** CSS Modules (component-scoped styles)
- **Deployment:** Static export (`output: 'export'`) for cPanel hosting
- **Image Handling:** Unoptimized images (required for static export)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:3000

# Build for production (creates static files in 'out' folder)
npm run build

# Start production server (for testing before deployment)
npm start
```

## Project Structure

```
node-meta/
├── app/
│   ├── layout.js              # Root layout with Navbar & Footer
│   ├── page.js                # Homepage with hero slider, about, MD message, global presence
│   ├── globals.css            # Global styles
│   ├── about/
│   │   └── page.js            # About page
│   ├── business/
│   │   └── page.js            # Business sectors page
│   ├── contact/
│   │   └── page.js            # Contact page
│   └── components/
│       ├── Navbar.jsx         # Navigation with dropdown menu
│       ├── Navbar.module.css
│       ├── Footer.jsx         # Footer with company info & social links
│       ├── Footer.module.css
│       ├── LeadershipSection.jsx  # Leadership team section
│       └── LeadershipSection.module.css
├── public/
│   ├── Hero Section/          # Hero slideshow images (7 business sectors)
│   ├── Logos/                 # Company and subsidiary logos
│   ├── Team/                  # Leadership team photos
│   └── map.png                # World map for global presence section
├── next.config.js             # Next.js configuration (static export enabled)
└── package.json
```

## Architecture Notes

### Static Export Configuration

This project uses Next.js static export mode (`output: 'export'`) to generate static HTML/CSS/JS files that can be deployed to standard web hosting without Node.js support.

**Important limitations:**
- No Server-Side Rendering (SSR)
- No API Routes
- No dynamic routes with `getServerSideProps`
- Images must be unoptimized (`images.unoptimized: true`)
- Trailing slashes enabled for better compatibility

### Page Components

All page components use the **"use client"** directive when they need React hooks or browser-side interactivity (useState, useEffect, click handlers, etc.).

### Styling Pattern

The project uses **CSS Modules** exclusively:
- Each component has a corresponding `.module.css` file
- Styles are scoped to components
- Class names are imported as objects: `styles.className`
- No global CSS except `globals.css` for base styles

### Homepage Features

The homepage (`app/page.js`) includes several key sections:

1. **Hero Section with Animation:**
   - 3-second intro animation showing "Aline Global Ltd"
   - Auto-rotating slideshow of 7 business sectors (5 seconds per slide)
   - Manual navigation via dot indicators

2. **About Section:**
   - Company description
   - 8 industry cards (icons with names)
   - 3 core values (Innovation, Integrity, Global Collaboration)

3. **Managing Director's Message:**
   - Company vision and message
   - Statistics cards (5 Companies, 150 Employees, 500 Shareholders)

4. **Global Presence:**
   - World map with 35+ location pins (pulsing animation)
   - Statistics: 35+ countries, 120+ offices worldwide

5. **Subsidiary Companies:**
   - Auto-scrolling logo slider (seamless loop animation)

6. **Leadership Section:**
   - Imported from `LeadershipSection.jsx` component

### Navigation Structure

The Navbar includes:
- Home (/)
- About Us (/about)
- Business (/business) with dropdown submenu for all 8 sectors
- Leadership (anchor link to #leadership on homepage)
- Contact (/contact)

Mobile-responsive with hamburger menu.

## Deployment Workflow

This project is designed for cPanel deployment:

1. Run `npm run build` locally
2. Static files are generated in the `out/` folder
3. Upload contents of `out/` folder to cPanel `public_html`
4. Configure `.htaccess` for proper routing and HTTPS

**See `CPANEL-DEPLOYMENT-GUIDE.md` for detailed deployment instructions.**

## Important Configuration

### next.config.js

```javascript
{
  output: 'export',              // Enable static export
  images: { unoptimized: true }, // Required for static export
  trailingSlash: true            // Better cPanel compatibility
}
```

### Image Handling

- Images are stored in `public/` folder
- Referenced with absolute paths: `/Logos/logo.png`
- No Next.js Image optimization (due to static export)
- Use standard `<img>` tags or `<Image>` with `unoptimized`

## Code Style & Patterns

- **Client Components:** Use `'use client'` directive at the top of files that need browser APIs
- **Comments:** Extensive educational comments throughout for non-developer product designer
  - Emoji markers (📖 🔧 🎬 etc.) for visual clarity
  - Beginner-friendly explanations of React concepts
- **Links:** Use Next.js `<Link>` component for internal navigation
- **State Management:** Local component state with `useState` (no global state management)
- **Effects:** Use `useEffect` for timers and animations

## Known Characteristics

- Homepage has animated intro that plays once on load
- Slideshow auto-advances every 5 seconds
- Logo slider has continuous scrolling animation
- Map pins have pulsing CSS animation
- All images are loaded from `/public` folder
- Contact form is client-side only (no backend processing in static mode)
- Social media links in footer are placeholders (#)

## Common Tasks

### Adding a New Page

1. Create folder in `app/` (e.g., `app/new-page/`)
2. Add `page.js` inside the folder
3. Add `page.module.css` for styles
4. Update Navbar links if needed

### Adding a Business Sector

1. Update `businessSectors` array in `app/page.js`
2. Add hero image to `public/Hero Section/`
3. Update business page content in `app/business/page.js`
4. Add dropdown link in `Navbar.jsx`

### Modifying Styles

- Edit the corresponding `.module.css` file
- Do not use inline styles unless necessary for dynamic positioning (e.g., map pins)
- Maintain responsive design patterns already established

### Testing Before Deployment

```bash
npm run build && npm start
# Then visit http://localhost:3000
```

## Notes for Future Developers

- This project is maintained by a product designer with limited coding experience
- All code includes educational comments explaining "why" not just "what"
- Make incremental changes rather than large refactors
- Test thoroughly in both dev and production build modes
- Remember: static export means no server-side features
