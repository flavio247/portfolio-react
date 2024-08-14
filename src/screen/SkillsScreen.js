import React, { useEffect, useState } from "react";
import useTitle from "../useTitle";
import Hero from "../components/Hero";
import { useGlobalContext } from "../context";
import image from "../assets/skills.png";

const SkillsScreen = () => {
  useTitle("SKILLS");

  return (
    <>
      <Hero classSection={"skills"} content={"content"}>
        <div className="title">
          <span>My Skills</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">Skills and Experience</div>
            <p>
              Experience is important, but it could become routine without a
              continuous desire to learn and improve
            </p>
            <div className="experience">
              <div className="num">20+</div>
              <div className="exp">
                Years Of <br />
                Experience
              </div>
            </div>
          </div>
          <div className="boxes">
            <img src={image} alt="" />
          </div>
        </div>
      </Hero>
    </>
  );
};

export default SkillsScreen;
