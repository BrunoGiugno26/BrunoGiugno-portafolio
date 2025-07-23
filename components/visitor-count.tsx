"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, TrendingUp, Users, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface VisitData {
  total: number
  today: number
  thisWeek: number
  lastUpdated: string
}

export function VisitorCount() {
  const [visitData, setVisitData] = useState<VisitData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const trackAndFetchVisits = async () => {
      try {
        // Track this visit
        await fetch("/api/visits", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })

        // Fetch current stats
        const response = await fetch("/api/visits")
        if (response.ok) {
          const result = await response.json()
          setVisitData(result.data)
        } else {
          setError(true)
        }
      } catch (err) {
        console.error("Failed to track/fetch visits:", err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    // Small delay to avoid blocking initial page load
    const timer = setTimeout(trackAndFetchVisits, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="w-4 h-4 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
        <span>Loading stats...</span>
      </div>
    )
  }

  if (error || !visitData) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Eye className="w-4 h-4" />
        <span>Portfolio views: 1,200+</span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-3"
    >
      {/* Main visitor count */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted/70 border border-border/50 rounded-full transition-all duration-200"
      >
        <Eye className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">
          <motion.span
            key={visitData.total}
            initial={{ scale: 1.2, color: "#3b82f6" }}
            animate={{ scale: 1, color: "inherit" }}
            transition={{ duration: 0.3 }}
            className="font-semibold"
          >
            {visitData.total.toLocaleString()}
          </motion.span>
          <span className="text-muted-foreground ml-1">visits</span>
        </span>
      </motion.div>

      {/* Additional stats for larger screens */}
      <div className="hidden sm:flex items-center gap-2">
        <Badge variant="outline" className="bg-background/50 border-border/30 text-xs">
          <TrendingUp className="w-3 h-3 mr-1" />
          {visitData.today} today
        </Badge>

        <Badge variant="outline" className="bg-background/50 border-border/30 text-xs">
          <Calendar className="w-3 h-3 mr-1" />
          {visitData.thisWeek} this week
        </Badge>
      </div>
    </motion.div>
  )
}

// Alternative compact version for hero section
export function VisitorCountCompact() {
  const [visitCount, setVisitCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch("/api/visits")
        if (response.ok) {
          const result = await response.json()
          setVisitCount(result.data.total)
        }
      } catch (err) {
        console.error("Failed to fetch visits:", err)
        setVisitCount(1200) // Fallback number
      }
    }

    fetchVisits()
  }, [])

  if (visitCount === null) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80"
    >
      <Eye className="w-3 h-3" />
      <span>{visitCount.toLocaleString()} views</span>
    </motion.div>
  )
}

// Analytics badge for footer
export function AnalyticsBadge() {
  const [stats, setStats] = useState({ visits: 0, isLive: true })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/visits")
        if (response.ok) {
          const result = await response.json()
          setStats({ visits: result.data.total, isLive: true })
        }
      } catch {
        setStats({ visits: 1200, isLive: false })
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${stats.isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
        <span>{stats.isLive ? "Live" : "Portfolio"}</span>
      </div>

      <div className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        <span>{stats.visits.toLocaleString()} visitors</span>
      </div>
    </div>
  )
}
