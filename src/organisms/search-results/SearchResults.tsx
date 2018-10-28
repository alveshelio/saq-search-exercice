import * as React from "react"

import styled from "../../templates/styled"
import BeverageCard from "../../molecules/beverage/BeverageCard"

// interface SearchResultsProps {}

const SearchResultsContainer = styled.div`
  display: grid;
  grid-area: searchResults;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, 450px);
  overflow-y: auto;
  grid-gap: ${props => props.theme.gap};
  background: ${props => props.theme.bgColor};
  padding: ${props => props.theme.gap};
`

const SearchResults: React.SFC<any> = () => (
  <SearchResultsContainer>
    {["one", "two", "three", "four", "five", "six", "seven", "height"].map(item => {
      return <BeverageCard key={item} title={item} />
    })}
  </SearchResultsContainer>
)

export default SearchResults
