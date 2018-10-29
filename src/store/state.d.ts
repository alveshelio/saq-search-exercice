declare interface HeaderState {
  header: {
    search: string
  }
}

declare interface SearchState {
  search: {
    searchResults: SearchResults
  }
}

declare interface RootState {
  header: HeaderState
  search: SearchState
}
