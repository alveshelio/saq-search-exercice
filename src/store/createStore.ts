import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware: any[] = [sagaMiddleware]
  const composeEnhancers = composeWithDevTools({})
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
