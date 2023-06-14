import React, { useState, useEffect, useCallback ,Fragment} from "react";
import DropdownMenu from "../Navs/DropdownMenu";
import SearchOverlay from "../../elements/SearchOverlay";
import AttributeNav from "../Navs/AttributeNav";
import MainLogo from "../MainLogo";
import CartSearchTop from "../Navs/CartSearchTop";
import Icofont from "react-icofont"
import ReactTooltip from 'react-tooltip';

import logoBlack from "../../assets/images/tostem-new-logo.png";
const HeaderOne = ({ type }) => {
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [search,showSearch] = useState(false);
  const [searchVal, setSearchVal]= useState("");
  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

  const onInput=(e)=>{
    setSearchVal(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }
  const onSearch = () =>{
    window.open(`${process.env.PUBLIC_URL}/product-search?data=${searchVal}`, '_self')
  }
  const showSearchForm = (e) => {
    e.preventDefault();
    setShow(true);
    resizeForm();
  };
  const showSearchnNav = (e) =>{
     e.preventDefault();
     if(search === true){
      showSearch(false)
     }
     else{
        showSearch(true)
     }
     //alert(search)
  }
  const hideSearchForm = (e) => {
    e.preventDefault();
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeForm);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeForm);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resizeForm, handleScroll]);

  return (
    <Fragment>
    <ReactTooltip effect="solid"/>
      <nav
        className={
          "navbar navbar-default navbar-fixed white bootsnav on no-full " 
          
        }
   
      >
       {
        <SearchOverlay show={show} onClick={hideSearchForm} />
       } 
       <div className="row upper-header" style={{backgroundColor:"#f8f8f8"}}>
       <div className="container navigation">

       <div className="logo col-md-4">
        <a href="/">
      
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        </a>
        </div>
        <div className="col-md-8">
        <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut" >
        <li> <a href={"https://tostemphil-simulation.netlify.app/"} className="menu-link" target= "_blank" data-toggle="dropdown">
            Giesta Design Simulation
            </a>
        </li>
         <li> <a href={process.env.PUBLIC_URL+"/tour/vtour.html"} target= "_blank" className="menu-link" data-toggle="dropdown">
           Tostem Virtual Tour
            </a>
        </li>
        </ul>
        </div>
      </div>
       </div>
       <div className={"divNav navWhite"}>
        <div className="container navigation" >
          <AttributeNav>
           
           <ul>
             <li className="search">
              <a  data-tip="Search Product" href = "#" id="search-button"  onClick={showSearchnNav}>
                <Icofont icon="search-1" />
              </a>
            </li>
                   </ul>
          </AttributeNav>
          <MainLogo showMenu={showMenu} />
          <DropdownMenu />
        </div> 
        <div style ={{borderTop: "1px solid rgba(255, 255, 255, 0.15)",height:"1px"}}></div>
        </div>
       
        <div className = {search == true ? "search-nav show" : "search-nav hide"} >
           <div className="input-group">
                <input placeholder="Search"
                       type="search"  
                       style={{ height: '48px' }} 
                       className="form-control"
                       onChange={onInput}
                       onKeyDown={handleKeyDown}/>
                <span className="input-group-btn">
                <button className="btn btn-gray btn-square" type="button" onClick={onSearch}>   <Icofont icon="search-1" /></button>
                </span>
                </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderOne;
