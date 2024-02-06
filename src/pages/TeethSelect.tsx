import React from 'react'

import { Box, Typography } from '@mui/material'
import TeethSelector from 'components/TeethSelector'

function TeethSelectPage() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Select a tooth
      </Typography>
      <TeethSelector />
    </Box>
  )
}

export default TeethSelectPage