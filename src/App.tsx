import Container from '@mui/material/Container';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetailsPage from './pages/OrderDetails';
import OrdersList from './pages/OrdersList';

export default function App() {
  return (
    <Container maxWidth={"lg"} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrdersList />} />
          <Route path="order/:orderId" element={<OrderDetailsPage />} />
          <Route path="*" element={<h1>Invalid Path</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
