import React, { useState, useMemo } from 'react'
import {
  Pagination, PaginationItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow
} from '@mui/material';

import { Data, Order, SortableFields } from '../../utils/types';
import { getComparator, stableSort } from '../../utils/helpers';
import MenuBox from '../../components/MenuBox';
import { LastIcon, NextIcon, PreviousIcon, FirstIcon } from '../../icons';
import Row from './Row';
import TableHeader from './Header';
import { useStyles } from './index.styles';
import { COLOR } from '../../utils/constants';

type Props = {
  data: Data[]
}

export default function MyTable({ data }: Props) {
  const [showCompleted, setShowCompleted] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof SortableFields>('order_id');
  const [page, setPage] = useState(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText((event.target).value);
    setPage(1);
  };

  const handleToggleFilter = () => {
    setShowCompleted(!showCompleted);
  };
  const rowsPerPage = 10;

  const rows = (showCompleted ? data : data.filter(item => item.order_status !== "Order completed"))
    .filter(
      (item) =>
        item.order_id.toString().includes(searchText) ||
        item.created_by.toLowerCase().includes(searchText.toLowerCase()) ||
        item.patient_id.toString().includes(searchText) ||
        item.patient_name.toLowerCase().includes(searchText.toLowerCase())
    );

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
    [order, orderBy, page, rowsPerPage, showCompleted, searchText, data],
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof SortableFields,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleRequestSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('searching')
  }

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
              onRequestSort={handleRequestSort}
              onRequestSearch={handleRequestSearch}
            />
            <TableBody className={classes.tableBody}>
              {visibleRows.map((row) =>
                <Row row={row} />)}
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