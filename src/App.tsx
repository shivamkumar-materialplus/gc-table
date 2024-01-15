import Container from '@mui/material/Container';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OrderDetailsPage from './pages/OrderDetails';

export default function App() {
  return (
    <Container maxWidth={"lg"} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order/:orderId" element={<OrderDetailsPage />} />
          <Route path="*" element={<h1>Invalid Path</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
