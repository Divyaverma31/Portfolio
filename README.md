# Divya Verma — Portfolio

A premium, recruiter-focused portfolio website built with React (Vite), Tailwind CSS and Framer Motion.

## Tech Stack

- React 19 (Vite)
- Tailwind CSS
- Framer Motion (animations, scroll reveal, page transitions)
- React Router DOM
- React Type Animation (hero typing effect)
- React PDF (inline resume preview)
- EmailJS (contact form)
- React Toastify (notifications)
- Lucide React + React Icons
- GitHub REST API (live profile, repos, activity)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an email service and a template with variables: `from_name`, `reply_to`, `subject`, `message`.
3. Copy `.env.example` to `.env` and fill in your credentials:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Until configured, the form shows a friendly toast asking visitors to email directly.

## Updating Content

All portfolio content (profile, experience, skills, projects, achievements, education, nav links) lives in a single file:

```
src/data/portfolio.js
```

To replace the resume, overwrite `public/resume.pdf`.

## Project Structure

```
src/
  components/     Reusable UI (Navbar, Footer, Loader, Reveal, Counter, ...)
  sections/       Page sections (Hero, About, Experience, ..., Contact)
  hooks/          useGithub — GitHub REST API integration
  context/        ThemeContext — dark/light mode
  data/           portfolio.js — all content in one place
```

## Features

- Dark/light mode toggle (persisted)
- Sticky navbar with active-section highlighting
- Scroll progress bar, scroll-to-top button, animated loader, cursor glow
- Canvas particle background and floating tech icons
- Animated counters, scroll-reveal animations, glassmorphism cards
- Live GitHub stats with repository search and language filter
- Inline PDF resume viewer with download / open-in-new-tab
- SEO meta tags, Open Graph, JSON-LD structured data
- Lazy-loaded resume viewer for fast initial load
- Fully responsive and accessibility-minded (WCAG)
