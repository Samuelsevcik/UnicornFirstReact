import React, { Component } from 'react'

const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered');

    return ( 
      <nav className="navbar navbar-dark bg-dark">
        <a href="app.js" className="navbar-brand ms-2">Navbar<span className="badge rounded-pill bg-secondary ms-2">{totalCounters}</span></a>
      </nav>
     );
}
 
export default NavBar;