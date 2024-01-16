import React from 'react';

import { TableCell, TableRow } from "@mui/material";

import IconLabelButton from "../../../components/common/IconLabelButton";
import { NoteIcon } from "../../../icons";
import { TableRowProps } from "../../../utils/types";

const TableRowComponent: React.FC<TableRowProps> = ({ row }) => {
  return (
    <TableRow key={row.order_id}>
      <TableCell component="th" scope="row">
        {row.restoration_type}
      </TableCell>
      <TableCell>{row.tooth_area}</TableCell>
      <TableCell>{row.color}</TableCell>
      <TableCell>{row.material}</TableCell>
      <TableCell align="center"><IconLabelButton icon={<NoteIcon />} label='View Note' onClick={() => { }} /></TableCell>
    </TableRow>
  );
};

export default TableRowComponent