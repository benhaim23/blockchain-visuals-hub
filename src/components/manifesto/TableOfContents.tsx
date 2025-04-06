
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
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-900 dark:text-indigo-300">Chapters</h2>
      <div className="space-y-3">
        {chapters.map((chapter) => (
          <div 
            key={chapter.number}
            className="flex items-center justify-between p-3 bg-blue-50/80 dark:bg-slate-800/30 hover:bg-blue-100 dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-300 border border-blue-100 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-slate-600 hover:scale-[1.01]"
            onClick={() => onSelectChapter(chapter.number)}
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">{getDisplayNumber(chapter)}</span>
              <span className="font-medium text-slate-800 dark:text-white">{chapter.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-blue-500 dark:text-blue-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
