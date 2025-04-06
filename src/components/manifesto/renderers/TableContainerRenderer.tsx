
import React, { ReactNode } from 'react';

interface TableContainerRendererProps {
  children: ReactNode;
  index: number;
}

const TableContainerRenderer: React.FC<TableContainerRendererProps> = ({ children, index }) => {
  return (
    <div key={`table-container-${index}`} className="overflow-x-auto mb-6 max-w-full">
      {children}
    </div>
  );
};

export default TableContainerRenderer;
