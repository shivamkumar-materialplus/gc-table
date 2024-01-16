import React from 'react';

import { Box, Button } from '@mui/material';

import { FilterIcon } from '../../icons';
import { useStyles } from './index.styles';

function MenuBox() {
  const { classes } = useStyles();

  return (
    <Box className={classes.menuBox}>
      <Button variant="outlined" className={`${classes.button} ${classes.iconButton}`}>
        <FilterIcon />
      </Button>
      <Button variant="outlined" className={classes.button}>Sort By</Button>
      <Button variant="contained" className={`${classes.button} ${classes.addButton}`} color='primary'>
        Add Order
      </Button>
    </Box>
  )
}

export default MenuBox