
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

  // Function to highlight SQL syntax
  const highlightSql = (code: string) => {
    // Replace SQL keywords with highlighted spans
    const keywords = [
      'SELECT', 'FROM', 'WHERE', 'GROUP BY', 'ORDER BY', 'HAVING',
      'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN',
      'ON', 'AS', 'AND', 'OR', 'NOT', 'IN', 'IS NULL', 'IS NOT NULL',
      'CREATE', 'ALTER', 'DROP', 'TABLE', 'VIEW', 'INDEX', 'PROCEDURE',
      'FUNCTION', 'TRIGGER', 'INSERT', 'UPDATE', 'DELETE', 'INTO', 'VALUES',
      'SET', 'DISTINCT', 'TOP', 'WITH', 'UNION', 'ALL', 'CASE', 'WHEN', 'THEN',
      'ELSE', 'END', 'BETWEEN', 'LIKE', 'LIMIT', 'OFFSET', 'ASC', 'DESC'
    ];
    
    // Split the code into lines for processing
    const lines = code.split('\n');
    const processedLines = lines.map(line => {
      let processedLine = line;
      
      // Highlight keywords (blue)
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        processedLine = processedLine.replace(regex, match => 
          `<span class="text-blue-600 dark:text-blue-400 font-medium">${match}</span>`
        );
      });
      
      // Highlight strings (red)
      processedLine = processedLine.replace(/'([^']*)'/g, 
        "'<span class=\"text-red-600 dark:text-red-400\">$1</span>'"
      );
      
      // Highlight numbers (teal)
      processedLine = processedLine.replace(/\b(\d+)\b/g,
        '<span class="text-cyan-700 dark:text-cyan-400">$1</span>'
      );
      
      // Highlight system functions (magenta)
      const functions = ['COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'CAST', 'CONVERT', 'ISNULL', 'COALESCE', 'DATEDIFF', 'GETDATE'];
      functions.forEach(func => {
        const regex = new RegExp(`\\b${func}\\b`, 'gi');
        processedLine = processedLine.replace(regex, match => 
          `<span class="text-fuchsia-600 dark:text-fuchsia-400">${match}</span>`
        );
      });
      
      // Highlight system tables (green)
      const sysTables = ['sys', 'INFORMATION_SCHEMA'];
      sysTables.forEach(table => {
        const regex = new RegExp(`\\b${table}\\b`, 'gi');
        processedLine = processedLine.replace(regex, match => 
          `<span class="text-green-600 dark:text-green-400">${match}</span>`
        );
      });
      
      // Highlight operators (dark gray)
      const operators = ['=', '!=', '<>', '>', '<', '>=', '<=', '\\+', '-', '\\*', '/', '%'];
      operators.forEach(op => {
        const regex = new RegExp(`\\${op}`, 'g');
        processedLine = processedLine.replace(regex, match => 
          `<span class="text-gray-600 dark:text-gray-400">${match}</span>`
        );
      });
      
      // Highlight comments (dark green)
      if (processedLine.includes('--')) {
        const commentIndex = processedLine.indexOf('--');
        const beforeComment = processedLine.substring(0, commentIndex);
        const comment = processedLine.substring(commentIndex);
        processedLine = beforeComment + `<span class="text-green-800 dark:text-green-600">${comment}</span>`;
      }
      
      return processedLine;
    });
    
    return processedLines.join('\n');
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
        <pre 
          className="whitespace-pre-wrap font-mono" 
          dangerouslySetInnerHTML={{ __html: highlightSql(content) }}
        />
      </div>
    </div>
  );
};

export default SqlCodeBlock;
