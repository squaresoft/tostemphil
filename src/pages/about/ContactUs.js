import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";

import ContactFour from "../../components/ContactUs/ContactFour";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const ContactCreative = () => (
  <Loader> 
  <ScrollToTopOnMount/>
    <HeaderOne />
     <PageTitleAbout
       title=""
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
    <ContactFour />
   
    <FooterOne />
  </Loader>
);

export default ContactCreative;
