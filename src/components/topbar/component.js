import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import logo from "img/image.svg";
import { makeStyles, withStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      position: "relative",
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.grey["100"]}`,
      backgroundColor: "white",
    },
    inline: {
      display: "inline",
    },
    flex: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      },
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    productLogo: {
      display: "inline-block",
      borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
      marginLeft: 32,
      paddingLeft: 24,
      [theme.breakpoints.up("md")]: {
        paddingTop: "1.5em",
      },
    },
    tagline: {
      display: "inline-block",
      marginLeft: 10,
      [theme.breakpoints.up("md")]: {
        paddingTop: "0.8em",
      },
    },
    iconContainer: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    iconButton: {
      float: "right",
    },
    tabContainer: {
      marginLeft: 32,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    tabItem: {
      paddingTop: 20,
      paddingBottom: 20,
      minWidth: "auto",
    },
  };
});

const Menu = [
  {
    label: "Home",
    pathname: "/",
  },
  {
    label: "Devices",
    pathname: "/devices",
  },
  /*
  {
    label: "Users",
    pathname: "/users"
  },
  */
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={10} alignItems="baseline">
          <Grid item xs={12} className={classes.flex}>
            <div className={classes.inline}>
              <Typography variant="h6" color="inherit" noWrap>
                <div className={classes.link}>
                  <img width={20} src={logo} alt="knowledge logo" />
                  <span className={classes.tagline}>Knowledge</span>
                </div>
              </Typography>
            </div>
            <>
              <div className={classes.productLogo}>
                <Typography>Offre de Service Métallica</Typography>
              </div>
              <div className={classes.iconContainer}>
                <IconButton
                  onClick={() => setOpen(true)}
                  className={classes.iconButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.tabContainer}>
                <SwipeableDrawer
                  anchor="right"
                  open={open}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                >
                  <AppBar title="Menu" />
                  <List>
                    {Menu.map((item, index) => (
                      <ListItem
                        // component={item.external ? MaterialLink : Link}
                        href={item.external ? item.pathname : null}
                        // to={
                        //   item.external
                        //     ? null
                        //     : {
                        //         pathname: item.pathname,
                        //         search: this.props.location.search,
                        //       }
                        // }
                        button
                        key={item.label}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </SwipeableDrawer>
                <Tabs
                  // value={this.current() || this.state.value}
                  indicatorColor="primary"
                  textColor="primary"
                  // onChange={this.handleChange}
                >
                  {Menu.map((item, index) => (
                    <Tab
                      key={`primary-${index}`}
                      href={item.external ? item.pathname : null}
                      // to={
                      //   item.external
                      //     ? null
                      //     : {
                      //         pathname: item.pathname,
                      //         search: null,
                      //       }
                      // }
                      classes={classes.tabItem}
                      label={item.label}
                    />
                  ))}
                </Tabs>
              </div>
            </>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
