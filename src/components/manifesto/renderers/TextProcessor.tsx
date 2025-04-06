
import React from 'react';
import { Link } from 'react-router-dom';
import { manifestoChapters } from '@/data/manifestoChapters';

interface TextProcessorProps {
  text: string;
}

const TextProcessor: React.FC<TextProcessorProps> = ({ text }) => {
  // Handle "Next: Chapter X" pattern at the end of chapters
  if (text.startsWith("Next:") || text.startsWith("**Next:")) {
    // Extract the chapter number from the text using a regex
    const chapterMatch = text.match(/Next:? (\d+)\./i) || 
                         text.match(/\*\*Next:\*\* (\d+)\./i) ||
                         text.match(/Next: (\d+)\./i);
    
    if (chapterMatch && chapterMatch[1]) {
      const nextChapterNum = parseInt(chapterMatch[1], 10);
      
      // Find the next chapter in our chapters array
      const nextChapter = manifestoChapters.find(chapter => chapter.number === nextChapterNum);
      
      if (nextChapter) {
        return (
          <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-colors">
            <Link to="/manifesto" onClick={() => window.dispatchEvent(new CustomEvent('selectChapter', { detail: nextChapterNum }))}>
              {text.replace(/\*\*/g, '')}
            </Link>
          </span>
        );
      }
    }
  }

  // Handle bold text with ** markers
  if (text.includes('**')) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  }

  // Return regular text
  return <span>{text}</span>;
};

export default TextProcessor;
