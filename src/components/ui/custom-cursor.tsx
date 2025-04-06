
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomCursorProps {
  className?: string
}

export function CustomCursor({ className }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

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
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference",
          "bg-primary",
          isClicking ? "scale-75" : "scale-100",
          isHovering ? "scale-150" : "scale-100",
          className
        )}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 350,
            mass: 0.5
          }
        }}
      />

      {/* Cursor trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/50 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.8,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 250,
            mass: 0.8,
            delay: 0.03
          }
        }}
      />
    </>
  )
}
