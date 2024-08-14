import React from "react";

import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const links = [
  {
    url: "/",
    text: "Home",
    interval: 1500
  },
  {
    url: "/about",
    text: "About",
    interval: 2500
  },
  {
    url: "/skills",
    text: "Skills",
    interval: 3000
  },
  {
    url: "/projects",
    text: "Projects",
    interval: 3500
  },
];

const LinkComponent = ({ classLink }) => {
  const { setCurrentMenu, currentMenu, setCurrentLoading } = useGlobalContext();

  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <li>
            <Link
              key={link.text}
              to={link.url}
              onClick={() => {setCurrentMenu(link.text);setCurrentLoading(link.interval);}}
              style={{
                color: currentMenu === link.text ? "#4070f4" : "#0e2431",
              }}
            >
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
