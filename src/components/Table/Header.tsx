import React from 'react'
import { Box, InputBase, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { HeadCell, Order, SortableFields } from "../../utils/types";
import { useStyles } from './Header.styles';


interface TableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof SortableFields) => void;
  onRequestSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
}

const headCells: HeadCell[] = [
  { id: 'order_id', label: 'Order ID', sortable: true, searchable: true },
  { id: "patient_name", label: 'Patient Name', sortable: true, searchable: true },
  { id: 'created_by', label: 'Created By', sortable: true, searchable: true },
  { id: 'assigned_lab', label: 'Assigned Lab', sortable: true, searchable: true },
  { id: 'order_status', label: 'Order Status', sortable: true, searchable: true },
  { id: 'restoration_type', label: 'Restoration Type', sortable: true, searchable: true },
  { id: 'created_date', label: 'Created Date', sortable: true, searchable: true },
  { id: 'delivery_date', label: 'Delivery Date', sortable: true, searchable: true },
  { id: 'action_allowed', label: 'Actions', sortable: false, searchable: false }
]

export default function Header(props: TableHeadProps) {
  const { order, orderBy, onRequestSort, onRequestSearch } =
    props;
  const createSortHandler =
    (property: keyof SortableFields) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const createSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRequestSearch(event);
  }
  const { classes } = useStyles();
  return (
    <TableHead className={classes.tableHeader}>
      <TableRow className={classes.titleRow}>
        {headCells.map((headCell, i) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={i === 0 ? { p: '15px 5px 10px 5px', pl: 2 } : { p: '15px 5px 10px 5px' }}
          >
            <Typography variant='body2' sx={{ fontWeight: '600', paddingLeft: '10px' }}>{headCell.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
      <TableRow className={classes.searchRow}>
        {headCells.map((headCell, i) => {
          return (
            <TableCell
              sx={
                i === 0 ? { p: '6px 5px', pl: 2 } : { p: '6px 5px' }}
            >
              {headCell.searchable &&
                <Box className={classes.searchBoxWrapper}>
                  <InputBase className={classes.searchBox}
                    placeholder="Search"
                    onChange={(e) => { createSearchHandler(e as React.ChangeEvent<HTMLInputElement>) }}
                  />
                </Box>}
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  );
}