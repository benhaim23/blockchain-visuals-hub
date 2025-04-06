import React from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  chapters: ManifestoChapter[];
  activeChapterId: string | null;
  onChapterClick: (chapterId: string) => void;
}

interface ChapterItemProps {
  chapter: ManifestoChapter;
  isActive: boolean;
  onClick: () => void;
}

interface ManifestoChapter {
  id: string;
  title: string;
  filename: string;
  path: string;
  description?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  chapters,
  activeChapterId,
  onChapterClick,
}) => {
  return (
    <div className="space-y-2">
      {chapters.map((chapter) => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          isActive={chapter.id === activeChapterId}
          onClick={() => onChapterClick(chapter.id)}
        />
      ))}
    </div>
  );
};

const ChapterItem = ({ chapter, isActive, onClick }: ChapterItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "block text-left w-full p-3 rounded-lg transition-all",
        "hover:bg-muted/50 dark:hover:bg-muted/20",
        isActive ? "bg-muted dark:bg-muted/30" : ""
      )}
    >
      <div className="font-medium">{chapter.title}</div>
      {chapter.description && (
        <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {chapter.description}
        </div>
      )}
    </button>
  );
};
