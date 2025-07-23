<div align="center">

# 🚀 Modern Portfolio Template

**A beautiful, responsive portfolio built with Next.js 14, TypeScript, and Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![GitHub Stars](https://img.shields.io/github/stars/adeelhashmi/portfolio-template?style=for-the-badge)](https://github.com/adeelhashmi/portfolio-template/stargazers)

[**🌟 Live Demo**](https://adeelhashmi.dev) • [**📖 Documentation**](https://github.com/adeelhashmi/portfolio-template/wiki) • [**🐛 Report Bug**](https://github.com/adeelhashmi/portfolio-template/issues) • [**✨ Request Feature**](https://github.com/adeelhashmi/portfolio-template/issues)

![Portfolio Preview](https://github.com/adeelhashmi/portfolio-template/raw/main/public/preview.gif)

</div>

---

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout** - Perfect on desktop, tablet, and mobile
- **Dark/Light Mode** - Automatic theme switching with system preference
- **Smooth Animations** - Powered by Framer Motion
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Micro-interactions** - Delightful hover states and transitions

### 🚀 **Performance Optimized**
- **Next.js 14** - App Router with Server Components
- **TypeScript** - Full type safety and better DX
- **Tailwind CSS** - Utility-first styling with JIT compilation
- **Image Optimization** - Next.js Image component with lazy loading
- **Bundle Analysis** - Optimized for Core Web Vitals

### 📊 **Analytics & Tracking**
- **Visitor Counter** - Real-time visitor tracking
- **Google Analytics** - Page views and user interactions
- **Performance Metrics** - Lighthouse scores and Web Vitals
- **Contact Form** - Built-in form handling with validation

### 🛠 **Developer Experience**
- **TypeScript** - Strict type checking
- **ESLint & Prettier** - Code formatting and linting
- **Husky** - Pre-commit hooks
- **Component Library** - Reusable UI components
- **Easy Customization** - Single config file for personalization

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/adeelhashmi/portfolio-template.git
   cd portfolio-template
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio!

---

## 🎨 Customization

### 1. **Personal Information**

Edit `lib/config.ts` to customize your portfolio:

\`\`\`typescript
export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  title: "Your Job Title",
  description: "Your description...",
  
  personal: {
    email: "your.email@example.com",
    location: "Your Location",
    // ... more fields
  },
  
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // ... more links
  }
}
\`\`\`

### 2. **Projects**

Add your projects in `data/projects.ts`:

\`\`\`typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description...",
    tags: ["React", "Next.js", "TypeScript"],
    // ... more fields
  }
]
\`\`\`

### 3. **Skills**

Update your skills in `data/skills.ts`:

\`\`\`typescript
export const skills: Skill[] = [
  {
    name: "React.js",
    icon: "⚛️",
    category: "Frontend",
    proficiency: 95,
    // ... more fields
  }
]
\`\`\`

### 4. **Blog Posts**

Add blog posts in `data/blog.ts` or connect to your CMS:

\`\`\`typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    excerpt: "Post excerpt...",
    // ... more fields
  }
]
\`\`\`

---

## 📁 Project Structure

\`\`\`
portfolio-template/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   └── ...
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── utils/                # Helper functions
└── public/               # Static assets
\`\`\`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Deploy to Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### Other Platforms

The portfolio works on any platform that supports Next.js:
- **Railway** - `railway up`
- **Render** - Connect GitHub repository
- **DigitalOcean App Platform** - Import from GitHub

---

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript compiler |
| `npm run analyze` | Analyze bundle size |

---

## 🎯 Features Roadmap

- [ ] **CMS Integration** - Sanity, Contentful, or Strapi
- [ ] **Blog Comments** - Giscus or Disqus integration
- [ ] **Newsletter** - ConvertKit or Mailchimp integration
- [ ] **Search** - Algolia or local search
- [ ] **i18n** - Multi-language support
- [ ] **PWA** - Progressive Web App features
- [ ] **E2E Testing** - Playwright or Cypress
- [ ] **Storybook** - Component documentation

---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Update documentation for significant changes
- Test your changes thoroughly
- Write meaningful commit messages

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Radix UI** - For accessible components
- **Lucide** - For beautiful icons

---

## 📊 GitHub Stats

![GitHub stars](https://img.shields.io/github/stars/adeelhashmi/portfolio-template?style=social)
![GitHub forks](https://img.shields.io/github/forks/adeelhashmi/portfolio-template?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/adeelhashmi/portfolio-template?style=social)

---

## 💬 Support

- **Documentation**: [Wiki](https://github.com/adeelhashmi/portfolio-template/wiki)
- **Issues**: [GitHub Issues](https://github.com/adeelhashmi/portfolio-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/adeelhashmi/portfolio-template/discussions)
- **Email**: [adeel.hashmi@example.com](mailto:adeel.hashmi@example.com)

---

<div align="center">

**If this project helped you, please consider giving it a ⭐!**

Made with ❤️ by [Adeel Hashmi](https://github.com/adeelhashmi)

</div>
