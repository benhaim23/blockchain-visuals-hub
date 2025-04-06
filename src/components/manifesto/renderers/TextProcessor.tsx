
import React from 'react';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Process bold text (wrapped in **)
  const processBoldText = (textContent: string) => {
    const parts = textContent.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Extract the text without the ** markers
        const boldText = part.substring(2, part.length - 2);
        return <strong key={i}>{boldText}</strong>;
      }
      return part;
    });
  };

  // Process backticks for inline code
  const processCode = (textContent: React.ReactNode[]) => {
    return textContent.map((part, i) => {
      if (typeof part === 'string') {
        const codeParts = part.split(/(`.*?`)/g);
        return codeParts.map((codePart, j) => {
          if (codePart.startsWith('`') && codePart.endsWith('`')) {
            // Extract the text without the ` markers
            const codeText = codePart.substring(1, codePart.length - 1);
            return <code key={`${i}-${j}`} className="bg-slate-100 dark:bg-slate-800 px-1 rounded font-mono text-sm">{codeText}</code>;
          }
          return codePart;
        });
      }
      return part;
    });
  };

  // Process links [text](url)
  const processLinks = (textContent: React.ReactNode[]) => {
    const result: React.ReactNode[] = [];
    
    textContent.forEach((part, i) => {
      if (typeof part === 'string') {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let lastIndex = 0;
        let match;
        const segments: React.ReactNode[] = [];
        
        while ((match = linkRegex.exec(part)) !== null) {
          // Add text before the link
          if (match.index > lastIndex) {
            segments.push(part.substring(lastIndex, match.index));
          }
          
          // Add the link
          const [fullMatch, text, url] = match;
          segments.push(
            <a 
              key={`link-${i}-${segments.length}`}
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
            >
              {text}
            </a>
          );
          
          lastIndex = match.index + fullMatch.length;
        }
        
        // Add remaining text
        if (lastIndex < part.length) {
          segments.push(part.substring(lastIndex));
        }
        
        result.push(...segments);
      } else {
        result.push(part);
      }
    });
    
    return result;
  };

  const processedBold = processBoldText(text);
  const processedCode = processCode(processedBold);
  const processedLinks = processLinks(processedCode.flat());

  return <>{processedLinks}</>;
};

export default TextProcessor;
