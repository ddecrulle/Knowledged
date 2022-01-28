import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";
import GithubIcon from "@mui/icons-material/GitHub";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import logo from "img/image.svg";
import { Menu, SecondaryMenu } from "utils/dictionary/menu";
import { Link ,useLocation} from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      position: "relative",
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.grey["100"]}`,
      backgroundColor: "white",
      [theme.breakpoints.up("md")]: {
        paddingRigth: 120,
        paddingLeft: 120,
      },
    },
    inline: {
      display: "inline",
    },
    flex: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-evenly",
      },
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    productLogo: {
      display: "inline-block",
      borderLeft: `1px solid ${theme.palette.grey["A400"]}`,
      marginLeft: 32,
      paddingLeft: 24,
      // [theme.breakpoints.up("md")]: {
      //   paddingTop: "1.5em",
      // },
    },
    tagline: {
      display: "inline-block",
      marginLeft: 10,
      // [theme.breakpoints.up("md")]: {
      //   paddingTop: "0.8em",
      // },
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
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
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

const Header = () => {
  const location = useLocation()

  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={10} alignItems="baseline">
          <Grid item xs={12} className={classes.flex}>
            <div className={classes.inline}>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/" className={classes.link}>
                  <img width={20} src={logo} alt="knowledge logo" />
                  <span className={classes.tagline}>Knowledge</span>
                </Link>
              </Typography>
            </div>
            <>
              <div className={classes.productLogo}>
                <Typography>Métallica</Typography>
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
                        component={item.external ? MaterialLink : Link}
                        href={item.external ? item.pathname : null}
                        to={item.external ? null : item.pathname}
                        onClick={() => setOpen(false)}
                        button
                        key={item.label}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                    <Divider />
                  </List>
                  <List>
                    {SecondaryMenu.map((item, index) => (
                      <ListItem
                        component={item.external ? MaterialLink : Link}
                        href={item.external ? item.pathname : null}
                        to={item.external ? null : item.pathname}
                        button
                        key={item.label}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                    <Divider />
                  </List>
                </SwipeableDrawer>
                <Tabs
                  value={location.pathname}
                  indicatorColor="primary"
                  textColor="primary"
                  // onChange={handleChange}
                >
                  {Menu.map((item, index) => (
                    <Tab
                      key={`primary-${index}`}
                      value={item.pathname}
                      component={item.external ? MaterialLink : Link}
                      href={item.external ? item.pathname : null}
                      to={item.external ? null : item.pathname}
                      classes={classes.tabItem}
                      label={item.label}
                    />
                  ))}
                </Tabs>
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  // onChange={this.handleChangeSecondary}
                >
                  {SecondaryMenu.map((item, index) => (
                    <Tab
                      iconContainer
                      key={`secondary-${index}`}
                      component={item.external ? MaterialLink : Link}
                      href={item.external ? item.pathname : null}
                      to={item.external ? null : item.pathname}
                      classes={classes.tabItem}
                      label={
                        <div>
                          {item.label}{" "}
                          {item.icon === "github" && (
                            <GithubIcon
                              style={{ marginLeft: 5, verticalAlign: "sub" }}
                            />
                          )}
                        </div>
                      }
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
