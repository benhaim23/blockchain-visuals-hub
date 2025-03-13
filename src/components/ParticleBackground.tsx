
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    particlesRef.current = [];
    
    const particleCount = Math.min(Math.floor(window.innerWidth / 100), 20);
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      container.appendChild(particle);
      
      particlesRef.current.push({
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        element: particle
      });
    }
    
    // Draw connections between particles
    const drawConnections = () => {
      // Remove old connections
      const oldConnections = container.querySelectorAll('.connection');
      oldConnections.forEach(conn => conn.remove());
      
      // Define maximum distance for connection
      const maxDistance = 150;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // The further away, the more transparent
            const opacity = (1 - distance / maxDistance) * 0.4;
            
            const connection = document.createElement('div');
            connection.className = 'connection';
            connection.style.width = `${distance}px`;
            connection.style.left = `${p1.x}px`;
            connection.style.top = `${p1.y}px`;
            connection.style.opacity = `${opacity}`;
            
            // Calculate angle
            const angle = Math.atan2(dy, dx);
            connection.style.transform = `rotate(${angle}rad)`;
            
            container.appendChild(connection);
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      // Update particle positions
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check and reversal
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -1;
        }
        
        // Update DOM element position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      // Draw connections
      drawConnections();
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]); // Restart when theme changes
  
  return (
    <div 
      ref={containerRef} 
      className="particles-container"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
