import React from "react";
import useTitle from "../useTitle";
import Hero from "../components/Hero";
import { PortfolioComponent } from "../utils/links";

const ProjectsScreen = () => {
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

          <PortfolioComponent
            url={"https://github.com/flavio247/portfolio-react"}
          >
            <div className="box portfolio-react">
              <div className="topic">My Portfolio developed in React</div>
              <p>Click here and goto Github repository</p>
            </div>
          </PortfolioComponent>
        </div>
      </Hero>
    </>
  );
};

export default ProjectsScreen;
