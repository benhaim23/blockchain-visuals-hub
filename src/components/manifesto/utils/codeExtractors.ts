
import React from 'react';
import { extractCodeBlock, isSqlCodeBlock, extractSqlQueries } from './markdownUtils';
import SqlCodeBlock from '../renderers/SqlCodeBlock';
import CodeBlock from '../renderers/CodeBlock';

// Helper function to extract and render code blocks
export const extractAndRenderCodeBlock = (
  allLines: string[], 
  i: number
): { element: JSX.Element, endIndex: number } | null => {
  // Check if this is an SQL code block
  if (isSqlCodeBlock(allLines, i)) {
    // Extract the complete code block
    const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
    
    return {
      element: (
        <div key={`code-${i}`}>
          <SqlCodeBlock content={codeContent} blockIndex={i} />
        </div>
      ),
      endIndex
    };
  }
  
  // Handle regular code blocks (non-SQL)
  const { content: codeContent, endIndex } = extractCodeBlock(allLines, i);
  
  // Determine the language from the opening line
  let language = "sql"; // Default
  const langMatch = allLines[i].trim().match(/^```(\w+)/);
  if (langMatch && langMatch[1]) {
    language = langMatch[1];
  }
  
  return {
    element: <CodeBlock key={`code-${i}`} content={codeContent} language={language} />,
    endIndex
  };
};

// Helper function to extract and render standalone SQL queries
export const extractAndRenderSqlQuery = (
  allLines: string[], 
  i: number
): { element: JSX.Element, endIndex: number } | null => {
  const { content: queryContent, endIndex } = extractSqlQueries(allLines, i);
  
  return {
    element: (
      <div key={`sql-query-${i}`}>
        <SqlCodeBlock content={queryContent} blockIndex={i} />
      </div>
    ),
    endIndex
  };
};
