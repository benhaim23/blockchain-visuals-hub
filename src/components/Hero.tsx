
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center z-10">
        <div className="space-y-8 mx-auto">
          <div className="space-y-4 animate-fade-in-down">
            <div className="badge badge-primary inline-block mb-3">Blockchain & Crypto Expert</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transforming Ideas into
              <span className="crypto-gradient"> Blockchain Reality</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto">
              Project Management · Trading · Fund Management · Operations · Research · Data Analytics
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-10 animate-fade-in-up">
            <Button 
              className="rounded-full px-8 py-6 w-full sm:w-auto button-glow"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 w-full sm:w-auto"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
