import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap={true}>
        SAQ Search
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
