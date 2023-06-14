import React, {useState, useEffect} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import ProductSingle from "../../components/Products/ProductInformationDetails/ProductSingle";
import FooterOne from "../../components/Footer/FooterOne";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import dataProductItem from "../../data/Products/product-detail.json";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductSingleDetails = () => {
 let query = useQuery();
 const [categoryID, setcategoryID] = useState('1');
 const [productID, setproductID] = useState('1');
 const [animate ,setAnimate]= useState(true)
 useEffect(() => {
  setcategoryID(query.get("categoryID"));
  setproductID(query.get("productID"));
  
  setAnimate(true);
  setTimeout(()=>( setAnimate(false)), 50);
 }, [query.get("categoryID"), query.get("productID")]);

return (

  <Loader>
   <ScrollToTopOnMount/>
      <HeaderOne />
      { 

        dataProductItem
    .filter(index=>index.id===parseInt(categoryID))
    .map((item)=>(

       item.productList
      .filter(index=>index.detailID===parseInt(productID))
      .map((productMain)=>{
console.log(productID)
         if(productMain.header === null || productMain.header === undefined || productMain.header === ""){
          return(
          <PageTitleAbout
            title=""
             tagline=""
             background="/Tostem/Carousel-Image-4.jpg"
            
            image=""
          />
            )
         


          
        }
        else{
      return(
<PageTitleAbout
            title=""
             tagline=""
             background={productMain.header }
            
            image=""
          />
        )
           
          

        }
      })


      ))
      }
     
    
        <ProductSingle categoryID ={categoryID} productID={productID} animate={animate}/>
     
    <FooterOne />
  </Loader>
)
};

export default ProductSingleDetails;
