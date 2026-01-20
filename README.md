# Portfolio - Personal Portfolio Website

## ✨ Features

- **Interactive UI**: Smooth animations powered by GSAP
- **Responsive Design**: Mobile-first approach with pixel-perfect layouts
- **Modern Aesthetics**: Glassmorphism effects and radial gradient backgrounds
- **PDF Resume Viewer**: Integrated PDF viewer for resume display
- **Component Architecture**: Organized using Atomic Design principles (Atoms, Molecules, Organisms)
- **Type-Safe**: Full TypeScript implementation
- **Optimized Performance**: Built with Vite and React Compiler for blazing-fast performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

### Core Framework & Build Tools

- **[React 19.2.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Tailwind animation utilities

### Animation & Interactions

- **[GSAP 3.14.2](https://gsap.com/)** - Professional-grade animation library

### Document Handling

- **[React PDF](https://react-pdf.org/)** - PDF viewer component

### Development Tools

- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[pnpm](https://pnpm.io/)** - Efficient package manager

### Deployment

- **[GitHub Pages](https://pages.github.com/)** - Static site hosting

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks (Button, Badge, Logo, etc.)
│   │   ├── molecules/      # Composite components (HeroSection, ProjectCard, etc.)
│   │   └── organisms/      # Complex components (Projects, Skills, Resume, etc.)
│   ├── constants/
│   │   └── profile.ts      # Centralized data (skills, projects, statistics)
│   ├── views/
│   │   └── Home.tsx        # Main page layout
│   ├── assets/
│   │   └── images/         # Images and media files
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind directives
├── public/                 # Static assets
├── dist/                   # Production build output
└── portfolio.png           # Preview image
```
