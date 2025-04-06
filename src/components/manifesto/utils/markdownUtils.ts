
// Utility functions for markdown processing

// Function to detect if a line is within a code block
export const isWithinCodeBlock = (lines: string[], currentIndex: number): boolean => {
  // Find the last code fence before this line
  const previousFences = lines.slice(0, currentIndex).filter(l => l.trim().startsWith('```'));
  // If we have an odd number of code fences before this line, we're in a code block
  return previousFences.length % 2 !== 0;
};

// Check if a code block is SQL
export const isSqlCodeBlock = (lines: string[], startIndex: number): boolean => {
  if (startIndex + 1 < lines.length) {
    const langLine = lines[startIndex + 1].trim().toLowerCase();
    return langLine === 'sql';
  }
  return false;
};

// Extract code block content
export const extractCodeBlock = (lines: string[], startIndex: number): { content: string, endIndex: number } => {
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
