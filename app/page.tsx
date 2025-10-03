"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkillsSection } from "@/components/skills-section";
import { ProjectCard } from "@/components/project-card";
import { Menu, X } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// =================================================================
// 1. DATA PERSONALIZADA
// =================================================================

const workExperience = [
  {
    company: "Giugno distribuciones (Comercio de belleza)",
    role: "Administrativo | Gestión de Inventario",
    duration: "Nov 2019 - Presente",
    logo: "https://ik.imagekit.io/fefgntjox/Logo%20GiugnoDistribuciones.jpeg?updatedAt=1749432834776",
    description:
      "Encargado del control de stock, balances y reposición de mercancía, desarrollando habilidades clave de organización y atención al detalle aplicables al desarrollo de software.",
  },
];

const projects = [
  {
    id: "1",
    slug: "brunocars-reservas-vehiculos",
    title: "BrunoCars - Alquiler de Vehículos",
    description:
      "Plataforma Full Stack con Next.js 14 y Prisma. Destacado: Pagos asíncronos con Stripe Webhooks, autenticación con Clerk y robustez de la base de datos PostgreSQL.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Clerk",
    ],
    imageUrl:
      "https://ik.imagekit.io/fefgntjox/Rents-Cars/untitled-0.png?updatedAt=1758552652106",
    featured: true,
    liveUrl: "https://rents-cars.vercel.app/",
    githubUrl: "https://github.com/BrunoGiugno26/Rents-Cars",
    metrics: {
      users: "Transaccional",
      performance: "UX optimizada",
      impact: "Alta estabilidad de datos",
    },
  },
  {
    id: "2",
    slug: "lienzo-culinario-ecommerce",
    title: "Lienzo Culinario - E-commerce de Comida",
    description:
      "Proyecto en equipo. E-commerce desarrollado con Next.js y Nest.js (backend) con gestión de estado global y carrito de compras.",
    tags: [
      "Next.js",
      "Nest.js",
      "React",
      "Cloudinary",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    imageUrl:
      "https://ik.imagekit.io/fefgntjox/Rents-Cars/Logo-Lienzo.png?updatedAt=1759367121863",
    featured: true,
    liveUrl: "https://lienzofront.vercel.app/",
    githubUrl:
      "https://github.com/lienzoculinariog2/lienzofront/tree/main/front",
    metrics: {
      users: "E-commerce",
      performance: "Trabajo en Equipo",
      impact: "Entrega del proyecto en 3 semanas",
    },
  },
];

const navigation = [
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Acerca de Mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

// =================================================================
// 2. COMPONENTE HOME COMPLETO
// =================================================================

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      {/* Glass Navigation - BARRA FUNCIONAL Y RESPONSIVA */}
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl border-border/50">
        <div className="max-w-6xl px-6 py-4 mx-auto">
          {" "}
          {/* AUMENTADO EL ANCHO A max-w-6xl */}
          <div className="flex items-center justify-between h-16">
            {/* LOGO Y TÍTULO (BLOQUE IZQUIERDO) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="z-10 flex items-center h-full gap-2"
            >
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={handleCloseMenu}
              >
                {/* 1. IMAGEN DEL LOGO */}
                <Image
                  src={"/icon.png"}
                  alt="Logo BGProyectos"
                  width={64}
                  height={64}
                  className="flex-shrink-0 object-contain rounded-full"
                />
                {/* 2. TEXTO DEL TÍTULO (Oculto en móvil) */}
                <span className="hidden text-xl font-bold text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text whitespace-nowrap sm:inline-block">
                  BGProyectos
                </span>
              </Link>
            </motion.div>

            {/* ENLACES CENTRALES (BLOQUE CENTRADO EN DESKTOP) */}
            <div className="absolute inset-x-0 justify-center hidden h-16 pointer-events-none sm:flex">
              <div className="flex items-center gap-6 pointer-events-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm transition-colors duration-200 rounded-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* BOTONES DE TEMA Y MENÚ MÓVIL (BLOQUE DERECHO) */}
            <div className="z-10 flex items-center gap-6">
              <ThemeToggle />

              {/* BOTÓN DE MENÚ MÓVIL (Visible solo en móvil) */}
              <div className="flex items-center sm:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:text-primary"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          {/* MENÚ DESPLEGABLE MÓVIL */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute left-0 z-40 w-full border-t shadow-lg bg-background/95 backdrop-blur-md sm:hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium transition-colors rounded-md text-foreground hover:text-primary hover:bg-muted"
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Margen superior ajustado */}
      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-2xl px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <Badge className="px-4 py-2 text-yellow-800 transition-all duration-300 border bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/20 dark:text-orange-400">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="w-2 h-2 mr-2 bg-orange-400 rounded-full"
                  />
                  Abierto a oportunidades Full Stack y Frontend
                </Badge>
              </motion.div>

              {/* Main Hero Content */}
              <div className="space-y-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-6"
                >
                  {/* Avatar Circular y Ajustado */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full opacity-75 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 blur-sm"
                    />
                    <div className="relative flex items-center justify-center overflow-hidden text-2xl font-bold border rounded-full w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-800 border-border/20">
                      <Image
                        src={
                          "https://ik.imagekit.io/fefgntjox/Foto%20CV.jpg?updatedAt=1759363118263"
                        }
                        alt="Foto de perfil de Bruno Giugno"
                        width={112} // 112px = w-28, h-28
                        height={112}
                        className="object-cover w-full h-full border-2 border-transparent rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
                      Bruno Giugno
                    </h1>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="h-1 mt-2 rounded-full bg-gradient-to-r from-yellow-700 to-yellow-900"
                    />
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl text-xl leading-relaxed text-muted-foreground"
                >
                  Soy un{" "}
                  <span className="font-semibold text-foreground">
                    Desarrollador Full Stack
                  </span>{" "}
                  con un fuerte enfoque en Frontend. Transformo requisitos
                  complejos en experiencias de usuario intuitivas con{" "}
                  <span className="text-yellow-600">React</span>,
                  <span className="px-2 py-1 rounded text-foreground bg-muted">
                    Next.js
                  </span>
                  , y <span className="text-yellow-600">TypeScript</span>.
                  <br />
                  <span className="block mt-2 text-sm text-muted-foreground/70">
                    • Proyectos Full Stack Sólidos • Abierto a nuevas
                    oportunidades
                  </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <a
                    href="mailto:brunogiugno@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-8 py-3 font-semibold transition-all duration-300 rounded-full shadow-lg group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      <Sparkles className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                      Hablemos de tu Proyecto
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="/Bruno Giugno - CV - Full Stack Developer.pdf"
                      download={"Bruno Giugno - CV - Full Stack Developer.pdf"}
                    >
                      <Button
                        variant="outline"
                        className="px-6 py-3 transition-all duration-300 border rounded-full bg-muted/50 hover:bg-muted border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Resume
                      </Button>
                    </a>

                    <Button
                      variant="outline"
                      asChild
                      className="px-6 py-3 transition-all duration-300 border rounded-full bg-muted/50 hover:bg-muted border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <a
                        href="https://github.com/BrunoGiugno26"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex justify-center gap-4 pt-8"
                >
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/BrunoGiugno26",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/bruno-giugno-0406ba1a5/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:brunogiugno@gmail.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 transition-all duration-300 border bg-muted/50 hover:bg-muted border-border/50 hover:border-border rounded-2xl group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`Visit my ${label} profile`}
                    >
                      <Icon className="w-5 h-5 transition-colors text-muted-foreground group-hover:text-foreground" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-2xl px-6 mx-auto space-y-16">
          {/* About Section - Texto de perfil optimizado */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            id="about"
          >
            <h2 className="text-2xl font-bold text-center border-r bg-gradient-to-r from-yellow-600 to-yellow-800">
              Acerca de Mí
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Soy un Desarrollador Full Stack Junior con una pasión marcada
                por el Frontend. Mi objetivo principal es transformar requisitos
                de negocio complejos en experiencias de usuario intuitivas y
                visualmente atractivas. Me especializo en el ecosistema moderno
                de JavaScript, dominando tecnologías como **React**,
                **Next.js**, y **TypeScript**.
              </p>
              <p>
                Adquirí un sólido conocimiento Full Stack a través del bootcamp
                intensivo de Henry, incluyendo el manejo de Express, PostgreSQL
                y MongoDB. Mi enfoque se centra en la construcción de sistemas
                transaccionales robustos (como mi proyecto de reservas con
                Stripe y Prisma), demostrando un fuerte compromiso con la
                integridad de los datos y la escalabilidad.
              </p>
              <p>
                Mi trayectoria me ha enseñado a ser autodidacta, proactivo y
                resiliente, habilidades que aplico a diario para resolver
                problemas en el desarrollo web. Valoro el éxito basado en la
                comunicación y la colaboración grupal, considerándolas
                fundamentales para el éxito de cualquier proyecto de software.
              </p>
              <p>
                Actualmente, busco mi primera oportunidad profesional para
                crecer en un equipo dinámico. Estoy comprometido a aportar mi
                energía y dedicación, con la convicción de que con esfuerzo y
                tiempo se pueden lograr grandes resultados.
              </p>
            </div>
          </motion.section>

          {/* Work Experience - Corregido a tu experiencia real */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Experiencia Laboral</h2>
            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 overflow-hidden text-xl transition-all duration-300 border rounded-full bg-muted/50 hover:bg-muted border-border/50 hover:border-border">
                    {/* IMPLEMENTACIÓN DE LA IMAGEN DE LA EMPRESA */}
                    <Image
                      src={job.logo} // Usamos job.logo como la URL
                      alt={`${job.company} logo`}
                      width={48} // w-12 h-12 son 48px
                      height={48}
                      className="object-cover w-full h-full" // Asegura que el logo llene el círculo
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">
                        {job.company}
                      </h3>
                      <span className="flex-shrink-0 text-sm text-muted-foreground">
                        {job.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground/70">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section - Llenada en components/skills-section.tsx */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* Projects - Corregido con tus proyectos */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Proyectos Destacados</h2>
              <Link
                href="#contact"
                className="text-sm transition-colors duration-200 rounded-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Ver más →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">
              ¿Listo para Empezar tu Proyecto?
            </h2>
            <p className="text-muted-foreground">
              Estoy abierto a discutir nuevas oportunidades y proyectos.
              ¡Hagamos algo increíble juntos!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                <Mail className="w-4 h-4 mr-2" />
                Contáctame
              </Button>
              <Button
                variant="outline"
                asChild
                className="border bg-muted/50 hover:bg-muted border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a
                  href="https://www.linkedin.com/in/bruno-giugno-0406ba1a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border bg-muted/50 hover:bg-muted border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a
                  href="https://github.com/BrunoGiugno26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.section>

          {/* Footer with Analytics */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 space-y-6 border-t border-border/50"
          >
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-4">
                {[
                  {
                    icon: Globe,
                    href: "https://bruno-giugno-portafolio.vercel.app/",
                    label: "Portafolio",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/BrunoGiugno26",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/bruno-giugno-0406ba1a5/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:brunogiugno@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground hover:text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>

            </div>

            <div className="text-sm text-center text-muted-foreground/70">
              © 2025 Bruno Giugno. Basado en el trabajo de Adeel Hashmi. Built
              with Next.js & Tailwind CSS.
            </div>
          </motion.footer>
        </div>
      </main>

    </div>
  );
}
