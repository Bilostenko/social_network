import React from 'react';
import './App.css';

import Header from '../header/Header';
import Nav from '../nav/Nav';
import Profile from '../profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
