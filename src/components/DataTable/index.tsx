import { Pagination, PaginationItem, Paper, Table, TableBody, TableContainer, TableHead } from '@mui/material';
import React, { useMemo } from 'react';
import { FirstIcon, LastIcon, NextIcon, PreviousIcon } from '../../icons';
import { COLOR } from '../../utils/constants';
import { Column } from '../../utils/types';
import { useStyles } from './index.styles';

interface DataTableProps {
  columns: Column[];
  data: any[];
  renderHeader: (columns: Column[]) => React.ReactNode;
  renderRow: (row: any, columns: Column[]) => React.ReactNode;
  searchText?: string;
  // onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchChange?: (columnName: string, value: string) => void;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: {};
}

const DataTable: React.FC<DataTableProps> = ({ columns,
  data,
  renderHeader,
  renderRow,
  searchText,
  onSearchChange,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  sx }) => {

  const visibleRows = useMemo(
    () => data.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, data],
  );

  const { classes } = useStyles();

  const showPagination = data.length > rowsPerPage

  return (
    <TableContainer component={Paper} sx={{ display: 'flex', flexDirection: "column", gap: "11px", ...sx }}>
      <Table>
        <TableHead>
          {renderHeader(columns)}
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            renderRow(row, columns))
          )}
        </TableBody>
      </Table>
      {showPagination && <Pagination
        count={Math.ceil(data.length / rowsPerPage)}
        onChange={onPageChange}
        page={page}
        showFirstButton
        showLastButton
        color="primary"
        renderItem={(item) => <PaginationItem
          slots={{
            first: () => <FirstIcon color={item.disabled ? COLOR.WHITE : ""} />,
            previous: () => <PreviousIcon color={item.disabled ? COLOR.WHITE : ""} />,
            next: () => <NextIcon color={item.disabled ? COLOR.WHITE : ""} />,
            last: () => <LastIcon color={item.disabled ? COLOR.WHITE : ""} />
          }}
          {...item}
          className={classes.paginationItem} />}
        className={`${classes.pagination} noprint`}
        sx={{ marginTop: 'auto' }}
      />}
    </TableContainer>
  )
}

export default DataTable