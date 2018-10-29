import { all, call, put, takeLatest } from "redux-saga/effects"
import { createRequestInstance, watchRequests } from "redux-saga-requests"
import { createDriver } from "redux-saga-requests-axios"
import axios from "axios"

// import { SEARCH_BEVERAGES,  } from "../constants/searchConstants"

// 1. The workers sagas
export function* searchBeverageAsync(): any {
  console.warn("Attempting to fetch the beverages via the API call")
}

// 2. The watchers sagas
export function* watchSearchBeverage(): any {
  // yield takeLatest(SEARCH_BEVERAGES, searchBeverageAsync)
  console.warn(`redux-saga is running the SEARCH_BEVERAGE action listener`)
}

// 3. The root saga
// Single Entry point for the search sagas
export default function* rootSearchSaga(): any {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield all([watchRequests(), call(watchSearchBeverage)])
}
