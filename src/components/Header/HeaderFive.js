import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import SocialNav from "../Navs/SocialNav";
import AttributeNav from "../Navs/AttributeNav";
import SearchOverlay from "../../elements/SearchOverlay";
import MainLogo from "../MainLogo";

const HeaderFive = ({ data, scrollToSection }) => {
  
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
    <SearchOverlay />
    <div className="container">
      <AttributeNav>
        <SocialNav />
      </AttributeNav>
      <MainLogo showMenu={showMenu} />
      <div
        className="navbar-collapse collapse"
        id="navbar-menu"
        aria-expanded="false"
      >
        <Scrollspy
          items={data.map((item) => item.link)}
          currentClassName="active"
          className="nav navbar-nav navbar-right nav-scrollspy-onepage red-nav"
          data-in="fadeInLeft"
        >
          {data.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={(e) => scrollToSection(e, item.link)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </Scrollspy>
      </div>
    </div>
  </nav>
)};

export default HeaderFive;
