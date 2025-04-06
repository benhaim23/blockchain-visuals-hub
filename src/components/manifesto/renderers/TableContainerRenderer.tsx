
import React, { ReactNode } from 'react';
import { Table } from "@/components/ui/table";

interface TableContainerRendererProps {
  children: ReactNode;
  index: number;
}

const TableContainerRenderer: React.FC<TableContainerRendererProps> = ({ children, index }) => {
  return (
    <div key={`table-container-${index}`} className="overflow-x-auto mb-6 max-w-full border border-blue-200 dark:border-slate-700 rounded-lg">
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  );
};

export default TableContainerRenderer;
