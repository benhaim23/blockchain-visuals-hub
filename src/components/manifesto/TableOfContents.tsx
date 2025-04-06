
import React from 'react';
import { ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { ManifestoChapter } from '@/data/manifestoChapters';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  chapters: ManifestoChapter[];
  onSelectChapter: (chapterIndex: number) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, onSelectChapter }) => {
  return (
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-900 dark:text-indigo-300 flex items-center">
        <BookOpen className="mr-2 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        Chapters
      </h2>
      
      <div className="space-y-4">
        {chapters.map((chapter, idx) => (
          <motion.div 
            key={chapter.number}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 + idx * 0.05 }}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 }
            }}
            className="relative group"
          >
            <div 
              onClick={() => onSelectChapter(chapter.number)}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300",
                "border border-blue-100/70 dark:border-slate-700/50",
                "hover:border-blue-300 dark:hover:border-indigo-500/30",
                "shadow-sm hover:shadow-md"
              )}
            >
              {/* Background gradient for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 dark:from-slate-800/50 dark:to-slate-800/80 
                              group-hover:from-blue-100/80 group-hover:to-indigo-100/80 
                              dark:group-hover:from-slate-700/60 dark:group-hover:to-slate-700/80 
                              transition-all duration-300"></div>
              
              <div className="relative flex items-center justify-between p-4 z-10">
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "px-2.5 py-1 min-w-[36px] flex justify-center font-medium text-sm transition-colors duration-200",
                      chapter.number === 0 
                        ? "bg-amber-100/80 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/50 group-hover:bg-amber-200/90 dark:group-hover:bg-amber-900/30" 
                        : "bg-blue-100/80 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/50 group-hover:bg-blue-200/90 dark:group-hover:bg-blue-900/30"
                    )}
                  >
                    {chapter.number === 0 ? 
                      <Sparkles className="h-3.5 w-3.5" /> : 
                      chapter.number
                    }
                  </Badge>
                  
                  <div className="flex flex-col">
                    <span className={cn(
                      "font-medium text-slate-800 dark:text-white text-base transition-colors duration-200",
                      "group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
                    )}>
                      {chapter.title}
                    </span>
                    
                    {chapter.description && (
                      <motion.span 
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        className="text-xs text-slate-500 dark:text-slate-400 max-w-md line-clamp-1 md:line-clamp-2"
                      >
                        {chapter.description}
                      </motion.span>
                    )}
                  </div>
                </div>
                
                <ChevronRight className={cn(
                  "h-5 w-5 text-blue-500 dark:text-blue-400 transition-all duration-300",
                  "transform group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                )} />
              </div>
              
              {/* Top shine effect on hover */}
              <div className="absolute -top-1/2 -left-1/2 w-8 h-[300%] bg-white/40 dark:bg-white/10 rotate-12 transform-gpu 
                              translate-x-[-120%] opacity-0 group-hover:translate-x-[350%] group-hover:opacity-70 
                              transition-all duration-1000 pointer-events-none"></div>
              
              {/* Bottom accent line with animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 
                              dark:from-blue-500 dark:to-indigo-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
