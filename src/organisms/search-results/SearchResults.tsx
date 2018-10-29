import * as React from "react"
import { connect } from "react-redux"

import styled from "../../templates/styled"
import BeverageCard from "../../molecules/beverage/BeverageCard"

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

const mapStateToProps = (state: SearchState) => ({
  beverages: state.search.searchResults.results,
  requestDuration: state.search.searchResults.requestDuration,
  totalCount: state.search.searchResults.totalCount,
})

const SearchResults: React.SFC<any> = ({ beverages, requestDuration, totalCount }) => (
  <SearchResultsContainer>
    {beverages &&
      beverages.map((beverage: Beverage) => {
        return (
          <BeverageCard
            key={beverage.UniqueId}
            title={beverage.Title}
            thumbnail={beverage.thumbnail}
            country={beverage.country}
            price={beverage.price}
            classification={beverage.classification}
            availability={beverage.availability}
          />
        )
      })}
  </SearchResultsContainer>
)

export default connect(mapStateToProps)(SearchResults)
