import React,{useState, useEffect, useCallback} from "react";

import dataHighlights from '../../data/Products/product-highlights.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductHighlights = ({title})=>{
const count = dataHighlights.length;
const settings = {
     autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: count < 3 ? count : 3,
    slidesToScroll: 1,
    className: "owl-carousel blog-slider",
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

return(
	<section className="white-bg" style={{paddingTop:"0px",paddingBottom:"50px"}}>
	<div className="container">
      <div className="row">
        <div className="col-md-8 section-heading" >
         
         
       </div>
      </div>
      
      <div className="row">
       <div className="col-md-12 remove-padding" >
       <Slider {...settings}>

      {dataHighlights.map((member,i) => (
       
          <div className="col-md-4 test-shine box-shadow-hover" style={{cursor:"pointer"}} key={i} onClick={()=>{
            if(member.link.charAt(0) == 'h'){
               window.open(member.link,"_blank")
            }
           else{
               window.open(process.env.PUBLIC_URL+member.link,"_blank")
           }

          }}>
            <div className="member text-center" style={{cursor:"pointer"}} >
              <div className="team-member-container">
                <img
                  src= {require(`../../assets/images/${member.location}`)}
                  className="img-responsive"
                  alt="team-01"
                />
                 
              </div>
             <div className="white-bg pt-20 pb-20 ">
                <h4 className="member-title text-uppercase">{member.title}</h4>
              
              </div>
            </div>
          </div>
    
        ))}
      </Slider>
      </div>
      </div>
      </div>


	</section>



	)




}
export default ProductHighlights;