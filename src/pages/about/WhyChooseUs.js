import React,{useState} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import TostemBrand from "../../components/OurServices/TostemBrand";
import FooterOne from "../../components/Footer/FooterOne";
const WhyChooseUs=()=>(
<Loader>
   <ScrollToTopOnMount/>
		<HeaderOne />
    		<PageTitleAbout
     		image=""
     		 background="/Tostem/Carousel-Image-4.jpg"
    		/>
    		
     <TostemBrand>
         <h2 className="font-700">Why Choose Us</h2>
            <p style={{color:"#434343",textAlign:"justify"}}>
             As the leading Japanese brand for global housing and building materials, TOSTEM stands apart as a one that deeply understands the needs of people. TOSTEM’s comprehensive range of solutions ensures comfortable home living driven by a simple and seamless user experience.
             We develop our people-centric home solutions by drawing on a half-century of experience and expertise in balancing design and technology
             to anticipate the needs of people today and their families for generations to come.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              TOSTEM engages in product development, manufacturing, and marketing of a diverse range 
              of home products, such as window sashes, entrance doors, and exterior products.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
             Our product portfolio allows us to provide complete “lifestyle solutions” that are flexible, integrated, and coordinated to consumer needs, delivering everyday satisfaction.
            </p>
     </TostemBrand>
 
    	   <FooterOne />
</Loader>
	)

export default WhyChooseUs;