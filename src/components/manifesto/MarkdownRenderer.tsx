
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import CodeBlock from './renderers/CodeBlock';
import TableRow from './renderers/TableRow';
import LineRenderer from './renderers/LineRenderer';
import { 
  isStandaloneQuery,
  extractCodeBlock,
  isSqlCodeBlock,
  extractSqlQueries
} from './utils/markdownUtils';

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
      // Extract and render the code block
      if (isSqlCodeBlock(allLines, i)) {
        // Extract the complete code block
        const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
        
        renderedContent.push(
          <div key={`code-${i}`}>
            <SqlCodeBlock content={codeContent} blockIndex={renderedContent.length} />
          </div>
        );
        
        // Skip to the end of the code block
        i = endIndex;
        continue;
      }
      
      // Handle regular code blocks (non-SQL)
      const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
      
      // Determine the language from the opening line
      let language = "sql"; // Default
      const langMatch = line.trim().match(/^```(\w+)/);
      if (langMatch && langMatch[1]) {
        language = langMatch[1];
      }
      
      renderedContent.push(
        <CodeBlock key={`code-${i}`} content={codeContent} language={language} />
      );
      
      // Skip to the end of the code block
      i = endIndex;
      continue;
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
      
      const isFirstRow = i === allLines.findIndex(l => l.startsWith('| '));
      
      renderedContent.push(
        <TableRow 
          key={i} 
          cells={cells} 
          isHeaderRow={isHeaderRow} 
          isFirstRow={isFirstRow}
          rowIndex={i}
        />
      );
    }
    
    // Check for standalone SQL queries and render them as SQL blocks
    else if (isStandaloneQuery(line) && line.includes(' ')) {
      // Collect all following lines that look like they're part of the same query
      const { content: queryContent, endIndex } = extractSqlQueries(allLines, i);
      
      renderedContent.push(
        <div key={`sql-query-${i}`}>
          <SqlCodeBlock content={queryContent} blockIndex={renderedContent.length} />
        </div>
      );
      
      // Skip to after the query
      i = endIndex;
      continue;
    }
    
    // For all other line types, use the LineRenderer
    else {
      renderedContent.push(
        <LineRenderer 
          key={i} 
          line={line} 
          index={i} 
          allLines={allLines} 
        />
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
