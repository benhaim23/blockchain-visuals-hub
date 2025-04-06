
"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

export type CodeBlockProps = {
  children?: React.ReactNode
  className?: string
} & React.HTMLProps<HTMLDivElement>

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "not-prose flex w-full flex-col overflow-clip border",
        "border-border bg-slate-900 text-slate-100 rounded-xl my-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type CodeBlockCodeProps = {
  code: string
  language?: string
  className?: string
} & React.HTMLProps<HTMLDivElement>

function CodeBlockCode({
  code,
  language = "sql",
  className,
  ...props
}: CodeBlockCodeProps) {
  // SQL syntax highlighting colors
  const keywords = ["SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY", "HAVING", "JOIN", "LEFT JOIN", 
    "RIGHT JOIN", "INNER JOIN", "CASE", "WHEN", "THEN", "ELSE", "END", "AS", "ON", "COUNT", "SUM", 
    "AVG", "MIN", "MAX", "AND", "OR", "IN", "NOT", "NULL", "IS", "DISTINCT", "LIMIT", "OFFSET", 
    "CREATE", "TABLE", "INSERT", "UPDATE", "DELETE", "ALTER", "WITH"];
  
  const formatCode = (code: string) => {
    if (language !== "sql") return <pre className="px-4 py-4 overflow-x-auto text-sm font-mono">{code}</pre>;
    
    // Clean up code by removing any "400">" prefixes
    const cleanedCode = code.replace(/400">|^\s*>\s*/gm, '');
    
    const lines = cleanedCode.split('\n');
    return (
      <pre className="px-4 py-4 overflow-x-auto text-sm font-mono">
        {lines.map((line, lineIndex) => {
          // Skip empty sql identifier line
          if (line.trim() === "sql") return null;
          
          let formattedLine = line;
          
          // Highlight keywords (purple)
          keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            formattedLine = formattedLine.replace(regex, match => 
              `<span class="text-purple-400">${match}</span>`
            );
          });
          
          // Highlight strings (red)
          formattedLine = formattedLine.replace(/'([^']*)'/g, 
            "<span class=\"text-red-400\">'$1'</span>"
          );
          
          // Highlight numbers (amber)
          formattedLine = formattedLine.replace(/\b(\d+)\b/g, 
            "<span class=\"text-amber-400\">$1</span>"
          );
          
          // Highlight functions (blue)
          formattedLine = formattedLine.replace(/([a-zA-Z0-9_]+)\(/g, 
            "<span class=\"text-blue-400\">$1</span>("
          );
          
          // Highlight parameters/column aliasing (teal)
          formattedLine = formattedLine.replace(/\bAS\s+([a-zA-Z0-9_]+)/gi, 
            match => {
              const parts = match.split(/\s+/);
              return `<span class="text-purple-400">AS</span> <span class="text-teal-400">${parts[1]}</span>`;
            }
          );
          
          return (
            <div key={lineIndex} dangerouslySetInnerHTML={{ __html: formattedLine }} />
          );
        })}
      </pre>
    );
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      {formatCode(code)}
    </div>
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Clean up code by removing "400">" prefixes
    const cleanCode = code
      .replace(/400">|^\s*>\s*/gm, '')
      .replace(/^sql\n+/, ''); // Also remove sql marker at the beginning if it exists
    
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-800 hover:text-slate-100 focus:outline-none"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}

export { CodeBlockGroup, CodeBlockCode, CodeBlock }
