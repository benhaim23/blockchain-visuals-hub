
import React, { useEffect, useState, useMemo } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import TextProcessor from './renderers/TextProcessor';
import CodeBlock from './renderers/CodeBlock';
import TableRow from './renderers/TableRow';
import { 
  isWithinCodeBlock, 
  isSqlCodeBlock, 
  extractCodeBlock, 
  cleanHeaderText,
  isStandaloneQuery,
  extractSqlQueries
} from './utils/markdownUtils';

interface MarkdownRendererProps {
  content: string;
}

// Renders a single line of markdown content
const MarkdownLine = React.memo(({ 
  line, 
  index, 
  allLines, 
  renderedLineCount 
}: { 
  line: string; 
  index: number; 
  allLines: string[]; 
  renderedLineCount: number;
}) => {
  // Skip horizontal rules (------) completely
  if (line.trim() === '------') {
    return null;
  }
  
  // Code blocks starting
  if (line.trim().startsWith('```')) {
    // Check if this is an SQL code block
    if (isSqlCodeBlock(allLines, index)) {
      // Extract the complete code block
      const { content: codeContent, endIndex } = extractCodeBlock(allLines, index);
      
      return (
        <div key={`code-${index}`}>
          <SqlCodeBlock content={codeContent} blockIndex={renderedLineCount} />
        </div>
      );
    }
    
    // Handle regular code blocks (non-SQL)
    const { content: codeContent, endIndex } = extractCodeBlock(allLines, index);
    
    // Determine the language from the opening line
    let language = "sql"; // Default
    const langMatch = line.trim().match(/^```(\w+)/);
    if (langMatch && langMatch[1]) {
      language = langMatch[1];
    }
    
    return (
      <CodeBlock key={`code-${index}`} content={codeContent} language={language} />
    );
  }
  
  // Headers
  if (line.startsWith('# ')) {
    return (
      <h1 key={index} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">
        {cleanHeaderText(line.substring(2))}
      </h1>
    );
  } else if (line.startsWith('## ')) {
    return (
      <h2 key={index} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">
        {cleanHeaderText(line.substring(3))}
      </h2>
    );
  } else if (line.startsWith('### ')) {
    return (
      <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">
        {cleanHeaderText(line.substring(4))}
      </h3>
    );
  } else if (line.startsWith('#### ')) {
    return (
      <h4 key={index} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">
        {cleanHeaderText(line.substring(5))}
      </h4>
    );
  }
  
  // Lists
  else if (line.startsWith('- ')) {
    return (
      <li key={index} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">
        <TextProcessor text={line.substring(2)} />
      </li>
    );
  } 
  
  // Bold text or regular text with ** formatting
  else if (line.includes('**')) {
    return (
      <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">
        <TextProcessor text={line} />
      </p>
    );
  }
  
  // Blockquotes
  else if (line.startsWith('> ')) {
    return (
      <blockquote key={index} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
        <TextProcessor text={line.substring(2)} />
      </blockquote>
    );
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
    
    const isFirstRow = index === allLines.findIndex(l => l.startsWith('| '));
    
    return (
      <TableRow 
        key={index} 
        cells={cells} 
        isHeaderRow={isHeaderRow} 
        isFirstRow={isFirstRow}
        rowIndex={index}
      />
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
  
  // Check for standalone SQL queries and render them as SQL blocks
  else if (isStandaloneQuery(line) && line.includes(' ')) {
    // Collect all following lines that look like they're part of the same query
    const { content: queryContent, endIndex } = extractSqlQueries(allLines, index);
    
    return (
      <div key={`sql-query-${index}`}>
        <SqlCodeBlock content={queryContent} blockIndex={renderedLineCount} />
      </div>
    );
  }
  
  // Regular paragraph
  else {
    // Process inline formatting 
    return (
      <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">
        <TextProcessor text={line} />
      </p>
    );
  }
  
  // If we somehow fell through (shouldn't happen), return null
  return null;
});

MarkdownLine.displayName = 'MarkdownLine';

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedContent = useAnimatedText(content, "\n", 2); // Speed up animation by processing 2 lines at once
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Reset visibility when content changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [content]);

  // Process 100 lines at a time for better performance
  const renderedContent = useMemo(() => {
    const allLines = animatedContent.split('\n');
    let renderedLineCount = 0;
    const skipIndices = new Set<number>();
    const renderedLines: React.ReactNode[] = [];
    
    for (let i = 0; i < allLines.length; i++) {
      if (skipIndices.has(i)) {
        continue;
      }
      
      const line = allLines[i];
      
      // Skip code blocks entirely - we'll render them separately
      if (line.trim().startsWith('```')) {
        const { endIndex } = extractCodeBlock(allLines, i);
        
        // Add a code block component
        renderedLines.push(
          <MarkdownLine 
            key={`line-${i}`}
            line={line} 
            index={i} 
            allLines={allLines} 
            renderedLineCount={renderedLineCount} 
          />
        );
        renderedLineCount++;
        
        // Skip the remaining lines in this code block
        for (let j = i + 1; j <= endIndex; j++) {
          skipIndices.add(j);
        }
        
        // Move the index to the end of the code block
        i = endIndex;
        continue;
      }
      
      // Skip SQL queries - render them as whole blocks
      if (isStandaloneQuery(line) && line.includes(' ')) {
        const { endIndex } = extractSqlQueries(allLines, i);
        
        // Add a SQL block component
        renderedLines.push(
          <MarkdownLine 
            key={`line-${i}`}
            line={line} 
            index={i} 
            allLines={allLines} 
            renderedLineCount={renderedLineCount}
          />
        );
        renderedLineCount++;
        
        // Skip the remaining lines in this SQL query
        for (let j = i + 1; j <= endIndex; j++) {
          skipIndices.add(j);
        }
        
        // Move the index to the end of the SQL query
        i = endIndex;
        continue;
      }
      
      // Render a regular line
      renderedLines.push(
        <MarkdownLine 
          key={`line-${i}`}
          line={line} 
          index={i} 
          allLines={allLines} 
          renderedLineCount={renderedLineCount}
        />
      );
      renderedLineCount++;
    }
    
    return renderedLines;
  }, [animatedContent]);

  return (
    <div 
      className={`prose dark:prose-invert max-w-none prose-slate 
                prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 
                prose-a:text-blue-600 dark:prose-a:text-blue-400 
                will-change-opacity transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {renderedContent}
    </div>
  );
};

export default React.memo(MarkdownRenderer);
