"use client";

import { motion, Variants } from "framer-motion"; // Asegúrate de que Variants esté importado aquí
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skills = [
  // --- Stack Principal (Bootcamp + Autodidacta) ---
  { name: "Next.js", icon: "▲", experience: "Bootcamp & Proyectos", category: "Framework", proficiency: 15, color: "from-gray-700 to-gray-900 dark:from-white dark:to-gray-300" },
  { name: "React.js", icon: "⚛️", experience: "Bootcamp & Proyectos", category: "Frontend", proficiency: 18, color: "from-blue-400 to-cyan-500" },
  { name: "TypeScript", icon: "📘", experience: "Bootcamp & Proyectos", category: "Language", proficiency: 17, color: "from-blue-600 to-blue-800" },
  { name: "Javascript", icon: "📘", experience: "Bootcamp & Proyectos", category: "Styling", proficiency: 20, color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", icon: "🎨", experience: "Bootcamp & Proyectos", category: "Styling", proficiency: 35, color: "from-cyan-400 to-cyan-600" },
  { name: "Bootstrap", icon: "🎨", experience: "Bootcamp & Proyectos", category: "Styling", proficiency: 22, color: "from-cyan-400 to-cyan-600" },

  // --- Integraciones Autodidactas (Tu Fortaleza) ---
  { name: "Prisma / Neon (PostgreSQL)", icon: "🐘", experience: "Autodidacta", category: "Database", proficiency: 25, color: "from-blue-700 to-blue-900" },
  { name: "Stripe / Webhooks", icon: "💳", experience: "Autodidacta", category: "Integration", proficiency: 28, color: "from-purple-500 to-purple-700" },
  { name: "Clerk / Auth0", icon: "🔐", experience: "Autodidacta", category: "Integration", proficiency: 35, color: "from-orange-400 to-orange-600" },
  { name: "Shadcn / ui", icon: "🔮", experience: "Autodidacta", category: "Styling", proficiency: 34, color: "from-gray-300 to-gray-500" },
  { name: "Uploadthing / ImageKit", icon: "☁️", experience: "Autodidacta", category: "Integration", proficiency: 50, color: "from-pink-500 to-rose-500" },

  // --- Herramientas de Base ---
  { name: "Node.js / Express", icon: "🟢", experience: "Bootcamp", category: "Backend", proficiency: 40, color: "from-green-500 to-green-700" },
  { name: "Git / GitHub", icon: "📝", experience: "Bootcamp & Autodidacta", category: "Tools", proficiency: 65, color: "from-gray-600 to-gray-800" },
];

const categories = [
  "All",
  "Frontend",
  "Framework",
  "Language",
  "Styling",
  "Database",
  "Integration",
  "Backend",
  "Tools",
];


export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  // CORRECCIÓN: Tipado explícito de las variantes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  // CORRECCIÓN: Tipado explícito de las variantes
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
      aria-labelledby="skills-heading"
    >
      <div className="space-y-4 text-center">
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
        >
          Skills & Technologies
        </h2>
        {/* CORRECCIÓN: Descripción de la sección enfocada en Autodidacta */}
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Tecnologías que manejo. Habilidades como **Prisma, Stripe, y Clerk** fueron adquiridas de forma autodidacta, demostrando mi compromiso con el aprendizaje continuo para proyectos Full Stack.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Skill categories">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="skills-grid"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 hover:border-border"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Simplified Skills Grid - No Tooltips */}
      <motion.div
        id="skills-grid"
        role="tabpanel"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div key={skill.name} variants={itemVariants} className="group">
            <Card
              className="relative flex flex-col items-center justify-center h-full p-4 text-center transition-all duration-300 border cursor-default bg-card border-border rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:bg-card/90 hover:border-border/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transform-gpu will-change-transform"
              tabIndex={0}
              role="button"
              aria-label={`${skill.name} - ${skill.experience} experience`}
            >
              {/* Subtle Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm`}
              />

              {/* Icon */}
              <div
                className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-label={`${skill.name} icon`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="mb-2 text-sm font-semibold leading-tight transition-colors duration-300 sm:text-base text-foreground group-hover:text-primary">
                {skill.name}
              </h3>

              {/* Experience Badge */}
              <Badge
                variant="secondary"
                className="text-[10px] sm:text-xs transition-all duration-300 bg-muted/50 text-muted-foreground border-border/30 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 whitespace-nowrap px-1.5"
              >
                {skill.experience}
              </Badge>

              {/* Subtle proficiency indicator */}
              <div className="w-full h-1 mt-3 overflow-hidden rounded-full max-w-16 bg-muted">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:shadow-sm`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary - CORREGIDO a tus métricas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="pt-8 text-center"
      >
        <div className="flex flex-wrap justify-center gap-4 px-4 py-3 border rounded-full sm:gap-6 bg-muted/30 border-border/50">
          <div className="text-sm">
            <span className="font-semibold text-primary">{skills.length}</span>
            <span className="ml-1 text-muted-foreground">Tecnologías</span>
          </div>
          <div className="w-px h-4 bg-border/30" />
          <div className="text-sm">
            <span className="font-semibold text-primary">6+</span> 
            <span className="ml-1 text-muted-foreground">Meses de Experiencia</span> 
          </div>
          <div className="w-px h-4 bg-border/30" />
          <div className="text-sm">
            <span className="font-semibold text-primary">2</span> 
            <span className="ml-1 text-muted-foreground">Proyectos Full Stack</span> 
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
