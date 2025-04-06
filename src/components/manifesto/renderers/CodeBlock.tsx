
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  content: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, language = "sql" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // SQL syntax highlighting function
  const highlightCode = (code: string, lang: string) => {
    if (lang.toLowerCase() !== 'sql') {
      return <pre className="whitespace-pre-wrap font-mono">{code}</pre>;
    }
    
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Replace SQL keywords with colored spans (purple #9b87f5)
      let formattedLine = line.replace(
        /\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|ON|AND|OR|AS|UNION|ALL|DISTINCT|COUNT|SUM|AVG|MIN|MAX|LIMIT|OFFSET|CASE|WHEN|THEN|ELSE|END|WITH|OVER|PARTITION BY|ROW_NUMBER|RANK|DENSE_RANK)\b/gi,
        (match) => `<span class="text-[#9b87f5]">${match}</span>`
      );
      
      // Highlight function calls
      formattedLine = formattedLine.replace(
        /\b([a-zA-Z0-9_]+)(?=\s*\()/g,
        (match) => `<span class="text-[#9b87f5]">${match}</span>`
      );
      
      // Highlight strings (coral #F97316)
      formattedLine = formattedLine.replace(
        /('.*?')/g,
        (match) => `<span class="text-[#F97316]">${match}</span>`
      );
      
      // Highlight numbers (green/teal #33C3F0)
      formattedLine = formattedLine.replace(
        /\b(\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/g,
        (match) => `<span class="text-[#33C3F0]">${match}</span>`
      );
      
      // Highlight special operators 
      formattedLine = formattedLine.replace(
        /(\*|=|>|<|\+|-|\/|%|!=|&lt;=|&gt;=|&lt;|&gt;)/g,
        (match) => `<span class="text-blue-400">${match}</span>`
      );
      
      // Highlight intervals
      formattedLine = formattedLine.replace(
        /\b(interval)\b/gi,
        (match) => `<span class="text-[#9b87f5]">${match}</span>`
      );
      
      return (
        <div 
          key={lineIndex} 
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-gray-900 border border-slate-700 shadow-lg">
      {/* Code block header with language and copy button */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-slate-700">
        <div className="px-2 py-1 rounded text-sm font-medium bg-gray-700 text-[#9b87f5]">
          {language.toUpperCase()}
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
        <pre className="whitespace-pre-wrap font-mono">
          {highlightCode(content, language)}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
