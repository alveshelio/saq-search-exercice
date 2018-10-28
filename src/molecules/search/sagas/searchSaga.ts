import { all, call, takeEvery } from "redux-saga/effects"

import { SEARCH_BEVERAGE } from "../constants/searchConstants"

export function* watchSearchBeverage(): any {
  console.warn(`redux-saga is running the ${SEARCH_BEVERAGE} action listener`)
}

export default function* rootSearchSaga(): any {
  yield all([call(watchSearchBeverage)])
}
