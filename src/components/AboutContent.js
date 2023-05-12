import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'

import React1 from "../assets/full.png";
import React2 from "../assets/intro2bg.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>
          Hello👋!I'm Irene Muthoki a computer Science student.I am higly
          resourceful,innovative and competent react front-end
          developer,Hardworking person and a fast learner with high
          selg-discipine and self-motivation.Excellent inter-personal skills
          with an aim of always giving positive results.possessing considerable
          knowledge with system analysis and development. in addition to that
          ,I'm also proficient with Html,CSS,JS,NodeJS and mongdb.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stact top">
            <img src={React1} classname="img" alt="frontend" />
          </div>

          <div className="img-stact bottom">
            <img src={React2} classname="img" alt="frontend" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent
