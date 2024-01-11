import React from "react";
import { Box, ClickAwayListener, Link, Paper, Popper, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { Data, OrderStatus } from "../../utils/types";
import { COLOR } from "../../utils/constants";
import { formatDate } from "../../utils/helpers";
import ActionButtonMenu from "./ActionButtonMenu";
import { PopperArrowDownIcon } from "../../icons";

type Props = {
	row: Data;
	expandedRow: number | null;
	setExpandedRow: (rowNum: number | null) => any;
}

const getColor = (status: OrderStatus): string => {
	let color = COLOR.LIGHT_GRAY
	switch (status) {
		case "Order Downloaded":
		case "Due Date Negotiation":
		case "Order Shipped":
			color = COLOR.SKY_BLUE
			break;
		case "Order Uploaded":
			color = COLOR.YELLOW_ORANGE
			break;
		case "Completed":
			color = COLOR.PALE_GREEN
	}
	return color
}

export default function Row(props: Props) {
	const { row, expandedRow } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMouseLeave = () => {
		setAnchorEl(null);
	};

	const open = row.order_id === expandedRow

	return (
		<React.Fragment key={row.order_id}>
			<TableRow sx={{
				'& td': open ? {
					border: 0,
					backgroundColor: COLOR.NEAR_WHITE,
					verticalAlign: 'baseline',
				} : {},
			}} hover tabIndex={-1}>
				<TableCell>
					<Link href="#">{row.order_id}</Link>
				</TableCell>
				<TableCell>{row.patient_name}</TableCell>
				<TableCell>{row.created_by}</TableCell>
				<TableCell>{row.assigned_lab}</TableCell>
				<TableCell>
					<Box
						sx={{
							backgroundColor: getColor(row.order_status),
							borderRadius: '13px',
							padding: '5px 10px'
						}}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{row.order_status}
					</Box>
					<Popper
						id={row.order_id.toString()}
						open={Boolean(anchorEl)}
						anchorEl={anchorEl}
						placement="top"
						sx={{ zIndex: 2 }}
						modifiers={[
							{
								name: 'offset',
								options: {
									offset: [0, 10],
								},
							},
						]}
					>
						<ClickAwayListener onClickAway={handleMouseLeave}>
							<Paper elevation={3}>
								<Box data-popper-arrow sx={{ marginTop: '80px' }} >
									<PopperArrowDownIcon color={COLOR.LIGHT_GREEN} height={45} width={30} />
								</Box>
								<Box sx={{
									borderRadius: 1,
									p: "27px 19px",
									display: 'flex',
									flexDirection: 'column',
									backgroundColor: COLOR.LIGHT_GREEN
								}}>
									{/* @TODO: update order_journey as per actual data. */}
									<OrderJourneyPopper order_journey={["Order Uploaded", "Order Shipped", "Completed"]} />
								</Box>
							</Paper>
						</ClickAwayListener>
					</Popper>
				</TableCell>
				<TableCell>{row.restoration_type}</TableCell>
				<TableCell>{formatDate(row.created_date)}</TableCell>
				<TableCell>{formatDate(row.delivery_date)}</TableCell>
				<TableCell align="center">
					<ActionButtonMenu order_id={row.order_id} action_allowed={row.action_allowed} />
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

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
		<Box>
			{firstSvg(order_journey[0])}
			{order_journey.slice(1, order_journey.length - 1).map((order) => {
				return middleSvg(order);
			})}
			{lastSvg(order_journey[order_journey.length - 1])}
		</Box>)
}
