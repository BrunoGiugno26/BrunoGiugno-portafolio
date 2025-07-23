"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular"
}

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 bg-[length:200%_100%]",
        {
          "rounded-full": variant === "circular",
          "rounded-md": variant === "rectangular",
          rounded: variant === "text",
        },
        className,
      )}
      style={{
        animation: "shimmer 2s infinite linear",
      }}
    />
  )
}

// Add to globals.css
/*
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
*/
