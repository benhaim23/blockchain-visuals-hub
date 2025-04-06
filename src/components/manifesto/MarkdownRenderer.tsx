
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import CodeBlock from './renderers/CodeBlock';
import SqlCodeBlock from './renderers/SqlCodeBlock';
import TextProcessor from './renderers/TextProcessor';
import TableRow from './renderers/TableRow';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Register language for syntax highlighting
  const registerLanguage = () => {
    // This is intentionally empty as we're using PrismLight which loads languages dynamically
  };

  const processMarkdownHeadings = (markdown: string): string => {
    // Regex to find h1 headers (# Header)
    const h1Regex = /^# (.*?)$/gm;
    
    // Replace h1 headers with styled versions, ensuring they have the indigo color
    return markdown.replace(h1Regex, (match, headerText) => {
      // Check if header already contains **
      if (headerText.includes('**')) {
        return `# ${headerText}`;
      }
      // Add ** around the header text to make it bold and thus styled by TextProcessor
      return `# **${headerText.trim()}**`;
    });
  };

  // Process the content before rendering
  const processedContent = processMarkdownHeadings(content);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Handle code blocks
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match && match[1];

          if (!inline && language) {
            if (language === 'sql') {
              return (
                <SqlCodeBlock language={language}>
                  {String(children).replace(/\n$/, '')}
                </SqlCodeBlock>
              );
            }

            return (
              <CodeBlock language={language}>
                {String(children).replace(/\n$/, '')}
              </CodeBlock>
            );
          }

          return (
            <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm font-mono text-rose-600 dark:text-rose-400" {...props}>
              {children}
            </code>
          );
        },
        
        // Handle paragraph with TextProcessor
        p(props) {
          return (
            <p className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <TextProcessor text={props.children as string} />
            </p>
          );
        },

        // Style headings
        h1(props) {
          return (
            <h1 className="text-3xl font-bold mb-6 mt-8 text-indigo-700 dark:text-indigo-300">
              <TextProcessor text={props.children as string} />
            </h1>
          );
        },

        h2(props) {
          return (
            <h2 className="text-2xl font-bold mb-4 mt-6 text-indigo-700 dark:text-indigo-300">
              <TextProcessor text={props.children as string} />
            </h2>
          );
        },

        h3(props) {
          return (
            <h3 className="text-xl font-bold mb-3 mt-5 text-indigo-700 dark:text-indigo-300">
              <TextProcessor text={props.children as string} />
            </h3>
          );
        },

        // Handle blockquotes
        blockquote(props) {
          return (
            <blockquote className="border-l-4 border-blue-400 dark:border-blue-600 pl-4 italic my-6 text-slate-600 dark:text-slate-400">
              {props.children}
            </blockquote>
          );
        },

        // Handle lists
        ul(props) {
          return <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{props.children}</ul>;
        },

        ol(props) {
          return <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{props.children}</ol>;
        },

        // Handle tables
        table(props) {
          return (
            <div className="mb-6 mt-6 overflow-hidden w-full rounded-lg border border-blue-200 dark:border-slate-700">
              {props.children}
            </div>
          );
        },

        tbody(props) {
          return <div className="divide-y divide-blue-200 dark:divide-slate-700">{props.children}</div>;
        },

        thead(props) {
          return <div>{props.children}</div>;
        },

        tr(props) {
          const rowIndex = props.node?.position?.start?.line || 0;
          const isHeader = props.node?.position?.start?.column === 1;
          const isFirstRow = rowIndex === (props.node?.parent?.position?.start?.line || 0);
          
          // Extract cells from the component's children
          const cells: string[] = React.Children.toArray(props.children)
            .filter((child): child is React.ReactElement => React.isValidElement(child))
            .map(child => {
              // Extract the text content from the cell
              const cellContent = React.Children.toArray(child.props.children)
                .map(grandchild => {
                  if (typeof grandchild === 'string') return grandchild;
                  if (React.isValidElement(grandchild)) {
                    return React.Children.toArray(grandchild.props.children).join('');
                  }
                  return '';
                })
                .join('');
              
              return cellContent;
            });

          return <TableRow 
            cells={cells} 
            isHeaderRow={isHeader} 
            isFirstRow={isFirstRow} 
            rowIndex={rowIndex} 
          />;
        },

        th() {
          // These are handled by TableRow
          return null;
        },

        td() {
          // These are handled by TableRow
          return null;
        },

        // Handle links
        a(props) {
          return (
            <a 
              href={props.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors"
            >
              {props.children}
            </a>
          );
        },

        // Handle images
        img(props) {
          return (
            <img 
              src={props.src} 
              alt={props.alt || 'Image'} 
              className="max-w-full h-auto my-4 rounded-lg shadow-md"
            />
          );
        },
      }}
    >
      {processedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
