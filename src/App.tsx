import * as React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderDetails from './pages/OrderDetails';
import Home from './pages/Home';

export default function App() {
  return (
    <Container maxWidth={"lg"} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order/:orderId" element={<OrderDetails />} />
          <Route path="*" element={<h1>Invalid Path</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
