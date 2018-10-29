import { all, call, takeLatest } from "redux-saga/effects"
import { createRequestInstance, watchRequests } from "redux-saga-requests"
import { createDriver } from "redux-saga-requests-axios"
import axios from "axios"

import {
  SEARCH_BEVERAGES,
  CHANGE_NUMBER_OF_SEARCH_RESULTS,
} from "../constants/searchResultsContants"

// 1. The workers sagas
export function* searchBeverageAsync(action: any): any {
  console.warn("action in searchBeverageAsync", action)
  console.warn("Attempting to fetch the beverages via the API call")
}

export function* changeNumberOfSearchResultsAsync(): any {
  console.warn("Attempting to change the number of results to display")
}

// 2. The watchers sagas
export function* watchSearchBeverage(): any {
  yield takeLatest(SEARCH_BEVERAGES, searchBeverageAsync)
  console.warn(`redux-saga is running the ${SEARCH_BEVERAGES} action listener`)
}

export function* watchChangeNumberOfSearchResults(): any {
  yield takeLatest(CHANGE_NUMBER_OF_SEARCH_RESULTS, changeNumberOfSearchResultsAsync)
  console.warn(`redux-saga is running the ${CHANGE_NUMBER_OF_SEARCH_RESULTS} action listener`)
}

// 3. The root saga
// Single Entry point for the search sagas
export default function* searchResultsRootSaga(): any {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield all([watchRequests(), call(watchSearchBeverage), call(watchChangeNumberOfSearchResults)])
}
