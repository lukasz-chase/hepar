import React from "react";
//router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-component">
        <div className="logo">
          <Link to="/" className="Link">
            <h1>HEPAR</h1>
          </Link>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
