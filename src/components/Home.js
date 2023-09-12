import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Home = () => {
  return (
    <Layout>
      <header id="header" className="header-tops">
        <div className="container">
          <h1>
            <a href="/">James Su</a>
          </h1>

          <h2>
            I'm a senior Full Stack,Blockchain Developer<br></br> with 10 years of experiences.
          </h2>

          <nav className="nav-menu d-lg-block">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
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
              {/* <li>
                <Link to="/contactus">Contact</Link>
              </li> */}
            </ul>
          </nav>

          <div className="social-links">
            <a style={{width:'70px',heigth:'70px'}} href="https://www.linkedin.com/in/james-su-998373251/" className="linkedin" target="_blank">
              <i className="icofont-linkedin">linkedin</i>
            </a>
            {/* <a href="#" className="twitter" target="_blank">
              <i className="icofont-twitter"></i>
            </a>
            <a href="#" className="facebook" target="_blank">
              <i className="icofont-facebook"></i>
            </a>
            <a href="" className="twitter" target="_blank">
              <i className="icofont-github"></i>
            </a> */}
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
