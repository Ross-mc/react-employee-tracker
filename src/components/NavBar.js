import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
      <Link
            to="/"
            className="navbar-brand"
          >
            <img
            src={logo}
            alt=""
            width="75"
            height="75"
            class="d-inline-block align-top"
          />
          </Link>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              location.pathname === "/employees" ? "nav-link active" : "nav-link"
            }
          >
            Employees
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
