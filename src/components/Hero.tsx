
import React from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
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
            <div className="flex justify-center mb-6">
              <div className="profile-border-glow">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 transition-all duration-300 hover:scale-105 glow-effect">
                  <img 
                    src="/lovable-uploads/c1f53f20-7d2f-4470-bb3c-3ef6792fa74a.png" 
                    alt="Mark Benhaim" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="badge badge-primary inline-block mb-4 px-4 py-1 text-sm font-medium tracking-wide">
              Blockchain & Crypto Expert
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Mark Benhaim
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 my-4">
                Transforming Data into <span className="crypto-gradient font-bold">Blockchain Solutions</span>
              </h2>
              
              <div className={cn(
                "w-20 h-1 mx-auto mt-6 mb-8 rounded-full",
                theme === 'dark' ? 'bg-primary/60' : 'bg-primary/40'
              )} />
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto">
              Operations · Fund Management · Data Analytics · Trading · NFT Development · Blockchain Research
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-10 animate-fade-in-up">
            <Button 
              className={cn(
                "rounded-full px-8 py-6 w-full sm:w-auto bg-primary hover:bg-primary/90",
                theme === 'dark' ? 'bg-primary/90 hover:bg-primary/80' : 'bg-primary hover:bg-primary/90'
              )}
              interactive={true}
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
              className={cn(
                "rounded-full px-8 py-6 w-full sm:w-auto border-2 flex items-center justify-center gap-2",
                theme === 'dark' ? 'border-primary/40 hover:border-primary/60 hover:bg-primary/10' : 'border-primary/30 hover:border-primary/50 hover:bg-primary/5'
              )}
              interactive={true}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <CheckCircle2 className="h-5 w-5" /> View Projects
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className={cn(
              "text-foreground/60 hover:text-foreground transition-colors p-2 rounded-full",
              theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'
            )}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className={cn(
        "absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-50",
        theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'
      )} />
      <div className={cn(
        "absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-50",
        theme === 'dark' ? 'bg-accent/10' : 'bg-accent/5'
      )} />
    </section>
  );
};

export default Hero;
