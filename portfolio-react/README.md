# Varundeep Sengar — Personal Portfolio (React + Vite)

Modern, responsive personal portfolio built for **Data Analytics**, **Data Science / Machine Learning**, and **Python Development** roles. Designed with high-performance styling, interactive telemetry components, accessible navigation, and optimized production bundles for Vercel deployment.

---

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── favicon.svg              # Tab icon
│   ├── profile.jpg              # Optimized profile image
│   └── Varundeep_Sengar.pdf     # Single source of truth resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx            # Professional introduction & specializations
│   │   ├── Contact.jsx          # Email copy, contact info & quick actions
│   │   ├── DataVisualCard.jsx   # Interactive role telemetry & tabbed preview
│   │   ├── Education.jsx        # B.Tech degree & academic achievements
│   │   ├── Experience.jsx       # Internships & hands-on technical training
│   │   ├── Hero.jsx             # Hero headline, CTAs, and credential pills
│   │   ├── Icons.jsx            # GitHub and LinkedIn vector icons
│   │   ├── Navbar.jsx           # Responsive desktop & mobile drawer navigation
│   │   ├── Projects.jsx         # 6 curated projects with modal inspection
│   │   └── Skills.jsx           # Technical categories & Currently Learning
│   ├── App.jsx                  # Main application layout
│   ├── index.css                # Tailwind CSS v4 directives & typography tokens
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML entry point with complete SEO & social metadata
├── package.json                 # Scripts and dependencies
├── vite.config.js               # Vite + React + Tailwind v4 configuration
└── README.md                    # Project documentation
```

---

## 🛠️ Development & Build Scripts

Inside the `portfolio-react/` directory:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles optimized production bundle into `dist/`. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs fast Oxlint analysis across all components. |

---

## 🌐 Vercel Deployment Configuration

When deploying this project to **Vercel** (Hobby free plan):

- **Framework Preset**: `Vite`
- **Root Directory**: `portfolio-react`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: `22.x` (or `20.x`)
- **Environment Variables**: None required

---

## 📄 License & Attribution

Designed and built by **Varundeep Sengar**. All rights reserved.
