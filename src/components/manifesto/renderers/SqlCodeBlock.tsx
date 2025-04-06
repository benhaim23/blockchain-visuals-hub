
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

  // Simple function to highlight SQL without extra markup
  const highlightSQL = (code: string) => {
    return (
      <pre className="whitespace-pre-wrap">
        {code.split('\n').map((line, i) => {
          // Apply very minimal highlighting without adding extra markup
          const coloredLine = line
            .replace(/\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|INNER JOIN|RIGHT JOIN|UNION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|CASE|WHEN|THEN|ELSE|END|COUNT|SUM|AVG|MIN|MAX|NULL|IS|DISTINCT)\b/gi, 
              match => `<span class="text-purple-400">${match}</span>`)
            .replace(/('[^']*')/g, 
              match => `<span class="text-amber-300">${match}</span>`)
            .replace(/\b(\d+(?:\.\d+)?)\b/g, 
              match => `<span class="text-teal-300">${match}</span>`)
            .replace(/(\*|=|>|<|\+|-|\*|\/|%|interval)/g, 
              match => `<span class="text-blue-300">${match}</span>`);
          
          return (
            <div key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: coloredLine }} />
          );
        })}
      </pre>
    );
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-gray-900 border border-slate-700 shadow-lg">
      {/* Code block header with language and copy button */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-slate-700">
        <div className="px-2 py-1 rounded text-sm font-medium bg-gray-700 text-gray-300">
          SQL
        </div>
        <Button
          onClick={() => copyToClipboard(content)}
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-slate-400 hover:text-slate-200 transition-colors"
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
      <div className="p-4 text-sm overflow-x-auto bg-gray-900 text-gray-200">
        {highlightSQL(content)}
      </div>
    </div>
  );
};

export default SqlCodeBlock;
