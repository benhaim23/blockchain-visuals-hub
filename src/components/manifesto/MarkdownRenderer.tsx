
import React from 'react';
import { GlowingBox } from '@/components/ui/glowing-box';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Convert markdown content to HTML
  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.split('\n').map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return (
            <div key={index} className="relative my-6 rounded-lg">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={3} />
              <h1 className="text-3xl font-bold mt-6 mb-4 px-4 py-2 relative z-10">{line.substring(2)}</h1>
            </div>
          );
        } else if (line.startsWith('## ')) {
          return (
            <div key={index} className="relative my-5 rounded-lg">
              <GlowingEffect spread={35} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
              <h2 className="text-2xl font-bold mt-5 mb-3 px-3 py-2 relative z-10">{line.substring(3)}</h2>
            </div>
          );
        } else if (line.startsWith('### ')) {
          return (
            <div key={index} className="relative my-4 rounded-lg">
              <GlowingEffect spread={30} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
              <h3 className="text-xl font-bold mt-4 mb-2 px-3 py-1 relative z-10">{line.substring(4)}</h3>
            </div>
          );
        } else if (line.startsWith('#### ')) {
          return (
            <div key={index} className="relative my-3 rounded-lg">
              <GlowingEffect spread={25} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
              <h4 className="text-lg font-bold mt-3 mb-2 px-2 py-1 relative z-10">{line.substring(5)}</h4>
            </div>
          );
        }
        
        // Lists
        else if (line.startsWith('- ')) {
          return (
            <div key={index} className="relative my-1 rounded-lg ml-4">
              <GlowingEffect spread={20} glow={true} disabled={false} proximity={40} inactiveZone={0.01} borderWidth={1} />
              <li className="ml-6 mb-1 px-2 py-1 relative z-10">{line.substring(2)}</li>
            </div>
          );
        } 
        
        // Bold text - we'll handle the ** markers properly
        else if (line.includes('**')) {
          // Replace ** with span for bold text
          const parts = line.split('**');
          
          if (parts.length > 1) {
            return (
              <GlowingBox key={index} className="my-4" contentClassName="py-2 px-3">
                <p className="mb-0">
                  {parts.map((part, i) => {
                    // Every even index (0, 2, 4...) is regular text
                    // Every odd index (1, 3, 5...) is bold text
                    return i % 2 === 0 ? 
                      <React.Fragment key={i}>{part}</React.Fragment> : 
                      <strong key={i}>{part}</strong>;
                  })}
                </p>
              </GlowingBox>
            );
          }
          return (
            <GlowingBox key={index} className="my-4" contentClassName="py-2 px-3">
              <p className="mb-0">{line}</p>
            </GlowingBox>
          );
        }
        
        // Blockquotes
        else if (line.startsWith('> ')) {
          return (
            <GlowingBox key={index} className="my-4" spread={25} borderWidth={2} contentClassName="bg-muted/30">
              <blockquote className="border-l-4 border-primary pl-4 italic my-0 text-muted-foreground">{line.substring(2)}</blockquote>
            </GlowingBox>
          );
        }
        
        // Tables
        else if (line.startsWith('| ')) {
          if (line.includes('---')) {
            // This is a table header separator, skip rendering
            return null;
          }
          
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          return (
            <GlowingBox key={index} className="my-1" spread={20} contentClassName="p-0 overflow-hidden">
              <div className="flex w-full">
                {cells.map((cell, cellIndex) => (
                  <div key={cellIndex} className="flex-1 px-2 py-1 border">
                    {cell.trim()}
                  </div>
                ))}
              </div>
            </GlowingBox>
          );
        }
        
        // Horizontal rule
        else if (line === '---') {
          return (
            <div key={index} className="relative my-6">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={60} inactiveZone={0.01} borderWidth={2} />
              <hr className="border-t border-muted relative z-10" />
            </div>
          );
        }
        
        // Empty line
        else if (line.trim() === '') {
          return <div key={index} className="h-4"></div>;
        }
        
        // Regular paragraph
        else {
          // Process inline formatting
          let formattedText = line;
          
          // Bold text
          formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          
          // Italic text
          formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
          
          // Code
          formattedText = formattedText.replace(/`(.*?)`/g, '<code>$1</code>');
          
          if (formattedText.includes('<')) {
            return (
              <GlowingBox key={index} className="my-4" contentClassName="py-2 px-3">
                <p 
                  className="mb-0" 
                  dangerouslySetInnerHTML={{ __html: formattedText }}
                />
              </GlowingBox>
            );
          }
          
          return (
            <GlowingBox key={index} className="my-4" contentClassName="py-2 px-3">
              <p className="mb-0">{formattedText}</p>
            </GlowingBox>
          );
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
