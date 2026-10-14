# Varundeep Sengar — Data Science & Software Engineering Portfolio

[![Production Build](https://img.shields.io/badge/Build-Passing-emerald)](https://varundeepsengar-portfolio.vercel.app/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://varundeepsengar-portfolio.vercel.app/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)

Live Portfolio: **[https://varundeepsengar-portfolio.vercel.app/](https://varundeepsengar-portfolio.vercel.app/)**  
GitHub Repository: **[https://github.com/Varundeep09/My_Portfolio](https://github.com/Varundeep09/My_Portfolio)**

---

## Overview & Purpose

This repository houses the personal professional portfolio of **Varundeep Sengar**, specializing in **Data Analytics**, **Data Science / Machine Learning**, and **Python Backend Engineering**.

The application highlights verified academic qualifications (B.Tech CSE with AI & ML specialization, 8.6 CGPA), professional internship experiences (Dhee Coding Lab, Alphanext Technology Solutions, Tokyo Quant, Infosys Springboard), selected engineering projects, core technical competencies, and verified contact channels.

---

## Technology Stack

- **Frontend Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling Architecture**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Iconography**: [Lucide React](https://lucide.dev/) + Custom Vector SVGs (GitHub, LinkedIn, WhatsApp)
- **Static Analysis & Linting**: [Oxlint](https://oxc.rs/)
- **Target Hosting Platform**: [Vercel](https://vercel.com/) (Hobby Tier)

---

## Repository Structure

The repository is organized with the active application cleanly isolated inside the `portfolio-react/` directory:

```
My_Portfolio/
├── portfolio-react/               # Active React / Vite application (Vercel Root)
│   ├── public/
│   │   ├── favicon.svg            # Browser tab icon
│   │   ├── profile.jpg            # Editorial portrait image
│   │   └── Varundeep_Sengar.pdf   # Single-source master resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx          # Professional overview & specialization tags
│   │   │   ├── Contact.jsx        # Direct email, WhatsApp, and social channels
│   │   │   ├── Education.jsx      # B.Tech degree, coursework, and credentials
│   │   │   ├── Experience.jsx     # Technical internships and responsibilities
│   │   │   ├── Hero.jsx           # Editorial hero, quick actions & social links
│   │   │   ├── Icons.jsx          # GitHub, LinkedIn, and WhatsApp SVG icons
│   │   │   ├── Navbar.jsx         # Responsive desktop and mobile drawer navigation
│   │   │   ├── Projects.jsx       # Curated projects with modal detail views
│   │   │   └── Skills.jsx         # Technical competencies & in-progress learning
│   │   ├── App.jsx                # Layout composer
│   │   ├── index.css              # Tailwind v4 directives & motion preferences
│   │   └── main.jsx               # Application entry point
│   ├── .oxlintrc.json             # Oxlint configuration
│   ├── index.html                 # Semantic HTML entry with SEO & Open Graph meta
│   ├── package.json               # Project dependencies and script definitions
│   ├── package-lock.json          # Deterministic dependency tree
│   ├── vite.config.js             # Vite bundler plugins and settings
│   └── README.md                  # Application-specific documentation
├── .gitignore                     # Repository-level ignore definitions
└── README.md                      # Repository root documentation
```

---

## Local Setup & Development

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Varundeep09/My_Portfolio.git
   cd My_Portfolio/portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser. Hot Module Replacement (HMR) is active by default.

---

## Linting & Production Build

All commands should be run inside the `portfolio-react/` directory:

| Task | Command | Description |
| :--- | :--- | :--- |
| **Lint** | `npm run lint` | Runs `oxlint` across all `.jsx`, `.js`, and `.html` files (0 errors / 0 warnings). |
| **Build** | `npm run build` | Compiles the production bundle into `portfolio-react/dist/`. |
| **Preview** | `npm run preview` | Locally serves the compiled production build for manual QA. |

---

## Vercel Deployment Instructions

The application is deployed on **Vercel** via GitHub integration.

### Required Vercel Project Settings:

- **Framework Preset**: `Vite`
- **Root Directory**: `portfolio-react` *(Crucial: must point to the subfolder)*
- **Build Command**: `npm run build` (or Vite default)
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: `22.x` (or `20.x`)
- **Environment Variables**: None required

Every push to the `main` branch automatically triggers a production deployment to:  
👉 **[https://varundeepsengar-portfolio.vercel.app/](https://varundeepsengar-portfolio.vercel.app/)**

---

## Resume Location & Download Behavior

- **Single Source of Truth**: `portfolio-react/public/Varundeep_Sengar.pdf`
- **Build Output**: During `npm run build`, Vite copies this file directly to `dist/Varundeep_Sengar.pdf`, making it available at runtime at `/Varundeep_Sengar.pdf`.
- **Download Attributes**: The navigation bar, hero section, and contact card invoke download triggers with HTML5 `download="Varundeep_Sengar.pdf"` attributes.

---

## Contact Channels

- **WhatsApp**: [+91 95890 97257](https://wa.me/919589097257) (`https://wa.me/919589097257`)
- **Email**: [sengarvarundeep@gmail.com](mailto:sengarvarundeep@gmail.com)
- **LinkedIn**: [linkedin.com/in/varundeep-sengar-282b33255](https://www.linkedin.com/in/varundeep-sengar-282b33255/)
- **GitHub**: [github.com/Varundeep09](https://github.com/Varundeep09)
- **Location**: Indore, India

All external links open safely in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

---

## Repository Maintenance Notes

1. **Self-Contained Root**: `portfolio-react/` contains the entire active source code and configuration. Legacy starter files and static apps from earlier iterations have been purged.
2. **Asset Hygiene**: Do not commit `node_modules/`, `dist/`, `.venv/`, scratch scripts, or unoptimized raw images.
3. **Accessibility & Motion**: All interactive elements include semantic ARIA labels, contrast-verified tokens, and respect `prefers-reduced-motion` media queries.

---

## License & Attribution

Designed and engineered by **Varundeep Sengar**. All rights reserved.
