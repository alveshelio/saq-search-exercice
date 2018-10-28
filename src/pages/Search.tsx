import * as React from "react"

import styled from "../templates/styled"
import MainTemplate from "../templates/MainTemplate"
import Header from "../organisms/header/Header"
import SearchFilters from "../organisms/search-filters/SearchFilters"
import SearchResults from "../organisms/search-results/SearchResults"

interface SearchProps {
  title: string
}

const SearchPage = styled.main`
  display: grid;
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-areas:
    "header header"
    "searchFilters searchResults"
    "footer footer";
`

const Search: React.SFC<SearchProps> = () => (
  <MainTemplate>
    <SearchPage>
      <Header />
      <SearchFilters />
      <SearchResults />
    </SearchPage>
  </MainTemplate>
)

export default Search
