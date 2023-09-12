import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header" class="header-tops header-top">
      <div class="container">
        <h1 class="header-name">
          <Link to="/">James Su</Link>
        </h1>
        <h2>
          I'm a senior <span>Full Stack Engineer</span>
        </h2>

        <nav class="nav-menu d-lg-block">
          <ul>
            <li class="">
              <Link to="/">Home</Link>
            </li>
            <li class="">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
