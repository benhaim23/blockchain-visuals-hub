
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

export interface SqlCodeBlockProps {
  code: string;
}

const SqlCodeBlock: React.FC<SqlCodeBlockProps> = ({ code }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="rounded-md overflow-hidden my-5">
      <div className="flex items-center bg-blue-600 dark:bg-blue-800 px-4 py-2 text-white text-sm font-medium">
        <span>SQL Query</span>
      </div>
      <SyntaxHighlighter
        language="sql"
        style={isDark ? vscDarkPlus : vs}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.375rem 0.375rem',
          fontSize: '0.9rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SqlCodeBlock;
