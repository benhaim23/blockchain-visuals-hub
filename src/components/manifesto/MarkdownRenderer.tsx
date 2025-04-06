
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import { Copy, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  // Function to detect if a line is within a code block
  const isWithinCodeBlock = (lines: string[], currentIndex: number): boolean => {
    // Find the last code fence before this line
    const previousFences = lines.slice(0, currentIndex).filter(l => l.trim().startsWith('```'));
    // If we have an odd number of code fences before this line, we're in a code block
    return previousFences.length % 2 !== 0;
  };

  // Function to get language from code block opening
  const getCodeLanguage = (lines: string[], startIndex: number): string => {
    if (startIndex + 1 < lines.length) {
      const nextLine = lines[startIndex + 1].trim();
      if (['sql', 'javascript', 'typescript', 'json', 'bash', 'python', 'css', 'html'].includes(nextLine)) {
        return nextLine;
      }
    }
    return '';
  };

  // Copy code function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Convert markdown content to HTML
  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {animatedContent.split('\n').map((line, index, allLines) => {
        // Clean up formatting markers
        const cleanLine = (str: string) => str.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');
        
        // Skip horizontal rules (------) completely
        if (line.trim() === '------') {
          return null;
        }
        
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
          // This is a table separator row, skip rendering but don't return null
          if (line.includes('---')) {
            return <div key={index} className="hidden"></div>;
          }
          
          const cells = line.split('|').filter(cell => cell.trim() !== '');
          
          // Detect if this is a header row (typically the first row in a table)
          const isHeaderRow = index < allLines.length - 1 && 
                             allLines[index + 1]?.includes('---') &&
                             allLines[index + 1]?.startsWith('|');
          
          return (
            <div key={index} className={`flex w-full ${isHeaderRow ? 'bg-blue-100 dark:bg-slate-700 font-medium rounded-t-lg' : 'bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80'} ${index === allLines.findIndex(l => l.startsWith('| ')) ? 'rounded-t-lg' : ''}`}>
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
        
        // Handle code blocks - starting fence
        else if (line.startsWith('```')) {
          // Check if this is a code block for SQL
          const language = line.substring(3).trim().toLowerCase();
          // If it's the end of a block, just return a spacer
          if (index > 0 && isWithinCodeBlock(allLines, index - 1)) {
            return <div key={index} className="mb-8"></div>;
          }
          
          // If it's the start of a block, check if it's an SQL block
          if (language === 'sql' || language === '') {
            // Find the end of this code block
            const endIndex = allLines.findIndex((l, i) => i > index && l.trim() === '```');
            if (endIndex === -1) return null; // No end found
            
            // Extract the code content
            const codeContent = allLines.slice(index + 1, endIndex).join('\n');
            
            // For SQL blocks, create a special formatted block with copy button
            if (language === 'sql') {
              const [copied, setCopied] = useState(false);
              
              const handleCopy = () => {
                copyToClipboard(codeContent);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              };
              
              return (
                <div key={index} className="relative my-6 rounded-lg overflow-hidden">
                  <div className="flex justify-between items-center bg-slate-800 dark:bg-slate-900 text-slate-200 px-4 py-2 text-sm font-mono">
                    <span>SQL</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleCopy}
                      className="h-8 px-2 text-slate-200 hover:text-white hover:bg-slate-700"
                    >
                      {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
                      <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
                    </Button>
                  </div>
                  <pre className="bg-slate-800 dark:bg-slate-900 p-4 overflow-x-auto text-sm text-blue-400 dark:text-blue-300">
                    <code>{codeContent}</code>
                  </pre>
                </div>
              );
            }
            
            // Skip to the end of the code block so we don't process its contents line by line
            return null;
          }
          
          return <div key={index} className="my-4"></div>;
        }
        
        // Skip language indicators in code blocks
        else if (['sql', 'javascript', 'typescript', 'json', 'bash', 'python', 'css', 'html'].some(lang => line.trim() === lang)) {
          return null;
        }
        
        // Handle code content - detect if this line is within a code block
        else if (isWithinCodeBlock(allLines, index)) {
          // We're already handling code blocks as a whole above, so we'll skip individual lines
          // This is only for non-SQL code blocks
          const isPartOfSqlBlock = (() => {
            // Find the opening code fence for this block
            for (let i = index - 1; i >= 0; i--) {
              if (allLines[i].startsWith('```')) {
                return allLines[i].substring(3).trim().toLowerCase() === 'sql';
              }
            }
            return false;
          })();
          
          if (!isPartOfSqlBlock) {
            return (
              <div key={index} className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-1.5 rounded-none first:rounded-t last:rounded-b text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-300 dark:border-indigo-700 whitespace-pre-wrap">
                {line}
              </div>
            );
          }
          return null;
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
          
          // Handle links
          formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');
          
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
