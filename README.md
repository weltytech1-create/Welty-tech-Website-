# Welty Tech (`welty.in`)

> **Engineering What's Next.** — Digital product design, custom software development, ERP & CRM solutions, AI automation, private cloud infrastructure, and API integrations.

Official website for **[Welty Tech](https://welty.in)**.

---

## Key Features

- **Modern Responsive UI/UX**: Floating capsule mega-menu navigation, unified mobile morphing drawer, custom cursor, and fluid typography across desktop and mobile.
- **Core Service Showcases**: Dedicated pages for Digital Product Design, Custom Software Development, ERP & CRM Solutions, AI Solutions & Intelligent Automation, On-Premises & Private Cloud Deployment, and System Integration & API Development.
- **Formspree Inquiry Integration**: Client intake and quick-contact forms with INR budget tiers and shared brief link (`Drive` / `Figma` / `Dropbox`) submission.
- **Privacy & Cookies Consent**: Centered animated cookie preference card, dedicated `/cookies` policy page, Footer settings trigger, and `/privacy` policy cross-links.
- **Technical SEO & Analytics**: Built-in `@vercel/analytics`, `@vercel/speed-insights`, dynamic OpenGraph cards, structured JSON-LD (`Organization`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`), XML image/video sitemap (`/sitemap.xml`), `robots.txt`, `manifest.webmanifest`, and Google Search Console verification metadata support.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Design Tokens (`design-tokens.css`)
- **Motion & Scrolling**: Framer Motion, Lenis Smooth Scroll, Lucide Icons
- **Telemetry**: Vercel Analytics & Speed Insights

---

## Environment Variables

Copy `.env.example` to `.env.local` for local overrides or set in Vercel Project Settings:

```bash
NEXT_PUBLIC_SITE_URL=https://welty.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_VERIFICATION=
```

Note: `.npmrc` sets `legacy-peer-deps=true` for clean dependency resolution on Vercel and local installs.

---

## Local Development & Build

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
npx next typegen
npx tsc --noEmit
npm run build
```

---

## Contact

- **Website**: [https://welty.in](https://welty.in)
- **Email**: `info@welty.in`
- **Instagram**: [@weltytech](https://www.instagram.com/weltytech)
- **LinkedIn**: [Welty Tech](https://www.linkedin.com/company/welty-tech/about/)

© 2026 Welty Tech. All rights reserved.
