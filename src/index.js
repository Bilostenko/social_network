import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

let postsData = [
  { id: 1, post: "Hi, how are you?", like: 10 },
  { id: 2, post: "It's my first message", like: 15 },
]

let dialogsData = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Lena"},
    {id: 3, name: "Nelson"},
    {id: 4, name: "Chester"},
  ]
  
  let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Call me!"},
  ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData = {dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);
