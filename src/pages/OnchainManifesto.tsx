import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import manifestoChapters from "@/data/manifestoChapters_updated";
import { ChapterReader } from "@/components/manifesto/ChapterReader";
import { TableOfContents } from "@/components/manifesto/TableOfContents";

const OnchainManifesto: React.FC = () => {
  const location = useLocation();
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#'
    if (hash) {
      setActiveChapterId(hash);
    } else {
      setActiveChapterId(manifestoChapters[0].id);
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChapterClick = (chapterId: string) => {
    setActiveChapterId(chapterId);
    window.location.hash = chapterId; // Update the URL hash
  };

  const activeChapter = manifestoChapters.find(
    (chapter) => chapter.id === activeChapterId
  );

  if (!activeChapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="container max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {isMobile ? (
          <div className="md:hidden">
            <details className="collapse bg-base-200 rounded-box">
              <summary className="collapse-title text-xl font-medium">
                Table of Contents
              </summary>
              <div className="collapse-content">
                <TableOfContents
                  chapters={manifestoChapters}
                  activeChapterId={activeChapterId}
                  onChapterClick={handleChapterClick}
                />
              </div>
            </details>
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
              <TableOfContents
                chapters={manifestoChapters}
                activeChapterId={activeChapterId}
                onChapterClick={handleChapterClick}
              />
            </div>
          </div>
        )}

        <div className="md:col-span-3">
          <ChapterReader chapter={activeChapter} />
        </div>
      </div>
    </div>
  );
};

export default OnchainManifesto;
