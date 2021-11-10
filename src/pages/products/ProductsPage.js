import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import ProductList from "../../components/Products/ProductList";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const ProductsPage = () => (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/HEADER.jpg"
    />
 <ProductList 
      title="Products"
      tagline=""
    />
    <FooterOne />
  </Loader>
);

export default ProductsPage;
