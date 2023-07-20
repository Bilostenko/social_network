import React from 'react';
import Friends from './friends/Friends';
import "./nav.css"

const Nav = ({navData}) => {
  return (
    <div>
      <nav className='nav'>
        <ul className="item">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dialogs">Messages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
      <div className="sidebar">
        <Friends friendsData={navData.friends}/>
      </div>
    </div>
  )
}


export default Nav