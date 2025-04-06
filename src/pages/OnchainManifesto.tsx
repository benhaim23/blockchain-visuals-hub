import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TableOfContents from '@/components/manifesto/TableOfContents';
import ChapterReader from '@/components/manifesto/ChapterReader';
import { basicChapters } from '@/data/manifestoChapters';
import { advancedChapters } from '@/data/manifestoChapters/chaptersAdvanced';

const OnchainManifesto: React.FC = () => {
  const { chapter } = useParams<{ chapter: string | undefined }>();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState<number>(chapter ? parseInt(chapter, 10) : 0);
  const [mdContent, setMdContent] = useState<string>('');

  useEffect(() => {
    if (chapter !== undefined) {
      const chapterIndex = parseInt(chapter, 10);
      if (!isNaN(chapterIndex)) {
        setCurrentChapter(chapterIndex);
      } else {
        setCurrentChapter(0);
        navigate('/manifesto/0');
      }
    }
  }, [chapter, navigate]);

  // Combine both chapter sets
  const allChapters = [...basicChapters, ...advancedChapters];

  const loadMarkdownContent = async (mdPath: string | undefined) => {
    if (mdPath) {
      try {
        const response = await fetch(mdPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMdContent(text);
      } catch (error) {
        console.error("Could not load markdown :", error);
        setMdContent('');
      }
    } else {
      setMdContent('');
    }
  };

  useEffect(() => {
    if (currentChapter !== undefined) {
      loadMarkdownContent(allChapters[currentChapter]?.mdPath);
    }
  }, [currentChapter]);

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      navigate(`/manifesto/${currentChapter - 1}`);
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < allChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      navigate(`/manifesto/${currentChapter + 1}`);
    }
  };

  const handleSelectChapter = (chapterIndex: number) => {
    setCurrentChapter(chapterIndex);
    navigate(`/manifesto/${chapterIndex}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-slate-900 pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900 dark:text-indigo-400">
          The Onchain Manifesto
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <TableOfContents 
              chapters={allChapters} 
              onSelectChapter={handleSelectChapter} 
            />
          </div>
          
          <div className="lg:col-span-8">
            {currentChapter !== undefined && (
              <ChapterReader
                currentChapter={currentChapter}
                chapters={allChapters}
                mdContent={mdContent}
                onPreviousChapter={handlePreviousChapter}
                onNextChapter={handleNextChapter}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnchainManifesto;
