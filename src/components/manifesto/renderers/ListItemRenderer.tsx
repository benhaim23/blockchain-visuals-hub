
import React from 'react';
import TextProcessor from './TextProcessor';

interface ListItemRendererProps {
  text: string;
  index: number;
}

const ListItemRenderer: React.FC<ListItemRendererProps> = ({ text, index }) => {
  return (
    <li key={index} className="ml-6 mb-1 text-slate-700 dark:text-slate-300 px-1">
      <TextProcessor text={text} />
    </li>
  );
};

export default ListItemRenderer;
