
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from './renderers/CodeBlock';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import TableRow from './renderers/TableRow';
import TextProcessor from './renderers/TextProcessor';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-p:text-base 
                 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-lg prose-blockquote:border-l-blue-500"
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 
            className="text-4xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 tracking-wide leading-tight"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600 dark:text-indigo-400" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-semibold mt-6 mb-3 text-indigo-600 dark:text-indigo-400" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          const language = match && match[1];

          if (!inline) {
            if (language === 'sql') {
              return <SqlCodeBlock code={String(children).replace(/\n$/, '')} />;
            }
            
            return (
              <CodeBlock 
                language={language || 'text'}
                value={String(children).replace(/\n$/, '')}
              />
            );
          }
          
          return (
            <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          );
        },
        p: ({ node, children, ...props }) => {
          return (
            <p className="my-4 text-gray-800 dark:text-gray-200 leading-relaxed" {...props}>
              <TextProcessor text={String(children)} />
            </p>
          );
        },
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-gray-800 dark:text-gray-200 pl-2" {...props} />
        ),
        a: ({ node, href, ...props }) => (
          <a 
            href={href}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            {...props} 
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote 
            className="border-l-4 border-blue-400 dark:border-blue-600 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 rounded italic text-gray-700 dark:text-gray-300"
            {...props} 
          />
        ),
        hr: ({ node, ...props }) => (
          <hr className="my-8 border-t-2 border-slate-200 dark:border-slate-700" {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-slate-100 dark:bg-slate-800" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700" {...props} />
        ),
        tr: ({ node, isHeader, ...props }) => (
          <TableRow isHeader={!!isHeader} {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
