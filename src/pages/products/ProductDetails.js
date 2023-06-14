import React,{useState, Fragment,useEffect} from "react";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import ProductInformation from "../../components/Products/ProductInformation"
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurServicesThree from "../../components/OurServices/LixilServices";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import ProductList from "../../components/Products/ProductInformationDetails/ProductInfoList"
import dataProductItem from "../../data/Products/product-detail.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const ProductDetails = (props) => {
   const settings = {
    dots: true,
    centerMode: false,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick testimonial",

  };
   let query = useQuery();
   const [val, setVal] = useState(query.get("link"));
   const [animate,setAnimate] = useState(true)
  
    useEffect(() => {
    setVal(query.get("link"))
    animatePage()
   }, [query.get("link")]);

  function animatePage(){
     setAnimate(true);
    setTimeout(()=>( setAnimate(false)),100 );
     window.scrollTo(0, 0)
  }

  return (

  <Loader> 
   <ScrollToTopOnMount/>
    <HeaderOne />
    {/* <PageTitleAbout
      title=""
      tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />*/}
    <section className="prod-det" style={{paddingBottom:"0px"}}></section>
    {
      dataProductItem
      .filter(id=>id.id === parseInt(val))
      .map((item)=>{
        return(
          <Fragment>
          <ProductInformation
            animate={animate}
            title={item.productName}
            tagline=""
            description={item.productDescription}
            serviceImg={require("../../assets/images/"+item.imagePage)}
            link={item.id}
          />
          <ProductList
          animate = {animate}
          dataTeam = {item.productList}
          categoryID={item.id}
          />
          </Fragment>
          )
      })
    }
    <FooterOne />
  </Loader>
)
};

export default ProductDetails;
