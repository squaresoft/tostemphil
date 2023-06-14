import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import DealerSection from "../../components/Dealership/DealerSection";
import ProductList from "../../components/Products/ProductList";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const Dealership = () => (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
     <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
  	<DealerSection/>
    <FooterOne />
  </Loader>
);

export default Dealership;
