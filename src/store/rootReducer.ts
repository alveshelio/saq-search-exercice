import { combineReducers } from "redux"
import header from "../organisms/header/reducers/headerRootReducer"
import search from "../organisms/search-results/reducers/searchResultsRootReducer"

export default combineReducers({
  header,
  search,
})
