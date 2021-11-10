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
  return (
  <section className="">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right" id="column-pic">
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
        <p className="mt-20" style={{color:"#434343", textAlign:"justify"}}>
         LIXIL is the world’s most comprehensive housing and building company made up of many individual 
         brands creating products that make better homes a reality for everyone, everywhere.
        </p>
        <p style={{color:"#434343", textAlign:"justify"}}>
         TOSTEM is a recognized leading brand for global housing and building material in Japan. It’s a complete line-up of high-quality aluminum doors and windows. Design technologies are originally developed in Japan while extrusion dies, aluminum billets, extrusion profiles, coating, pre-fabrication 
         and hardware assembly processes are all done in TOSTEM factory in Thailand.
        </p>
        <p style={{color:"#434343", textAlign:"justify"}}>
         TOSTEM Philippines under LIXIL Philippines Ltd. Co. is working hand in hand with its various offices across the region to provide a comprehensive range of doors and windows solutions 
         to Filipino homes to ensure safety and comfort through advanced technologies.al in Japan. It’s a complete line-up of high-quality aluminum doors and windows. Design technologies are originally developed in Japan while extrusion dies, aluminum billets, extrusion profiles, coating, pre-fabrication 
         and hardware assembly processes are all done in TOSTEM factory in Thailand.
        </p>
        <p className="mt-30">
         
        </p>
      </div>
    </div>
  </section>
)};

export default OurServicesThree;
