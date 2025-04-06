
import React, { useEffect, useState } from 'react';
import { useAnimatedText } from '@/hooks/useAnimatedText';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedContent = useAnimatedText(content, "\n");
  
  useEffect(() => {
    setIsVisible(true);
  }, [content]);

  // Reset visibility when content changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [content]);

  // Handle table rendering separately for better styling
  const renderTable = (tableContent: string[]) => {
    // Parse header row
    const headerRow = tableContent[0].split('|').filter(cell => cell.trim() !== '');
    
    // Skip separator row
    // Parse data rows
    const dataRows = tableContent.slice(2).map(row => 
      row.split('|').filter(cell => cell.trim() !== '')
    );
    
    return (
      <div className="my-6 w-full overflow-auto rounded-lg bg-gray-900 border border-slate-700 dark:border-slate-600 shadow-md">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              {headerRow.map((header, idx) => (
                <TableHead key={idx} className="font-semibold py-3 px-6">
                  {header.trim()}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataRows.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <TableCell key={cellIdx} className="py-3 px-6">
                    {cell.trim()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  // Convert markdown content to HTML
  const renderContent = () => {
    if (!animatedContent) return null;
    
    const lines = animatedContent.split('\n');
    const result: JSX.Element[] = [];
    
    // Keep track of the current list for proper list rendering
    let inList = false;
    let listItems: string[] = [];
    
    // Keep track of table content
    let inTable = false;
    let tableContent: string[] = [];
    
    lines.forEach((line, index) => {
      // Clean up asterisks from headers
      const cleanLine = (str: string) => str.replace(/\*\*(.*?)\*\*/g, '$1');
      
      // Check for table start
      if (line.startsWith('| ')) {
        inTable = true;
        tableContent.push(line);
        return;
      }
      
      // If we were in a table but this line doesn't continue it
      if (inTable && !line.startsWith('| ') && !line.startsWith('|--')) {
        // Render accumulated table and reset
        result.push(renderTable(tableContent));
        tableContent = [];
        inTable = false;
      }
      
      // Headers
      if (line.startsWith('# ')) {
        result.push(<h1 key={index} className="text-3xl font-bold mt-6 mb-4 text-indigo-900 dark:text-indigo-300">{cleanLine(line.substring(2))}</h1>);
      } else if (line.startsWith('## ')) {
        result.push(<h2 key={index} className="text-2xl font-bold mt-5 mb-3 text-indigo-800 dark:text-indigo-400">{cleanLine(line.substring(3))}</h2>);
      } else if (line.startsWith('### ')) {
        result.push(<h3 key={index} className="text-xl font-bold mt-4 mb-2 text-indigo-700 dark:text-indigo-400">{cleanLine(line.substring(4))}</h3>);
      } else if (line.startsWith('#### ')) {
        result.push(<h4 key={index} className="text-lg font-bold mt-3 mb-2 text-indigo-700 dark:text-indigo-400">{cleanLine(line.substring(5))}</h4>);
      }
      
      // Lists
      else if (line.startsWith('- ')) {
        if (!inList) {
          // Starting a new list
          inList = true;
          listItems = [];
        }
        listItems.push(cleanLine(line.substring(2)));
      } 
      // End of list or something else
      else if (inList && !line.startsWith('- ')) {
        result.push(
          <ul key={`list-${index}`} className="list-disc pl-8 mb-4 text-slate-700 dark:text-slate-300">
            {listItems.map((item, i) => (
              <li key={i} className="mb-1">{item}</li>
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }
      
      // Bold text - we'll handle the ** markers properly
      else if (line.includes('**')) {
        // Replace ** with span for bold text
        const parts = line.split('**');
        
        if (parts.length > 1) {
          result.push(
            <p key={index} className="mb-4 text-slate-700 dark:text-slate-300">
              {parts.map((part, i) => {
                // Every even index (0, 2, 4...) is regular text
                // Every odd index (1, 3, 5...) is bold text
                return i % 2 === 0 ? 
                  <React.Fragment key={i}>{part}</React.Fragment> : 
                  <strong key={i} className="text-blue-700 dark:text-blue-400">{part}</strong>;
              })}
            </p>
          );
        } else {
          result.push(<p key={index} className="mb-4 text-slate-700 dark:text-slate-300">{line}</p>);
        }
      }
      
      // Blockquotes
      else if (line.startsWith('> ')) {
        result.push(
          <blockquote key={index} className="border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-2 italic my-4 text-slate-600 dark:text-slate-300 rounded-r">
            {cleanLine(line.substring(2))}
          </blockquote>
        );
      }
      
      // Horizontal rule
      else if (line === '---') {
        result.push(<hr key={index} className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />);
      }
      
      // Empty line
      else if (line.trim() === '') {
        result.push(<div key={index} className="h-4"></div>);
      }
      
      // Regular paragraph
      else {
        // Process inline formatting
        let formattedText = line;
        
        // Bold text
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700 dark:text-blue-400">$1</strong>');
        
        // Italic text
        formattedText = formattedText.replace(/\*(.*?)\*/g, '<em class="text-slate-600 dark:text-slate-400">$1</em>');
        
        // Code
        formattedText = formattedText.replace(/`(.*?)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600 dark:text-indigo-400 font-mono text-sm">$1</code>');
        
        if (formattedText.includes('<')) {
          result.push(
            <p 
              key={index} 
              className="mb-4 text-slate-700 dark:text-slate-300" 
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />
          );
        } else {
          result.push(<p key={index} className="mb-4 text-slate-700 dark:text-slate-300">{formattedText}</p>);
        }
      }
    });
    
    // If we ended with a table, render it
    if (inTable && tableContent.length > 0) {
      result.push(renderTable(tableContent));
    }
    
    // If we ended with a list, render it
    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="list-disc pl-8 mb-4 text-slate-700 dark:text-slate-300">
          {listItems.map((item, i) => (
            <li key={i} className="mb-1">{item}</li>
          ))}
        </ul>
      );
    }
    
    return result;
  };

  return (
    <div className={`prose dark:prose-invert max-w-none prose-slate prose-headings:text-indigo-900 dark:prose-headings:text-indigo-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {renderContent()}
    </div>
  );
};

export default MarkdownRenderer;
