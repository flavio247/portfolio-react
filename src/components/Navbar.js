import React from "react";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { LinkComponent, SocialComponent } from "../utils/links";
import image from "../assets/cartoon.png";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={image} alt="bash" width="40" height="40" />
          </div>
        </Link>
        <LinkComponent classLink="menu" />
        <p align="right">
          <SocialComponent classSocial={"socialIcons"} />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
