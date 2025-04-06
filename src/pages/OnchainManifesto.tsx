
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const manifestoChapters = [
  { 
    number: 0, 
    title: "The Onchain Analyst Decoding the Transparent Economy", 
    pdfPath: "/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.pdf",
    mdPath: "/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.md"
  },
  { 
    number: 1, 
    title: "What Does an Onchain Data Analyst Do?", 
    pdfPath: "/Onchain Manifesto/01. What Does an Onchain Data Analyst Do?.pdf" 
  },
  { 
    number: 2, 
    title: "The Onchain Stack- SQL, Spellbook, and Decoding UTXOs", 
    pdfPath: "/Onchain Manifesto/02. The Onchain Stack- SQL, Spellbook, and Decoding UTXOs.pdf" 
  },
  { 
    number: 3, 
    title: "The Dune Platform- A Gateway to Onchain Transparencyconomy", 
    pdfPath: "/Onchain Manifesto/03. The Dune Platform- A Gateway to Onchain Transparencyconomy.pdf" 
  },
  { 
    number: 4, 
    title: "Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More", 
    pdfPath: "/Onchain Manifesto/04. Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More.pdf" 
  },
  { 
    number: 5, 
    title: "SQL Basics for Blockchain Analytics", 
    pdfPath: "/Onchain Manifesto/05. SQL Basics for Blockchain Analytics.pdf" 
  },
  { 
    number: 6, 
    title: "Useful Queries — From Token Transfers to Whale Watching", 
    pdfPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.pdf" 
  },
  { 
    number: 7, 
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health", 
    pdfPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.pdf" 
  },
  { 
    number: 8, 
    title: "Lending Protocols — Risk, Liquidations, and User Behavior", 
    pdfPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.pdf" 
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf" 
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf" 
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf" 
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf" 
  },
  { 
    number: 13, 
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market", 
    pdfPath: "/Onchain Manifesto/13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market.pdf" 
  },
  { 
    number: 14, 
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community", 
    pdfPath: "/Onchain Manifesto/14. Building with Spellbook — How to Contribute Reusable Models to the Community.pdf" 
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf" 
  },
  { 
    number: 16, 
    title: "Account Abstraction- Why It Matters for Wallet UX and Analysts", 
    pdfPath: "/Onchain Manifesto/16. Account Abstraction- Why It Matters for Wallet UX and Analysts.pdf" 
  },
  { 
    number: 17, 
    title: "ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale", 
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale.pdf" 
  },
  { 
    number: 18, 
    title: "Why the Future Belongs to Onchain Analysts", 
    pdfPath: "/Onchain Manifesto/18. Why the Future Belongs to Onchain Analysts.pdf" 
  }
];

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

  // Load markdown content for the first chapter (executive summary)
  React.useEffect(() => {
    if (currentChapter === 0) {
      fetch('/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.md')
        .then(response => response.text())
        .then(text => {
          setMdContent(text);
        })
        .catch(error => console.error('Error loading markdown:', error));
    }
  }, [currentChapter]);

  // Display the correct chapter number in TOC
  const getDisplayNumber = (chapter: typeof manifestoChapters[0]) => {
    return chapter.number === 0 ? "Executive Summary" : `${chapter.number}.`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
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
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
              <div className="space-y-3">
                {manifestoChapters.map((chapter) => (
                  <div 
                    key={chapter.number}
                    className="flex items-center justify-between p-3 hover:bg-muted rounded-md cursor-pointer transition-colors"
                    onClick={() => {
                      setCurrentChapter(chapter.number);
                      setActiveTab("reader");
                    }}
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
          </TabsContent>

          <TabsContent value="reader" className="mt-0">
            <div className="bg-card rounded-lg border border-border min-h-[600px] flex flex-col">
              {/* Navigation controls */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  onClick={goToPreviousChapter}
                  disabled={currentChapter <= 0}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <span className="font-medium">
                  {currentChapter === 0 ? 'Executive Summary' : `Chapter ${currentChapter}`}: {manifestoChapters[currentChapter]?.title}
                </span>

                <Button 
                  variant="ghost" 
                  onClick={goToNextChapter}
                  disabled={currentChapter >= manifestoChapters.length - 1}
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Content area */}
              <div className="flex-1 p-4">
                {currentChapter === 0 ? (
                  // For the markdown file (executive summary)
                  <ScrollArea className="h-[600px] w-full pr-4">
                    <div className="prose dark:prose-invert max-w-none">
                      {mdContent.split('\n').map((line, index) => {
                        // Simple markdown parsing
                        if (line.startsWith('# ')) {
                          return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                        } else if (line.startsWith('## ')) {
                          return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
                        } else if (line.startsWith('### ')) {
                          return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(4)}</h3>;
                        } else if (line.startsWith('- ')) {
                          return <li key={index} className="ml-4 mb-1">{line.substring(2)}</li>;
                        } else if (line.startsWith('> ')) {
                          return <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">{line.substring(2)}</blockquote>;
                        } else if (line === '---') {
                          return <hr key={index} className="my-6 border-t border-muted" />;
                        } else if (line.trim() === '') {
                          return <div key={index} className="h-4"></div>;
                        } else {
                          return <p key={index} className="mb-4">{line}</p>;
                        }
                      })}
                    </div>
                  </ScrollArea>
                ) : (
                  // For PDF files
                  <div className="h-[600px] w-full">
                    <iframe
                      src={manifestoChapters[currentChapter]?.pdfPath}
                      className="w-full h-full"
                      title={`Chapter ${currentChapter}: ${manifestoChapters[currentChapter]?.title}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OnchainManifesto;
