import React from 'react';
import "./nav.css"

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className="item">
        <li><a href="/profile">Profile</a></li>
        <li><a href="/dialogs">Messages</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/music">Music</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  )
}


export default Nav