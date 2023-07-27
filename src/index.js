import state, {subscribe} from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { addPost, addMessage } from "./components/redux/state";



export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} addMessage={addMessage}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)