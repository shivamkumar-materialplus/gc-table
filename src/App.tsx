import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import MyOldTable from './components/Table-old';
import data1 from './data/MOCK_DATA.json'
import MyTable from './components/Table';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Orders
        </Typography>
        {/* <MyOldTable data={data} /> */}
        <MyTable data={data1} />
      </Box>
    </Container>
  );
}
