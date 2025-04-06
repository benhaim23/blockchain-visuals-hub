
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
    <tr className={`
      ${isHeaderRow ? 'bg-blue-100 dark:bg-slate-700 font-medium' : 'bg-white/80 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/80'}
      ${isFirstRow && !isHeaderRow ? 'border-t-0' : ''}
    `}>
      {cells.map((cell, cellIndex) => (
        <td 
          key={cellIndex} 
          className={`
            px-3 py-2 
            border border-blue-200 dark:border-slate-600 
            text-slate-700 dark:text-slate-300
            ${isHeaderRow ? 'font-semibold text-indigo-900 dark:text-indigo-300' : ''}
          `}
        >
          <TextProcessor text={cell.trim()} />
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
