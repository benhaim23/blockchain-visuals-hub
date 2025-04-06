
import React, { useState } from 'react';
import { ChevronRight, BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import { ManifestoChapter } from '@/data/manifestoChapters';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface ChapterWithDescription extends ManifestoChapter {
  description?: string;
}

interface TableOfContentsProps {
  chapters: ChapterWithDescription[];
  onSelectChapter: (chapterIndex: number) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, onSelectChapter }) => {
  const [view, setView] = useState<'list' | 'carousel'>('list');
  
  const getDisplayNumber = (chapter: ChapterWithDescription) => {
    return chapter.number === 0 ? "Executive Summary" : `${chapter.number}.`;
  };

  return (
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          Chapters
        </h2>
        <div className="flex gap-2">
          <Button 
            variant={view === 'list' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setView('list')}
            className="text-xs"
          >
            List View
          </Button>
          <Button 
            variant={view === 'carousel' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setView('carousel')}
            className="text-xs"
          >
            Carousel
          </Button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <motion.div 
              key={chapter.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 + chapter.number * 0.05 }}
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div 
                onClick={() => onSelectChapter(chapter.number)}
                className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-50/90 to-indigo-50/90 dark:from-slate-800/50 dark:to-slate-800/80 hover:from-blue-100/80 hover:to-indigo-100/80 dark:hover:from-slate-700/60 dark:hover:to-slate-700/80 rounded-lg cursor-pointer transition-all duration-300 border border-blue-100 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-indigo-500/30 shadow hover:shadow-md group-hover:pl-7"
              >
                <div className="flex items-center gap-3">
                  <Badge 
                    variant="outline" 
                    className={`${
                      chapter.number === 0 
                        ? "bg-amber-100/80 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/50" 
                        : "bg-blue-100/80 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/50"
                    } px-2.5 py-1 min-w-[36px] flex justify-center font-medium text-sm`}
                  >
                    {chapter.number === 0 ? "ES" : chapter.number}
                  </Badge>
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-800 dark:text-white text-base group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-200">
                      {chapter.title}
                    </span>
                    {chapter.description && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 max-w-md truncate hidden md:inline-block">
                        {chapter.description}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 text-blue-500 dark:text-blue-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Bottom accent line with animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-4">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {chapters.map((chapter) => (
                <CarouselItem key={chapter.number} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <div 
                      onClick={() => onSelectChapter(chapter.number)}
                      className="flex flex-col items-start justify-between h-full p-5 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-slate-800/50 dark:to-slate-800/70 hover:from-blue-100/80 hover:to-indigo-100/80 dark:hover:from-slate-700/60 dark:hover:to-slate-700/70 rounded-xl cursor-pointer transition-all duration-300 border border-blue-100 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-indigo-500/30 shadow-md hover:shadow-lg transform hover:-translate-y-1 space-y-4"
                    >
                      <div className="flex items-center gap-2 self-start">
                        <Badge 
                          variant="outline" 
                          className={`${
                            chapter.number === 0 
                              ? "bg-amber-100/80 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/50" 
                              : "bg-blue-100/80 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/50"
                          } px-3 py-1.5 flex justify-center font-semibold text-sm`}
                        >
                          {chapter.number === 0 ? "ES" : chapter.number}
                        </Badge>
                      </div>
                      
                      <h3 className="font-medium text-slate-800 dark:text-white text-lg hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 line-clamp-2">
                        {chapter.title}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-end w-full">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          Read
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end mt-4 gap-2">
              <CarouselPrevious className="static relative transform-none translate-y-0 mr-2" />
              <CarouselNext className="static relative transform-none translate-y-0" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
