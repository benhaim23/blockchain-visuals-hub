
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    if (startIndex + 1 < lines.length) {
      const langLine = lines[startIndex + 1].trim().toLowerCase();
      return langLine === 'sql';
    }
    return false;
  };

  // Check if a text block appears to be a standalone SQL query
  const isStandaloneQuery = (text: string): boolean => {
    const trimmedText = text.trim().toUpperCase();
    // Check if the text starts with common SQL commands
    return trimmedText.startsWith('SELECT') || 
           trimmedText.startsWith('INSERT') || 
           trimmedText.startsWith('UPDATE') || 
           trimmedText.startsWith('DELETE') || 
           trimmedText.startsWith('CREATE') || 
           trimmedText.startsWith('ALTER') || 
           trimmedText.startsWith('DROP');
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

  // Function to remove surrounding asterisks from headers
  const cleanHeaderText = (headerText: string): string => {
    // Remove surrounding ** if present
    if (headerText.startsWith('**') && headerText.endsWith('**')) {
      return headerText.substring(2, headerText.length - 2);
    }
    return headerText;
  };

  // Function to process text and remove markdown formatting
  const processText = (text: string): JSX.Element => {
    // Split text by ** markers
    const segments = text.split(/(\*\*[^*]+\*\*)/g);
    
    return (
      <>
        {segments.map((segment, idx) => {
          // Check if this segment is bold (surrounded by **)
          if (segment.startsWith('**') && segment.endsWith('**')) {
            // Remove the ** and render as bold
            const cleanText = segment.substring(2, segment.length - 2);
            return <strong key={idx} className="text-blue-700 dark:text-blue-400">{cleanText}</strong>;
          }
          // Regular text
          return <React.Fragment key={idx}>{segment}</React.Fragment>;
        })}
      </>
    );
  };

  // Render SQL Code Block
  const renderSqlCodeBlock = (content: string, blockIndex: number) => {
    return (
      <div className="my-6 overflow-hidden rounded-lg bg-slate-900 text-white shadow-lg">
        {/* Code block header with language and copy button */}
        <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
          <div className="rounded-md bg-slate-700 px-2 py-1 text-sm font-medium text-slate-300">SQL</div>
          <Button
            onClick={() => copyToClipboard(content, blockIndex)}
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copiedIndex === blockIndex ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {/* Code content */}
        <pre className="p-4 text-sm overflow-x-auto">
          <code className="language-sql whitespace-pre-wrap">
            {content.split('\n').map((codeLine, idx) => (
              <div key={idx} className="leading-relaxed">
                {/* Apply syntax highlighting for SQL */}
                <span dangerouslySetInnerHTML={{ 
                  __html: codeLine
                    .replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|INNER JOIN|RIGHT JOIN|UNION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|CASE|WHEN|THEN|ELSE|END|COUNT|SUM|AVG|MIN|MAX|NULL|IS|DISTINCT)\b/gi, 
                      match => `<span class="text-blue-400">${match}</span>`)
                    .replace(/('[^']*')/g, 
                      match => `<span class="text-amber-400">${match}</span>`)
                    .replace(/\b(\d+(?:\.\d+)?)\b/g, 
                      match => `<span class="text-cyan-300">${match}</span>`)
                    .replace(/(-&gt;|=|&gt;|&lt;|\+|-|\*|\/|%)/g, 
                      match => `<span class="text-pink-400">${match}</span>`)
                }} />
              </div>
            ))}
          </code>
        </pre>
      </div>
    );
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
          <div key={`code-${i}`}>
            {renderSqlCodeBlock(codeContent, blockIndex)}
          </div>
        );
        
        // Skip to the end of the code block
        i = endIndex;
        continue;
      }
    }
    
    // Headers - applying the cleanHeaderText function to remove surrounding asterisks
    if (line.startsWith('# ')) {
      renderedContent.push(<h1 key={i} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">{cleanHeaderText(line.substring(2))}</h1>);
    } else if (line.startsWith('## ')) {
      renderedContent.push(<h2 key={i} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">{cleanHeaderText(line.substring(3))}</h2>);
    } else if (line.startsWith('### ')) {
      renderedContent.push(<h3 key={i} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">{cleanHeaderText(line.substring(4))}</h3>);
    } else if (line.startsWith('#### ')) {
      renderedContent.push(<h4 key={i} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">{cleanHeaderText(line.substring(5))}</h4>);
    }
    
    // Lists
    else if (line.startsWith('- ')) {
      renderedContent.push(
        <li key={i} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">
          {processText(line.substring(2))}
        </li>
      );
    } 
    
    // Bold text - using our new text processor
    else if (line.includes('**')) {
      renderedContent.push(
        <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
          {processText(line)}
        </p>
      );
    }
    
    // Blockquotes
    else if (line.startsWith('> ')) {
      renderedContent.push(
        <blockquote key={i} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
          {processText(line.substring(2))}
        </blockquote>
      );
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
              {processText(cell.trim())}
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
    
    // Check for standalone SQL queries and render them as SQL blocks
    else if (isStandaloneQuery(line) && line.includes(' ')) {
      // Collect all following lines that look like they're part of the same query
      let queryLines = [line];
      let j = i + 1;
      
      // Continue collecting lines until we hit a blank line or a new block
      while (j < allLines.length && 
             allLines[j].trim() !== '' && 
             !allLines[j].startsWith('#') && 
             !allLines[j].startsWith('-') && 
             !allLines[j].startsWith('>') && 
             !allLines[j].startsWith('|') && 
             !allLines[j].startsWith('```')) {
        queryLines.push(allLines[j]);
        j++;
      }
      
      // Create the SQL code block
      const queryContent = queryLines.join('\n');
      const blockIndex = renderedContent.length;
      
      renderedContent.push(
        <div key={`sql-query-${i}`}>
          {renderSqlCodeBlock(queryContent, blockIndex)}
        </div>
      );
      
      // Skip to after the query
      i = j - 1;
      continue;
    }
    
    // Regular paragraph
    else {
      // Process inline formatting 
      renderedContent.push(
        <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
          {processText(line)}
        </p>
      );
    }
  }

  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {renderedContent}
    </div>
  );
};

export default MarkdownRenderer;
