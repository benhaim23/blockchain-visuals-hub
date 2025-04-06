
import React from 'react';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Split text by ** markers for bold text and ` markers for inline code
  const segments = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  
  return (
    <>
      {segments.map((segment, idx) => {
        // Check if this segment is bold (surrounded by **)
        if (segment.startsWith('**') && segment.endsWith('**')) {
          // Remove the ** and render as bold
          const cleanText = segment.substring(2, segment.length - 2);
          return <strong key={idx} className="text-blue-700 dark:text-blue-400">{cleanText}</strong>;
        }
        
        // Check if this segment is inline code (surrounded by `)
        if (segment.startsWith('`') && segment.endsWith('`')) {
          // Remove the ` and render as code
          const cleanText = segment.substring(1, segment.length - 1);
          return <code key={idx} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-purple-600 dark:text-purple-400 font-mono text-sm">{cleanText}</code>;
        }
        
        // Regular text
        return <React.Fragment key={idx}>{segment}</React.Fragment>;
      })}
    </>
  );
};

export default TextProcessor;
