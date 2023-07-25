// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/app/App';

import {rerenderEntireTree} from "./components/render"
import state from './components/redux/state';


rerenderEntireTree(state)