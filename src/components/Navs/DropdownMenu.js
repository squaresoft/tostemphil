import React,{useState,useEffect} from "react";
import DropdownItem from "./DropdownItem";
import MegaDropdown from "./MegaDropdown";
import dataNav from "../../data/Navbar/navbar-data.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";
import {isMobile} from 'react-device-detect';
const DropdownMenu = () => {
  const [width,setWidth]= useState(window.innerWidth)

  const onResize = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
  },[width])

  useWindowResizeListener();
 
  const handleHover = (e) => {
    e.preventDefault();
    const width = window.innerWidth;
    if (width < 991 || isMobile) {
      const el = e.target;
      if (e.target.nextSibling) {
        if (el.parentElement.classList.contains("on")) {
          el.nextSibling.style.display = "none";
          el.parentElement.classList.remove("on");
          el.nextSibling.style.opacity = 0;
          el.nextSibling.classList.remove("fadeIn");
        } else {
          el.parentElement.classList.add("on");
          el.nextSibling.style.display = "block";
          el.nextSibling.style.opacity = 1;
          el.nextSibling.classList.add("fadeIn");
        }
      }
    }
  };
  console.log("mob",isMobile)
  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut" >
        {dataNav
          .map((dropdown, i) => (
          <li
            className={
              "dropdown " + (dropdown.megaMenu === true ? "megamenu-fw" : "")+" "
              + (dropdown.id === 6 || dropdown.id ===7 ? "hidden-main" : "")
            }
            onClick={(isMobile || width < 991) && dropdown.isDropdown ===true  ?  (e) => handleHover(e) : (dropdown.isDropdown === true?(dropdown.haslink == true ? null :(e) => handleHover(e)):null)}
            key={i}
          >
            <a href={dropdown.isExternal?dropdown.link: process.env.PUBLIC_URL +dropdown.link} className={"menu-link " +(dropdown.isDropdown ===true? "dropdown-toggle" : "")} target={dropdown.isExternal==true?"_blank":""} data-toggle="dropdown">
              {dropdown.title}
            </a>
            {dropdown.isDropdown === true? 
              (dropdown.megaMenu ? (
              <MegaDropdown
                item={dropdown.subMenu}
                columnTitle={dropdown.colsTitle}
                itemsPerCol={dropdown.itemsPerCol}
              />
            ) : (
              <DropdownItem
                item={dropdown.subMenu}
                isProduct={dropdown.id === 3 ? true :false}
              />
            )):
              null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
