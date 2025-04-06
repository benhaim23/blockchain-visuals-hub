
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

  return (
    <div className="my-6 overflow-hidden rounded-lg bg-gray-900 border border-slate-700 shadow-lg">
      {/* Code block header with language and copy button */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-slate-700">
        <div className="px-2 py-1 rounded text-sm font-medium bg-gray-700 text-gray-300">
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
        <pre className="whitespace-pre-wrap font-mono">{content}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
