
import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText, Sparkles } from "lucide-react";
import Header from '@/components/Header';
import { Squares } from "@/components/ui/squares-background";
import { manifestoChapters } from '@/data/manifestoChapters_updated';
import { toast } from '@/components/ui/use-toast';
import { MatrixText } from '@/components/ui/matrix-text';

// Lazy load the larger components
const TableOfContents = lazy(() => import('@/components/manifesto/TableOfContents'));
const ChapterReader = lazy(() => import('@/components/manifesto/ChapterReader'));

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 min-h-[600px] flex items-center justify-center shadow-lg">
    <p className="text-blue-600 dark:text-blue-400 animate-pulse">Loading content...</p>
  </div>
);

const OnchainManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState("toc");
  const [currentChapter, setCurrentChapter] = useState(0);
  const [mdContent, setMdContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Memoized callback functions
  const goToNextChapter = useCallback(() => {
    if (currentChapter < manifestoChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setActiveTab("reader");
    }
  }, [currentChapter]);

  const goToPreviousChapter = useCallback(() => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setActiveTab("reader");
    }
  }, [currentChapter]);

  const handleSelectChapter = useCallback((chapterIndex: number) => {
    setCurrentChapter(chapterIndex);
    setActiveTab("reader");
  }, []);

  // Memoize the chapters array to prevent unnecessary rerenders
  const chapters = useMemo(() => manifestoChapters, []);

  useEffect(() => {
    // Update the document title based on the current page/chapter
    if (activeTab === "toc") {
      document.title = "The Onchain Manifesto | Mark Benhaim";
    } else if (activeTab === "reader" && manifestoChapters[currentChapter]) {
      document.title = `${manifestoChapters[currentChapter].title} | The Onchain Manifesto`;
    }
    
    const loadContent = async () => {
      // Skip loading if we're not in reader mode
      if (activeTab !== "reader") return;
      
      setIsLoading(true);
      const chapter = manifestoChapters[currentChapter];

      // Check if we already have the content (memory cache)
      if (chapter?.mdContent) {
        setMdContent(chapter.mdContent);
        setIsLoading(false);
        return;
      }
      
      if (chapter?.mdPath) {
        try {
          const response = await fetch(chapter.mdPath);
          
          if (!response.ok) {
            throw new Error(`Failed to load markdown: ${response.status}`);
          }
          
          const text = await response.text();
          setMdContent(text);
        } catch (error) {
          console.error('Error loading markdown:', error);
          toast({
            title: "Failed to load content",
            description: "There was an error loading the chapter content. Please try again.",
            variant: "destructive"
          });
          setMdContent("");
        }
      } else {
        setMdContent("");
      }
      
      setIsLoading(false);
    };

    loadContent();
  }, [currentChapter, activeTab]);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 relative bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-50">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="rgba(59, 130, 246, 0.3)" 
            hoverFillColor="rgba(59, 130, 246, 0.1)"
            glowing={true}
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="mb-8 text-center">
            <MatrixText 
              text="The Onchain Manifesto" 
              className="h-auto text-indigo-800 dark:text-indigo-300" 
              initialDelay={500}
              letterAnimationDuration={700}
              letterInterval={100}
            />
          </div>
          <p className="text-slate-700 dark:text-muted-foreground mb-8 text-lg text-center leading-relaxed">
            A comprehensive guide to blockchain analytics, exploring the transparent world of on-chain data 
            and how to derive meaningful insights from blockchain networks.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-6 border-2 border-blue-300 dark:border-slate-700 shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl">
              <TabsTrigger 
                value="toc" 
                className="flex-1 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-primary/5 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-slate-800"
              >
                <FileText className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300">Table of Contents</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reader" 
                className="flex-1 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-primary/5 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-slate-800"
              >
                <BookOpen className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300">Reader</span>
                <Sparkles className="ml-2 h-3 w-3 text-amber-500 animate-pulse" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="toc" className="mt-0">
              <Suspense fallback={<LoadingPlaceholder />}>
                <TableOfContents 
                  chapters={chapters} 
                  onSelectChapter={handleSelectChapter} 
                />
              </Suspense>
            </TabsContent>

            <TabsContent value="reader" className="mt-0">
              {isLoading ? (
                <LoadingPlaceholder />
              ) : (
                <Suspense fallback={<LoadingPlaceholder />}>
                  <ChapterReader 
                    currentChapter={currentChapter}
                    chapters={chapters}
                    mdContent={mdContent}
                    onPreviousChapter={goToPreviousChapter}
                    onNextChapter={goToNextChapter}
                  />
                </Suspense>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default OnchainManifesto;
