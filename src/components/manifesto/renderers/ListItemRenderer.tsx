
import React from 'react';
import TextProcessor from './TextProcessor';

interface ListItemRendererProps {
  line: string;
}

const ListItemRenderer: React.FC<ListItemRendererProps> = ({ line }) => {
  return (
    <li className="ml-6 mb-1 text-slate-700 dark:text-slate-300">
      <TextProcessor text={line.substring(2)} />
    </li>
  );
};

export default ListItemRenderer;
