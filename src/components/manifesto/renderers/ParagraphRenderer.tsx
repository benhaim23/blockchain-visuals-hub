
import React from 'react';
import TextProcessor from './TextProcessor';

interface ParagraphRendererProps {
  line: string;
}

const ParagraphRenderer: React.FC<ParagraphRendererProps> = ({ line }) => {
  return (
    <p className="mb-4 text-slate-700 dark:text-slate-300">
      <TextProcessor text={line} />
    </p>
  );
};

export default ParagraphRenderer;
