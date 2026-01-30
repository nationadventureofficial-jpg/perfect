# Perfectly Pampered Parties Website

A modern Next.js website for Perfectly Pampered Parties, a mobile pamper party business in Swansea, UK.

## Features

- Modern, responsive design with pink/sparkly theme
- 11 pages including home, gallery, contact, testimonials, and more
- Booking and contact forms with API integration
- Image gallery with lightbox functionality
- Testimonial carousel
- Package pricing cards
- Mobile-friendly navigation with drawer menu
- SEO optimized with sitemap and robots.txt

## Technology Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Baloo 2, Poppins, Amatic SC)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3003](http://localhost:3003) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── api/         # API routes for forms
│   └── [pages]/     # Individual page routes
├── components/       # React components
├── lib/             # Utility functions
└── theme/           # Design system (colors, typography, etc.)
```

## Pages

1. Home (`/`)
2. Gallery (`/gallery`)
3. Terms (`/terms`)
4. Contact (`/contact`)
5. Testimonials (`/testimonials`)
6. Privacy Policy (`/privacy-policy`)
7. About Us (`/about-us`)
8. Special Offers (`/special-offers`)
9. Tent Pricing (`/tent-pricing`)
10. Princess Parties Swansea (`/princess-parties-swansea`)
11. Pamper Parties Swansea (`/pamper-parties-swansea`)

## API Routes

- `/api/book` - Booking form submissions
- `/api/contact` - Contact form submissions
- `/api/subscribe` - Newsletter subscriptions

Note: API routes currently log submissions. Integrate with email service (Resend, SendGrid) or database for production use.

## Customization

### Colors

Edit `src/theme/colors.ts` or `tailwind.config.ts` to customize the color scheme.

### Typography

Fonts are configured in `src/theme/typography.ts` and imported in `src/app/globals.css`.

### Images

Replace placeholder images in gallery and addon sections with actual images.

## Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## License

Copyright © 2024 Perfectly Pampered Parties, All rights reserved.
