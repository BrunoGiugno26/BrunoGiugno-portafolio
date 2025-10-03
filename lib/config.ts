/**
 * Portfolio Configuration
 *
 * This file contains all the customizable content for the portfolio.
 * Edit this file to personalize the portfolio with your own information.
 */

export const siteConfig = {
  // CONFIGURACIÓN PRINCIPAL
  name: "Bruno Giugno",
  initials: "BG",
  title: "Desarrollador Full Stack | Frontend", // Tu rol principal
  description: "Desarrollador Full Stack con Next.js, React, TypeScript y experiencia en sistemas transaccionales seguros (Stripe, Prisma).",
  url: "TU_URL_DE_VERCEL", // <<-- IMPORTANTE: Cambia esto después del deploy
  ogImage: "TU_URL_DE_VERCEL/og-image.jpg",

  // Información Personal (Ajustado para perfil Junior)
  personal: {
    email: "brunogiugno@gmail.com",
    location: "Godoy Cruz, Mendoza, Argentina",
    timezone: "ART (UTC-3)",
    availability: "Abierto a oportunidades Full Stack y Frontend",
    experience: "Bootcamp Henry • Proyectos Sólidos", // Experiencia ajustada
    projectCount: "2 Proyectos Full Stack Completos", // Enfatiza tus proyectos
  },

  // Enlaces Sociales
  links: {
    github: "https://github.com/BrunoGiugno26",
    linkedin: "https://www.linkedin.com/in/bruno-giugno-0406ba1a5/",
    twitter: "#", // Se deja vacío si no tienes cuenta profesional
    email: "mailto:brunogiugno@gmail.com",
    calendar: "#", // Dejar '#' si no usas Cal.com para agendar llamadas
    resume: "/resume.pdf", // Asegúrate de que el archivo CV se llame 'resume.pdf' en la carpeta public
  },

  // Navegación (Limpiado, eliminando Blog y FAQ si no los usas)
  navigation: [
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Acerca de Mí", href: "#about" }, // Añadido el enlace directo a la sección "About"
    { name: "Contacto", href: "#contact" },
  ],

  // Features (Recomendado: Desactivar los que no vas a usar para limpieza)
  features: {
    visitorCount: true,
    blog: false, // Desactivado
    feedback: true,
    whatsapp: false, // Desactivado
    analytics: false, // Desactivado
  },
} as const

export type SiteConfig = typeof siteConfig
