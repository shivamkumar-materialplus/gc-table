import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { PreviousIcon } from '../icons';

type Props = {}

function OrderDetails({ }: Props) {
  let { orderId } = useParams();

  return (
    <>
      <Link to={'/'} component={RouterLink}>
        <Stack direction={'row'} alignItems={"center"} gap={1}>
          <PreviousIcon height={16} />
          Home
        </Stack>
      </Link>
      <Typography variant='h4' sx={{ pt: 4 }}>
        Order Details Page for orderId - {orderId}
      </Typography>
    </>
  )
}

export default OrderDetails