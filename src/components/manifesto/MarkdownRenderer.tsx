
import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

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
            <div key={index} className="relative rounded-lg mb-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <h1 className="text-3xl font-bold mt-6 mb-4 px-4 py-2 relative">{line.substring(2)}</h1>
            </div>
          );
        } else if (line.startsWith('## ')) {
          return (
            <div key={index} className="relative rounded-lg mb-3">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <h2 className="text-2xl font-bold mt-5 mb-3 px-4 py-2 relative">{line.substring(3)}</h2>
            </div>
          );
        } else if (line.startsWith('### ')) {
          return (
            <div key={index} className="relative rounded-lg mb-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <h3 className="text-xl font-bold mt-4 mb-2 px-4 py-2 relative">{line.substring(4)}</h3>
            </div>
          );
        } else if (line.startsWith('#### ')) {
          return (
            <div key={index} className="relative rounded-lg mb-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <h4 className="text-lg font-bold mt-3 mb-2 px-4 py-2 relative">{line.substring(5)}</h4>
            </div>
          );
        }
        
        // Lists
        else if (line.startsWith('- ')) {
          return (
            <div key={index} className="relative rounded-lg">
              <GlowingEffect spread={30} glow={true} disabled={false} proximity={50} inactiveZone={0.01} borderWidth={2} />
              <li className="ml-6 mb-1 px-3 py-1 relative">{line.substring(2)}</li>
            </div>
          );
        } 
        
        // Bold text - handle ** markers properly
        else if (line.includes('**')) {
          // Replace ** with span for bold text
          const parts = line.split('**');
          
          if (parts.length > 1) {
            return (
              <div key={index} className="relative rounded-lg mb-4">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <p className="mb-4 px-4 py-2 relative">
                  {parts.map((part, i) => {
                    // Every even index (0, 2, 4...) is regular text
                    // Every odd index (1, 3, 5...) is bold text
                    return i % 2 === 0 ? 
                      <React.Fragment key={i}>{part}</React.Fragment> : 
                      <strong key={i}>{part}</strong>;
                  })}
                </p>
              </div>
            );
          }
          return (
            <div key={index} className="relative rounded-lg mb-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <p className="mb-4 px-4 py-2 relative">{line}</p>
            </div>
          );
        }
        
        // Blockquotes
        else if (line.startsWith('> ')) {
          return (
            <div key={index} className="relative rounded-lg my-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground px-4 py-2 relative">{line.substring(2)}</blockquote>
            </div>
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
            <div key={index} className="relative rounded-lg my-1">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <div className="flex w-full my-1 px-4 py-2 relative">
                {cells.map((cell, cellIndex) => (
                  <div key={cellIndex} className="flex-1 px-2 py-1 border">
                    {cell.trim()}
                  </div>
                ))}
              </div>
            </div>
          );
        }
        
        // Horizontal rule
        else if (line === '---') {
          return <hr key={index} className="my-6 border-t border-muted" />;
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
              <div key={index} className="relative rounded-lg mb-4">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <p 
                  className="mb-4 px-4 py-2 relative" 
                  dangerouslySetInnerHTML={{ __html: formattedText }}
                />
              </div>
            );
          }
          
          return (
            <div key={index} className="relative rounded-lg mb-4">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <p className="mb-4 px-4 py-2 relative">{formattedText}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
