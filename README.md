# Flavormancer 🍽️

Flavormancer is a full-stack **recipes recommendation web application** that provides users with curated recipe suggestions through a modern and responsive user interface.

The project started as a frontend-only application and later evolved into a full-stack app with backend integration.

---

## 🚀 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Responsive Design

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- SQLite

---

## ✨ Features

- Recipe recommendations
- Full integration between frontend and backend
- RESTful API
- Responsive design (mobile, tablet, desktop)
- Clean and modern UI
- Scalable project structure

---


## Architecture

#### Type
- Component-based React architecture (functional components + hooks, feature/component-level state, custom hooks).
- No global state library (e.g., Redux) or formal layered architecture (Clean, MVVM) is currently used.

#### Why we chose this
- Aligns with React's unidirectional data flow and hooks-first patterns.
- Minimal boilerplate and dependencies → faster iteration and easier onboarding.
- Easier to reason about, test, and maintain for a small-to-medium app.
- Scales incrementally — add Context/Redux or adopt a layered/clean architecture later if complexity grows.


