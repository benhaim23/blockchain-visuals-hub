
import React from 'react';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Split text by ** markers for bold text
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  
  return (
    <>
      {segments.map((segment, idx) => {
        // Check if this segment is bold (surrounded by **)
        if (segment.startsWith('**') && segment.endsWith('**')) {
          // Remove the ** and render as bold
          const cleanText = segment.substring(2, segment.length - 2);
          return <strong key={idx} className="text-blue-700 dark:text-blue-400">{cleanText}</strong>;
        }
        // Regular text
        return <React.Fragment key={idx}>{segment}</React.Fragment>;
      })}
    </>
  );
};

export default TextProcessor;
