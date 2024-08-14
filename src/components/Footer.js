import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="text">
        <span>
          Created By{" "}
          <Link to={"https://www.linkedin.com/in/flavio-gallizia-246090309/"}>
            Flavio
          </Link>{" "}
          | &#169; 2024 All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
