import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow as UITableRow, TableCell } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';

interface TableRowProps {
  cells: string[];
  isHeaderRow: boolean;
  isFirstRow: boolean;
  rowIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ cells, isHeaderRow, isFirstRow, rowIndex }) => {
  const isMobile = useIsMobile();
  
  // If this is the first row of a table, create the whole table structure
  // Otherwise, just return a single row to be added to the existing table
  if (isFirstRow) {
    return (
      <div className="my-4 w-full overflow-hidden">
        <ScrollArea className="w-full" type="always">
          <div className={`min-w-full ${isMobile ? 'w-[600px]' : ''}`}>
            <Table>
              {isHeaderRow && (
                <TableHeader>
                  <UITableRow className="bg-blue-100/50 dark:bg-blue-950/30">
                    {cells.map((cell, idx) => (
                      <TableHead key={`header-${rowIndex}-${idx}`} className="font-semibold text-blue-800 dark:text-blue-300 whitespace-nowrap py-2 px-4">
                        {cell.trim()}
                      </TableHead>
                    ))}
                  </UITableRow>
                </TableHeader>
              )}
              
              {!isHeaderRow && (
                <TableBody>
                  <UITableRow className="border-b border-blue-100 dark:border-slate-700">
                    {cells.map((cell, idx) => (
                      <TableCell key={`cell-${rowIndex}-${idx}`} className="py-2 px-4 whitespace-nowrap">
                        {cell.trim()}
                      </TableCell>
                    ))}
                  </UITableRow>
                </TableBody>
              )}
            </Table>
          </div>
        </ScrollArea>
      </div>
    );
  } else {
    // Return just a row to be added to an existing table
    return (
      <UITableRow className="border-b border-blue-100 dark:border-slate-700">
        {cells.map((cell, idx) => (
          <TableCell key={`cell-${rowIndex}-${idx}`} className="py-2 px-4 whitespace-nowrap">
            {cell.trim()}
          </TableCell>
        ))}
      </UITableRow>
    );
  }
};

export default TableRow;
