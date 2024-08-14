import React, { useEffect, useState } from "react";
import useTitle from "../useTitle";
import Hero from "../components/Hero";
import { useGlobalContext } from "../context";
import image from "../me.jpg";
// import { Link } from "react-router-dom";
const ProjectsScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useTitle("PROJECTS");

  return (
    <>
      <Hero classSection={"services"} content={"content"}>
        <div className="title">
          <span>My Projects</span>
        </div>
        <div className="boxes">
          <div className="box tax">
            <div className="topic">
              Service for purchasing tax credit and other building tax bonuses -
              1
            </div>
            <p>
              Management of the process of submitting and verifying the validity
              of documentation to access the tax credit
            </p>
          </div>
          <div className="box tax2">
            <div className="topic">
              Service for purchasing tax credit and other building tax bonuses -
              2
            </div>
            <p>
              Management of the process of submitting and verifying the validity
              of documentation to access the tax credit
            </p>
          </div>

          <div className="box pharma">
            <div className="topic">
              Web application for company that markets pharmaceuticals
            </div>
            <p>
              Web application for order management developed for a major Italian
              company that markets biomedical products
            </p>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ProjectsScreen;
