import React from "react";
import { IconButton, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { CheveronDownIcon, CheveronRightIcon } from "@/icons";
import { Data } from "@/utils/types";
import { COLOR } from "@/theme";
import { formatDate } from "@/utils/helpers";
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
				<TableCell sx={{}}>
					<IconButton
						size="small"
						onClick={() => {
							setExpandedRow(open ? null : row.order_id)
						}}
					>
						{open ? <CheveronDownIcon /> : <CheveronRightIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{open
					? <Stack direction={"column"} gap={2}>
						<InfoBox label="Order Id" value={row.order_id} />
						<InfoBox label="Patient Id" value={row.patient_id} />
					</Stack>
					: row.order_id}
				</TableCell>
				<TableCell>{open
					? <Stack direction={"column"} gap={2}>
						<InfoBox label="Created By" value={row.created_by} />
						<InfoBox label="Patient Name" value={row.patient_name} />
					</Stack>
					: row.created_by}</TableCell>
				<TableCell>{open
					? <Stack direction={"column"} gap={2}>
						<InfoBox label="Assigned Lab" value={row.assigned_lab} />
						<InfoBox label="Date of Birth" value={row.date_of_birth} />
					</Stack>
					: row.assigned_lab}
				</TableCell>
				<TableCell sx={{ width: '205px' }}>{open
					? <Stack direction={"column"} gap={2}>
						<InfoBox label="Order Status" value={row.order_status} />
						<InfoBox label="Lab Information" value={row.lab_information} />
					</Stack>
					: row.order_status}</TableCell>
				<TableCell>{open
					? <InfoBox label="Created Date" value={formatDate(row.created_date)} />
					: formatDate(row.created_date)}</TableCell>
				<TableCell>{open
					? <InfoBox label="Delivery Date" value={formatDate(row.delivery_date)} />
					: formatDate(row.delivery_date)}</TableCell>
				<TableCell>{
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
