import * as React from "react"

import styled from "../../templates/styled"

const SearchFiltersContainer = styled.aside`
  grid-area: searchFilters;
  background: orange;
  padding: 0 20px;
`

// interface SearchFiltersProps {}

const SearchFilters: React.SFC<any> = () => (
  <SearchFiltersContainer>
    <h1>SearchFilters</h1>
  </SearchFiltersContainer>
)

export default SearchFilters
