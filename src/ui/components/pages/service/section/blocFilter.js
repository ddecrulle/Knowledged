import React from 'react';
import { makeStyles } from 'tss-react/mui';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { top100Films } from './top100films';

const renderTree = (nodes) => (
	<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
		{Array.isArray(nodes['children'])
			? nodes['children'].map((node) => renderTree(node))
			: null}
	</TreeItem>
);

const BlocFilter = ({ treeState, setTreeState, hierarchy }) => {
	const { classes } = useStyles();

	const handleAutocomplete = (_, newValue) => {
		setTreeState('filtered', newValue);
	};

	const handleToggle = (_, nodeIds) => {
		setTreeState('expanded', nodeIds);
	};

	const handleSelect = (e, nodeIds) => {
		setTreeState('selected', nodeIds);
	};

	const handleCollapseClick = () => {
		setTreeState('expanded', []);
	};

	const handleUnselectClick = () => {
		setTreeState('selected', []);
	};

	return (
		<>
			<Autocomplete
				multiple
				className={classes.autocomplete}
				id='tags-standard'
				options={top100Films}
				getOptionLabel={(option) => option.title}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='outlined'
						label='Produits, GSBPM, Jalons ...'
					/>
				)}
				value={treeState.filtered}
				onChange={handleAutocomplete}
				disabled
			/>
			<Button
				onClick={handleCollapseClick}
				disabled={treeState.expanded.length === 0}
			>
				Tout réduire
			</Button>
			<Button
				onClick={handleUnselectClick}
				disabled={treeState.selected.length === 0}
			>
				Tout désélectionner
			</Button>
			<TreeView
				aria-label='services navigator'
				defaultCollapseIcon={<ExpandMoreIcon />}
				defaultExpandIcon={<ChevronRightIcon />}
				expanded={treeState.expanded}
				selected={treeState.selected}
				onNodeToggle={handleToggle}
				onNodeSelect={handleSelect}
				multiSelect
			>
				{hierarchy.map((item) => renderTree(item))}
			</TreeView>
		</>
	);
};

export default BlocFilter;

const useStyles = makeStyles()((theme) => ({
	box: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		minWidth: 50,
	},
	card: {
		boxShadow: theme.shadows[4],
		[theme.breakpoints.up('xs')]: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
		},
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(2),
			paddingBottom: theme.spacing(2),
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
		},
		maxWidth: 1280,
		width: '100%',
	},
	autocomplete: {
		paddingBottom: theme.spacing(1),
		minWidth: theme.spacing(10),
	},
}));
