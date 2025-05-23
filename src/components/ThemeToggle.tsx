
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        'w-10 h-10 rounded-full transition-all duration-500 relative overflow-hidden',
        className,
        theme === 'dark' 
          ? 'bg-primary/10 border-primary/20 text-primary hover:text-accent hover:bg-primary/20' 
          : 'bg-sky-100/80 border-sky-200 text-primary hover:text-accent hover:bg-sky-100'
      )}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === 'light' ? (
          <Sun className="h-5 w-5 animate-fade-in" />
        ) : (
          <Moon className="h-5 w-5 animate-fade-in" />
        )}
      </div>
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </Button>
  );
};

export default ThemeToggle;
