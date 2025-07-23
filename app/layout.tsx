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
  title: {
    default: "Adeel Hashmi - Senior Frontend Engineer",
    template: "%s | Adeel Hashmi",
  },
  description:
    "Senior Frontend Engineer specializing in React.js, Next.js, TypeScript. 4+ years building scalable applications for 100K+ users. Available for EU relocation.",
  keywords: [
    "Senior Frontend Engineer",
    "React.js Expert",
    "Next.js Developer",
    "TypeScript Specialist",
    "EU Relocation",
    "Remote Developer",
  ],
  authors: [{ name: "Adeel Hashmi" }],
  creator: "Adeel Hashmi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeelhashmi.dev",
    title: "Adeel Hashmi - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer building scalable applications for 100K+ users. React.js, Next.js, TypeScript expert available for EU relocation.",
    siteName: "Adeel Hashmi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Hashmi - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer building scalable applications for 100K+ users. React.js, Next.js, TypeScript expert.",
  },
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
