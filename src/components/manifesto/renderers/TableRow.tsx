
import React from 'react';
import TextProcessor from './TextProcessor';

interface TableRowProps {
  cells: string[];
  isHeaderRow: boolean;
  isFirstRow: boolean;
  rowIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ cells, isHeaderRow, isFirstRow, rowIndex }) => {
  return (
    <div className={`flex w-full ${isHeaderRow ? 'bg-blue-100 dark:bg-slate-700 font-medium rounded-t-lg' : 'bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80'} ${isFirstRow && !isHeaderRow ? 'rounded-t-lg' : ''}`}>
      {cells.map((cell, cellIndex) => (
        <div 
          key={cellIndex} 
          className={`flex-1 px-3 py-2 ${cellIndex === 0 ? 'border-l' : ''} border-r border-t border-b border-blue-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 ${isHeaderRow ? 'font-semibold text-indigo-900 dark:text-indigo-300' : ''}`}
        >
          <TextProcessor text={cell.trim()} />
        </div>
      ))}
    </div>
  );
};

export default TableRow;
