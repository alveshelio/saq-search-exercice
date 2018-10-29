import * as React from "react"
import { TextField } from "@material-ui/core"

import styled from "../../templates/styled"
import SearchMagnifierIcon from "../../atoms/SearchMagnifierIcon"

const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 5 / 9;
  grid-column-gap: 20px;
`

const FormGroup = styled.div`
  grid-column: 1 / 11;
`

const Input = styled(TextField)`
  & input {
    color: ${props => props.theme.reversedPrimary};
    border-bottom: 2px solid ${props => props.theme.reversedPrimary};
  }
  & input:hover {
    border-bottom: 2px solid ${props => props.theme.reversedPrimary};
  }
`

class SearchBar extends React.Component<any> {
  state = {
    searchValue: "",
  }

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    this.setState(() => ({ searchValue }))
  }

  render() {
    const { searchValue } = this.state
    console.warn("this.props", this.props)
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
        </FormGroup>
        <SearchMagnifierIcon color="blue" background="#fff" searchTerm={searchValue} />
      </StyledSearchBar>
    )
  }
}

export default SearchBar
