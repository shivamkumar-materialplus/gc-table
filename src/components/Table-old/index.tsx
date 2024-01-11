import React, { useState, useMemo, useEffect } from 'react'
import {
	Pagination, PaginationItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { COLOR } from '../../theme';
import { Data, Order, SortableFields } from '../../utils/types';
import { getComparator, stableSort } from '../../utils/helpers';
import MenuBox from '../../components/MenuBox';
import { LastIcon, NextIcon, PreviousIcon, FirstIcon } from '../../icons';
import Row from './Row';
import TableHeader from './Header';

const useStyles = makeStyles()((_defaultTheme, _props) => {
	return {
		dataTable: {
			'& table, th, td': {
				border: `solid 1px ${COLOR.LIGHT_GRAY}`,
				borderCollapse: 'collapse'
			},
			'& th': {
				padding: `10px`
			}
		},
		tableBody: {
			'& td': {
				padding: "10px 5px 5px 10px",
			}
		},
		pagination: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: '20px',
			'& button': {
				borderRadius: "6px",
				backgroundColor: COLOR.LIGHT_GREEN,
				color: COLOR.GC_GREEN_AA,
				fontSize: "16px",
				lineHeight: "26px",
				fontWeight: "600",
			},
		},
		paginationItem: {
			borderRadius: "8px",
		}
	}
})

type Props = {
	data: Data[]
}
export default function MyOldTable({ data }: Props) {
	const [showCompleted, setShowCompleted] = useState(true);
	const [searchText, setSearchText] = useState('');
	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<keyof SortableFields>('order_id');
	const [page, setPage] = useState(1);
	const [expandedRow, setExpandedRow] = useState<number | null>(null);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText((event.target).value);
		setPage(1);
	};

	const handleToggleFilter = () => {
		setShowCompleted(!showCompleted);
	};
	const rowsPerPage = 10;

	const rows = (showCompleted ? data : data.filter(item => item.order_status !== "Order completed"))
		.filter(
			(item) =>
				item.order_id.toString().includes(searchText) ||
				item.created_by.toLowerCase().includes(searchText.toLowerCase()) ||
				item.patient_id.toString().includes(searchText) ||
				item.patient_name.toLowerCase().includes(searchText.toLowerCase())
		);

	const { classes } = useStyles();

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (page) * rowsPerPage - rows.length) : 0;

	const visibleRows = useMemo(
		() =>
			stableSort<Data>(rows, getComparator(order, orderBy)).slice(
				(page - 1) * rowsPerPage,
				(page - 1) * rowsPerPage + rowsPerPage,
			),
		[order, orderBy, page, rowsPerPage, showCompleted, searchText, data],
	);

	// If dataset is changed, resetting the page number
	useEffect(() => {
		setPage(1);
	}, [data])

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof SortableFields,
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
		setExpandedRow(expandedRow); //Set it to null If you want it to collapse on page change
	};

	return (
		<>
			<MenuBox handleToggleFilter={handleToggleFilter} handleSearchChange={handleSearchChange} />
			<Paper elevation={3} sx={{ padding: 2, borderRadius: '30px' }}>
				<TableContainer className={classes.dataTable}>
					<Table stickyHeader>
						{/* Table Header */}
						<TableHeader
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
						/>
						{/* Table Body */}
						<TableBody className={classes.tableBody}>
							{visibleRows.map((row) =>
								<Row
									row={row}
									setExpandedRow={setExpandedRow}
									expandedRow={expandedRow}
								/>)}
							{emptyRows > 0 && (
								<TableRow
									style={{
										// Avoid a layout jump when reaching the last page with empty rows.
										// height of a row is 48
										height: (48) * emptyRows,
									}}
								>
									<TableCell colSpan={8} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>

				{/* For more customisation utilize usePagination hook */}
				<Pagination
					count={Math.ceil(rows.length / rowsPerPage)}
					onChange={handleChangePage}
					page={page}
					showFirstButton
					showLastButton
					color="primary"
					renderItem={(item) => <PaginationItem
						slots={{
							first: () => <FirstIcon color={item.disabled ? 'white' : ""} />,
							previous: () => <PreviousIcon color={item.disabled ? 'white' : ""} />,
							next: () => <NextIcon color={item.disabled ? 'white' : ""} />,
							last: () => <LastIcon color={item.disabled ? 'white' : ""} />
						}}
						{...item}
						className={classes.paginationItem} />}
					className={classes.pagination}
				/>
			</Paper>
		</>
	)
}