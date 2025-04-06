
import React, { ReactNode } from 'react';
import {
  isWithinCodeBlock,
  isSqlCodeBlock,
  extractCodeBlock,
  isStandaloneQuery,
  extractSqlQueries,
} from './markdownUtils';
import SqlCodeBlock from '../renderers/SqlCodeBlock';
import CodeBlock from '../renderers/CodeBlock';
import TableRow from '../renderers/TableRow';
import HeadingRenderer from '../renderers/HeadingRenderer';
import ListItemRenderer from '../renderers/ListItemRenderer';
import BlockquoteRenderer from '../renderers/BlockquoteRenderer';
import ParagraphRenderer from '../renderers/ParagraphRenderer';
import HorizontalRuleRenderer from '../renderers/HorizontalRuleRenderer';
import TableContainerRenderer from '../renderers/TableContainerRenderer';

export const parseMarkdownContent = (content: string): ReactNode[] => {
  const allLines = content.split('\n');
  const renderedLines: ReactNode[] = [];
  
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
        <HeadingRenderer level={1} text={line.substring(2)} index={i} />
      );
    } else if (line.startsWith('## ')) {
      renderedLines.push(
        <HeadingRenderer level={2} text={line.substring(3)} index={i} />
      );
    } else if (line.startsWith('### ')) {
      renderedLines.push(
        <HeadingRenderer level={3} text={line.substring(4)} index={i} />
      );
    } else if (line.startsWith('#### ')) {
      renderedLines.push(
        <HeadingRenderer level={4} text={line.substring(5)} index={i} />
      );
    }
    
    // Lists
    else if (line.startsWith('- ')) {
      renderedLines.push(
        <ListItemRenderer text={line.substring(2)} index={i} />
      );
    } 
    
    // Bold text or regular text with ** formatting
    else if (line.includes('**')) {
      renderedLines.push(
        <ParagraphRenderer text={line} index={i} />
      );
    }
    
    // Blockquotes
    else if (line.startsWith('> ')) {
      renderedLines.push(
        <BlockquoteRenderer text={line.substring(2)} index={i} />
      );
    }
    
    // Tables
    else if (line.startsWith('| ')) {
      // This is a table separator row, skip rendering but don't return null
      if (line.includes('---')) {
        renderedLines.push(<div key={i} className="hidden"></div>);
        continue;
      }
      
      const cells = line.split('|').filter(cell => cell.trim() !== '');
      
      // Detect if this is a header row (typically the first row in a table)
      const isHeaderRow = i < allLines.length - 1 && 
                        allLines[i + 1]?.includes('---') &&
                        allLines[i + 1]?.startsWith('|');
      
      const isFirstRow = i === allLines.findIndex(l => l.startsWith('| '));
      
      // Wrap table rows in a scrollable container for mobile
      if (isFirstRow) {
        renderedLines.push(
          <TableContainerRenderer index={i}>
            <TableRow 
              key={i} 
              cells={cells} 
              isHeaderRow={isHeaderRow} 
              isFirstRow={isFirstRow}
              rowIndex={i}
            />
          </TableContainerRenderer>
        );
      } else {
        // Check if the previous element is already a scrollable container
        const lastElement = renderedLines[renderedLines.length - 1];
        
        if (lastElement && React.isValidElement(lastElement) && 
            lastElement.props.className && 
            lastElement.props.className.includes('overflow-x-auto')) {
          // Add this row to the existing scrollable container
          const updatedContainer = React.cloneElement(
            lastElement,
            { key: `table-container-${i-1}` },
            [
              ...(Array.isArray(lastElement.props.children) 
                ? lastElement.props.children 
                : [lastElement.props.children]),
              <TableRow 
                key={i} 
                cells={cells} 
                isHeaderRow={isHeaderRow} 
                isFirstRow={isFirstRow}
                rowIndex={i}
              />
            ]
          );
          
          renderedLines[renderedLines.length - 1] = updatedContainer;
        } else {
          // Create a new scrollable container
          renderedLines.push(
            <TableContainerRenderer index={i}>
              <TableRow 
                key={i} 
                cells={cells} 
                isHeaderRow={isHeaderRow} 
                isFirstRow={isFirstRow}
                rowIndex={i}
              />
            </TableContainerRenderer>
          );
        }
      }
    }
    
    // Horizontal rule
    else if (line === '---') {
      renderedLines.push(<HorizontalRuleRenderer index={i} />);
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
        <ParagraphRenderer text={line} index={i} />
      );
    }
  }
  
  return renderedLines;
};
