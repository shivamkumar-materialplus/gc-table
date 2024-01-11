import React from 'react'
import { Box, ClickAwayListener, IconButton, Link, Popper, Typography } from "@mui/material";
import { KebabThreeDotsIcon, PopperArrowUpIcon } from '../../icons';
import { Data } from '../../utils/types';
import { COLOR } from '../../utils/constants';

type IconLabelProps = {
  icon: React.JSX.Element;
  label: string;
  disabled?: boolean;
  onClick: () => any;
}

type ActionButtonsProps = Pick<Data, "order_id" | "action_allowed">

const ActionButtonMenu = ({ order_id, action_allowed: actions }: ActionButtonsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const id = open ? 'action-menu' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-describedby={id}
      >
        <KebabThreeDotsIcon />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [23, 0],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box sx={{ border: 1, borderRadius: 1, padding: "5px 10px", display: 'flex', flexDirection: 'column', bgcolor: `${COLOR.WHITE}` }}>
            <Box data-popper-arrow sx={{ marginTop: "-23px", cursor: 'pointer' }} onClick={handleClose}>{<PopperArrowUpIcon />}</Box>
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              console.log("order_id" + order_id)
            }}>View Details</Link>
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              console.log("order_id" + order_id)
            }}>Download Files</Link>
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              console.log("order_id" + order_id)
            }}>Download Form</Link>
          </Box>

        </ClickAwayListener>
      </Popper>
    </>
  )
}

export default ActionButtonMenu