import React from 'react';
import './index.css';
import {state} from "./redux/state";
import {rerenderIntierTree} from "./render";

rerenderIntierTree(state)