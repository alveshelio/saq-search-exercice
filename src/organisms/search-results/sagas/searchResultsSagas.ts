import { all, call } from "redux-saga/effects"

export function* watchChangeNumberOfSearchResults(): any {
  console.warn("watchChangeNumberOfSearchResults is running")
}

export default function* searchResultsRootSaga(): any {
  console.warn("root saga")
  yield all([call(watchChangeNumberOfSearchResults)])
}
