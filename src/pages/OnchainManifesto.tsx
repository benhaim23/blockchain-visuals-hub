
import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText, Sparkles } from "lucide-react";
import Header from '@/components/Header';
import { Squares } from "@/components/ui/squares-background";
import { manifestoChapters } from '@/data/manifestoChapters_updated';
import { toast } from '@/components/ui/use-toast';
import { MatrixText } from '@/components/ui/matrix-text';

// Lazy load components with higher loading priority
const TableOfContents = lazy(() => import('@/components/manifesto/TableOfContents'));
const ChapterReader = lazy(() => import('@/components/manifesto/ChapterReader'));

// Simple loading placeholder
const LoadingPlaceholder = () => (
  <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-lg border-2 border-blue-200 dark:border-slate-700 min-h-[600px] flex items-center justify-center shadow-lg">
    <p className="text-blue-600 dark:text-blue-400 animate-pulse">Loading content...</p>
  </div>
);

// Content cache for markdown to avoid repeated fetches
const contentCache = new Map<number, string>();

const OnchainManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState("toc");
  const [currentChapter, setCurrentChapter] = useState(0);
  const [mdContent, setMdContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Memoized callback functions
  const goToNextChapter = useCallback(() => {
    if (currentChapter < manifestoChapters.length - 1) {
      setCurrentChapter(prevChapter => prevChapter + 1);
      setActiveTab("reader");
    }
  }, [currentChapter]);

  const goToPreviousChapter = useCallback(() => {
    if (currentChapter > 0) {
      setCurrentChapter(prevChapter => prevChapter - 1);
      setActiveTab("reader");
    }
  }, [currentChapter]);

  const handleSelectChapter = useCallback((chapterIndex: number) => {
    setCurrentChapter(chapterIndex);
    setActiveTab("reader");
  }, []);

  // Memoize the chapters array 
  const chapters = useMemo(() => manifestoChapters, []);

  // Only load content when we're actually viewing it
  useEffect(() => {
    // Update document title
    if (activeTab === "toc") {
      document.title = "The Onchain Manifesto | Mark Benhaim";
    } else if (activeTab === "reader" && manifestoChapters[currentChapter]) {
      document.title = `${manifestoChapters[currentChapter].title} | The Onchain Manifesto`;
    }
    
    // Skip loading if we're not in reader mode or on first render
    if (activeTab !== "reader") {
      setHasInitialized(true);
      return;
    }
    
    const loadContent = async () => {
      setIsLoading(true);
      const chapter = manifestoChapters[currentChapter];
      
      // Check cache first
      if (contentCache.has(currentChapter)) {
        setMdContent(contentCache.get(currentChapter) || "");
        setIsLoading(false);
        return;
      }
      
      // Check if content stored in chapter object
      if (chapter?.mdContent) {
        setMdContent(chapter.mdContent);
        contentCache.set(currentChapter, chapter.mdContent);
        setIsLoading(false);
        return;
      }
      
      // Otherwise fetch the content
      if (chapter?.mdPath) {
        try {
          const response = await fetch(chapter.mdPath);
          
          if (!response.ok) {
            throw new Error(`Failed to load markdown: ${response.status}`);
          }
          
          const text = await response.text();
          setMdContent(text);
          
          // Cache the content
          contentCache.set(currentChapter, text);
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
      setHasInitialized(true);
    };

    // Small delay for better UI responsiveness
    const timer = setTimeout(() => {
      loadContent();
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentChapter, activeTab]);

  // Memoize the background component to prevent re-renders
  const BackgroundSquares = useMemo(() => (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-10 dark:opacity-20">
      <Squares 
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(59, 130, 246, 0.3)" 
        hoverFillColor="rgba(59, 130, 246, 0.1)"
        glowing={false}
      />
    </div>
  ), []);

  // Memoize the page header
  const PageHeader = useMemo(() => (
    <>
      <div className="mb-8 text-center">
        <MatrixText 
          text="The Onchain Manifesto" 
          className="h-auto text-indigo-800 dark:text-indigo-300" 
          initialDelay={300}
          letterAnimationDuration={200}
          letterInterval={20}
        />
      </div>
      <p className="text-slate-700 dark:text-muted-foreground mb-8 text-lg text-center leading-relaxed">
        A comprehensive guide to blockchain analytics, exploring the transparent world of on-chain data 
        and how to derive meaningful insights from blockchain networks.
      </p>
    </>
  ), []);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 relative bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950">
        {BackgroundSquares}
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {PageHeader}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-6 border-2 border-blue-300 dark:border-slate-700 shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl">
              <TabsTrigger 
                value="toc" 
                className="flex-1 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-slate-800"
              >
                <FileText className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300">Table of Contents</span>
              </TabsTrigger>
              <TabsTrigger 
                value="reader" 
                className="flex-1 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-slate-800"
              >
                <BookOpen className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300">Reader</span>
                <Sparkles className="ml-2 h-3 w-3 text-amber-500" />
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
              {!hasInitialized || isLoading ? (
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

export default React.memo(OnchainManifesto);
