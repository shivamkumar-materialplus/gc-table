import { Box, Paper } from '@mui/material'
import React from 'react'
import { COLOR } from '../../utils/constants'
import { getColor } from '../../utils/helpers'
import { OrderStatus } from "../../utils/types"

const OrderJourneyPopper = ({ order_journey }: { order_journey: OrderStatus[] }) => {
  const firstSvg = (status: OrderStatus) => <svg xmlns="http://www.w3.org/2000/svg" width="167" height="37" viewBox="0 0 167 37" fill="none">
    <path d="M0.5 0.5H151.483L166.351 18.5L151.483 36.5H0.5V18.5V0.5Z" fill={getColor(status) || "#FFCA7A"} stroke="black" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="14">
      {status}
    </text>
  </svg>
  const middleSvg = (status: OrderStatus) => <svg xmlns="http://www.w3.org/2000/svg" width="167" height="37" viewBox="0 0 167 37" fill="none">
    <path d="M151.483 36.5H1.06842L15.8209 18.8203L16.0882 18.5L15.8209 18.1797L1.06842 0.5H151.483L166.351 18.5L151.483 36.5Z" fill={getColor(status) || "#AAE8F6"} stroke="black" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="14">
      {status}
    </text>
  </svg>
  const lastSvg = (status: OrderStatus) => <svg xmlns="http://www.w3.org/2000/svg" width="219" height="37" viewBox="0 0 219 37" fill="none">
    <path d="M1.2487 0.5H218.5V18.5V36.5H1.2487L19.7422 18.8618L20.1216 18.5L19.7422 18.1382L1.2487 0.5Z" fill={getColor(status) || "#DBDBDB"} stroke="black" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="14">
      {status}
    </text>
  </svg>

  return (
    <Paper sx={{
      borderRadius: 1,
      p: "27px 19px",
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: COLOR.LIGHT_GREEN,
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)'
    }}>
      <Box>
        {firstSvg(order_journey[0])}
        {order_journey.slice(1, order_journey.length - 1).map((order) => {
          return middleSvg(order);
        })}
        {lastSvg(order_journey[order_journey.length - 1])}
      </Box>
    </Paper >)
}

export default OrderJourneyPopper