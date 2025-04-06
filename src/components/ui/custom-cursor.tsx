
"use client"

import React, { useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomCursorProps {
  className?: string
}

export const CustomCursor = memo(({ className }: CustomCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isInteractive = 
          e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.tagName === 'INPUT' ||
          e.target.closest('button') ||
          e.target.closest('a') ||
          e.target.closest('input') ||
          e.target.dataset.interactive === 'true';
        
        setIsHovering(!!isInteractive)
      }
    }

    // Use passive event listeners for better performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-[9999]",
        className
      )}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        transition: {
          type: "spring",
          damping: 50,  // Increased damping for less oscillation
          stiffness: 800, // Increased stiffness for faster response
          mass: 0.2,     // Reduced mass for faster movement
          restDelta: 0.01 // Smaller values create more precise movements
        }
      }}
    >
      <div
        className={cn(
          "w-6 h-6 -ml-3 -mt-3",
          "bg-primary opacity-60 rounded-full", // Reduced opacity
          isHovering ? "scale-125" : "scale-100",
          "will-change-transform transition-transform duration-100" // Shorter duration, added will-change for GPU acceleration
        )}
      />
    </motion.div>
  )
})

CustomCursor.displayName = "CustomCursor"
