
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedContent = useAnimatedText(content, "\n");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, [content]);

  // Reset visibility when content changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [content]);

  // Handle copying code to clipboard
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  // Function to detect if a line is within a code block
  const isWithinCodeBlock = (lines: string[], currentIndex: number): boolean => {
    // Find the last code fence before this line
    const previousFences = lines.slice(0, currentIndex).filter(l => l.trim().startsWith('```'));
    // If we have an odd number of code fences before this line, we're in a code block
    return previousFences.length % 2 !== 0;
  };

  // Check if a code block is SQL
  const isSqlCodeBlock = (lines: string[], startIndex: number): boolean => {
    // Look for "sql" after the opening ```
    if (startIndex + 1 < lines.length) {
      const langLine = lines[startIndex + 1].trim().toLowerCase();
      return langLine === 'sql';
    }
    return false;
  };

  // Extract code block content
  const extractCodeBlock = (lines: string[], startIndex: number): { content: string, endIndex: number } => {
    let endIndex = startIndex;
    const codeLines = [];
    
    // Find the end of the code block
    for (let i = startIndex + 2; i < lines.length; i++) {
      if (lines[i].trim().startsWith('```')) {
        endIndex = i;
        break;
      }
      codeLines.push(lines[i]);
    }
    
    return {
      content: codeLines.join('\n'),
      endIndex
    };
  };

  // Convert markdown content to HTML
  const allLines = animatedContent.split('\n');
  const renderedContent = [];
  
  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    
    // Skip horizontal rules (------) completely
    if (line.trim() === '------') {
      continue;
    }
    
    // Code blocks starting
    if (line.trim().startsWith('```')) {
      // Check if this is an SQL code block
      if (isSqlCodeBlock(allLines, i)) {
        // Extract the complete code block
        const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
        const blockIndex = renderedContent.length;
        
        renderedContent.push(
          <div key={`code-${i}`} className="my-6 overflow-hidden rounded-lg bg-slate-900 text-white shadow-lg">
            {/* Code block header with language and copy button */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
              <div className="rounded-md bg-slate-700 px-2 py-1 text-sm font-medium text-slate-300">SQL</div>
              <button
                onClick={() => copyToClipboard(codeContent, blockIndex)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                {copiedIndex === blockIndex ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
            
            {/* Code content */}
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-sql whitespace-pre-wrap">
                {codeContent.split('\n').map((codeLine, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {/* Apply syntax highlighting for SQL */}
                    {codeLine
                      .replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|INNER JOIN|RIGHT JOIN|UNION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|CASE|WHEN|THEN|ELSE|END|COUNT|SUM|AVG|MIN|MAX|NULL|IS|DISTINCT)\b/gi, 
                        match => `<span class="text-blue-400">${match}</span>`)
                      .replace(/('[^']*')/g, 
                        match => `<span class="text-amber-400">${match}</span>`)
                      .replace(/\b(\d+(?:\.\d+)?)\b/g, 
                        match => `<span class="text-cyan-300">${match}</span>`)
                      .replace(/(-&gt;|=|&gt;|&lt;|\+|-|\*|\/|%)/g, 
                        match => `<span class="text-pink-400">${match}</span>`)}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        );
        
        // Skip to the end of the code block
        i = endIndex;
        continue;
      }
    }
    
    // Headers
    if (line.startsWith('# ')) {
      renderedContent.push(<h1 key={i} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">{line.substring(2)}</h1>);
    } else if (line.startsWith('## ')) {
      renderedContent.push(<h2 key={i} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">{line.substring(3)}</h2>);
    } else if (line.startsWith('### ')) {
      renderedContent.push(<h3 key={i} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">{line.substring(4)}</h3>);
    } else if (line.startsWith('#### ')) {
      renderedContent.push(<h4 key={i} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">{line.substring(5)}</h4>);
    }
    
    // Lists
    else if (line.startsWith('- ')) {
      renderedContent.push(<li key={i} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">{line.substring(2)}</li>);
    } 
    
    // Bold text - we'll handle the ** markers properly
    else if (line.includes('**')) {
      // Replace ** with span for bold text
      const parts = line.split('**');
      
      if (parts.length > 1) {
        renderedContent.push(
          <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
            {parts.map((part, i) => {
              // Every even index (0, 2, 4...) is regular text
              // Every odd index (1, 3, 5...) is bold text
              return i % 2 === 0 ? 
                <React.Fragment key={i}>{part}</React.Fragment> : 
                <strong key={i} className="text-blue-700 dark:text-blue-400">{part}</strong>;
            })}
          </p>
        );
      } else {
        renderedContent.push(<p key={i} className="mb-4 text-slate-700 dark:text-slate-300">{line}</p>);
      }
    }
    
    // Blockquotes
    else if (line.startsWith('> ')) {
      renderedContent.push(<blockquote key={i} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">{line.substring(2)}</blockquote>);
    }
    
    // Tables
    else if (line.startsWith('| ')) {
      // This is a table separator row, skip rendering but don't return null
      if (line.includes('---')) {
        renderedContent.push(<div key={i} className="hidden"></div>);
        continue;
      }
      
      const cells = line.split('|').filter(cell => cell.trim() !== '');
      
      // Detect if this is a header row (typically the first row in a table)
      const isHeaderRow = i < allLines.length - 1 && 
                         allLines[i + 1]?.includes('---') &&
                         allLines[i + 1]?.startsWith('|');
      
      renderedContent.push(
        <div key={i} className={`flex w-full ${isHeaderRow ? 'bg-blue-100 dark:bg-slate-700 font-medium rounded-t-lg' : 'bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80'} ${i === allLines.findIndex(l => l.startsWith('| ')) ? 'rounded-t-lg' : ''}`}>
          {cells.map((cell, cellIndex) => (
            <div 
              key={cellIndex} 
              className={`flex-1 px-3 py-2 ${cellIndex === 0 ? 'border-l' : ''} border-r border-t border-b border-blue-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 ${isHeaderRow ? 'font-semibold text-indigo-900 dark:text-indigo-300' : ''}`}
            >
              {cell.trim()}
            </div>
          ))}
        </div>
      );
    }
    
    // Horizontal rule
    else if (line === '---') {
      renderedContent.push(<hr key={i} className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />);
    }
    
    // Empty line
    else if (line.trim() === '') {
      renderedContent.push(<div key={i} className="h-4"></div>);
    }
    
    // Regular code blocks (non-SQL)
    else if (line.startsWith('```')) {
      // Skip the opening and closing code block markers
      renderedContent.push(<div key={i} className="my-4"></div>);
    }
    
    // Skip language indicators in code blocks
    else if (['javascript', 'typescript', 'json', 'bash', 'python', 'css', 'html'].some(lang => line.trim() === lang)) {
      continue;
    }
    
    // Handle code content - detect if this line is within a code block
    else if (isWithinCodeBlock(allLines, i)) {
      renderedContent.push(
        <div key={i} className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-1.5 rounded-none first:rounded-t last:rounded-b text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-300 dark:border-indigo-700 whitespace-pre-wrap">
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
      
      // Handle links
      formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');
      
      if (formattedText.includes('<')) {
        renderedContent.push(
          <p 
            key={i} 
            className="mb-4 text-slate-700 dark:text-slate-300" 
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      } else {
        renderedContent.push(<p key={i} className="mb-4 text-slate-700 dark:text-slate-300">{formattedText}</p>);
      }
    }
  }

  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {renderedContent}
    </div>
  );
};

export default MarkdownRenderer;
