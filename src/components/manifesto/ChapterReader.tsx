
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ManifestoChapter } from '@/data/manifestoChapters_updated';
import MarkdownRenderer from './MarkdownRenderer';
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChapterReaderProps {
  currentChapter: number;
  chapters: ManifestoChapter[];
  mdContent: string;
  onPreviousChapter: () => void;
  onNextChapter: () => void;
}

const ChapterReader: React.FC<ChapterReaderProps> = ({ 
  currentChapter, 
  chapters, 
  mdContent, 
  onPreviousChapter, 
  onNextChapter 
}) => {
  const chapter = chapters[currentChapter];
  const showMarkdown = chapter && mdContent; // Always prefer markdown if available
  
  return (
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 min-h-[600px] flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <div className="p-4 border-b-2 border-blue-100 dark:border-slate-700 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 rounded-t-lg">
        <Button 
          variant="ghost" 
          onClick={onPreviousChapter}
          disabled={currentChapter <= 0}
          className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 transition-all duration-300 hover:scale-105 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <span className="font-medium text-indigo-700 dark:text-indigo-300">
          {currentChapter === 0 ? 'Executive Summary' : `Chapter ${currentChapter}`}: {chapter?.title}
        </span>

        <Button 
          variant="ghost" 
          onClick={onNextChapter}
          disabled={currentChapter >= chapters.length - 1}
          className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 transition-all duration-300 hover:scale-105 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 p-6">
        {showMarkdown ? (
          <ScrollArea className="h-[600px] pr-4">
            <MarkdownRenderer content={mdContent} />
          </ScrollArea>
        ) : (
          <div className="h-[600px] w-full flex items-center justify-center">
            <p className="text-slate-600 dark:text-muted-foreground">
              This chapter is only available as a PDF. 
              <a 
                href={chapter?.pdfPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-all duration-300"
              >
                Open PDF
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterReader;
