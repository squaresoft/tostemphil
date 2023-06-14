import React from "react";
import logoWhite from "../assets/images/logotostem.png";
import logoBlack from "../assets/images/tostem-new-logo.png";
import Icofont from "react-icofont";

const MainLogo = ({ collapse, showMenu }) => {

  return (
  <div className="navbar-header">
    <button
      type="button"
      className={"navbar-toggle " + (collapse ? "collapsed" : "")}
      data-toggle="dropdown"
      data-target="#navbar-menu"
      onClick={showMenu}
    >
      <Icofont icon="navigation-menu" />
    </button>
    <div className="logo main-logo">
      <a href="/">
        <img className="logo logo-display" src={logoWhite} alt="" />
        <img className="logo logo-scrolled" src={logoBlack} alt="" />
      </a>
    </div>
  </div>
)};

export default MainLogo;
