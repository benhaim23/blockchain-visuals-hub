
import React, { useEffect, useState } from 'react';
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
  isStandaloneQuery 
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
      // Check if this is an SQL code block
      if (isSqlCodeBlock(allLines, i)) {
        // Extract the complete code block
        const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
        const blockIndex = renderedContent.length;
        
        renderedContent.push(
          <div key={`code-${i}`}>
            <SqlCodeBlock content={codeContent} blockIndex={blockIndex} />
          </div>
        );
        
        // Skip to the end of the code block
        i = endIndex;
        continue;
      }
    }
    
    // Headers
    if (line.startsWith('# ')) {
      renderedContent.push(
        <h1 key={i} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">
          {cleanHeaderText(line.substring(2))}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      renderedContent.push(
        <h2 key={i} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">
          {cleanHeaderText(line.substring(3))}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      renderedContent.push(
        <h3 key={i} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">
          {cleanHeaderText(line.substring(4))}
        </h3>
      );
    } else if (line.startsWith('#### ')) {
      renderedContent.push(
        <h4 key={i} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">
          {cleanHeaderText(line.substring(5))}
        </h4>
      );
    }
    
    // Lists
    else if (line.startsWith('- ')) {
      renderedContent.push(
        <li key={i} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">
          <TextProcessor text={line.substring(2)} />
        </li>
      );
    } 
    
    // Bold text or regular text with ** formatting
    else if (line.includes('**')) {
      renderedContent.push(
        <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
          <TextProcessor text={line} />
        </p>
      );
    }
    
    // Blockquotes
    else if (line.startsWith('> ')) {
      renderedContent.push(
        <blockquote key={i} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
          <TextProcessor text={line.substring(2)} />
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
      renderedContent.push(<CodeBlock key={i} content={line} />);
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
          <SqlCodeBlock content={queryContent} blockIndex={blockIndex} />
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
          <TextProcessor text={line} />
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
