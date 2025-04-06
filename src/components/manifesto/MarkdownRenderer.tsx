
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedContent = useAnimatedText(content, "\n");
  
  useEffect(() => {
    setIsVisible(true);
  }, [content]);

  // Reset visibility when content changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [content]);

  // Convert markdown content to HTML
  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {animatedContent.split('\n').map((line, index) => {
        // Clean up formatting markers
        const cleanLine = (str: string) => str.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');
        
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">{cleanLine(line.substring(2))}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">{cleanLine(line.substring(3))}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">{cleanLine(line.substring(4))}</h3>;
        } else if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">{cleanLine(line.substring(5))}</h4>;
        }
        
        // Lists
        else if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">{cleanLine(line.substring(2))}</li>;
        } 
        
        // Bold text - we'll handle the ** markers properly
        else if (line.includes('**')) {
          // Replace ** with span for bold text
          const parts = line.split('**');
          
          if (parts.length > 1) {
            return (
              <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">
                {parts.map((part, i) => {
                  // Every even index (0, 2, 4...) is regular text
                  // Every odd index (1, 3, 5...) is bold text
                  return i % 2 === 0 ? 
                    <React.Fragment key={i}>{part}</React.Fragment> : 
                    <strong key={i} className="text-blue-700 dark:text-blue-400">{part}</strong>;
                })}
              </p>
            );
          }
          return <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">{cleanLine(line)}</p>;
        }
        
        // Blockquotes
        else if (line.startsWith('> ')) {
          return <blockquote key={index} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">{cleanLine(line.substring(2))}</blockquote>;
        }
        
        // Tables
        else if (line.startsWith('| ')) {
          if (line.includes('---')) {
            // This is a table header separator, skip rendering
            return null;
          }
          
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          
          // Detect if this is a header row (typically the first row in a table)
          const isHeaderRow = index > 0 && 
                             animatedContent.split('\n')[index + 1]?.includes('---') &&
                             animatedContent.split('\n')[index + 1]?.startsWith('|');
          
          return (
            <div key={index} className={`flex w-full ${isHeaderRow ? 'bg-blue-100 dark:bg-slate-700 font-medium rounded-t-lg' : 'bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80'} ${index === animatedContent.split('\n').findIndex(l => l.startsWith('| ')) ? 'rounded-t-lg' : ''}`}>
              {cells.map((cell, cellIndex) => (
                <div 
                  key={cellIndex} 
                  className={`flex-1 px-3 py-2 ${cellIndex === 0 ? 'border-l' : ''} border-r border-t border-b border-blue-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 ${isHeaderRow ? 'font-semibold text-indigo-900 dark:text-indigo-300' : ''}`}
                >
                  {cleanLine(cell.trim())}
                </div>
              ))}
            </div>
          );
        }
        
        // Horizontal rule
        else if (line === '---') {
          return <hr key={index} className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />;
        }
        
        // Empty line
        else if (line.trim() === '') {
          return <div key={index} className="h-4"></div>;
        }
        
        // Code blocks
        else if (line.startsWith('```')) {
          // Skip the opening and closing code block markers
          return null;
        }
        // Skip language indicators in code blocks
        else if (line === 'sql' || line === 'javascript' || line === 'typescript' || line === 'json') {
          return null;
        }
        // Handle code content - detect if this line is within a code block
        else if (animatedContent.split('\n').slice(0, index).some(l => l.startsWith('```')) && 
                !animatedContent.split('\n').slice(0, index).slice(animatedContent.split('\n').slice(0, index).lastIndexOf('```')).includes('```')) {
          return (
            <div key={index} className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-1 rounded-sm text-indigo-600 dark:text-indigo-400">
              {line}
            </div>
          );
        }
        
        // Regular paragraph
        else {
          // Process inline formatting
          let formattedText = line;
          
          // Bold text
          formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700 dark:text-blue-400">$1</strong>');
          
          // Italic text
          formattedText = formattedText.replace(/\*(.*?)\*/g, '<em class="text-slate-600 dark:text-slate-400">$1</em>');
          
          // Code
          formattedText = formattedText.replace(/`(.*?)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600 dark:text-indigo-400 font-mono text-sm">$1</code>');
          
          if (formattedText.includes('<')) {
            return (
              <p 
                key={index} 
                className="mb-4 text-slate-700 dark:text-slate-300" 
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          }
          
          return <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">{formattedText}</p>;
        }
      })}
    </div>
  );
};

export default MarkdownRenderer;
