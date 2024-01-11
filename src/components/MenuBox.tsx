import React, { useState } from 'react'
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { SearchIcon, FilterIcon } from '../icons'
import { COLOR } from '../theme'


const useStyles = makeStyles()((_defaultTheme, _props) => {
	return {
		menuBox: {
			display: 'flex',
			gap: 20,
			marginBottom: '8px'
		},
		searchBox: {
			display: 'flex',
			border: `solid ${COLOR.LIGHT_GRAY} 1px`,
			borderRadius: 20,
			height: 32,
			width: 480
		},
		inputBox: {
			fontSize: 14,
			padding: 4
		},
		addButton: {
			borderRadius: 40,
			marginLeft: 'auto',
			padding: '4px 16px',
		}
	}
})

type CheckBoxStyleProps = {
	isChecked: boolean
}
const useCheckBoxStyles = makeStyles<CheckBoxStyleProps>()((defaultTheme, props) => {
	const { isChecked } = props
	return {
		checkButton: {
			backgroundColor: isChecked ? COLOR.GC_GREEN_AA : 'transparent',
			color: isChecked ? 'white' : COLOR.GC_GREEN_AA,
			border: `solid ${COLOR.GC_GREEN_AA} 1px`,
			borderRadius: 40,
			textTransform: 'none',
			display: 'flex',
			alignItems: 'center',
			padding: `0 20px`,
			cursor: 'pointer'
		}
	}
})

const CheckboxButton = ({ handleToggleFilter }: { handleToggleFilter: () => void }) => {
	const [isChecked, setIsChecked] = useState(false);

	const { classes } = useCheckBoxStyles({ isChecked });

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		handleToggleFilter()
	};

	return (
		<Box
			onClick={handleCheckboxChange}
			className={classes.checkButton}
		>
			<Typography>open orders only</Typography>
		</Box>
	);
};

type Props = {
	handleToggleFilter: () => void
	handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function MenuBox({ handleToggleFilter, handleSearchChange }: Props) {
	const { classes } = useStyles();

	return (
		<Box className={classes.menuBox}>
			<Box className={classes.searchBox}>
				<InputBase className={classes.inputBox} sx={{ ml: 1, flex: 1 }}
					placeholder="Search"
					onChange={(e) => { handleSearchChange(e as React.ChangeEvent<HTMLInputElement>) }}
				/>
				<IconButton type="button" sx={{ p: '10px' }}>
					<SearchIcon color={COLOR.GC_GREEN_AA} />
				</IconButton>
			</Box>
			<CheckboxButton handleToggleFilter={handleToggleFilter} />
			<IconButton type="button"
				sx={{ outline: `solid ${COLOR.GC_GREEN_AA} 1px`, borderRadius: '10px' }}
				onClick={() => console.log("filter clicked")}
			>
				<FilterIcon width={15} height={17} />
			</IconButton>
			<Button variant="contained" className={classes.addButton} color='primary'>
				Add Order
			</Button>
		</Box>
	)
}

export default MenuBox