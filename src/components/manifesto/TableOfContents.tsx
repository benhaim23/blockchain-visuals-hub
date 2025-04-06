
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ManifestoChapter } from '@/data/manifestoChapters';

interface TableOfContentsProps {
  chapters: ManifestoChapter[];
  onSelectChapter: (chapterIndex: number) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ chapters, onSelectChapter }) => {
  const getDisplayNumber = (chapter: ManifestoChapter) => {
    return chapter.number === 0 ? "Executive Summary" : `${chapter.number}.`;
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg border-2 border-border dark:border-slate-700 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:hover:border-primary/40 hover:border-primary/30">
      <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
      <div className="space-y-3">
        {chapters.map((chapter) => (
          <div 
            key={chapter.number}
            className="flex items-center justify-between p-3 hover:bg-muted/80 rounded-md cursor-pointer transition-all duration-300 border border-transparent hover:border-border dark:hover:border-slate-700 hover:scale-[1.01]"
            onClick={() => onSelectChapter(chapter.number)}
          >
            <div className="flex items-center gap-3">
              <span className="text-primary font-medium">{getDisplayNumber(chapter)}</span>
              <span className="font-medium">{chapter.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
