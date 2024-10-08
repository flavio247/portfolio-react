import React from "react";
import useTitle from "../useTitle";
import Hero from "../components/Hero";
import image from "../me.jpg";
import cv from "../Flavio-Gallizia.pdf";
// import { Link } from "react-router-dom";
const AboutScreen = () => {
  useTitle("ABOUT");

  return (
    <>
      <Hero classSection={"about"} content={"content"}>
        <div className="title">
          <span>About Me</span>
        </div>
        <div className="about-details">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <div className="topic">Innovation is my passion</div>
            <p>
              Innovative Fullstack with 20+ years of experience in designing,
              implementing and managing web applications. <br />
              <br />
              Skilled and Experienced in C#, API RestFul, Nodejs, Angular,
              React, Javascript and DevOps. I have worked on numerous projects
              using the Scrum methodology. <br />
              <br />
              My satisfaction is helping people solve their problems.
              <br />
            </p>
            <div className="button">
              <a href={cv} without rel="noopener noreferrer" target="_blank">
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default AboutScreen;
