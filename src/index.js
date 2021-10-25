import React from "react";
import ReactDOM from "react-dom";
import store from "./Redux/redux-store";
import App from "./App";
import { HashRouter } from "react-router-dom"; //We use HashRouter for hosting on github. In the usual case, we use BrowserRouter.
import { Provider } from "react-redux";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
