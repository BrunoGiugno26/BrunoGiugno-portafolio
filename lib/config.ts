/**
 * Portfolio Configuration
 *
 * This file contains all the customizable content for the portfolio.
 * Edit this file to personalize the portfolio with your own information.
 */

export const siteConfig = {
  name: "Adeel Hashmi",
  initials: "AH",
  title: "Senior Frontend Engineer",
  description: "Senior Frontend Engineer crafting pixel-perfect experiences with React, Next.js, and TypeScript.",
  url: "https://adeelhashmi.dev",
  ogImage: "https://adeelhashmi.dev/og-image.jpg",

  // Personal Information
  personal: {
    email: "adeel.hashmi@example.com",
    location: "Open to Remote & EU Relocation",
    timezone: "CET/EST",
    availability: "Available for hire",
    experience: "4+ years",
    projectCount: "50+",
  },

  // Social Links
  links: {
    github: "https://github.com/adeelhashmi",
    linkedin: "https://linkedin.com/in/adeelhashmi",
    twitter: "https://twitter.com/adeelhashmi",
    email: "mailto:adeel.hashmi@example.com",
    calendar: "https://cal.com/adeelhashmi",
    resume: "/resume.pdf",
  },

  // Navigation
  navigation: [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ],

  // Features enabled/disabled
  features: {
    visitorCount: true,
    blog: true,
    feedback: true,
    whatsapp: true,
    analytics: true,
  },
} as const

export type SiteConfig = typeof siteConfig
