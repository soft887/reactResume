import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Home from "./components/Home";
import("bootstrap/dist/js/bootstrap");

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
