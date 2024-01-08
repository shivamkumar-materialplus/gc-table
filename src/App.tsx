import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyTable from './Table';
import data1 from './data/MOCK_DATA.json'
import data2 from './data/MOCK_DATA2.json'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function App() {
  const [data, setdata] = React.useState(data1)
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Orders
        </Typography>
        <FormControl>
          <RadioGroup
            row
            onChange={(e, value) => {
              setdata(value === "1" ? data1 : data2);
            }}
            defaultValue="1"
          >
            <FormControlLabel value="1" control={<Radio />} label="Dataset 1" />
            <FormControlLabel value="2" control={<Radio />} label="Dataset 2" />
          </RadioGroup>
        </FormControl>
        <MyTable data={data} />
      </Box>
    </Container>
  );
}
