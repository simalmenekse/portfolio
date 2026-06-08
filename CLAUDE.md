# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio / CV website for Ayşe Şimal Menekşe. Stack: **React + Vite + Tailwind CSS + Framer Motion**. Single-page app with smooth-scroll anchor navigation.

## Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build (output: dist/)
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Design system

- **Background:** `#0A0A0F` → `#111118`
- **Accent:** deep violet `#7C3AED`
- **Body text (muted):** `#A1A1AA`
- **Card style:** `bg-white/[0.04]` with `border border-white/[0.08]`, `rounded-2xl`, glow on hover
- **Font:** Inter or Space Grotesk (geometric sans)
- Eyebrow labels: small, uppercase, accent-colored, placed above section titles

All animations use Framer Motion. Respect `prefers-reduced-motion` — wrap motion variants with a check or use `useReducedMotion()`.

## Architecture

```
src/
  components/        # One file per section
    Navbar.jsx       # Sticky blur nav, active-section highlight via IntersectionObserver
    Hero.jsx         # Two-button CTA + social icons + photo placeholder
    Stats.jsx        # Animated number counters (useCountUp or framer-motion)
    About.jsx
    Experience.jsx   # Two-column timeline: Experience (left) + Education (right)
    Projects.jsx     # Card grid; VRKitchen has "Published Paper" badge
    Skills.jsx       # Grouped pill/tag chips by category
    Certifications.jsx
    Contact.jsx      # mailto: form + contact info
    Footer.jsx
  App.jsx            # Assembles all sections; provides scroll context if needed
  index.css          # Tailwind base/components/utilities; global resets
  main.jsx
public/
  cv.pdf             # Placeholder — user must replace
  profile.jpg        # Placeholder — user must replace
```

## Key implementation details

- **Active nav:** use `IntersectionObserver` on each section `id` to highlight the current nav link.
- **Smooth scroll:** set `scroll-behavior: smooth` in CSS or use `element.scrollIntoView({ behavior: 'smooth' })`.
- **Stats counters:** animate from 0 to the target value on section enter; use `useInView` from Framer Motion.
- **Contact form:** submit handler posts to `mailto:aysesimalmenekse@gmail.com` via `window.location.href` — no backend needed. Leave a clearly-marked `// TODO: replace with form service` stub.
- **Mobile nav:** hamburger toggles a slide-down menu; close on link click or outside click.
- **Assets to replace:** `public/profile.jpg` (photo) and `public/cv.pdf` (CV download).

## Social / external links

- GitHub: `https://github.com/simalmenekse`
- LinkedIn: `https://linkedin.com/in/simalmenekse`
- Email: `aysesimalmenekse@gmail.com`
- VRKitchen repo: `https://github.com/CankayaUniversity/ceng-407-408-2024-2025-VRKitchen-Risk-Management-Platform-for-Gastronomy-Practitioners`
