import React, { useState } from "react";
import { useQueryParam } from "utils/hooks";
import Card from "@mui/material/Card";
import { makeStyles } from "tss-react/mui";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { top100Films } from "./top100films";
import {
  gsbpm,
  produits,
  services,
  statuts,
  utilisateurs,
} from "utils/mockData/treeData";

const useStyles = makeStyles()((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minWidth: 50,
  },
  card: {
    boxShadow: theme.shadows[4],
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  autocomplete: {
    paddingBottom: theme.spacing(1),
    minWidth: theme.spacing(10),
  },
}));

const renderTree = (nodes, nodeKey) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
    {Array.isArray(nodes[nodeKey])
      ? nodes[nodeKey].map((node) => renderTree(node, nodeKey))
      : null}
  </TreeItem>
);

const BlocFilter = () => {
  const { classes } = useStyles();

  const { get, post } = useQueryParam();
  const expanded = get("expanded");
  const selected = get("selected");

  const [value, setValue] = useState([]); // TODO Init value (when filter isnt empy at start)

  const handleAutocomplete = (_, newValue) => {
    setValue(newValue);
    post("filter")(newValue.map((e) => e.title));
  };

  const handleToggle = (_, nodeIds) => {
    console.log("handleToggle");
    post("expanded")(nodeIds);
  };

  const handleSelect = (_, nodeIds) => {
    console.log("handleSelect");
    post("selected")(nodeIds);
  };

  const handleCollapseClick = () => {
    post("expanded")([]);
  };

  const handleUnselectClick = () => {
    post("selected")([]);
  };

  return (
    <Box className={classes.box}>
      <Card className={classes.card}>
        <Autocomplete
          multiple
          className={classes.autocomplete}
          id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Produits, SGBPM, Jalons ..."
            />
          )}
          value={value}
          onChange={handleAutocomplete}
        />
        <Button onClick={handleCollapseClick} disabled={expanded.length === 0}>
          Tout réduire
        </Button>
        <Button onClick={handleUnselectClick} disabled={selected.length === 0}>
          Tout désélectionner
        </Button>
        <TreeView
          aria-label="services navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          {renderTree(gsbpm, gsbpm.nodeKey)}
          {renderTree(produits, produits.nodeKey)}
          {renderTree(services, services.nodeKey)}
          {renderTree(statuts, statuts.nodeKey)}
          {renderTree(utilisateurs, utilisateurs.nodeKey)}
        </TreeView>
      </Card>
    </Box>
  );
};

export default BlocFilter;
