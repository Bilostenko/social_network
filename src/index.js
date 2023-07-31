import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import store from './components/redux/state';
export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    
    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)} /> 
      {/* .bind надо для привязки вд даном случае к store */}
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)