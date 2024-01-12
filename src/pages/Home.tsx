import { Box, Typography } from '@mui/material'
import React from 'react'
import MyTable from '../components/Table'
import data from '../data/MOCK_DATA.json'

function Home() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Orders
      </Typography>
      <MyTable data={data} />
    </Box>
  )
}

export default Home