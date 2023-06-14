import React,{useState,useEffect} from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";
import aboutUsData from "../../data/Slider/slider-About-us.json"
import SwiftSlider from 'react-swift-slider'
const TostemBrand = ({children}) => { 
 const [divHeight, setdivHeight] = useState(0);
   useEffect(() => {
    // Update the document title using the browser API
    setdivHeight(document.getElementById('column-pic').clientHeight);
  });

  return(
  <section className="">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right" id = 'column-pic'>
      <div
        className="bg-flex-holder bg-flex-cover"
      
      >
      <SwiftSlider data={aboutUsData} height={divHeight}showDots={false} enableNextAndPrev={false}/>
      </div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
      {children}

    
       
      </div>
    </div>
  </section>
)};

export default TostemBrand;
