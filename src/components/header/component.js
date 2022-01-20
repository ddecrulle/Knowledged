import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import knowledgeLogo from "img/knowledge.svg";
const Header = () => {
  return (
    <header className="App-header">
      ©
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={knowledgeLogo} alt="knowledge logo" />
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
