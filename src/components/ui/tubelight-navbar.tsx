
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  value?: string | null
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  activeItem?: string
  onItemClick?: (name: string) => void
  className?: string
}

export function NavBar({ items, activeItem, onItemClick, className }: NavBarProps) {
  const [active, setActive] = useState(activeItem || items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (activeItem) {
      setActive(activeItem);
    }
  }, [activeItem]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (name: string) => {
    setActive(name);
    if (onItemClick) {
      onItemClick(name);
    }
  };

  return (
    <div
      className={cn(
        "z-30 mb-6",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="flex items-center justify-center gap-2">
                {Icon && (
                  <>
                    <span className="hidden md:inline">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="md:hidden flex items-center justify-center">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                  </>
                )}
                <span className="hidden md:inline">{item.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
