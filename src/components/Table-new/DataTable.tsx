import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination } from '@mui/material';
import React, { useMemo } from 'react';

interface Column {
  id: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  renderHeader: (columns: Column[]) => React.ReactNode;
  renderRow: (row: any, columns: Column[]) => React.ReactNode;
  searchText: string;
  // onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchChange: (columnName: string, value: string) => void;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  onRowsPerPageChange }) => {

  const visibleRows = useMemo(
    () =>
      data.slice(
        (page) * rowsPerPage,
        (page) * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage, data],
  );

  return (
    <Paper>
      <TableContainer>
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
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  )
}

export default DataTable