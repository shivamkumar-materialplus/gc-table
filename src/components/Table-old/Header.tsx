import React from 'react'
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { HeadCell, Order, SortableFields } from "../../utils/types-old";
import { COLOR } from '../../utils/constants';
import { SortIcon, SortArrowDownIcon, SortArrowUpIcon } from "../../icons";


interface TableHeadProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof SortableFields) => void;
	order: Order;
	orderBy: string;
}

const headCells: HeadCell[] = [
	{
		id: 'order_id',
		label: 'Order ID',
		sortable: true,
	},
	{
		id: 'created_by',
		label: 'Created By',
		sortable: true,
	},
	{
		id: 'assigned_lab',
		label: 'Assigned Lab',
		sortable: true,
	},
	{
		id: 'order_status',
		label: 'Clinic Order Status',
		sortable: true,
	},
	{
		id: 'created_date',
		label: 'Created Date',
		sortable: true,
	},
	{
		id: 'delivery_date',
		label: 'Delivery Date',
		sortable: true,
	},
	{
		id: 'action_allowed',
		label: 'Actions',
		sortable: false,
	}
]

export default function Header(props: TableHeadProps) {
	const { order, orderBy, onRequestSort } =
		props;
	const createSortHandler =
		(property: keyof SortableFields) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead>
			<TableRow>
				<TableCell sx={{ backgroundColor: COLOR.LIGHT_GREEN }} />
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						sortDirection={orderBy === headCell.id ? order : false}
						sx={{ backgroundColor: COLOR.LIGHT_GREEN }}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id as keyof SortableFields)}
							disabled={!headCell.sortable}
							sx={{ display: 'flex', justifyContent: 'space-between' }}
							IconComponent={() => {
								if (!headCell.sortable) {
									return null;
								}
								return (
									orderBy === headCell.id && order === 'asc'
										? <SortArrowDownIcon />
										: orderBy === headCell.id && order === 'desc'
											? <SortArrowUpIcon />
											: <SortIcon />
								);
							}}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}