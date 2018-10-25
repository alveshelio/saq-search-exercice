import * as React from "react";
import { TextField } from "@material-ui/core";

import styled from "../../templates/styled";
import SearchMagnifierIcon from "../../atoms/SearchMagnifierIcon";

const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 4 / 8;
  grid-column-gap: 20px;
`;

const FormGroup = styled.div`
  grid-column: 1 / 11;
`;

const Label = styled.label`
  position: absolute;
  color: ${props => props.theme.reversedPrimary};
  top: 0;
  font-size: 16px;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease-out;
`;

const Input = styled(TextField)`
  & label {
    color: deeppink;
  }
  //padding: 20px 10px;
  //line-height: 28px;
  //width: 100%;
  //
  //&:placeholder-shown + label {
  //  opacity: 0;
  //  transform: translateY(1rem);
  //}
`;

class SearchBar extends React.Component {
  state = {
    searchValue: "",
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState(() => ({ searchValue: value }), () => console.log(this.state.searchValue));
  };

  render() {
    const { searchValue } = this.state;
    return (
      <StyledSearchBar>
        <FormGroup>
          <Input
            id="searchValue"
            name="searchValue"
            placeholder="Search a beverage"
            value={searchValue}
            type="search"
            fullWidth
            onChange={this.onChangeHandler}
          />
          <Label htmlFor="searchValue">Search a beverage</Label>
        </FormGroup>
        <SearchMagnifierIcon color="blue" />
      </StyledSearchBar>
    );
  }
}

export default SearchBar;
