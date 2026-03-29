# MyBalance Landing — Copilot Instructions

## Security Rules

- **NEVER read, open, display, or access `.env`, `.env.*`, or any file containing secrets/API keys.**
- Do not log, output, or reference the content of environment variable files.
- If a user asks to read a `.env` file, remind them that this is blocked by project policy.

## Project Context

This is the **MyBalance Landing Page** — the marketing website for MyBalance. Part of the **MySuite** platform.

## Tech Stack

- **Framework**: React 19 + Vite 6 + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP 3.14
- **Icons**: lucide-react
- **Router**: HashRouter (React Router 7, client-side)
- **Dev port**: 3000

## Structure

- Entry: `index.tsx` → `App.tsx` (HashRouter)
- Pages: `pages/` — Home, HowItWorks, TechStack, PrivacyPolicy, CookiePolicy, TermsOfService
- Components: `components/` — Navbar, Hero, FeatureCard, LiquidBackground
- i18n: `hooks/useLocale.tsx` + `locales/` directory
- Types: `types.ts`, `metadata.json`

## Routes

| Path | Page |
|------|------|
| `/` | Home (hero, features, waitlist) |
| `/how-it-works` | Product explanation |
| `/tech-stack` | Technology details |
| `/privacy-policy` | Privacy legal |
| `/cookie-policy` | Cookie legal |
| `/terms-of-service` | Terms legal |

## Dev

```bash
pnpm install
pnpm run dev        # Vite dev server (port 3000)
pnpm run build      # Production build
pnpm run preview    # Preview production
```
