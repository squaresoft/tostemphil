import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DropdownSubItem from "./DropdownSubItem";
import {isMobile} from 'react-device-detect'
import productList from "../../data/Products/product-detail.json";;
const DropdownItem = ({ item,isProduct }) => {

  const [width,setWidth]= useState(window.innerWidth)
  const onResize = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);
  },[width])

  const handleOpen = (e) => {

    const el = e.target;
    if (el.nextSibling) {
      e.preventDefault(); 
      if (el.parentElement.classList.contains("on")) {

        el.parentElement.classList.add("on");
        el.nextSibling.style.display = "block";
      } else {
        el.nextSibling.style.display = "none";
        el.parentElement.classList.remove("on");
        el.nextSibling.style.opacity = 1;
        el.nextSibling.classList.add("fadeIn");
      }
    }
  };

  const openLink = (link)=>{
    
    window.open(link,"_blank")
  }

  return (
    <ul className="dropdown-menu animated">
      {

        isProduct === false ?
        item.map((val, i) => (
        <li key={i} className="dropdown">
        {
          val.externalLink
          ?
            <a style={{cursor:"pointer"}} onClick={(e)=>{openLink(val.link)}}>{val.title}</a>
          :
       
          <Link
            className={val.subMenu ? "dropdown-toggle" : null}
            data-toggle="dropdown"
            to={process.env.PUBLIC_URL + val.link}
            onClick={isMobile || width < 991  ?(e) => handleOpen(e) : (val.haslink ? null: (e) => handleOpen(e) ) } 
          >
            {val.title}
          </Link>
        
         
        }
            {val.subMenu ? <DropdownSubItem item={val.subMenu} isProduct={false} productList={null} /> : null}
        </li>
      ))
        :
        productList.map((val,i)=>(
          <li key={i} className="dropdown">
            <Link
              className ="dropdown-toggle"
              data-toggle="dropdown"
               to={process.env.PUBLIC_URL + "/product-details?link="+val.id}
               onClick={isMobile || width < 991  ?(e) => handleOpen(e) : null } 
               >
               {val.productName}
               </Link>
               <DropdownSubItem  isProduct={true} productList={val.productList} categoryID={val.id}/>
          </li>


        ))
      }
    </ul>
  );
};

export default DropdownItem;
