import * as React from "react";
import styled from "../templates/styled-components";

interface SearchIconProps {
  color?: string;
  background?: string;
}

const MagnifierIcon = styled<SearchIconProps, "div">("div")`
  display: inline-block;
  color: ${props => (props.color ? props.color : "#fff")};
  background: ${props => (props.background ? props.background : "transparent")};
`;

const SearchMagnifierIcon: React.SFC<SearchIconProps> = ({ color, background }) => (
  <div>
    <MagnifierIcon color={color} background={background} />
  </div>
);

export default SearchMagnifierIcon;
