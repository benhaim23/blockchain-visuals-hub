
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  const isMobile = useIsMobile();
  
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
  
  // Process bold text after handling links
  const processBoldText = (textNode: string | React.ReactNode): React.ReactNode => {
    if (typeof textNode !== 'string') {
      return textNode;
    }
    
    const segments = textNode.split(/(\*\*[^*]+\*\*)/g);
    
    return segments.map((segment, idx) => {
      // Check if this segment is bold (surrounded by **)
      if (segment.startsWith('**') && segment.endsWith('**')) {
        // Remove the ** and render as bold
        const cleanText = segment.substring(2, segment.length - 2);
        return <strong key={idx} className="text-blue-700 dark:text-blue-400">{cleanText}</strong>;
      }
      // Regular text
      return <React.Fragment key={idx}>{segment}</React.Fragment>;
    });
  };
  
  // Process links first, then handle bold text within the result
  const linkProcessed = processLinks(processedText);
  
  // Apply a wrapper for mobile if needed
  const content = Array.isArray(linkProcessed)
    ? linkProcessed.map((part, index) => 
        typeof part === 'string' 
          ? <React.Fragment key={index}>{processBoldText(part)}</React.Fragment>
          : part
      )
    : processBoldText(linkProcessed);
    
  return <>{content}</>;
};

export default TextProcessor;
