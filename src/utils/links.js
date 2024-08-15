import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const links = [
  {
    id:1,
    url: "/",
    text: "Home"
  },
  {
    id:2,
    url: "/about",
    text: "About"
  },
  {
    id:3,
    url: "/skills",
    text: "Skills"
  },
  {
    id:4,
    url: "/projects",
    text: "Projects"
  },
];

const LinkComponent = ({ classLink }) => {
  const { setCurrentMenu, currentMenu, setCurrentLoading, numberRandom } = useGlobalContext();

  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link
              to={link.url}
              onClick={() => {setCurrentMenu(link.text);setCurrentLoading(numberRandom());}}
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
    id:1,
    url: "https://www.linkedin.com/in/flavio-gallizia-246090309/",
    icon: <FaLinkedinIn className="nav-icon" />,
  },
  {
    id:2,
    url: "https://github.com/flavio247",
    icon: <FaGithub className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <>
      {socialLink.map((link) => {
        return (
          <Link key={link.id} to={link.url} className={classSocial}>
            {link.icon}
          </Link>
        );
      })}
    </>
  );
};
const PortfolioComponent = ({children,url}) => {
  return (
    
          <Link key="1" to={url}>
            {children}
          </Link>
        );
      
    
  
};

export { LinkComponent, SocialComponent,PortfolioComponent };
