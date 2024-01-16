import React from 'react';

import { Box, Link, TableCell, TableRow, Tooltip, tooltipClasses } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import ActionButtonMenu from '../../../components/common/ActionButtonMenu';
import OrderJourneyPopper from '../../../components/common/OrderJourneyPopper';
import { COLOR } from '../../../utils/constants';
import { formatDate, getColor } from '../../../utils/helpers';
import { TableRowProps } from '../../../utils/types';

const TableRowComponent: React.FC<TableRowProps> = ({ row }) => {
  return (
    <React.Fragment key={row.order_id}>
      <TableRow hover tabIndex={-1} key={row.order_id}>
        <TableCell align="center">
          <Link component={RouterLink} to={`/order/${row.order_id}`}>
            {row.order_id}
          </Link>
        </TableCell>
        <TableCell>{row.patient_name}</TableCell>
        <TableCell>{row.created_by}</TableCell>
        <TableCell>{row.assigned_lab}</TableCell>
        <TableCell align="center">
          <Tooltip
            placement="top"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  padding: 0,
                  marginBottom: '10px',
                  maxWidth: 'none',
                  '& .MuiTooltip-arrow': {
                    color: COLOR.LIGHT_GREEN,
                  },
                  '& .MuiTooltip-tooltipPlacementTop': {
                    marginBottom: '6px',
                  }
                },
              },
              popper: {
                sx: {
                  [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                  {
                    marginBottom: '6px',
                  },
                }
              }
            }}
            title={
              <OrderJourneyPopper order_journey={row.order_journey} />
            }
          >
            <Box
              sx={{
                backgroundColor: getColor(row.order_status),
                borderRadius: '13px',
                padding: '5px 10px',
                minWidth: 'max-content',
              }}
            >
              {row.order_status}
            </Box>
          </Tooltip>
        </TableCell>
        <TableCell>{row.restoration_type}</TableCell>
        <TableCell>{formatDate(row.created_date)}</TableCell>
        <TableCell>{formatDate(row.delivery_date)}</TableCell>
        <TableCell align="center">
          <ActionButtonMenu order_id={row.order_id} action_allowed={row.action_allowed} />
        </TableCell>
      </TableRow>
    </React.Fragment >
  );
};

export default TableRowComponent