
import React from 'react';

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
          return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{line.substring(4)}</h3>;
        } else if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-bold mt-3 mb-2">{line.substring(5)}</h4>;
        }
        
        // Lists
        else if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
        } else if (line.startsWith('**')) {
          const content = line.replace(/\*\*/g, '');
          return <p key={index} className="font-bold mb-2">{content}</p>;
        }
        
        // Blockquotes
        else if (line.startsWith('> ')) {
          return <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">{line.substring(2)}</blockquote>;
        }
        
        // Tables
        else if (line.startsWith('| ')) {
          if (line.includes('---')) {
            // This is a table header separator, skip rendering
            return null;
          }
          
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          return (
            <div key={index} className="flex w-full my-1">
              {cells.map((cell, cellIndex) => (
                <div key={cellIndex} className="flex-1 px-2 py-1 border">
                  {cell.trim()}
                </div>
              ))}
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
              <p 
                key={index} 
                className="mb-4" 
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          }
          
          return <p key={index} className="mb-4">{formattedText}</p>;
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
