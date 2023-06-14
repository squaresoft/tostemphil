import React from "react";
import { Link } from "react-router-dom";

const DropdownSubItem = ({ item,isProduct,productList,categoryID }) => (
  <ul className="dropdown-menu animated">
    {isProduct === false ?
    item.map((val, i) => (
      <li key={i}>
        <Link to={process.env.PUBLIC_URL +val.link} >{val.title}</Link>
      </li>
    ))
	:
	productList.map((val,i)=>{
    const name = val.detailName.split('*')
  
    return(
		 <li key={i}>
        <Link to={process.env.PUBLIC_URL +"/product-single-detail?categoryID="+categoryID+"&productID="+val.detailID} >{name[0]}</Link>
      </li>
	)})}
  </ul>
);

export default DropdownSubItem;
