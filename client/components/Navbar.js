import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <span className="nav-item" id="nav-home">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-item" id="nav-archive">
        <Link to="/archive">Archive</Link>
      </span>
      {/* <span className="nav-item" id="nav-tags">
        <Link to="/archive/tags">Tags</Link>
      </span>
      <span className="nav-item" id="nav-search">
        <Link to="/archive/search">Search</Link>
      </span>
      <span className="nav-item" id="nav-random">
        <Link to="/archive/random">Random</Link>
      </span> */}
      <span className="nav-item" id="nav-construction">
        <Link to="/archive/construction">Under Construction</Link>
      </span>
    </nav>
  );
}

export default Navbar;
