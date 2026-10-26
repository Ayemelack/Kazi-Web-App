# Kazi Official Website

This repository directory contains the official product website for **Kazi** — the trilingual digital business notebook designed for small business owners in Cameroon.

The website introduces Kazi, explains its core benefits, demonstrates its actual mobile application screens via an interactive guided walkthrough, and directs visitors to the official application stores when the app launches.

> **Project Isolation Guarantee:**
> This website is completely self-contained within `Kazi Web App/`. It does not modify, move, or interfere with the mobile application code or configuration in `Kazi/`.

---

## 1. Directory Structure

```
Kazi Web App/
├── public/
│   ├── assets/
│   │   ├── logo.svg                     # Official Kazi brand SVG mark
│   │   ├── shopkeeper-business-loop.mp4 # Authentic Pexels H.264 video loop of shopkeeper Melvin
│   │   ├── shopkeeper-business-loop.webp# Animated WebP loop fallback
│   │   ├── shopkeeper-smartphone.jpg    # Authentic poster photo of Cameroonian shopkeeper
│   │   ├── welcome-screen-image.jpeg    # Authentic mobile screen capture (Awa's shop)
│   │   └── CREDITS.md                   # Video & photography license credits
│   ├── favicon.svg                      # Official Kazi vector favicon
│   ├── robots.txt                       # SEO crawler instructions
│   └── sitemap.xml                      # Search engine sitemap
├── src/
│   ├── assets/                          # Bundled component media
│   ├── components/
│   │   ├── brand/
│   │   │   ├── KaziLogo.tsx             # Wordmark + Mark component (faithful 1:1)
│   │   │   └── KaziMark.tsx             # Official Kazi SVG mark (squircle + 3 bars + amber dot)
│   │   ├── layout/
│   │   │   ├── Header.tsx & Header.css  # Sticky header with glassmorphism & mobile drawer
│   │   │   └── Footer.tsx & Footer.css  # Clean footer with legal links & support email
│   │   ├── modals/
│   │   │   └── LegalModal.tsx & .css    # Accessible modal for Privacy Policy & Terms of Service
│   │   └── sections/
│   │       ├── Hero.tsx & Hero.css      # Animated hero with smartphone mockup & shopkeeper video
│   │       ├── Intro.tsx & Intro.css    # Why Kazi exists for Cameroonian small businesses
│   │       ├── Walkthrough.tsx & .css   # Guided 7-step walkthrough with continuous red accent line
│   │       ├── InteractiveDemo.tsx & .css # Live trilingual simulator (English / Français / Pidgin)
│   │       ├── Features.tsx & .css      # 6 core verified feature highlight cards
│   │       ├── Download.tsx & .css      # Dual-state store badges (State A: Pre-launch / State B: Live)
│   │       └── Support.tsx & .css       # Verified support@kazi.app contact section
│   ├── config/
│   │   ├── launchConfig.ts              # Publication status & official store URLs
│   │   └── supportConfig.ts             # Support email, response time, and policy texts
│   ├── styles/
│   │   ├── variables.css                # Design system tokens matching Kazi mobile theme
│   │   └── index.css                    # Global typography, layout, focus rings, reduced-motion
│   ├── App.tsx                          # Single page application structure
│   └── main.tsx                         # React entry point
├── dist/                                # Compiled production build output
├── index.html                           # SEO meta tags, Google Fonts, and favicon links
├── package.json                         # Dependencies and build scripts
├── tsconfig.json                        # TypeScript compiler options
├── vercel.json                          # Vercel routing and cache header configuration
└── vite.config.ts                       # Vite bundler configuration
```

---

## 2. Getting Started Locally

### Prerequisites
- Node.js ≥ 20.0 (tested on Node v22.12.0)
- npm ≥ 10.0

### Installation
Open a terminal in the `Kazi Web App` directory:

```bash
cd "Kazi Web App"
npm install
```

### Development Server
To run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
To validate TypeScript types and compile the optimized production bundle:

```bash
npm run build
```
Output will be generated in `dist/`.

### Local Preview
To preview the compiled production build locally:

```bash
npx vite preview --port 4173
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

---

## 3. Configuration Management

### How to Update App Store Publication Status & Store URLs
All store listing information is centrally managed in **`src/config/launchConfig.ts`**:

```typescript
export const launchConfig: LaunchConfig = {
  // STATE A (Pre-launch): set to false (displays truthful Coming Soon badges)
  // STATE B (Live launch): set to true (activates direct official store links)
  isPublished: false,

  googlePlay: {
    enabled: true,
    // Enter the official Google Play store URL when approved:
    storeUrl: 'https://play.google.com/store/apps/details?id=com.kazi.app',
    packageId: 'com.kazi.app',
    buttonText: 'Get it on Google Play',
    comingSoonNote: 'Store listing undergoing review for Android devices.'
  },

  appStore: {
    enabled: true,
    // Enter the official Apple App Store URL when approved:
    storeUrl: 'https://apps.apple.com/app/kazi/id123456789',
    appId: '',
    buttonText: 'Download on the App Store',
    comingSoonNote: 'iOS edition coming soon to the App Store.'
  }
};
```

> **Note on Verification:** A developer review toggle is provided directly on the website download section allowing reviewers to preview both State A and State B in the browser.

### How to Configure the Support Email
Support and contact details are centrally configured in **`src/config/supportConfig.ts`**:

```typescript
export const supportConfig: SupportConfig = {
  email: 'support@kazi.app',
  responseTime: 'Within 24 hours',
  responseLanguages: ['English', 'Français'],
  tagline: 'Your business, kept simple.',
  // ...
};
```

---

## 4. Vercel Deployment Instructions

This website is designed for zero-cost deployment on Vercel's free tier as a high-performance static web application.

### Important: Root Directory Configuration on Vercel
Because the website is located inside the subfolder `Kazi Web App` within the parent repository, you must specify the **Root Directory** in your Vercel project settings:

1. Log in to [Vercel](https://vercel.com/) and click **"Add New..." &rarr; "Project"**.
2. Select your Git repository.
3. In the **Configure Project** screen:
   - **Project Name:** `kazi-website` (or `kazi-app`)
   - **Framework Preset:** `Vite`
   - **Root Directory:** Click "Edit" and choose `Kazi Web App` (or enter `Kazi Web App`).
4. **Build & Development Settings:**
   - **Build Command:** `npm run build` (or `vite build`)
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.

### Vercel Routing Configuration (`vercel.json`)
The included `vercel.json` automatically ensures:
- Single-page application route rewrites to `/index.html`.
- Long-term caching headers for immutable static assets in `/assets/`.
- Clean URLs without trailing slashes.

---

## 5. Accessibility & Performance Highlights
- **Semantic HTML5:** Proper single `<h1>` hierarchy, semantic landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`), and accessible ARIA attributes.
- **Color Contrast:** Curated palette compliant with WCAG 2.1 AA standards.
- **Keyboard Navigation:** Focus rings on all interactive elements, keyboard-operable modal dialogs (Escape key support and focus trap).
- **Reduced Motion:** Fully complies with `prefers-reduced-motion: reduce`, disabling continuous video loops and bobbing animations for users who prefer minimal motion.
- **Asset Optimization:** Video is muted by default with an inline poster fallback. Bundle size is less than 75 kB gzipped.
