import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand py-3 navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            width="45"
            alt=""
            className="d-inline-block align-middle mr-2"
          />
        </Link>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className={location.pathname === "/employees" ? "nav-link active" : "nav-link"}>
              <Link to="/employees" className="nav-link">
                Employee Directory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
