
import React from 'react';

export interface TableRowProps {
  isHeader: boolean;
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ isHeader, children }) => {
  return (
    <tr className={isHeader ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'}>
      {children}
    </tr>
  );
};

export default TableRow;
