# Pablo Avenali — Portfolio

Premium portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → /dist
npm run preview  # preview production build
```

## Deploy

The project is configured for one-click deploys to **Vercel** (`vite` framework auto-detected) or **Netlify**.

- Build command: `npm run build`
- Output directory: `dist`

## Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Industries.jsx
    ├── CaseStudies.jsx
    ├── TechStack.jsx
    ├── AICapabilities.jsx
    ├── Testimonials.jsx
    ├── Contact.jsx
    └── Footer.jsx
public/
└── assets/
    └── pablo-avenali.jpg
```

## Design system

Defined in `tailwind.config.js`:

- Background: `#0D0D1A` (base) · `#13131F` (surface) · `#1E1E3A` (border)
- Violet: `#7C3AED` (primary) · `#A78BFA` (light) · `#8B5CF6` (glow)
- Text: `#F8FAFC` (primary) · `#94A3B8` (secondary)
- Fonts: Inter · Sora · JetBrains Mono (loaded from Google Fonts)
