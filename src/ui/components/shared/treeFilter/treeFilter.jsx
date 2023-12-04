import { makeStyles } from 'tss-react/mui';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TypographyWithMarkdown } from '../typographyWithMarkdown';

const renderTree = (nodes) => (
  <TreeItem
    key={nodes.id}
    nodeId={nodes.id}
    label={<TypographyWithMarkdown>{nodes.label}</TypographyWithMarkdown>}
  >
    {Array.isArray(nodes['children'])
      ? nodes['children'].map((node) => renderTree(node))
      : null}
  </TreeItem>
);

export const TreeFilter = ({
  treeState,
  setTreeState,
  tree,
  autoComplete,
  // eslint-disable-next-line no-unused-vars
  onSelect = (_nodeId) => null,
}) => {
  const { classes } = useStyles();

  const handleAutocomplete = (_, newValue) => {
    setTreeState('filtered', newValue);
  };

  const handleToggle = (_, nodeIds) => {
    setTreeState('expanded', nodeIds);
  };

  const handleSelect = (_, nodeIds) => {
    setTreeState('selected', nodeIds);
    onSelect(nodeIds);
  };

  const handleCollapseClick = () => {
    setTreeState('expanded', []);
  };

  const handleUnselectClick = () => {
    setTreeState('selected', []);
  };

  return (
    <>
      {autoComplete.isEnabled && (
        <Autocomplete
          multiple
          className={classes.autocomplete}
          id='tags-standard'
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              label={autoComplete.label}
            />
          )}
          options={[]}
          value={treeState.filtered}
          onChange={handleAutocomplete}
          disabled
        />
      )}

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
        {tree.map((item) => renderTree(item))}
      </TreeView>
    </>
  );
};

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
