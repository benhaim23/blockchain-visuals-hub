
import React from 'react';
import { cleanHeaderText } from '../utils/markdownUtils';
import TextProcessor from './TextProcessor';

interface HeadingRendererProps {
  level: 1 | 2 | 3 | 4;
  text: string;
  index: number;
}

const HeadingRenderer: React.FC<HeadingRendererProps> = ({ level, text, index }) => {
  const cleanedText = cleanHeaderText(text);
  
  switch (level) {
    case 1:
      return (
        <h1 key={index} className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300 px-1">
          <TextProcessor text={cleanedText} />
        </h1>
      );
    case 2:
      return (
        <h2 key={index} className="text-xl md:text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400 px-1">
          <TextProcessor text={cleanedText} />
        </h2>
      );
    case 3:
      return (
        <h3 key={index} className="text-lg md:text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400 px-1">
          <TextProcessor text={cleanedText} />
        </h3>
      );
    case 4:
      return (
        <h4 key={index} className="text-base md:text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400 px-1">
          <TextProcessor text={cleanedText} />
        </h4>
      );
    default:
      return null;
  }
};

export default HeadingRenderer;
