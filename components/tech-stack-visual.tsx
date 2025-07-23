"use client"

import { motion } from "framer-motion"

export function TechStackVisual() {
  const techStack = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Next.js", level: 90, color: "from-gray-700 to-black", icon: "▲" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800", icon: "📘" },
    { name: "Tailwind", level: 92, color: "from-cyan-400 to-cyan-600", icon: "🎨" },
    { name: "Node.js", level: 75, color: "from-green-500 to-green-700", icon: "🟢" },
    { name: "AWS", level: 70, color: "from-orange-400 to-orange-600", icon: "☁️" },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center mb-8">Tech Stack Proficiency</h3>

      <div className="grid gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="text-2xl">{tech.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{tech.name}</span>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
