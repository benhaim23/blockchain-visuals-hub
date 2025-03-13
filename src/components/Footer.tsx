
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-background/50 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold crypto-gradient">
              Mark<span className="font-mono">Benhaim</span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              Navigating the future of finance and technology through blockchain innovation, 
              trading expertise, and data-driven insights.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="text-sm font-medium mb-2">Connect with me</div>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Twitter"
                onClick={() => window.open('https://x.com/inflationseries', '_blank')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="LinkedIn"
                onClick={() => window.open('https://www.linkedin.com/in/mark-benhaim/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="GitHub"
                onClick={() => window.open('https://github.com/benhaim23', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Email"
                onClick={() => window.location.href = 'mailto:markbenhaim0@gmail.com'}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {currentYear} Mark Benhaim. All rights reserved.
          </div>
          
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
