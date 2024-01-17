import React, { ReactNode } from 'react';

import { IconButton } from "@mui/material";

type IconLabelProps = {
  disabled?: boolean;
  onClick?: () => any;
  className?: string;
  children: ReactNode[]
}

const IconLabelButton = ({ disabled, onClick, className, children }: IconLabelProps) => {
  const [myicon, mylabel] = children;
  return (
    <IconButton
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        borderRadius: 0,
        backgroundColor: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {myicon}
      {mylabel}
    </IconButton>
  );
};

export default IconLabelButton