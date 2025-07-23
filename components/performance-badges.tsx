"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, Shield, Globe } from "lucide-react"

export function PerformanceBadges() {
  const badges = [
    {
      icon: Zap,
      label: "Lighthouse",
      value: "98/100",
      color: "from-green-500 to-emerald-500",
      description: "Performance Score",
    },
    {
      icon: TrendingUp,
      label: "Core Web Vitals",
      value: "Excellent",
      color: "from-blue-500 to-cyan-500",
      description: "All metrics pass",
    },
    {
      icon: Shield,
      label: "Security",
      value: "A+",
      color: "from-purple-500 to-violet-500",
      description: "SSL & Headers",
    },
    {
      icon: Globe,
      label: "Uptime",
      value: "99.9%",
      color: "from-orange-500 to-red-500",
      description: "Last 12 months",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity`}
          />
          <div className="relative p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
            <badge.icon className="w-6 h-6 mx-auto mb-2 text-white" />
            <div className="text-lg font-bold text-white">{badge.value}</div>
            <div className="text-xs text-gray-400">{badge.label}</div>
            <div className="text-xs text-gray-500 mt-1">{badge.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
