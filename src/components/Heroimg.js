import "./HeroimgStyles.css";
import React from "react";

import IntroImg from "../assets/introbg.png";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro" />
      </div>
      <div className="content">
        <p>HI, I'M A WEB DEVELOPER</p>
        <h1>React Developer</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
