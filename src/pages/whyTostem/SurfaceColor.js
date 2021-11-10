import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ReactWow from "react-wow";
const SurfaceColor = () => {

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
			      <h2 className="font-1000 mt-0" style={{textAlign:"center"}}>TOSTEM COLORING PROCESS</h2> 
			        <h4 className="font-1000 mt-0" style={{textAlign:"center"}}>MAXIMIZING THE STRENGTH AND BEAUTY OF
ALUMINIUM</h4> 
			      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
			        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
			        </section>
			        </div>
 <div className="container">
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
		    <img src={require("../../assets/images/WhyTostem/SurfaceColor/img1.jpg")} alt="" style={{width: "600px"}}/>
		  </div>

		
		</div>
		</ReactWow>
		<div className="row">
		<div className="col-md-12">
		<p className="mt-20" style={{textAlign:"center"}}>
		TOSTEM’s unique TEXGUARD anodized finish gives a high level of protection, alongside
showing the beautiful appearance of natural aluminum. TOSTEM offers a wide range of
color variations, which allows you to enjoy its lifelong beauty, adding happiness to your
lifestyle.
		</p>
		<div className ="row">
		<h3 className="font-1000 mt-0" style={{textAlign:"center"}}>BENEFITS OF TEXGUARD</h3>
			  <ReactWow animation="fadeTop" delay="0.5s"> 
			<div
			className="col-md-12"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	display:"flex",
				justifyContent: "center"
		     }}

		  >
		    <img src={require("../../assets/images/WhyTostem/SurfaceColor/img2.png")} alt="" style={{width: "1000px"}}/>
		  </div>
</ReactWow>
		
		</div>

		  <div className="row">
		  		<div className="col-md-1">
		  		</div>
		  		<div className="col-md-8">
		 		<ul>
		 		 <li><i>COLOR RETENTION</i> - TEXGUARD protects the aluminum surfaces against harsh
environmental conditions, making the color gloss stay for at least 40 years.</li>
		 		 <li><i>INCREASED HARDNESS</i> -The dense coating of TEXGUARD offers stronger surface integrity which protects against scratches and corrosion</li>
		 		
		 		 <li><i>EASE OF CLEANING</i> - with its dust and dirt resistance technology, TEXGUARD makes cleaning easier</li>
		 		 </ul>
		 		 </div>
		  </div>
		</div>
		</div>
		{/*<div className="row">
		<div className="col-md-12">
		   <h3 className="font-1000 mt-0" style={{textAlign:"left"}}>COLORS</h3> 
			      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
			        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'100%'}}></hr>
			        </section>
			        </div>
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgNWhite.jpg")} alt="" style={{width: "300px"}}/>
		</div>
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgIWhite.jpg")} alt="" style={{width: "300px"}}/>
		</div>
		
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgNSilver.jpg")} alt="" style={{width: "300px"}}/>
		</div>
		

		</div>
		<div className="row" style={{paddingTop:"20px"}}>
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgSGrey.jpg")} alt="" style={{width: "300px"}}/>
		</div>
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgABrown.jpg")} alt="" style={{width: "300px"}}/>
		</div>
		
		<div className="col-md-4">
		 <img src={require("../../assets/images/WhyTostem/SurfaceColor/imgNBlack.jpg")} alt="" style={{width: "300px"}}/>
		</div>

			<div className="col-md-12">
		<p><u><i>Certifications</i></u></p>
		<p>JIS H4100 (No.TH9009), JIS H8602 (No.TH9010), TIS 218-2520, TIS 284-2530, AAMA 612, ISO 9001:
2015 (No. TH98/4848), ISO 14001: 2004 (No.TH60/2399)</p>
		</div>
		

		</div>*/}
		</div>	


    		   </section>
    <FooterOne />
  </Loader>
)
};

export default SurfaceColor;
