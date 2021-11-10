import React from "react";
import Slider from "react-slick";
import { Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import ProductItem from "./ProductItems"
import productData from '../../data/Products/product-detail.json'
import aboutUsData from "../../data/Slider/slider-About-us.json"
import SwiftSlider from 'react-swift-slider'
import Icofont from "react-icofont";

const ProductListSearch = ({ searchVal}) => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
  slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick testimonial",

  };
  let dataList = [];
  let finalList = [];
  productData.map((item)=>{
    item.productList.map((prod)=>{
      const productItem = prod;
      productItem.category = item.id;
      dataList.push(productItem);
    })
  })

  dataList
  .filter(i=> i.detailName.toLowerCase().includes(searchVal.toLowerCase()) || i.tags.toLowerCase().includes(searchVal.toLowerCase()))
  .map((item)=>{
    finalList.push(item)
  });
  return (
 
    <section className="white-bg">
      <div className="container">
      
        <div className="row">
          <div className="col-md-12">
            {
            finalList.length <1 ?
                <h3>No Product Found...</h3>
              
              :
                  finalList.map((item)=>{
              return(
              <Link to={`${process.env.PUBLIC_URL}/product-single-detail?categoryID=${item.category}&productID=${item.detailID}`}>
                <div className="col-md-4 test-shine box-shadow-hover" key={item.detailID}>
                  <div className="member text-center">
                    <div className="team-member-container" style={{border:"1px #abababb3 solid"}}>
                      <img
                        src= {require(`../../assets/images${item.img}`)}
                        className="img-responsive"
                        alt="team-01"
                      />
                       
                    </div>
                    <div className="white-bg pt-20 pb-20 " style={{border:"1px #abababb3 solid"}}>
                      <h4 className="member-title text-uppercase">{item.detailName}</h4>
                
                    </div>
                  </div>
                </div>
           </Link>



                )



            })
              
              
              
            }
          </div>
        </div>
        </div>
    </section>

 
  );
};

export default ProductListSearch
