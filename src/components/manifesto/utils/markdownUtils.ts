// Utility functions for markdown processing

// Function to detect if a line is within a code block
export const isWithinCodeBlock = (lines: string[], index: number): boolean => {
  // Find the closest opening ``` before this line
  let openingIndex = -1;
  for (let i = index; i >= 0; i--) {
    if (lines[i].startsWith('```')) {
      openingIndex = i;
      break;
    }
  }
  
  // If no opening found, this isn't in a code block
  if (openingIndex === -1) return false;
  
  // Find the closest closing ``` after the opening but before or at the current index
  // If the current line is a closing ```, it's not considered part of the code block
  if (lines[index].trim() === '```') return false;
  
  // Find the closest closing ``` after the opening
  let closingIndex = -1;
  for (let i = openingIndex + 1; i < lines.length; i++) {
    if (i !== openingIndex && lines[i].trim() === '```') {
      closingIndex = i;
      break;
    }
  }
  
  // If no closing found after opening, and we're after opening, we're in a code block
  if (closingIndex === -1) return index > openingIndex;
  
  // We're in a code block if we're between opening and closing
  return index > openingIndex && index < closingIndex;
};

// Check if a code block is SQL
export const isSqlCodeBlock = (lines: string[], startIndex: number): boolean => {
  // Check if this starts a code block
  if (!lines[startIndex].trim().startsWith('```')) return false;
  
  // Extract language
  const langLine = lines[startIndex].trim().substring(3).toLowerCase();
  return langLine === 'sql' || langLine === 'sql\n';
};

// Extract code block content
export const extractCodeBlock = (lines: string[], startIndex: number): { content: string, endIndex: number } => {
  const codeLines = [];
  let i = startIndex + 1;  // Skip opening ```
  
  // Skip language indicator line if present
  if (['sql', 'javascript', 'typescript', 'json', 'bash', 'python', 'css', 'html'].some(
    lang => lines[i]?.trim() === lang)) {
    i++;
  }
  
  // Collect all lines until closing ```
  while (i < lines.length && !lines[i].trim().startsWith('```')) {
    codeLines.push(lines[i]);
    i++;
  }
  
  return {
    content: codeLines.join('\n'),
    endIndex: i  // Return the index of the closing ```
  };
};

// New function to extract SQL multi-line queries
export const extractSqlQueries = (allLines: string[], startIndex: number): { content: string, endIndex: number } => {
  const queryLines = [allLines[startIndex]];
  let i = startIndex + 1;
  
  // Continue collecting lines that look like part of the same SQL query
  while (i < allLines.length && 
         allLines[i].trim() !== '' && 
         !allLines[i].startsWith('#') && 
         !allLines[i].startsWith('-') && 
         !allLines[i].startsWith('>') && 
         !allLines[i].startsWith('|') && 
         !allLines[i].startsWith('```')) {
    queryLines.push(allLines[i]);
    i++;
  }
  
  return {
    content: queryLines.join('\n'),
    endIndex: i - 1  // Return the last index that was part of the query
  };
};

// Function to remove surrounding asterisks from headers
export const cleanHeaderText = (headerText: string): string => {
  // Remove surrounding ** if present
  if (headerText.startsWith('**') && headerText.endsWith('**')) {
    return headerText.substring(2, headerText.length - 2);
  }
  return headerText;
};

// Check if a text block appears to be a standalone SQL query
export const isStandaloneQuery = (text: string): boolean => {
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
