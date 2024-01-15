import React from 'react';

import { TableCell, TableRow } from '@mui/material';

interface Column {
  id: string;
  label: string;
}

interface TableRowProps {
  row: any;
  columns: Column[];
}
const TableRowComponent: React.FC<TableRowProps> = ({ row, columns }) => {
  console.log(row)
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column.id}>{row[column.id]}</TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowComponent;
