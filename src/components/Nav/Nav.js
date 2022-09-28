import React from 'react';
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav-container'>
      <div>
        <h2>SportsDB</h2>
      </div>
      <div className='nav-elem'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Info</a>
      </div>
    </div>
  );
};

export default Nav;