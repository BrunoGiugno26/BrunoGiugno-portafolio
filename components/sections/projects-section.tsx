"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// =================================================================
// 1. DATA PERSONALIZADA: Proyectos
// =================================================================

const projects = [
  {
    id: "brunocars-reservas",
    title: "BrunoCars - Alquiler de Vehículos",
    description:
      "Plataforma Full Stack con Next.js 14 y Prisma. Destacado: Pagos asíncronos (Stripe Webhooks), autenticación (Clerk) y robustez de la base de datos PostgreSQL.",
    image: "/images/brunocars-preview.png", // <--- DEBES SUBIR ESTA IMAGEN A /public/images/
    tags: [
      "Next.js 14", "TypeScript", "Prisma", "Stripe", "Clerk", "Tailwind CSS"
    ],
    featured: true,
    liveUrl: "https://rents-cars.vercel.app/",
    githubUrlFront: "https://github.com/BrunoGiugno26/Rents-Cars", // Front
    githubUrlBack: "TU_LINK_REPO_BACKEND_RESERVAS", // Backend
  },
  {
    id: "lienzo-culinario-ecommerce",
    title: "Lienzo Culinario - E-commerce de Comida",
    description:
      "Proyecto en equipo. E-commerce desarrollado con Next.js y Nest.js (Backend) con gestión de estado global y carrito de compras.",
    image: "/images/lienzo-preview.png", // <--- DEBES SUBIR ESTA IMAGEN A /public/images/
    tags: [
      "Next.js", "Nest.js", "React", "Redux", "PostgreSQL", "Trabajo en Equipo"
    ],
    featured: true,
    liveUrl: "https://lienzofront.vercel.app/",
    githubUrlFront: "https://github.com/lienzoculinariog2/lienzofront",
    githubUrlBack: "https://github.com/lienzoculinariog2/nuevolienzoback-", // Backend
  },
];

// Asumo que tu interfaz Project ya se ha ajustado en el archivo de tipos
// =================================================================

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Las funciones handleLiveDemo y handleViewCode son necesarias para la interactividad del hover
  const handleLiveDemo = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const handleViewCode = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  }


  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">Proyectos Destacados</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" // Grid ajustado
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {/* IMAGEN DE PREVISUALIZACIÓN */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* BLOQUE DE BOTONES AL HACER HOVER (Reemplazado el Case Study) */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                      
                      {/* BOTÓN LIVE DEMO */}
                      {project.liveUrl && (
                        <Button 
                          onClick={(e) => handleLiveDemo(e, project.liveUrl as string)} 
                          size="sm" 
                          variant="secondary"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      
                      {/* BOTÓN CÓDIGO FRONTEND */}
                      {project.githubUrlFront && (
                        <Button 
                          onClick={(e) => handleViewCode(e, project.githubUrlFront as string)} 
                          size="sm" 
                          variant="secondary"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code (Front)
                        </Button>
                      )}

                      {/* BOTÓN CÓDIGO BACKEND */}
                      {project.githubUrlBack && (
                        <Button 
                          onClick={(e) => handleViewCode(e, project.githubUrlBack as string)} 
                          size="sm" 
                          variant="secondary"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code (Back)
                        </Button>
                      )}
                      
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.featured && <Badge variant="secondary">Featured</Badge>}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Botón View Case Study - ELIMINADO para evitar el error de la ruta */}
                    {/* Mantener solo los botones de arriba para no romper la navegación */}

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
