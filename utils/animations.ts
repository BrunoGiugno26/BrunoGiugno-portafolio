"use client"

/**
 * Animation Utilities
 *
 * Reusable animation variants and utilities for Framer Motion.
 * Helps maintain consistency across components.
 */

import type { Variants } from "framer-motion"
import { APP_CONSTANTS } from "@/lib/constants"

/**
 * Common fade in animation
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: APP_CONSTANTS.ANIMATION.NORMAL,
      ease: "easeOut",
    },
  },
}

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: APP_CONSTANTS.ANIMATION.NORMAL,
      ease: "easeOut",
    },
  },
}

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: APP_CONSTANTS.ANIMATION.NORMAL,
      ease: "easeOut",
    },
  },
}

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: APP_CONSTANTS.ANIMATION.NORMAL,
      ease: "easeOut",
    },
  },
}

/**
 * Create a custom stagger animation
 */
export const createStagger = (staggerDelay = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

/**
 * Create a custom fade animation with delay
 */
export const createFadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: APP_CONSTANTS.ANIMATION.NORMAL,
      delay,
      ease: "easeOut",
    },
  },
})

/**
 * Hover animation for interactive elements
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: APP_CONSTANTS.ANIMATION.FAST,
    ease: "easeOut",
  },
}

/**
 * Tap animation for buttons
 */
export const tapScale = {
  scale: 0.95,
  transition: {
    duration: APP_CONSTANTS.ANIMATION.FAST,
    ease: "easeOut",
  },
}
