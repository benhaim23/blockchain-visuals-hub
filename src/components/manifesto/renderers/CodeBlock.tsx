
import React from 'react';

interface CodeBlockProps {
  content: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content }) => {
  return (
    <div className="font-mono text-sm bg-slate-100 dark:bg-slate-800 p-1.5 rounded-none first:rounded-t last:rounded-b text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-300 dark:border-indigo-700 whitespace-pre-wrap">
      {content}
    </div>
  );
};

export default CodeBlock;
