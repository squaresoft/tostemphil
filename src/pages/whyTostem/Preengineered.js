import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ReactWow from "react-wow";

const Preengineered = () => {

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
			     <h2 className="font-1000 mt-0" style={{textAlign:"center"}}>TOSTEM PRE ENGINEERED SYSTEM</h2> 
			        <h4 className="font-1000 mt-0" style={{textAlign:"center"}}>DESIGN AND ENGINEERING INTO EVERY DETAIL</h4> 
			      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
			        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
			        </section>
			        </div>
 <div className="container">
		<div className ="row">
		  <ReactWow animation="fadeLeft" delay="0.5s">
			<div
			className="col-md-12"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	display:"flex",
				justifyContent: "center"
		     }}

		  >
		    <img src={require("../../assets/images/WhyTostem/Preengineered/img1.jpg")} alt="" style={{width: "600px"}}/>
		  </div>
</ReactWow>
		
		</div>
		<div className="row">
		<div className="col-md-12">
		<p className="mt-20" style={{textAlign:"center"}}>
		All products of TOSTEM are developed and designed, manufactured, and assembled under an integrated
		production process whith strict TOSTEM quality.
		</p>
		<p className="mt-20" style={{textAlign:"center"}}>
		The greatest benefit of TOSTEM’S PRE-ENGINEERED SYSTEM is the ability to build
windows with consistent quality. With a single screwdriver, anyone can again and again
consistently build the same high-quality window system.
</p>
<p className="mt-20" style={{textAlign:"center"}}>
We strive to achieve constant excellence in all the production cycles, as well as in our
systems.
		</p>
		</div>
		</div>
		  <ReactWow animation="fadeLeft" delay="0.5s">
		<div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	display:"flex",
				justifyContent: "center"
		     }}
		  

		  >
		  <img src={require("../../assets/images/WhyTostem/Preengineered/img2.png")} alt="" style={{width: "600px"}}/>
		  </div>
		  </ReactWow>
		  <div className="row">
		  		<div className="col-md-2">
		  		</div>
		  		<div className="col-md-8">
		 		<ul>
		 		 <li>The manufacturing process is mass production oriented.</li>
		 		 <li>Entire window is manufactured at factory, except glazing and assembly.</li>
		 		 <li>Manufacturing accuracy is so good that there is no mismatch during installation.</li>
		 		 <li>Hardware is fixed at factory; site work is very minimal.</li>
		 		 <li>Entire window is packed in 2 separate boxes for sash and frame.</li>
		 		 </ul>
		 		 </div>
		  </div>
		  <div className="row">
		<div className="col-md-12">
		<p className="mt-20" style={{textAlign:"center"}}>
	TOSTEM is a window manufacturer and not merely a fabricator or system supplier.
The entire accountability for timely supplies and quality of product is with TOSTEM.
		</p>
		<p className="mt-20" style={{textAlign:"center"}}>
	TOSTEM works with trained installers who would undertake glazing, assembly, and
installation of windows. TOSTEM will always ensure that the project is completed within the
time promised.
		</p>
		</div>
		</div>



		</div>	


    		   </section>
    <FooterOne />
  </Loader>
)
};

export default Preengineered;
