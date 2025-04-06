
import React from 'react';
import TextProcessor from './TextProcessor';

interface BlockquoteRendererProps {
  text: string;
  index: number;
}

const BlockquoteRenderer: React.FC<BlockquoteRendererProps> = ({ text, index }) => {
  return (
    <blockquote key={index} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3 my-5 text-slate-600 dark:text-slate-300 rounded-r mx-1">
      <TextProcessor text={text} />
    </blockquote>
  );
};

export default BlockquoteRenderer;
