import {addPost, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export type RerenderIntierTreeType = (state: StateType) => void
export const rerenderIntierTree: RerenderIntierTreeType = (props) => {
    ReactDOM.render(
        <App
            state={props}
            addPost={addPost}
        />,
        document.getElementById('root')
    );
}