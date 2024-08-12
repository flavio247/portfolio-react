import React from "react";

import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/skills",
    text: "Skills",
  },
  {
    url: "/projects",
    text: "Projects",
  },
];

const LinkComponent = ({ classLink }) => {
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <li>
            <Link key={link.text} to={link.url}>
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.linkedin.com/in/flavio-gallizia-246090309/",
    icon: <FaLinkedinIn className="nav-icon" />,
  },
  {
    url: "https://github.com/flavio247",
    icon: <FaGithub className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <>
      {socialLink.map((link) => {
        return (
          <Link key={link.text} to={link.url} className={classSocial}>
            {link.icon}
          </Link>
        );
      })}
    </>
  );
};

export { LinkComponent, SocialComponent };
