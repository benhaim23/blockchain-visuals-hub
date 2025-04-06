
import React from 'react';
import TextProcessor from './TextProcessor';

interface BlockquoteRendererProps {
  line: string;
}

const BlockquoteRenderer: React.FC<BlockquoteRendererProps> = ({ line }) => {
  return (
    <blockquote className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
      <TextProcessor text={line.substring(2)} />
    </blockquote>
  );
};

export default BlockquoteRenderer;
