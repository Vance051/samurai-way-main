import {addPost, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export type RerenderEntireTreeType = (state: StateType) => void
export const rerenderEntireTree: RerenderEntireTreeType = (props) => {
    ReactDOM.render(
        <App
            state={props}
            addPost={addPost}
        />,
        document.getElementById('root')
    );
}