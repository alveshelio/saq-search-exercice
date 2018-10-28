import * as React from "react"
import MagnifyIcon from "@material-ui/icons/Search"
import { lighten } from "polished"

import styled from "../templates/styled"

interface SearchIconProps {
  color?: any
  background?: string
}

const MagnifierIconWrapper = styled.div`
  grid-column: 11 / -1;
  color: ${(props: SearchIconProps) => (props.color ? props.color : "#fff")};
  background: ${(props: SearchIconProps) => (props.background ? props.background : "transparent")};
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: border-radius 0.3s;

  &:hover {
    border-radius: 50%;
    color: ${props => lighten(0.3, props.theme.primary)};
  }
`

const SearchMagnifierIcon: React.SFC<SearchIconProps> = ({ color, background }) => (
  <MagnifierIconWrapper color={color} background={background}>
    <MagnifyIcon />
  </MagnifierIconWrapper>
)

export default SearchMagnifierIcon
