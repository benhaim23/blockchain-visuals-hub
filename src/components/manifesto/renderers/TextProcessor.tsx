
import React, { useMemo } from 'react';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Process the text to remove redundant next chapter text first
  const processedText = useMemo(() => {
    // Remove the "Next: XX. Chapter Title" line if it's the last line of the content
    return text.replace(/\n?\*\*Next:.*?\*\*\s*$/, '');
  }, [text]);
  
  // Process links with memoization
  const linkProcessed = useMemo(() => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(processedText)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(processedText.substring(lastIndex, match.index));
      }
      
      // Add the link
      const [fullMatch, linkText, linkUrl] = match;
      parts.push(
        <a 
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-all duration-300"
        >
          {linkText}
        </a>
      );
      
      lastIndex = match.index + fullMatch.length;
    }
    
    // Add remaining text
    if (lastIndex < processedText.length) {
      parts.push(processedText.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : processedText;
  }, [processedText]);
  
  // Process bold text with memoization
  const processBoldText = useMemo(() => {
    return (textNode: string | React.ReactNode): React.ReactNode => {
      if (typeof textNode !== 'string') {
        return textNode;
      }
      
      // Improved regex to handle bold text with proper boundary checking
      const boldRegex = /\*\*([^*]+?)\*\*/g;
      
      const segments = textNode.split(boldRegex);
      
      return segments.map((segment, idx) => {
        // Even indices are normal text, odd indices are the contents of bold tags
        if (idx % 2 === 1) {
          // This is bold text (was between ** **)
          return <strong key={idx} className="text-blue-700 dark:text-blue-400">{segment.trim()}</strong>;
        }
        
        // Regular text - clean up any standalone asterisks
        const cleanedText = segment.replace(/\s\*\s/g, ' ');
        
        return <React.Fragment key={idx}>{cleanedText}</React.Fragment>;
      });
    };
  }, []);
  
  // Final render with memoization
  return useMemo(() => {
    if (Array.isArray(linkProcessed)) {
      return (
        <>
          {linkProcessed.map((part, index) => 
            typeof part === 'string' 
              ? <React.Fragment key={index}>{processBoldText(part)}</React.Fragment>
              : part
          )}
        </>
      );
    }
    
    // If no links were found, just process bold text
    return <>{processBoldText(processedText)}</>;
  }, [linkProcessed, processBoldText, processedText]);
};

export default React.memo(TextProcessor);
