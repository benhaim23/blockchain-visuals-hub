
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText } from "lucide-react";
import Header from '@/components/Header';
import MusicPlayer from '@/components/MusicPlayer';
import { Squares } from "@/components/ui/squares-background";
import { manifestoChapters } from '@/data/manifestoChapters';
import TableOfContents from '@/components/manifesto/TableOfContents';
import ChapterReader from '@/components/manifesto/ChapterReader';
import { toast } from '@/components/ui/use-toast';
import { MatrixText } from '@/components/ui/matrix-text';
import { GlowingBox } from '@/components/ui/glowing-box';

const OnchainManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState("toc");
  const [currentChapter, setCurrentChapter] = useState(0);
  const [mdContent, setMdContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const goToNextChapter = () => {
    if (currentChapter < manifestoChapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setActiveTab("reader");
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setActiveTab("reader");
    }
  };

  const handleSelectChapter = (chapterIndex: number) => {
    setCurrentChapter(chapterIndex);
    setActiveTab("reader");
  };

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const chapter = manifestoChapters[currentChapter];

      // If we have markdown content for this chapter
      if (chapter?.mdContent) {
        setMdContent(chapter.mdContent);
        setIsLoading(false);
        return;
      }
      
      // If we have a markdown path but no content yet
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
  }, [currentChapter]);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="rgba(51, 51, 51, 0.3)" 
            hoverFillColor="rgba(34, 34, 34, 0.5)"
            glowing={true}
          />
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="mb-8">
            <MatrixText 
              text="The Onchain Manifesto" 
              className="h-auto" 
              initialDelay={400}
              letterAnimationDuration={600}
              letterInterval={80}
            />
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            A comprehensive guide to blockchain analytics, exploring the transparent world of on-chain data 
            and how to derive meaningful insights from blockchain networks.
          </p>

          <GlowingBox className="mb-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="toc" className="flex-1">
                  <FileText className="mr-2 h-4 w-4" />
                  Table of Contents
                </TabsTrigger>
                <TabsTrigger value="reader" className="flex-1">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Reader
                </TabsTrigger>
              </TabsList>

              <TabsContent value="toc" className="mt-0">
                <TableOfContents 
                  chapters={manifestoChapters} 
                  onSelectChapter={handleSelectChapter} 
                />
              </TabsContent>

              <TabsContent value="reader" className="mt-0">
                {isLoading ? (
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border min-h-[600px] flex items-center justify-center">
                    <p>Loading chapter content...</p>
                  </div>
                ) : (
                  <ChapterReader 
                    currentChapter={currentChapter}
                    chapters={manifestoChapters}
                    mdContent={mdContent}
                    onPreviousChapter={goToPreviousChapter}
                    onNextChapter={goToNextChapter}
                  />
                )}
              </TabsContent>
            </Tabs>
          </GlowingBox>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
};

export default OnchainManifesto;
