# Flavormancer 🍽️

Flavormancer is a modern, fully responsive restaurant landing page designed to showcase a restaurant's identity, menu, and unique offerings in an elegant and interactive way. Built with clean design principles and rich, scroll-based animations, it delivers a polished, premium experience that reflects the restaurant's atmosphere and style.

---

## 🚀 Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

All content is powered by **static data** (`src/data.ts`) — no backend, database, or API required. The app is fully static and ready to deploy on Vercel (or any static host).

---

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Rich, smooth scroll-based animations and micro-interactions
- Animated hero with orbiting dishes and floating info badges
- Sticky glassmorphism navbar with scroll progress bar
- Animated stat counters, marquee banner, and hover-reveal chef cards
- Sections: Hero, Categories, Why Choose Us, Special Menu, Regular Food, Chefs, Testimonials, and a call-to-action
- Clean, elegant UI with a warm, appetizing color palette
- Fast performance and optimized assets

---

## 🛠️ Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

---

## 🧱 Architecture

- Component-based React architecture (functional components + hooks).
- Static, typed data layer in `src/data.ts` — easy to edit without touching components.
- No global state library or backend — minimal dependencies, fast iteration, and trivial deployment.
