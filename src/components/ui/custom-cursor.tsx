
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomCursorProps {
  className?: string
}

export function CustomCursor({ className }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
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
        
        setIsHovering(isInteractive)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

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
          damping: 40,
          stiffness: 500,
          mass: 0.3
        }
      }}
    >
      <div
        className={cn(
          "w-6 h-6 -ml-3 -mt-3",
          "bg-primary opacity-70 rounded-full",
          isHovering ? "scale-125" : "scale-100",
          "transition-transform duration-150"
        )}
      />
    </motion.div>
  )
}
