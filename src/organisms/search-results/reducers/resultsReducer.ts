import { success, error } from "redux-saga-requests"
import { SEARCH_BEVERAGES } from "../constants/searchResultsContants"

const defaultState: SearchResults = {
  requestDuration: 0,
  results: [],
  termsToHighlight: [],
  totalCount: 0,
  totalCountFiltered: 0,
  fetching: false,
  error: false,
}

const sanitizeResults = (results: Beverage[]) =>
  results.map((beverage: Beverage) => ({
    ClickUri: beverage.ClickUri,
    Excerpt: beverage.Excerpt,
    PrintableUri: beverage.PrintableUri,
    Title: beverage.Title,
    UniqueId: beverage.UniqueId,
    Uri: beverage.Uri,
    absentTerms: beverage.absentTerms,
    childResults: beverage.childResults,
    clickUri: beverage.clickUri,
    excerpt: beverage.excerpt,
    printableUri: beverage.printableUri,
    rating: beverage.rating,
    thumbnail: beverage.raw.tpthumbnailuri,
    price: beverage.raw.tpprixnormal,
    classification: beverage.raw.tpclassification,
    availability: beverage.raw.tpdisponibilite,
    country: beverage.raw.tppays,
  }))

export default (state: SearchResults = defaultState, action: any) => {
  switch (action.type) {
    case SEARCH_BEVERAGES:
      return { ...state, fetching: true }
    case success(SEARCH_BEVERAGES):
      return {
        ...state,
        requestDuration: action.data.requestDuration,
        totalCount: action.data.totalCount,
        totalCountFiltered: action.data.totalCountFiltered,
        termsToHighlight: action.data.termsToHighlight,
        results: sanitizeResults(action.data.results),
        fetching: false,
      }
    case error(SEARCH_BEVERAGES):
      return { ...defaultState, error: true, fetching: false }
    default:
      return state
  }
}
