import * as React from "react";
import MagnifyIcon from "@material-ui/icons/Search";

import styled from "../templates/styled";

interface SearchIconProps {
  color?: any;
  background?: string;
}

const MagnifierIcon = styled(MagnifyIcon)`
  grid-column: 11 / -1;
  color: ${(props: SearchIconProps) => (props.color ? props.color : "#fff")};
  background: ${(props: SearchIconProps) => (props.background ? props.background : "transparent")};
  padding: 10px;
  font-size: 28px;
  border-radius: 50%;
`;

const SearchMagnifierIcon: React.SFC<SearchIconProps> = ({ color, background }) => (
  <MagnifierIcon color={color} background={background} />
);

export default SearchMagnifierIcon;
