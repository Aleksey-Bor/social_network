import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import store from "./Redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    console.log(state);
    console.log(store);
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById("root")
    );
};
console.log(store.getState());
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});



