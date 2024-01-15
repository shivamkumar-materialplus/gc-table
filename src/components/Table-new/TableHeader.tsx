
import { TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './TableHeader.styles';
interface Column {
  id: string;
  label: string;
}
interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  const { classes } = useStyles();
  return (
    <TableRow className={classes.titleRow}>
      {columns.map((column) => (
        <TableCell key={column.id}>
          <Typography variant='body2'>{column.label}</Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
