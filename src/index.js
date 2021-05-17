import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import store from "./Redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById("root")
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});



