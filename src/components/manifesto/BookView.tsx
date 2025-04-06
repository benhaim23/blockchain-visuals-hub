
import React, { useState, useEffect } from 'react';
import { Book } from "@/components/ui/book";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { ManifestoChapter } from '@/data/manifestoChapters';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownRenderer from './MarkdownRenderer';
import { motion } from "framer-motion";

interface BookViewProps {
  currentChapter: number;
  chapters: ManifestoChapter[];
  mdContent: string;
  onPreviousChapter: () => void;
  onNextChapter: () => void;
}

const BookView: React.FC<BookViewProps> = ({ 
  currentChapter, 
  chapters, 
  mdContent, 
  onPreviousChapter, 
  onNextChapter 
}) => {
  const chapter = chapters[currentChapter];
  const isLastChapter = currentChapter >= chapters.length - 1;
  const [isPageFlipping, setIsPageFlipping] = useState(false);
  
  const handlePageFlip = (direction: 'next' | 'prev') => {
    setIsPageFlipping(true);
    setTimeout(() => {
      if (direction === 'next') {
        onNextChapter();
      } else {
        onPreviousChapter();
      }
      setIsPageFlipping(false);
    }, 500);
  };

  // Get chapter color based on index for visual variety
  const getChapterColor = (index: number) => {
    const colors = ['#3b82f6', '#4f46e5', '#8b5cf6', '#6366f1', '#06b6d4'];
    return colors[index % colors.length];
  };

  // Create book title from chapter info
  const bookTitle = currentChapter === 0 
    ? "Executive Summary" 
    : `Chapter ${currentChapter}: ${chapter?.title.split('—')[0].trim()}`;

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 w-full"
      >
        <Book 
          color={getChapterColor(currentChapter)}
          depth={20}
          width={800}
          texture={true}
        >
          <div className="p-8 w-full">
            <div className="flex items-center justify-between mb-4 pb-4 border-b dark:border-gray-700">
              <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                {bookTitle}
              </h1>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  The Onchain Manifesto
                </span>
              </div>
            </div>
            
            <ScrollArea className="h-[500px] pr-4">
              <div className="prose dark:prose-invert max-w-none">
                <MarkdownRenderer content={mdContent} />
              </div>
            </ScrollArea>
          </div>
        </Book>
      </motion.div>

      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageFlip('prev')}
          disabled={currentChapter <= 0 || isPageFlipping}
          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-[-2px]"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous Page
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageFlip('next')}
          disabled={isLastChapter || isPageFlipping}
          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-[2px]"
        >
          Next Page
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BookView;
