
import React from 'react';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from './renderers/CodeBlock';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import TableRow from './renderers/TableRow';
import TextProcessor from './renderers/TextProcessor';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className="prose prose-indigo dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 text-indigo-800 dark:text-indigo-300 border-b pb-2 border-indigo-200 dark:border-indigo-800">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mb-4 mt-8 text-indigo-700 dark:text-indigo-400">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6 text-indigo-600 dark:text-indigo-500">
              {children}
            </h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-indigo-300 dark:border-indigo-700 pl-4 py-1 my-4 italic text-indigo-900 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-md">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const language = (className || '').replace('language-', '');
            
            if (language === 'sql') {
              return <SqlCodeBlock code={String(children).replace(/\n$/, '')} />;
            }
            
            if (className) {
              return (
                <CodeBlock language={language} code={String(children).replace(/\n$/, '')} />
              );
            }
            
            return (
              <code className="px-1.5 py-0.5 mx-0.5 rounded bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 text-sm font-mono">
                {children}
              </code>
            );
          },
          p: ({ children }) => (
            <TextProcessor>
              <p className="mb-4 text-gray-800 dark:text-gray-200 leading-relaxed">{children}</p>
            </TextProcessor>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-all duration-200"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-200">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1">{children}</li>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-50 dark:bg-gray-800">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
              {children}
            </tbody>
          ),
          tr: ({ children, isHeader }) => (
            <TableRow isHeader={!!isHeader}>
              {children}
            </TableRow>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">
              {children}
            </td>
          ),
          pre: ({ children }) => (
            <pre className="mb-4 rounded-lg overflow-hidden">{children}</pre>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-indigo-900 dark:text-indigo-300">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-indigo-800 dark:text-indigo-400">{children}</em>
          ),
          hr: () => (
            <hr className="my-8 border-indigo-200 dark:border-indigo-800" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
