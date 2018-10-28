import { all, call } from "redux-saga/effects"

import searchSaga from "../molecules/search/sagas/searchSaga"
import searchResultsRootSaga from "../organisms/search-results/sagas/searchResultsSagas"

export default function* rootSaga(): any {
  yield all([call(searchSaga), call(searchResultsRootSaga)])
}
