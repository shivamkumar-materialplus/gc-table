import React from 'react';

import { IconButton, Typography } from "@mui/material";
import { COLOR } from "../../utils/constants";

type IconLabelProps = {
  icon: React.JSX.Element;
  label: string;
  disabled?: boolean;
  onClick: () => any;
  classes?: string
}

const IconLabelButton = ({ icon, label, disabled, onClick, classes }: IconLabelProps) => {
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
      className={classes}
    >
      {icon}
      <Typography color={COLOR.GC_GREEN_AA} sx={{ textDecoration: 'underline' }}>{label}</Typography>
    </IconButton>
  );
};

export default IconLabelButton