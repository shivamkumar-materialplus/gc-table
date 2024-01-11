import React from 'react'
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { EditIcon, ViewIcon, ThreeDotsIcon } from '../../icons';
import { Data } from '../../utils/types-old';
import { COLOR } from '../../theme';

type IconLabelProps = {
	icon: React.JSX.Element;
	label: string;
	disabled?: boolean;
	onClick: () => any;
}
const IconLabelButton = ({ icon, label, disabled, onClick }: IconLabelProps) => {
	return (
		<IconButton
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: 0,
				borderRadius: 0,
			}}
			disabled={disabled}
			onClick={() => { onClick() }}
		>
			<Box sx={{ height: '12px', display: 'flex', alignItems: 'center' }}>
				{icon}
			</Box>
			<Typography variant="caption">{label}</Typography>
		</IconButton>
	);
};

type ActionButtonsProps = Pick<Data, "order_id" | "action_allowed">

const ActionButtonMenu = ({ order_id, action_allowed: actions }: ActionButtonsProps) => {
	return (
		<Stack direction="row" spacing={1}>
			<IconLabelButton icon={<EditIcon height={12} color={!actions.edit ? COLOR.DISABLED_GRAY : ""} />}
				label={"Edit"}
				disabled={!actions.edit}
				onClick={() => console.log("Editing " + order_id)}
			/>
			<IconLabelButton icon={<ViewIcon height={12} color={!actions.view ? COLOR.DISABLED_GRAY : ""} />}
				label={"View"}
				disabled={!actions.view}
				onClick={() => console.log("Viewing " + order_id)}
			/>
			<IconLabelButton icon={<ThreeDotsIcon color={!actions.delete ? COLOR.DISABLED_GRAY : ""} />}
				label={"More"}
				disabled={!actions.delete}
				onClick={() => console.log("Deleting" + order_id)}
			/>
		</Stack>
	)
}

export default ActionButtonMenu