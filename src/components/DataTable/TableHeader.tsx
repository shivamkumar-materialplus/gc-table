import { TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { Column } from '../../utils/types';
import { useStyles } from './TableHeader.styles';

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  const { classes } = useStyles();
  return (
    <TableRow className={classes.titleRow}>
      {columns.map((column) => (
        <TableCell key={column.id}>
          <Typography variant='body2' fontWeight={"bold"}>{column.label}</Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
