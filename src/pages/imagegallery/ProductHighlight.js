import React, {useState, useEffect} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import FooterOne from "../../components/Footer/FooterOne";
import HighlightDetails from "../../components/Products/ProductHighlightsInfo/ProductHighlightInfo";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductHighlight = () => {
 let query = useQuery();
 const [highlightID, sethighlightID] = useState('1');
 const [animate ,setAnimate]= useState(true)
 useEffect(() => {
  sethighlightID(query.get("link"));
  setAnimate(true);
  setTimeout(()=>( setAnimate(false)), 50);
 }, [query.get("link")]);

return (
  <Loader>
   <ScrollToTopOnMount/>
      <HeaderOne />
     <PageTitleAbout
      title=""
       tagline=""
       background="/Tostem/Carousel-Image-4.jpg"
      
      image=""
    />
    
    <HighlightDetails 
    highlightID = {highlightID}
    animate = {animate}/>
     
    <FooterOne />
  </Loader>
)
};

export default ProductHighlight;
