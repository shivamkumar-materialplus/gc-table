import React from 'react';

import { TableCell, TableRow, Typography } from "@mui/material";

import IconLabelButton from 'components/common/IconLabelButton';
import { NoteIcon } from 'icons';
import { COLOR } from 'utils/constants';
import { TableRowProps } from "utils/types";

const TableRowComponent: React.FC<TableRowProps> = ({ row }) => {
  return (
    <TableRow key={row.order_id}>
      <TableCell component="th" scope="row">
        {row.restoration_type}
      </TableCell>
      <TableCell>{row.tooth_area}</TableCell>
      <TableCell>{row.color}</TableCell>
      <TableCell>{row.material}</TableCell>
      <TableCell align="center">
        <IconLabelButton onClick={() => { }} >
          <NoteIcon />
          <Typography color={COLOR.GC_GREEN_AA} sx={{ textDecoration: 'underline' }}>View Note</Typography>
        </IconLabelButton>
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent