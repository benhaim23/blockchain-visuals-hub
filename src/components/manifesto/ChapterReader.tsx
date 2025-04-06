
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ManifestoChapter } from '@/data/manifestoChapters';
import MarkdownRenderer from './MarkdownRenderer';
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isLastChapter = currentChapter >= chapters.length - 1;
  const isMobile = useIsMobile();
  
  // Get info about the next chapter for the call-to-action link
  const nextChapter = !isLastChapter ? chapters[currentChapter + 1] : null;
  const nextChapterTitle = nextChapter ? 
    `${nextChapter.number}. ${nextChapter.title}` : '';
  
  return (
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 min-h-[600px] flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <div className="p-2 md:p-4 border-b-2 border-blue-100 dark:border-slate-700 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 rounded-t-lg">
        <Button 
          variant="ghost" 
          onClick={onPreviousChapter}
          disabled={currentChapter <= 0}
          className="gap-1 md:gap-2 text-xs md:text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 transition-all duration-300 hover:scale-105 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20"
        >
          <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <span className="text-sm md:text-base font-medium text-indigo-700 dark:text-indigo-300 px-1 text-center truncate">
          {currentChapter === 0 ? 'Executive Summary' : `Chapter ${currentChapter}`}: {chapter?.title}
        </span>

        <Button 
          variant="ghost" 
          onClick={onNextChapter}
          disabled={currentChapter >= chapters.length - 1}
          className="gap-1 md:gap-2 text-xs md:text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-100/50 transition-all duration-300 hover:scale-105 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>

      <div className="flex-1 p-3 md:p-6">
        {showMarkdown ? (
          <ScrollArea className="h-[600px] pr-0 md:pr-4">
            <div className="px-0 md:px-1 prose-table:border-collapse prose-table:w-full prose-td:border prose-td:border-blue-200 dark:prose-td:border-slate-700">
              <MarkdownRenderer content={mdContent} />
            </div>
            
            {/* Call-to-action link at the end of each chapter except the last one */}
            {!isLastChapter && (
              <div className="mt-8 pb-4 flex justify-center">
                <Button 
                  variant="link" 
                  onClick={onNextChapter}
                  className="group flex items-center gap-2 text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 text-base md:text-lg"
                >
                  {isMobile ? (
                    <span>Next Chapter</span>
                  ) : (
                    <span>Next: {nextChapterTitle}</span>
                  )}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
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
