
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import MusicPlayer from '@/components/MusicPlayer';
import { ThemeProvider } from '@/context/ThemeContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Smooth scroll function for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const element = document.querySelector(anchor.hash);
        if (element) {
          const offset = isMobile ? 60 : 80; // Smaller offset on mobile
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - offset,
            behavior: 'smooth'
          });
          
          // Update URL but without the jump
          window.history.pushState({}, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isMobile]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <Header />
        <main className="flex flex-col items-center justify-center">
          <Hero />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
