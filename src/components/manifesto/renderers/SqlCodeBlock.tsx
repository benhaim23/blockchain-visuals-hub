
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
    <div className="my-6 overflow-hidden rounded-lg bg-slate-900 text-white shadow-lg">
      {/* Code block header with language and copy button */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2">
        <div className="rounded-md bg-slate-700 px-2 py-1 text-sm font-medium text-slate-300">SQL</div>
        <Button
          onClick={() => copyToClipboard(content)}
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {/* Code content */}
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="language-sql whitespace-pre-wrap">
          {content.split('\n').map((codeLine, idx) => (
            <div key={idx} className="leading-relaxed">
              {/* Apply syntax highlighting for SQL */}
              <span dangerouslySetInnerHTML={{ 
                __html: codeLine
                  .replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|INNER JOIN|RIGHT JOIN|UNION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|CASE|WHEN|THEN|ELSE|END|COUNT|SUM|AVG|MIN|MAX|NULL|IS|DISTINCT)\b/gi, 
                    match => `<span class="text-blue-400">${match}</span>`)
                  .replace(/('[^']*')/g, 
                    match => `<span class="text-amber-400">${match}</span>`)
                  .replace(/\b(\d+(?:\.\d+)?)\b/g, 
                    match => `<span class="text-cyan-300">${match}</span>`)
                  .replace(/(-&gt;|=|&gt;|&lt;|\+|-|\*|\/|%)/g, 
                    match => `<span class="text-pink-400">${match}</span>`)
              }} />
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default SqlCodeBlock;
