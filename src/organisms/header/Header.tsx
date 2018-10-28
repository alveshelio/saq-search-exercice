import * as React from "react"
import { AppBar, Typography } from "@material-ui/core"

import styled from "../../templates/styled"
import SearchBar from "../../molecules/search/SearchBar"

const StyledAppBar = styled(AppBar)`
  grid-area: header;
`

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 70px;
  align-items: center;
  margin: 0 20px;
`

const Header = () => (
  <StyledAppBar position="static">
    <StyledHeader>
      <Typography variant="h6" color="inherit" noWrap={true}>
        SAQ Search
      </Typography>
      <SearchBar />
    </StyledHeader>
  </StyledAppBar>
)

export default Header
