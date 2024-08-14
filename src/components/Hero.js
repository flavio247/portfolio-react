import React from "react";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";


const Hero = ({ children, classSection, content }) => {
  const { isLoading } = useGlobalContext();
  return (
    <>
    <div
      className="hero-img-container"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className={classSection}>
        <div className={content}>{children}</div>
      </section>
    </div>
    {isLoading ? <Loading /> : null}
    </>
  );
};

export default Hero;
