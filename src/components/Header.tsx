
import React, { useEffect, useState } from 'react';
import { Menu, X, Home, User, Code, Layers, Mail, BookOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';

const navigation = [
  { name: 'About', href: '#about', icon: <User className="h-4 w-4 mr-2" /> },
  { name: 'Projects', href: '#projects', icon: <Code className="h-4 w-4 mr-2" /> },
  { name: 'Skills', href: '#skills', icon: <Layers className="h-4 w-4 mr-2" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4 mr-2" /> },
  { name: 'Onchain Manifesto', href: '/manifesto', icon: <BookOpen className="h-4 w-4 mr-2" />, isPage: true },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'backdrop-blur-lg bg-background/80 border-b border-border/30 py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={cn(
                "text-xl md:text-2xl font-bold transition-all duration-300", 
                scrolled ? "crypto-gradient" : "text-foreground hover:crypto-gradient"
              )}
            >
              Mark<span className="font-mono">Benhaim</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    theme === 'dark' 
                      ? "text-foreground/80 hover:text-foreground hover:bg-white/5" 
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    theme === 'dark' 
                      ? "text-foreground/80 hover:text-foreground hover:bg-white/5" 
                      : "text-foreground/70 hover:text-foreground hover:bg-black/5"
                  )}
                >
                  {item.name}
                </a>
              )
            ))}
            <ThemeToggle className="ml-2" />
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu - updated for better UX */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden backdrop-blur-xl",
          theme === 'dark' ? 'bg-background/95' : 'bg-background/95',
          mobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/20">
          <Link 
            to="/" 
            className="text-xl font-bold crypto-gradient"
            onClick={() => setMobileMenuOpen(false)}
          >
            Mark<span className="font-mono">Benhaim</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="flex flex-col px-4 py-6 space-y-2">
          <Link
            to="/"
            className={cn(
              "flex items-center px-4 py-3 rounded-lg",
              theme === 'dark' 
                ? "bg-primary/20 text-primary hover:bg-primary/30" 
                : "bg-primary/10 text-primary hover:bg-primary/20"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home className="h-5 w-5 mr-3" />
            <span className="font-medium">Home</span>
          </Link>
          
          {navigation.map((item) => (
            item.isPage ? (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg transition-colors",
                  theme === 'dark' 
                    ? "hover:bg-white/5" 
                    : "hover:bg-black/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg transition-colors",
                  theme === 'dark' 
                    ? "hover:bg-white/5" 
                    : "hover:bg-black/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            )
          ))}

          {isMobile && (
            <div className="mt-8 pt-6 border-t border-border/30">
              <a
                href="mailto:markbenhaim0@gmail.com"
                className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-medium">Contact Me</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
