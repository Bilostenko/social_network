import React from 'react';
import './App.css';
import './reset.css'

import Header from '../header/Header';
import Nav from '../nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';
import News from '../news/News';
import Music from '../music/Music';
import Settings from '../set/Settings';

function App({ appState, addPost }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav navData = {appState} />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile postsData={appState.profilePage.postsData} addPost={addPost} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogsData={appState.messagesPage.dialogsData} messagesData={appState.messagesPage.messagesData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
