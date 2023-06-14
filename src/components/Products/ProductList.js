import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import ProductItem from "./ProductItems"
import productData from '../../data/Products/product-detail.json'
import aboutUsData from "../../data/Slider/slider-About-us.json"
import SwiftSlider from 'react-swift-slider'
import Icofont from "react-icofont";

const ProductList = ({ title, tagline}) => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
  slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick testimonial",

  };
  return (
 
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <HeadingSection
            title={title}
            tagline={tagline}
            classAppend="black-color"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            {
              productData.map((val)=> <ProductItem 
                id ={val.id} 
                title ={val.productName} 
                details={val.productDescription} 
                serviceImg={require("../../assets/images/"+val.imagePage)}
                link={val.id} 
              />)
            }
          </div>
        </div>
        </div>
    </section>

 
  );
};

export default ProductList;