import * as React from "react";
import { AppBar, Typography } from "@material-ui/core";

import styled from "../../templates/styled";
import SearchBar from "../../molecules/search/SearchBar";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 70px;
  align-items: center;
  margin: 0 20px;
`;

const Header = () => (
  <AppBar position="static">
    <StyledHeader>
      <Typography variant="h6" color="inherit" noWrap={true}>
        SAQ Search
      </Typography>
      <SearchBar />
    </StyledHeader>
  </AppBar>
);

export default Header;
