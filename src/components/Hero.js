import React from "react";
const Hero = ({ children, classSection, content }) => {
  return (
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
  );
};

export default Hero;
