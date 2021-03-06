import React, { Component } from "react";

// Stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* {this.props.totalCounters} */}
          {/* this above line only works in class components
           */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
