import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import ProductList from "../../components/Products/ProductList";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import DealerList from "../../data/Products/dealer-location.json"
const DealerLocator = () => (
  <Loader>
  <ScrollToTopOnMount/>
   <HeaderOne />
   
   <section className ="white-bg"> 
    <div className="container">
      Sorry, this page is currently under maintenance 
     </div>
   </section>
   <FooterOne />
 </Loader>
);

export default DealerLocator;
