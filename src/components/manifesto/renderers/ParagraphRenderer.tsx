
import React from 'react';
import TextProcessor from './TextProcessor';

interface ParagraphRendererProps {
  text: string;
  index: number;
}

const ParagraphRenderer: React.FC<ParagraphRendererProps> = ({ text, index }) => {
  if (text.trim() === '') {
    return <div key={index} className="h-4"></div>;
  }
  
  return (
    <p key={index} className="mb-4 text-slate-700 dark:text-slate-300 px-1">
      <TextProcessor text={text} />
    </p>
  );
};

export default ParagraphRenderer;
