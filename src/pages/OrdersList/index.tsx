import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import DataTable from '../../components/DataTable';
import TableHeader from '../../components/DataTable/TableHeader';
import MenuBox from '../../components/MenuBox';
import data1 from '../../data/MOCK_DATA.json';
import TableRowComponent from './ui/TableRow';


export default function OrdersList() {
  const columns = [
    { id: 'order_id', label: 'Order ID', },
    { id: "patient_name", label: 'Patient Name', },
    { id: 'created_by', label: 'Created By', },
    { id: 'assigned_lab', label: 'Assigned Lab', },
    { id: 'order_status', label: 'Order Status', },
    { id: 'restoration_type', label: 'Restoration Type', },
    { id: 'created_date', label: 'Created Date', },
    { id: 'delivery_date', label: 'Delivery Date', },
    { id: 'action_allowed', label: 'Actions' }
  ];

  const [data, setData] = useState<any[]>([]);
  // @TODO : CHECK if filters works well as individual columns have search.
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `https://api.example.com/data?search=${searchText}&page=${page + 1}&perPage=${rowsPerPage}`
        // );
        // setData(response.data);
        setData(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [searchText, page, rowsPerPage]);

  const handleSearchChange = (columnName: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnName]: value,
    }));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Orders
      </Typography>
      <MenuBox />
      <DataTable
        columns={columns}
        data={data}
        renderHeader={(columns) => <TableHeader columns={columns} />}
        renderRow={(row) => <TableRowComponent row={row} />}
        searchText={searchText}
        onSearchChange={handleSearchChange}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ borderRadius: '30px', boxShadow: '2px 6px 33px 0px rgba(0, 0, 0, 0.25)' }}
      />
    </Box>
  );
}