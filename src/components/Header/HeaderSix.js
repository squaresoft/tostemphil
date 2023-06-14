import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import MainLogo from "../MainLogo";

const HeaderSix = ({ data, scrollToSection }) => {
  
  const [collapse, setCollapse] = useState(false);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };
  
  return (
  <nav
    className="navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full"
    data-minus-value-desktop="70"
    data-minus-value-mobile="55"
    data-speed="1000"
  >
    <div className="container">
      <MainLogo showMenu={showMenu} />
      <div
        className="navbar-collapse collapse"
        id="navbar-menu"
        aria-expanded="false"
      >
        <Scrollspy
          items={["home", "about", "classes", "schedule", "contact"]}
          currentClassName="active"
          className="nav navbar-nav navbar-right nav-scrollspy-onepage green-nav"
          data-in="fadeIn"
        >
          {data.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)}
              >
                {item.link}
              </a>
            </li>
          ))}
        </Scrollspy>
      </div>
    </div>
  </nav>
)};

export default HeaderSix;
