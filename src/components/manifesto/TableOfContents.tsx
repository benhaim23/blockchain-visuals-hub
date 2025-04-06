
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type ManifestoChapter = {
  id: string;
  title: string;
  path: string;
  file?: string;
  content?: string;
};

interface TableOfContentsProps {
  chapters: ManifestoChapter[];
  currentChapter?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, currentChapter }) => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleChapterClick = (path: string) => {
    navigate(`/manifesto/${path}`);
  };

  return (
    <div className="w-full bg-black/5 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-border p-4 md:p-6">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      
      <div className="grid grid-cols-1 gap-3">
        {chapters.map((chapter, index) => {
          const isActive = currentChapter === chapter.id;
          
          return (
            <div 
              key={chapter.id}
              className={`
                relative overflow-hidden group
                border border-border rounded-lg
                transition-all duration-300 
                ${isActive ? 'bg-primary/10 border-primary/50' : 'hover:bg-black/5 dark:hover:bg-white/5'}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Shine effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine" />
              )}
              
              <Button
                variant="ghost"
                className={`
                  w-full justify-between rounded-md text-left p-3 h-auto
                  ${isActive ? 'text-primary font-medium' : 'text-foreground/90'}
                `}
                onClick={() => handleChapterClick(chapter.path)}
              >
                <div className="flex items-start">
                  <div className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-2 py-1 mr-3 mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="font-medium">{chapter.title}</div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableOfContents;
