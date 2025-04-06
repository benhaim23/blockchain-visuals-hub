
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ManifestoChapter } from '@/data/manifestoChapters';
import MarkdownRenderer from './MarkdownRenderer';

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
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border min-h-[600px] flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onPreviousChapter}
          disabled={currentChapter <= 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <span className="font-medium">
          {currentChapter === 0 ? 'Executive Summary' : `Chapter ${currentChapter}`}: {chapters[currentChapter]?.title}
        </span>

        <Button 
          variant="ghost" 
          onClick={onNextChapter}
          disabled={currentChapter >= chapters.length - 1}
          className="gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 p-4">
        {chapters[currentChapter]?.mdPath ? (
          <MarkdownRenderer content={mdContent} />
        ) : (
          <div className="h-[600px] w-full">
            <iframe
              src={chapters[currentChapter]?.pdfPath}
              className="w-full h-full"
              title={`Chapter ${currentChapter}: ${chapters[currentChapter]?.title}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterReader;
