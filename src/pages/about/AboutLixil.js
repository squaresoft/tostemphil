import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurServicesThree from "../../components/OurServices/LixilServices";
import FooterOne from "../../components/Footer/FooterOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
const AboutUs = () => (

  <Loader> 
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      title="Lixil"
      tagline="Link to Good Living"
      image="/Tostem/Lixil_company.png"
       background="/Tostem/Carousel-Image-4.jpg"
    />
  
   <OurServicesThree 
      title="About Lixil"
      tagline="Link To Good Living"
     />
     
       <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default AboutUs;
