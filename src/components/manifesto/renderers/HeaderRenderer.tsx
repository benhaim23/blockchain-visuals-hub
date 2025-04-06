
import React from 'react';
import { cleanHeaderText } from '../utils/markdownUtils';

interface HeaderRendererProps {
  line: string;
  level: number;
}

const HeaderRenderer: React.FC<HeaderRendererProps> = ({ line, level }) => {
  const headerText = line.substring(level + 1); // +1 to account for the space after #
  const cleanedText = cleanHeaderText(headerText);
  
  switch (level) {
    case 1:
      return (
        <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">
          {cleanedText}
        </h1>
      );
    case 2:
      return (
        <h2 className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">
          {cleanedText}
        </h2>
      );
    case 3:
      return (
        <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">
          {cleanedText}
        </h3>
      );
    case 4:
      return (
        <h4 className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">
          {cleanedText}
        </h4>
      );
    default:
      return (
        <p className="font-bold">{cleanedText}</p>
      );
  }
};

export default HeaderRenderer;
