
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ScrollArea className="h-[600px] w-full pr-4">
      <div className="prose dark:prose-invert max-w-none">
        {content.split('\n').map((line, index) => {
          if (line.startsWith('# ')) {
            return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
          } else if (line.startsWith('## ')) {
            return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
          } else if (line.startsWith('### ')) {
            return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(4)}</h3>;
          } else if (line.startsWith('- ')) {
            return <li key={index} className="ml-4 mb-1">{line.substring(2)}</li>;
          } else if (line.startsWith('> ')) {
            return <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">{line.substring(2)}</blockquote>;
          } else if (line === '---') {
            return <hr key={index} className="my-6 border-t border-muted" />;
          } else if (line.trim() === '') {
            return <div key={index} className="h-4"></div>;
          } else {
            return <p key={index} className="mb-4">{line}</p>;
          }
        })}
      </div>
    </ScrollArea>
  );
};

export default MarkdownRenderer;
