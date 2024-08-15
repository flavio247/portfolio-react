import React from "react";
import useTitle from "../useTitle";
import Hero from "../components/Hero";
import image from "../assets/cartoon.png";

const HomeScreen = () => {
  useTitle("HOME");

  return (
    <>
      <Hero classSection={"home"} content={"home-content"}>
        <div className="text">
          <div className="text-one">Hello,</div>
          <div className="text-two">I'm Flavio</div>
          <div className="text-three">Fullstack Developer</div>
        </div>
        <div className="button">
          <a
            className="fcc-btn"
            href="https://www.linkedin.com/in/flavio-gallizia-246090309/"
          >
            Hire me
          </a>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </Hero>
    </>
  );
};

export default HomeScreen;
