import React, { useState, useCallback, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  content: string;
  language?: string;
}

// SQL syntax highlighting patterns
const SQL_PATTERNS = {
  // Keywords (blue)
  keywords: /\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|JOIN|INNER JOIN|LEFT JOIN|RIGHT JOIN|OUTER JOIN|UNION|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TABLE|VIEW|INDEX|TRIGGER|PROCEDURE|FUNCTION|AS|ON|AND|OR|NOT|IN|BETWEEN|LIKE|IS|NULL|DISTINCT|ALL|CASE|WHEN|THEN|ELSE|END|WITH|OVER|PARTITION BY|ROW_NUMBER|RANK|DENSE_RANK|AVG|SUM|MIN|MAX|COUNT)\b/gi,
  
  // System functions (magenta)
  functions: /\b(ABS|CEILING|FLOOR|POWER|ROUND|SIGN|SQRT|SQUARE|LOG|LOG10|EXP|PI|RAND|DATEADD|DATEDIFF|DATENAME|DATEPART|DAY|MONTH|YEAR|GETDATE|GETUTCDATE|CURRENT_TIMESTAMP|CONVERT|CAST|COALESCE|NULLIF|ISNULL|ISDATE|LEN|LEFT|RIGHT|CHARINDEX|SUBSTRING|LOWER|UPPER|LTRIM|RTRIM|REPLACE|CONCAT|TRIM|FORMAT|TRY_CONVERT|TRY_CAST|ROW_NUMBER|RANK|DENSE_RANK|NTILE|LEAD|LAG|FIRST_VALUE|LAST_VALUE)\b/gi,
  
  // Tables and views (green)
  tables: /\b(INFORMATION_SCHEMA|sys|dbo)\.\w+\b/g,
  
  // Strings (red)
  strings: /'([^']*(?:''[^']*)*)'|"([^"]*(?:""[^"]*]*)*)"/g,
  
  // Comments (dark green)
  comments: /--.*$/gm,
  
  // Operators (dark gray)
  operators: /(\+|-|\*|\/|%|=|<>|!=|>|<|>=|<=|\|\||&&|\^|~)/g,
  
  // Numbers (teal)
  numbers: /\b\d+(\.\d+)?\b/g,
  
  // Procedures (maroon)
  procedures: /\b(sp_[a-zA-Z0-9_]+|xp_[a-zA-Z0-9_]+)\b/g
};

const CodeBlock: React.FC<CodeBlockProps> = ({ content, language = "sql" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, []);

  // Function to apply syntax highlighting
  const highlightedContent = useMemo(() => {
    // Only apply SQL highlighting to SQL code
    if (language.toLowerCase() !== 'sql') {
      return { __html: content };
    }
    
    // Create a safe copy to work with
    let highlighted = content;
    
    // Keep track of replaced segments to avoid overlap issues
    const replacements: { start: number; end: number; html: string }[] = [];
    
    // Process strings first (to avoid keywords in strings)
    let match;
    if (SQL_PATTERNS.strings.test(highlighted)) {
      SQL_PATTERNS.strings.lastIndex = 0;
      while ((match = SQL_PATTERNS.strings.exec(highlighted)) !== null) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #ea384c;">${match[0]}</span>` // Red for strings
        });
      }
    }
    
    // Process comments (to avoid keywords in comments)
    if (SQL_PATTERNS.comments.test(highlighted)) {
      SQL_PATTERNS.comments.lastIndex = 0;
      while ((match = SQL_PATTERNS.comments.exec(highlighted)) !== null) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #008000;">${match[0]}</span>` // Dark green for comments
        });
      }
    }

    // Process procedures
    if (SQL_PATTERNS.procedures.test(highlighted)) {
      SQL_PATTERNS.procedures.lastIndex = 0;
      while ((match = SQL_PATTERNS.procedures.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #800000;">${match[0]}</span>` // Maroon for procedures
        });
      }
    }
    
    // Process keywords
    if (SQL_PATTERNS.keywords.test(highlighted)) {
      SQL_PATTERNS.keywords.lastIndex = 0;
      while ((match = SQL_PATTERNS.keywords.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #1EAEDB;">${match[0]}</span>` // Blue for keywords
        });
      }
    }
    
    // Process functions
    if (SQL_PATTERNS.functions.test(highlighted)) {
      SQL_PATTERNS.functions.lastIndex = 0;
      while ((match = SQL_PATTERNS.functions.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #D946EF;">${match[0]}</span>` // Magenta for functions
        });
      }
    }
    
    // Process tables
    if (SQL_PATTERNS.tables.test(highlighted)) {
      SQL_PATTERNS.tables.lastIndex = 0;
      while ((match = SQL_PATTERNS.tables.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #008000;">${match[0]}</span>` // Green for tables
        });
      }
    }
    
    // Process operators
    if (SQL_PATTERNS.operators.test(highlighted)) {
      SQL_PATTERNS.operators.lastIndex = 0;
      while ((match = SQL_PATTERNS.operators.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #555555;">${match[0]}</span>` // Dark gray for operators
        });
      }
    }
    
    // Process numbers
    if (SQL_PATTERNS.numbers.test(highlighted)) {
      SQL_PATTERNS.numbers.lastIndex = 0;
      while ((match = SQL_PATTERNS.numbers.exec(highlighted)) !== null) {
        // Skip if inside a replacement
        if (replacements.some(r => match!.index >= r.start && match!.index < r.end)) continue;
        
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          html: `<span style="color: #33C3F0;">${match[0]}</span>` // Teal for numbers
        });
      }
    }
    
    // Sort replacements in reverse order to avoid offset issues
    replacements.sort((a, b) => b.start - a.start);
    
    // Apply replacements
    for (const repl of replacements) {
      highlighted = highlighted.substring(0, repl.start) + 
                   repl.html + 
                   highlighted.substring(repl.end);
    }
    
    return { __html: highlighted };
  }, [content, language]);

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
      
      {/* Code content with syntax highlighting if SQL */}
      <div className="p-4 text-sm overflow-x-auto bg-gray-900 text-gray-200">
        <pre className="whitespace-pre-wrap font-mono" dangerouslySetInnerHTML={highlightedContent} />
      </div>
    </div>
  );
};

export default CodeBlock;
