import {
  Pagination, PaginationItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow
} from '@mui/material';
import React, { useMemo, useState } from 'react';

import MenuBox from '../../components/MenuBox';
import { FirstIcon, LastIcon, NextIcon, PreviousIcon } from '../../icons';
import { COLOR } from '../../utils/constants';
import { getComparator, stableSort } from '../../utils/helpers';
import { Data, Order, SortableFields } from '../../utils/types';
import TableHeader from './Header';
import Row from './Row';
import { useStyles } from './index.styles';

type Props = {
  data: Data[]
}

export default function MyTable({ data }: Props) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof SortableFields>('order_id');
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const handleSearchChange = (columnName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnName]: value,
    }));
    setPage(1);
  };

  const rowsPerPage = 10;

  // @TODO: Fix any here
  const rows = data.filter((row: any) => {
    return Object.keys(filters).every((columnName) => {
      const cellValue = row[columnName]?.toString().toLowerCase();
      const filterValue = filters[columnName]?.toLowerCase();
      return cellValue && cellValue.includes(filterValue);
    });
  });

  const { classes } = useStyles();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort<Data>(rows, getComparator(order, orderBy)).slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filters],
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof SortableFields,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <MenuBox />
      <Paper elevation={3} sx={{ borderRadius: '30px' }}>
        <TableContainer className={classes.dataTable}>
          <Table stickyHeader>
            <TableHeader
              order={order}
              orderBy={orderBy}
              handleSearchChange={handleSearchChange}
              filters={filters}
            />
            <TableBody className={classes.tableBody}>
              {visibleRows.map((row) =>
                <Row row={row} key={row.order_id} />)}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    // Avoid a layout jump when reaching the last page with empty rows.
                    // height of a row is 48
                    height: (48) * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          onChange={handleChangePage}
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
          className={classes.pagination}
        />
      </Paper>
    </>
  )
}