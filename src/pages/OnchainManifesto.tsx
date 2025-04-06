
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText } from "lucide-react";
import Header from '@/components/Header';
import MusicPlayer from '@/components/MusicPlayer';
import { Squares } from "@/components/ui/squares-background";
import { manifestoChapters } from '@/data/manifestoChapters';
import TableOfContents from '@/components/manifesto/TableOfContents';
import ChapterReader from '@/components/manifesto/ChapterReader';

const OnchainManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState("toc");
  const [currentChapter, setCurrentChapter] = useState(0);
  const [mdContent, setMdContent] = useState<string>("");

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
    if (manifestoChapters[currentChapter]?.mdPath) {
      fetch(manifestoChapters[currentChapter].mdPath)
        .then(response => response.text())
        .then(text => {
          setMdContent(text);
        })
        .catch(error => console.error('Error loading markdown:', error));
    } else if (currentChapter === 0) {
      // Fallback for executive summary
      fetch('/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.md')
        .then(response => response.text())
        .then(text => {
          setMdContent(text);
        })
        .catch(error => console.error('Error loading markdown:', error));
    }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-8 crypto-gradient">The Onchain Manifesto</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            A comprehensive guide to blockchain analytics, exploring the transparent world of on-chain data 
            and how to derive meaningful insights from blockchain networks.
          </p>

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
              <ChapterReader 
                currentChapter={currentChapter}
                chapters={manifestoChapters}
                mdContent={mdContent}
                onPreviousChapter={goToPreviousChapter}
                onNextChapter={goToNextChapter}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
};

export default OnchainManifesto;
