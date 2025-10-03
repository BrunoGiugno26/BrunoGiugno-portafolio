import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  // --- Títulos y Descripción Principales (Lo que ve Google) ---
  title: {
    default: "Bruno Giugno | Desarrollador Full Stack & Frontend",
    template: "%s | Bruno Giugno Portfolio",
  },
  description:
    "Desarrollador Full Stack especializado en Next.js, React, y TypeScript. Experiencia en la construcción de sistemas transaccionales seguros (Stripe, Prisma) y gestión de datos SQL.",
  
  // --- Palabras Clave (SEO) ---
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  
  // --- Autor y Creador ---
  authors: [{ name: "Bruno Giugno" }],
  creator: "Bruno Giugno",

  // --- OpenGraph (Para compartir en LinkedIn y Facebook) ---
  openGraph: {
    type: "website",
    locale: "es_AR", // Cambiado a Español de Argentina
    url: "TU_URL_DE_VERCEL", // <<-- REEMPLAZAR ESTO DESPUÉS DEL DEPLOY
    title: "Bruno Giugno | Full Stack & Frontend Developer",
    description:
      "Desarrollador Full Stack con Next.js, Prisma y experiencia en sistemas de reservas y e-commerce. ¡Mira mis proyectos!",
    siteName: "Bruno Giugno Portfolio",
  },
  
  // --- Twitter/X Card (Para compartir en Twitter/X) ---
  twitter: {
    card: "summary_large_image",
    title: "Bruno Giugno | Full Stack & Frontend Developer",
    description:
      "Desarrollador Full Stack con Next.js, Prisma y experiencia en sistemas de reservas y e-commerce. ¡Mira mis proyectos!",
  },
  
  // --- Configuración de Idioma y Robots ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <WhatsAppChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
