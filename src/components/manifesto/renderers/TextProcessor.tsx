
import React, { ReactNode } from 'react';

interface TextProcessorProps {
  text: string;
}

// This component handles various markdown inline formatting
const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  const processLinks = (inputText: string): (string | JSX.Element)[] => {
    // Process markdown links: [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(inputText)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        const textBefore = inputText.slice(lastIndex, match.index);
        parts.push(textBefore);
      }
      
      // Add the link component
      const [_, label, url] = match;
      parts.push(
        <a 
          key={`link-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
        >
          {label}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add any remaining text
    if (lastIndex < inputText.length) {
      parts.push(inputText.slice(lastIndex));
    }
    
    return parts;
  };
  
  const processBoldText = (elements: (string | JSX.Element)[]): (string | JSX.Element)[] => {
    // Process bold text: **text**
    return elements.map((element, index) => {
      if (typeof element !== 'string') {
        return element;
      }
      
      const boldRegex = /\*\*([^*]+)\*\*/g;
      const boldParts: (string | JSX.Element)[] = [];
      
      let lastBoldIndex = 0;
      let boldMatch;
      let hasBold = false;
      
      while ((boldMatch = boldRegex.exec(element)) !== null) {
        hasBold = true;
        
        // Add text before the bold
        if (boldMatch.index > lastBoldIndex) {
          const textBefore = element.slice(lastBoldIndex, boldMatch.index);
          boldParts.push(textBefore);
        }
        
        // Add the bold text
        const boldText = boldMatch[1];
        boldParts.push(
          <strong key={`bold-${index}-${boldMatch.index}`} className="font-bold">
            {boldText}
          </strong>
        );
        
        lastBoldIndex = boldMatch.index + boldMatch[0].length;
      }
      
      // Add any remaining text
      if (lastBoldIndex < element.length) {
        boldParts.push(element.slice(lastBoldIndex));
      }
      
      return hasBold ? boldParts : element;
    }).flat();
  };
  
  const processItalicText = (elements: (string | JSX.Element)[]): (string | JSX.Element)[] => {
    // Process italic text: *text* (but not if it's already in bold **)
    return elements.map((element, index) => {
      if (typeof element !== 'string') {
        return element;
      }
      
      const italicRegex = /(?<!\*)\*([^*]+)\*(?!\*)/g;
      const italicParts: (string | JSX.Element)[] = [];
      
      let lastItalicIndex = 0;
      let italicMatch;
      let hasItalic = false;
      
      while ((italicMatch = italicRegex.exec(element)) !== null) {
        hasItalic = true;
        
        // Add text before the italic
        if (italicMatch.index > lastItalicIndex) {
          const textBefore = element.slice(lastItalicIndex, italicMatch.index);
          italicParts.push(textBefore);
        }
        
        // Add the italic text
        const italicText = italicMatch[1];
        italicParts.push(
          <em key={`italic-${index}-${italicMatch.index}`} className="italic">
            {italicText}
          </em>
        );
        
        lastItalicIndex = italicMatch.index + italicMatch[0].length;
      }
      
      // Add any remaining text
      if (lastItalicIndex < element.length) {
        italicParts.push(element.slice(lastItalicIndex));
      }
      
      return hasItalic ? italicParts : element;
    }).flat();
  };
  
  const processCodeText = (elements: (string | JSX.Element)[]): (string | JSX.Element)[] => {
    // Process inline code: `code`
    return elements.map((element, index) => {
      if (typeof element !== 'string') {
        return element;
      }
      
      const codeRegex = /`([^`]+)`/g;
      const codeParts: (string | JSX.Element)[] = [];
      
      let lastCodeIndex = 0;
      let codeMatch;
      let hasCode = false;
      
      while ((codeMatch = codeRegex.exec(element)) !== null) {
        hasCode = true;
        
        // Add text before the code
        if (codeMatch.index > lastCodeIndex) {
          const textBefore = element.slice(lastCodeIndex, codeMatch.index);
          codeParts.push(textBefore);
        }
        
        // Add the code text
        const codeText = codeMatch[1];
        codeParts.push(
          <code key={`code-${index}-${codeMatch.index}`} className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm font-mono">
            {codeText}
          </code>
        );
        
        lastCodeIndex = codeMatch.index + codeMatch[0].length;
      }
      
      // Add any remaining text
      if (lastCodeIndex < element.length) {
        codeParts.push(element.slice(lastCodeIndex));
      }
      
      return hasCode ? codeParts : element;
    }).flat();
  };
  
  // Process text in sequence, with different formatting types
  const processedText = processCodeText(processItalicText(processBoldText(processLinks(text))));
  
  // Return the processed elements, flattening any nested arrays
  return (
    <>{processedText}</>
  );
};

export default React.memo(TextProcessor);
