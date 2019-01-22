import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="all-navs">
          <span className="nav-item" id="nav-home">
            <Link to="/">Home</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="nav-item" id="nav-about">
            <Link to="/about">About</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="nav-item" id="nav-archive">
            <Link to="/archive">Archive</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="nav-item" id="nav-tags">
            <Link to="/archive/tags">Tags</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="nav-item" id="nav-search">
            <Link to="/archive/search">Search</Link>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="nav-item" id="nav-random">
            <Link to="/archive/random">Random</Link>
            </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
