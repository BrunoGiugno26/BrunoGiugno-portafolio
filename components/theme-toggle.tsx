"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted border border-border/50 hover:border-border transition-all duration-200"
      >
        <div className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        w-10 h-10 rounded-full 
        bg-muted/50 hover:bg-muted 
        border border-border/50 hover:border-border 
        transition-all duration-200 
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        group relative overflow-hidden
      "
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Icon container with perfect centering */}
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0.9 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-600 dark:text-yellow-400" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
