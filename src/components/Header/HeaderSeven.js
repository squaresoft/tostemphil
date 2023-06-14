import React, { useState, useCallback, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "../MainLogo";

const HeaderSeven = ({ social, data, scrollToSection }) => {

  const [collapse, setCollapse] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={"navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full " + (fixed ? "" : "navbar-transparent")}
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="container">
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
          <MainLogo showMenu={showMenu} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <Scrollspy
              items={["home", "feature", "pricing", "review", "contact"]}
              currentClassName="active"
              className="nav navbar-nav navbar-right nav-scrollspy-onepage"
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
    </>
  );
};

export default HeaderSeven;
