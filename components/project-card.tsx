"use client";

import type React from "react";
import Image from "next/image"; // Importado para la lógica de la imagen
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, TrendingUp } from "lucide-react"; // Se agregó TrendingUp
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// =================================================================
// INTERFACE CORREGIDA Y AMPLIADA
// =================================================================
interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    icon?: string;
    imageUrl?: string;
    featured?: boolean;
    githubUrl?: string; // Mantener solo si el template lo requiere, pero tus datos usan Front/Back
    liveUrl?: string;
    
    // CAMPOS DE CÓDIGO AÑADIDOS
    githubUrlFront?: string; // Campo para el repositorio Frontend
    githubUrlBack?: string;  // Campo para el repositorio Backend

    metrics?: {
      users: string;
      performance: string;
      impact: string;
    };
  };
  index: number;
}
// =================================================================


export function ProjectCard({ project, index }: ProjectCardProps) {
  
  // FUNCIÓN ÚNICA PARA ABRIR ENLACES EXTERNOS (simplificado el manejo de clics)
  const handleOpenUrl = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation(); // Previene el clic de la tarjeta padre
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-white-500/20 to-yellow-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <Card className="relative h-full p-8 transition-all duration-200 border bg-card hover:bg-card/80 border-border hover:border-border/60 rounded-3xl group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-white/5">
        
        {/* Project Icon/Image with Glow */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 transition-opacity duration-200 bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-2xl blur-md opacity-30 group-hover:opacity-50" />
            
            {/* LÓGICA DE RENDERIZADO DE IMAGEN/ICONO */}
            <div className="relative flex items-center justify-center w-16 h-16 overflow-hidden text-2xl border bg-muted rounded-2xl border-border/50">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} logo`}
                  width={64} // w-16, h-16
                  height={64}
                  className="object-cover w-full h-full rounded-md" 
                />
              ) : (
                <span role="img" aria-label={`${project.title} icon`}>
                  {project.icon}
                </span>
              )}
            </div>
            {/* FIN LÓGICA DE IMAGEN */}

          </div>

          {project.featured && (
            <Badge className="text-yellow-500 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 dark:text-yellow-300 border-yellow-500/30">
              ⭐ Presentado
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold transition-colors duration-200 text-foreground group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <TrendingUp className="w-3 h-3" />
                {project.metrics.users}
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                {project.metrics.performance}
              </div>
              <div className="text-orange-600 dark:text-orange-400">
                {project.metrics.impact}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs transition-colors duration-200 bg-muted/50 border-border/30 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs bg-muted/50 border-border/30 text-muted-foreground"
                title={`Additional technologies: ${project.tags.slice(4).join(", ")}`}
              >
                +{project.tags.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            
            {/* 1. Botón LIVE DEMO */}
            {project.liveUrl && (
              <Button
                onClick={(e) => handleOpenUrl(e, project.liveUrl as string)}
                size="sm"
                className="transition-colors duration-200 bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Demo
              </Button>
            )}

            {/* 2. Botón CÓDIGO FRONTEND */}
            {project.githubUrlFront && (
              <Button
                onClick={(e) => handleOpenUrl(e, project.githubUrlFront as string)}
                size="sm"
                variant="outline"
                className="transition-all duration-200 bg-muted/50 hover:bg-muted text-foreground border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View source code of ${project.title}`}
              >
                <Github className="w-3 h-3 mr-2" />
                Code (Front)
              </Button>
            )}

            {/* 3. Botón CÓDIGO BACKEND */}
            {project.githubUrlBack && (
              <Button
                onClick={(e) => handleOpenUrl(e, project.githubUrlBack as string)}
                size="sm"
                variant="outline"
                className="transition-all duration-200 bg-muted/50 hover:bg-muted text-foreground border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View source code of ${project.title}`}
              >
                <Github className="w-3 h-3 mr-2" />
                Code (Back)
              </Button>
            )}

            {/* 4. Botón CASE STUDY */}
            <Link href={`/case-study/${project.slug}`} className="flex-1">
              <Button
                size="sm"
                variant="outline"
                className="w-full transition-all duration-200 bg-muted/50 hover:bg-muted text-foreground border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group/btn"
                aria-label={`View case study for ${project.title}`}
              >
                Caso de análisis
                <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
