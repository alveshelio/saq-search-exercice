import * as React from "react"
import * as ReactDOM from "react-dom"
import Routes from "./routes/Routes"
import { Provider } from "react-redux"

import createStore from "./store/createStore"

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
)
