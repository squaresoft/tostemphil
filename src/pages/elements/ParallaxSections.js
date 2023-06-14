import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";

import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";


const ParallaxSections = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Parallax Sections" />
    
    
  
    <TestimonialsOne title="TESTIMONIALS" tagline="Happy Clients" />
    
    <FooterOne />
  </Loader>
);

export default ParallaxSections;
