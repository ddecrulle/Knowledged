import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { makeStyles } from "tss-react/mui";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Autocomplete from "@mui/material/Autocomplete";
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

const useStyles = makeStyles()((theme) => (
  {
    box: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minWidth: 50,
    },
    card: {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
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
  }
));

const buildNode = (obj, key) => {
  if (!obj[key]) {
    return <TreeItem nodeId={obj.id} label={obj.label} />;
  } else {
    return (
      <TreeItem nodeId={obj.id} label={obj.label}>
        {obj[key].map((element) => {
          return buildNode(element, key);
        })}
      </TreeItem>
    );
  }
};

const BlocFilter = () => {
  // const [search, setSearch] = useSearchParams();
  const [value, setValue] = useState([]);

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const { classes } = useStyles();
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
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TreeView
          aria-label="services navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {buildNode(gsbpm, gsbpm.nodeKey)}
          {buildNode(produits, produits.nodeKey)}
          {buildNode(services, services.nodeKey)}
          {buildNode(statuts, statuts.nodeKey)}
          {buildNode(utilisateurs, utilisateurs.nodeKey)}
          
        </TreeView>
      </Card>
    </Box>
  );
};

export default BlocFilter;
