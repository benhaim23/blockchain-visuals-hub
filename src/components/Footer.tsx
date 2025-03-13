
import React from 'react';
import { Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="py-12 px-4 bg-background/50 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="text-center md:text-left animate-fade-in">
            <div className="text-2xl font-bold crypto-gradient mb-2">
              Mark<span className="font-mono">Benhaim</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm max-w-md leading-relaxed">
              Navigating the future of finance and technology through blockchain innovation, 
              trading expertise, and data-driven insights.
            </p>
            {!isMobile && (
              <Button 
                variant="ghost" 
                className="mt-4 group" 
                onClick={() => window.location.href = 'mailto:markbenhaim0@gmail.com'}
              >
                Contact Me <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
          
          <Card className={cn(
            "w-full md:w-auto bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm",
            isMobile && "mt-2"
          )}>
            <CardContent className={cn(
              "p-6",
              isMobile && "p-4"
            )}>
              <div className="text-sm font-medium mb-3 text-center md:text-right crypto-gradient">
                Connect with me
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="Twitter"
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => window.open('https://x.com/inflationseries', '_blank')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="LinkedIn"
                  className="hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/mark-benhaim/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="GitHub"
                  className="hover:bg-gray-800/10 hover:text-gray-800 dark:hover:text-white transition-colors"
                  onClick={() => window.open('https://github.com/benhaim23', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  aria-label="Email"
                  className="hover:bg-green-500/10 hover:text-green-500 transition-colors"
                  onClick={() => window.location.href = 'mailto:markbenhaim0@gmail.com'}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="mb-8" />
        
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center",
          isMobile && "space-y-6"
        )}>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {currentYear} Mark Benhaim. All rights reserved.
          </div>
          
          {isMobile ? (
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
            </div>
          ) : (
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
