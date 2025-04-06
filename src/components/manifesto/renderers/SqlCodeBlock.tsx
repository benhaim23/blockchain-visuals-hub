
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SqlCodeBlockProps {
  content: string;
  blockIndex: number;
}

const SqlCodeBlock: React.FC<SqlCodeBlockProps> = ({ content, blockIndex }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
      {/* Code block header with language and copy button */}
      <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-700">
        <div className="px-2 py-1 rounded text-sm font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
          SQL
        </div>
        <Button
          onClick={() => copyToClipboard(content)}
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {/* Code content */}
      <pre className="p-4 text-sm overflow-x-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <code className="language-sql whitespace-pre-wrap">
          {content.split('\n').map((codeLine, idx) => (
            <div key={idx} className="leading-relaxed">
              {/* Apply syntax highlighting for SQL */}
              <span dangerouslySetInnerHTML={{ 
                __html: codeLine
                  .replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|INNER JOIN|RIGHT JOIN|UNION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|CASE|WHEN|THEN|ELSE|END|COUNT|SUM|AVG|MIN|MAX|NULL|IS|DISTINCT)\b/gi, 
                    match => `<span class="text-blue-600 dark:text-blue-400 font-medium">${match}</span>`)
                  .replace(/('[^']*')/g, 
                    match => `<span class="text-amber-600 dark:text-amber-400">${match}</span>`)
                  .replace(/\b(\d+(?:\.\d+)?)\b/g, 
                    match => `<span class="text-cyan-700 dark:text-cyan-400">${match}</span>`)
                  .replace(/(-&gt;|=|&gt;|&lt;|\+|-|\*|\/|%)/g, 
                    match => `<span class="text-pink-600 dark:text-pink-400">${match}</span>`)
              }} />
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default SqlCodeBlock;
