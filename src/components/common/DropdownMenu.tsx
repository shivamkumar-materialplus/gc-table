import React, { ReactNode } from 'react';

import { Box, IconButton } from "@mui/material";

import { PopperArrowUpIcon } from 'icons';
import { COLOR } from 'utils/constants';
import DropDownComponent from './DropDownComponent';

type DropdownMenuProps = {
  clickableIcon: ReactNode
  children: ReactNode[]
}

const DropdownMenu = ({ children, clickableIcon }: DropdownMenuProps) => {
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
        {clickableIcon}
      </IconButton>
      <DropDownComponent
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          border: 1,
          borderRadius: 1,
          padding: "5px 10px",
          bgcolor: `${COLOR.WHITE}`,
          boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)'
        }}>
          <Box data-popper-arrow sx={{ marginTop: "-23px", cursor: 'pointer' }} onClick={handleClose}>{<PopperArrowUpIcon />}</Box>
          {children}
        </Box>
      </DropDownComponent>
    </>
  )
}

export default DropdownMenu