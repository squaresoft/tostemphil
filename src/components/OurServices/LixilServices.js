import React,{useState,useEffect} from "react";
import serviceImg from "../../assets/images/startup-bg-right.jpg";
import aboutUsData from "../../data/Slider/slider-About-us.json"
import SwiftSlider from 'react-swift-slider'
const OurServicesThree = ({ title, tagline }) => { 
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
        <h2 className="font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 black-color">{tagline}</h4>
        <p className="mt-20" style={{color:"#434343",textAlign:"justify"}}>
        LIXIL makes pioneering water and housing products that solve everyday, real-life challenges,
         making better homes a reality for everyone, everywhere. Drawing on our Japanese heritage,
          we create world-leading technology and innovate to make high quality products that transform homes. 
          But the LIXIL difference is how we do this; through meaningful design, an entrepreneurial spirit, a dedication to improving accessibility for all, and responsible business growth.
         Our approach comes to life through industry leading brands, including American Standard, GROHE, INAX, and TOSTEM.
        </p>
        <p className="mt-30">
         
        </p>
      </div>
    </div>
  </section>
)};

export default OurServicesThree;
