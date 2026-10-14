# Varundeep Sengar — Personal Portfolio (React + Vite)

Modern, responsive personal portfolio built for **Data Analytics**, **Data Science / Machine Learning**, and **Python Development** roles. Designed with high-performance styling, accessible navigation, and optimized production bundles for Vercel deployment.

---

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Vector SVGs
- **Linting**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

`
portfolio-react/
├── public/
│   ├── favicon.svg              # Tab icon
│   ├── profile.jpg              # Editorial portrait asset
│   └── Varundeep_Sengar.pdf     # Single source of truth resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx            # Professional introduction & specializations
│   │   ├── Contact.jsx          # Email, WhatsApp, and social contact actions
│   │   ├── Education.jsx        # B.Tech degree & academic achievements
│   │   ├── Experience.jsx       # Internships & hands-on technical training
│   │   ├── Hero.jsx             # Hero headline, CTAs, and editorial portrait card
│   │   ├── Icons.jsx            # GitHub, LinkedIn, and WhatsApp vector icons
│   │   ├── Navbar.jsx           # Responsive desktop & mobile drawer navigation
│   │   ├── Projects.jsx         # 6 curated projects with modal inspection
│   │   └── Skills.jsx           # Technical categories & Currently Learning
│   ├── App.jsx                  # Main application layout
│   ├── index.css                # Tailwind CSS v4 directives & typography tokens
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML entry point with SEO & Open Graph metadata
├── package.json                 # Scripts and dependencies
├── vite.config.js               # Vite + React + Tailwind v4 configuration
└── README.md                    # React application documentation
`

---

## 🛠️ Development & Build Scripts

Inside the portfolio-react/ directory:

| Command | Description |
| :--- | :--- |
| 
pm run dev | Starts local development server with Hot Module Replacement (HMR). |
| 
pm run build | Compiles optimized production bundle into dist/. |
| 
pm run preview | Serves the production build locally for verification. |
| 
pm run lint | Runs fast Oxlint analysis across all components. |

---

## 🌐 Vercel Deployment Configuration

When deploying this project to **Vercel**:

- **Framework Preset**: Vite
- **Root Directory**: portfolio-react
- **Build Command**: 
pm run build
- **Output Directory**: dist
- **Install Command**: 
pm install
- **Node.js Version**: 22.x (or 20.x)
- **Environment Variables**: None required

---

## 📄 License & Attribution

Designed and built by **Varundeep Sengar**. All rights reserved.
