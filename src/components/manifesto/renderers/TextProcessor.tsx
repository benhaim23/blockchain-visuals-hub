
import React from 'react';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Remove the "Next: XX. Chapter Title" line if it's the last line of the content
  // This is now handled by the ChapterReader component's CTA button
  const processNextChapterText = (input: string) => {
    return input.replace(/\n?\*\*Next:.*?\*\*\s*$/, '');
  };

  // Process the text to remove redundant next chapter text first
  const processedText = processNextChapterText(text);
  
  // First handle Markdown-style links: [text](url)
  const processLinks = (input: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(input)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(input.substring(lastIndex, match.index));
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
    if (lastIndex < input.length) {
      parts.push(input.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : input;
  };
  
  // Clean all standalone ** characters and properly format bold text
  const processBoldText = (textNode: string | React.ReactNode): React.ReactNode => {
    if (typeof textNode !== 'string') {
      return textNode;
    }
    
    // First, remove any standalone ** that aren't part of proper bold formatting
    let cleanedText = textNode;
    
    // Replace any remaining standalone ** that aren't properly paired
    cleanedText = cleanedText.replace(/\*\*(?!\s)(?![^*]*\*\*)/g, ''); // Leading **
    cleanedText = cleanedText.replace(/(?<!\*\*[^*]*)\*\*/g, '');     // Trailing **
    
    // Now process properly paired ** for bold text
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const segments = cleanedText.split(boldRegex);
    
    return segments.map((segment, idx) => {
      // For odd indices, these are the captures from the regex (the content between **)
      if (idx % 2 === 1) {
        return <strong key={idx} className="text-blue-700 dark:text-blue-400">{segment}</strong>;
      }
      // For even indices, these are the regular text segments
      return <React.Fragment key={idx}>{segment}</React.Fragment>;
    });
  };
  
  // Process links first, then handle bold text within the result
  const linkProcessed = processLinks(processedText);
  
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
};

export default TextProcessor;
