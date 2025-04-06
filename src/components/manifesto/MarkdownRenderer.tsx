
import React, { useEffect, useState, useMemo } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import TextProcessor from './renderers/TextProcessor';
import CodeBlock from './renderers/CodeBlock';
import TableRow from './renderers/TableRow';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow as ShadcnTableRow 
} from "@/components/ui/table";
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

  // Convert markdown content to HTML - Memoize this expensive operation
  const renderedContent = useMemo(() => {
    const allLines = animatedContent.split('\n');
    const renderedLines = [];
    
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
          const blockIndex = renderedLines.length;
          
          renderedLines.push(
            <div key={`code-${i}`}>
              <SqlCodeBlock content={codeContent} blockIndex={blockIndex} />
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
        
        renderedLines.push(
          <CodeBlock key={`code-${i}`} content={codeContent} language={language} />
        );
        
        // Skip to the end of the code block
        i = endIndex;
        continue;
      }
      
      // Headers
      if (line.startsWith('# ')) {
        renderedLines.push(
          <h1 key={i} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">
            {cleanHeaderText(line.substring(2))}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        renderedLines.push(
          <h2 key={i} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">
            {cleanHeaderText(line.substring(3))}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        renderedLines.push(
          <h3 key={i} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">
            {cleanHeaderText(line.substring(4))}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        renderedLines.push(
          <h4 key={i} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">
            {cleanHeaderText(line.substring(5))}
          </h4>
        );
      }
      
      // Lists
      else if (line.startsWith('- ')) {
        renderedLines.push(
          <li key={i} className="ml-6 mb-1 text-slate-700 dark:text-slate-300">
            <TextProcessor text={line.substring(2)} />
          </li>
        );
      } 
      
      // Bold text or regular text with ** formatting
      else if (line.includes('**')) {
        renderedLines.push(
          <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
            <TextProcessor text={line} />
          </p>
        );
      }
      
      // Blockquotes
      else if (line.startsWith('> ')) {
        renderedLines.push(
          <blockquote key={i} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
            <TextProcessor text={line.substring(2)} />
          </blockquote>
        );
      }
      
      // Tables
      else if (line.startsWith('| ')) {
        // Check if this is the start of a table
        const isTableStart = i === allLines.findIndex(l => l.startsWith('| '));
        
        // Skip table separator rows
        if (line.includes('---')) {
          renderedLines.push(<div key={i} className="hidden"></div>);
          continue;
        }
        
        // Collect all table rows until we hit a non-table line
        const tableRows = [];
        let currentLine = i;
        let headerRow = null;
        let separatorRowIndex = -1;
        
        // First, find the separator row (if any)
        for (let j = i; j < allLines.length; j++) {
          if (allLines[j].startsWith('| ') && allLines[j].includes('---')) {
            separatorRowIndex = j;
            break;
          }
        }
        
        // Collect all rows until we hit a non-table line
        while (currentLine < allLines.length && allLines[currentLine].startsWith('| ')) {
          const rowLine = allLines[currentLine];
          
          // Skip separator rows
          if (rowLine.includes('---')) {
            currentLine++;
            continue;
          }
          
          const cells = rowLine.split('|').filter(cell => cell.trim() !== '');
          
          // If this row is before the separator, it's a header row
          const isHeaderRow = separatorRowIndex > -1 && currentLine < separatorRowIndex;
          
          if (isHeaderRow) {
            headerRow = cells;
          } else {
            tableRows.push(cells);
          }
          
          currentLine++;
        }
        
        // Now, render the table with Shadcn UI components
        if (headerRow || tableRows.length > 0) {
          renderedLines.push(
            <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-lg border border-blue-200 dark:border-slate-700">
              <Table>
                {headerRow && (
                  <TableHeader>
                    <ShadcnTableRow className="bg-blue-100 dark:bg-slate-700">
                      {headerRow.map((cell, cellIndex) => (
                        <TableHead key={cellIndex} className="text-indigo-900 dark:text-indigo-300 font-medium">
                          <TextProcessor text={cell.trim()} />
                        </TableHead>
                      ))}
                    </ShadcnTableRow>
                  </TableHeader>
                )}
                <TableBody>
                  {tableRows.map((row, rowIndex) => (
                    <ShadcnTableRow key={rowIndex} className="hover:bg-blue-50 dark:hover:bg-slate-700/80">
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex} className="text-slate-700 dark:text-slate-300">
                          <TextProcessor text={cell.trim()} />
                        </TableCell>
                      ))}
                    </ShadcnTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          );
          
          // Skip to after the entire table
          i = currentLine - 1;
          continue;
        }
      }
      
      // Horizontal rule
      else if (line === '---') {
        renderedLines.push(<hr key={i} className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />);
      }
      
      // Empty line
      else if (line.trim() === '') {
        renderedLines.push(<div key={i} className="h-4"></div>);
      }
      
      // Check for standalone SQL queries and render them as SQL blocks
      else if (isStandaloneQuery(line) && line.includes(' ')) {
        // Collect all following lines that look like they're part of the same query
        const { content: queryContent, endIndex } = extractSqlQueries(allLines, i);
        const blockIndex = renderedLines.length;
        
        renderedLines.push(
          <div key={`sql-query-${i}`}>
            <SqlCodeBlock content={queryContent} blockIndex={blockIndex} />
          </div>
        );
        
        // Skip to after the query
        i = endIndex;
        continue;
      }
      
      // Regular paragraph
      else {
        // Process inline formatting 
        renderedLines.push(
          <p key={i} className="mb-4 text-slate-700 dark:text-slate-300">
            <TextProcessor text={line} />
          </p>
        );
      }
    }
    
    return renderedLines;
  }, [animatedContent]);

  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {renderedContent}
    </div>
  );
};

export default MarkdownRenderer;
