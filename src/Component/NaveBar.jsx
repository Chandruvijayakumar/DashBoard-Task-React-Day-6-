import React from "react";
import { Link, NavLink } from "react-router-dom";

const NaveBar = () => {
  return (
    <>
      <div className="container">
        <nav className="d-flex justify-content-center">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              All
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/FullStack"
            >
              FULLSTACK DEVELOPMENT
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/DataScience"
            >
              DATA SCIENCE
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/CyberSecurity"
            >
              CYBER SECURITY
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/Career"
            >
              CAREER
            </NavLink>
          </div>
        </nav>
      </div>
      <hr className="link-underline-dark" />
    </>
  );
};

export default NaveBar;
