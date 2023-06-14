import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import dataGallery from "../../data/Products/product-detail.json";
import ReactWow from "react-wow";
const TotalHousing = () => {

return (
  <Loader>
   <ScrollToTopOnMount/>
      <HeaderOne />
    <PageTitleAbout
      title=""
      tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
     <section className="white-bg" style={{paddingTop:"50px",paddingBottom:"50px",maxHeight:"100%"}}>
    		   	 <div>
			      <h2 className="font-1000 mt-0" style={{textAlign:"center"}}>TOTAL HOUSING SOLUTION </h2> 
			        <h4 className="font-1000 mt-0" style={{textAlign:"center"}}>“DELIVER COMFORT FOR ALL”</h4> 
			      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
			        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
			        </section>
			        </div>
 <div className="container">
	
		<div className="row">
		<div className="col-md-12">
		<p className="mt-20" style={{textAlign:"center"}}>
		TOSTEM engages in product development, manufacturing, and marketing of a
diverse range of home products, such as window sashes, entrance doors, and
exterior products.
		</p>
		<p className="mt-20" style={{textAlign:"center"}}>
		Our product portfolio allows us to provide complete “lifestyle solutions” that are flexible, integrated, and coordinated to consumer needs,delivering everyday satisfaction.
		</p>
		</div>
		</div>
  <ReactWow animation="fadeTop" delay="0.5s">
			<div className ="row">
			<div
			className="col-md-12"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	display:"flex",
				justifyContent: "center"
		     }}

		  >
		    <img src={require("../../assets/images/WhyTostem/TotalHousing/Img1.png")} alt="" style={{width: "1000px"}}/>
		  </div>

		
		</div>
		</ReactWow>
		  <ReactWow animation="fadeTop" delay="0.5s">
	<div className="row">
		{
			dataGallery.map((member)=>{
				return(
						<div className="col-md-3 test-shine box-shadow-hover" key={member.id}>
              <div className="member text-center">
                <div className="team-member-container">
                  <img
                    src= {require(`../../assets/images/${member.image}`)}
                    className="img-responsive"
                    alt="team-01"
                  />
                   
                </div>
                <div className="grey-bg pt-20 pb-20 ">
                  <h4 className="member-title text-uppercase">{member.productName}</h4>
                  
                  <button className="btn btn-square btn-gray" 
                          onClick={()=>{window.open(`${process.env.PUBLIC_URL}/product-details?link=${member.id}`,"_blank")}}>
                          Read More</button>
                </div>
              </div>
            </div>



					)
			})
		}
		</div>
		</ReactWow>
		</div>	


    		   </section>
    <FooterOne />
  </Loader>
)
};

export default TotalHousing;
