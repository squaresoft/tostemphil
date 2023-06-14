import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import ProductList from "../../components/Products/ProductList";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import DealerList from "../../data/Products/dealer-location.json"
const DealerLocatorBackup = () => (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
    <section className ="white-bg"> 
     <div className="container">
      <table className = "table table-striped table-bordered" style ={{textAlign: "center",verticalAlign: "middle" }}>
        <thead style ={{textAlign: "center",verticalAlign: "middle" }}>
        <tr>
          <th>Dealer</th>
          <th>Address</th>
          <th>Contact Number</th>
        </tr>
        </thead>
        <tbody>
          {
            DealerList.map((item)=>(
              <tr>
                <td><img src={require(`../../assets/images/${item.image}`)} ></img><p><b>{item.name}</b></p></td>
                 <td>{item.address}</td>
                  <td>{item.contact}</td>
              </tr>
            ))
          }
        </tbody>
      </table> 
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default DealerLocatorBackup;
