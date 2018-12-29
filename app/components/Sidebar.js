import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <nav>
        <div className="all-sidebar">
        <span className="sidebar-item" id="sidebar-home">
            <Link to="/">Home</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sidebar-item" id="sidebar-about">
            <Link to="/about">About</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sidebar-item" id="sidebar-future">
            <Link to="/future">Future Ideas</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sidebar-item" id="sidebar-tags">
            <Link to="/future/tags">Tags</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sidebar-item" id="sidebar-search">
            <Link to="/future/search">Search</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='sidebar-item' id='archive-update'>
            <Link to='/future/archive-update'>Update Archive</Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="sidebar-item" id="sidebar-archive">
            <Link to="/archive">[Archive Section]</Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
