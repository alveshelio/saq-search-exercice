import { all, call } from "redux-saga/effects"

import searchResultsRootSaga from "../organisms/search-results/sagas/searchResultsSagas"

export default function* rootSaga(): any {
  yield all([call(searchResultsRootSaga)])
}
