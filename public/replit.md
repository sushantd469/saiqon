# Endercloud Hosting

## Overview

Endercloud is a premium game server hosting platform built with Next.js. The application provides hosting services for Minecraft servers, Discord bots, VPS, and other game servers across multiple geographic regions (India, Germany, Singapore, United States). The platform features a modern marketing website with pricing plans, server location information, and multi-language/multi-currency support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js** with App Router - Static site generation for marketing pages
- **React** for component-based UI
- **TypeScript** (inferred from minified bundles)
- **Tailwind CSS v4** for styling with custom design system

### UI/UX Patterns
- **Framer Motion** for animations and transitions
- **Dark/Light theme support** with theme provider
- **Responsive design** with mobile-first approach
- Custom fonts: DM Sans (body) and Orbitron (headings)

### Internationalization
- **Custom i18n system** with JSON translation files in `/lang/` directory
- Auto-detection of browser language with fallback to English
- Currency conversion system supporting INR, USD, and other currencies
- Configuration stored in JSON files for languages and currencies

### Component Architecture
- Reusable UI components built with Lucide React icons and React Icons
- Feature sections are modular and data-driven (plans loaded from JSON configs)
- Snowfall effect component for seasonal themes (Christmas theme toggle)

### Routing Structure
- `/` - Homepage
- `/minecraft/[region]` - Minecraft hosting with region-specific pricing (india, germany, singapore)
- `/vps` - VPS hosting plans
- `/games` - Game server hosting
- `/discord-bot-hosting` - Discord bot hosting
- `/hytale/[region]` - Hytale game hosting

### State Management
- React Context for language/translations
- React Context for currency selection and conversion
- Local component state with useState/useEffect hooks

## External Dependencies

### Third-Party Services
- **Google Analytics** (G-MFSVC2B6N7) - Analytics tracking
- **Tawk.to** - Live chat widget integration
- **ExchangeRate-API** - Currency conversion (API key configured in settings)

### External Links
- Billing portal (external)
- Dashboard (external)
- Discord community server

### CDN/Assets
- Self-hosted fonts (woff2 format)
- SVG flag icons for country/region selection
- CPU brand logos (AMD Ryzen, Intel Xeon, Ampere Altra)

### Schema.org
- Organization structured data for SEO