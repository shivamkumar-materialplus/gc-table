import React from "react";
import { Link, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { Data } from "../../utils/types";
import { COLOR } from "../../utils/constants";
import { formatDate } from "../../utils/helpers";
import ActionButtonMenu from "./ActionButtonMenu";

type Props = {
	row: Data;
	expandedRow: number | null;
	setExpandedRow: (rowNum: number | null) => any;
}

export default function Row(props: Props) {
	const { row, setExpandedRow, expandedRow } = props;

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
				<TableCell>{row.order_status}</TableCell>
				<TableCell>{row.restoration_type}</TableCell>
				<TableCell>{formatDate(row.created_date)}</TableCell>
				<TableCell>{formatDate(row.delivery_date)}</TableCell>
				<TableCell align="center">{
					<>
						{open && <InfoBox label="Actions" />}
						<ActionButtonMenu order_id={row.order_id} action_allowed={row.action_allowed} />
					</>
				}</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const InfoBox = ({ label, value }: { label: string, value?: string | number }) => (
	<Stack direction={"column"}>
		<Typography variant="body2" sx={{ fontWeight: 'bold' }}>{label}</Typography>
		{value && <Typography variant="body2">{value}</Typography>}
	</Stack>
)
