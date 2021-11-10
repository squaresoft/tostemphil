import React,{useState, Fragment,useEffect} from "react";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import ProductListSearch from "../../components/Products/ProductListSearch";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductSearch = () => {
let query = useQuery();
const [val, setVal] = useState(query.get("data"));
 useEffect(() => {
    setVal(query.get("data"))
   }, [query.get("data")]);

return (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
    <ProductListSearch
      searchVal = {val}
    />
    <FooterOne />
  </Loader>
);


}

export default ProductSearch;
