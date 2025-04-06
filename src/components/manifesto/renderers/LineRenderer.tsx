
import React from 'react';
import SqlCodeBlock from './SqlCodeBlock';
import CodeBlock from './CodeBlock';
import TableRow from './TableRow';
import HeaderRenderer from './HeaderRenderer';
import ListItemRenderer from './ListItemRenderer';
import BlockquoteRenderer from './BlockquoteRenderer';
import ParagraphRenderer from './ParagraphRenderer';
import { 
  isStandaloneQuery,
  extractCodeBlock,
  isSqlCodeBlock,
  extractSqlQueries
} from '../utils/markdownUtils';

interface LineRendererProps {
  line: string;
  index: number;
  allLines: string[];
}

const LineRenderer: React.FC<LineRendererProps> = ({ line, index, allLines }) => {
  // Skip horizontal rules (------) completely
  if (line.trim() === '------') {
    return null;
  }
  
  // Headers
  if (line.startsWith('# ')) {
    return <HeaderRenderer line={line} level={1} />;
  } else if (line.startsWith('## ')) {
    return <HeaderRenderer line={line} level={2} />;
  } else if (line.startsWith('### ')) {
    return <HeaderRenderer line={line} level={3} />;
  } else if (line.startsWith('#### ')) {
    return <HeaderRenderer line={line} level={4} />;
  }
  
  // Lists
  else if (line.startsWith('- ')) {
    return <ListItemRenderer line={line} />;
  } 
  
  // Bold text or regular text with ** formatting
  else if (line.includes('**')) {
    return <ParagraphRenderer line={line} />;
  }
  
  // Blockquotes
  else if (line.startsWith('> ')) {
    return <BlockquoteRenderer line={line} />;
  }
  
  // Horizontal rule
  else if (line === '---') {
    return <hr className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />;
  }
  
  // Empty line
  else if (line.trim() === '') {
    return <div className="h-4"></div>;
  }
  
  // Regular paragraph
  else {
    return <ParagraphRenderer line={line} />;
  }
};

export default LineRenderer;
