import { Box, Typography } from '@mui/material'
import React from 'react'
import OrdersList from './OrdersList'

function Home() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Orders
      </Typography>
      {/* <MyTable data={data} /> */}
      <OrdersList />
    </Box>
  )
}

export default Home