
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
        
        setIsHovering(Boolean(isInteractive))
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
    <motion.div
      className={cn(
        "fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]",
        "text-primary",
        isClicking ? "scale-90" : "scale-100",
        isHovering ? "scale-125" : "scale-100",
        className
      )}
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 350,
          mass: 0.5
        }
      }}
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        transform: "rotate(135deg)",
        backgroundColor: "hsl(var(--primary))"
      }}
    />
  )
}
