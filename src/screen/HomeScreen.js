import React, { useEffect, useState } from "react";
import useTitle from "../useTitle";
import  Hero  from "../components/Hero";
import { useGlobalContext } from "../context";
import image from "../assets/cartoon.png";
// import { Link } from "react-router-dom";
const HomeScreen = () => {


  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useTitle("HOME");

  return (
    <>
      <Hero classSection={"home"} content={"home-content"}>
        <div class="text">
          <div class="text-one">Hello,</div>
          <div class="text-two">I'm Flavio</div>
          <div class="text-three">Fullstack Developer</div>
        </div>
        <div class="button">
          <a
            class="fcc-btn"
            href="https://www.linkedin.com/in/flavio-gallizia-246090309/"
          >
            Hire me
          </a>
        </div>
        <div class="right">
          <img src={image} alt="" />
        </div>
      </Hero>
    </>
  );
};

export default HomeScreen;
