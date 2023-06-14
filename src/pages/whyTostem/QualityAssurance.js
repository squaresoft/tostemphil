import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import ReactPlayer from "react-player"
import ReactWow from "react-wow";
const QualtyAssurance = () => {

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
			     <h2 className="font-1000 mt-0" style={{textAlign:"center"}}>QUALITY ASSURANCE</h2> 
			        
			      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
			        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
			        </section>
			        </div>
 <div className="container">
		<div className ="row">
		 <ReactWow animation="fadeIn" delay="0.3s">
			<div
			className="col-md-12"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	display:"flex",
				justifyContent: "center"
		     }}

		  >
		    <img src={require("../../assets/images/WhyTostem/QualityAssurance/img1.jpg")} alt="" style={{width: "600px"}}/>
		  </div>
		  </ReactWow>
		
		</div>
		<div className="row">
		<div className="col-md-12">
		<p className="mt-20" style={{textAlign:"center"}}>
		Standards and quality are the heart of TOSTEM, and Japan is known for the strictness of standard control with Quality
Assurance System, Quality Assurance and Quality Control Quality control to meet industrial product standards
internationally. Therefore, you can be assured that every product from TOSTEM's factory in Thailand is of high quality.
By designing the product, itself Assembly system and the installation system on site
		</p>
		<p className="mt-20" style={{textAlign:"center"}}>
		TOSTEM's manufacturing plant in Thailand is a special factory that produces a full range of products according to the
standards equivalent to the factory in Japan, with R&D Center, product research and development operator and Testing
Center, product performance testing center according to both JIS of Japan and ASTM Of the United States To ensure
that All products manufactured at this TOSTEM factory maintain the same quality.
		</p>
		</div>
		</div>
		<div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

				justifyContent: "center",
				
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  >
		   <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="col-md-12" style={{textAlign:"center"}}>
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img2.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  <div className="col-md-12" style={{textAlign:"center"}}>
		  <h3 >WATER TIGHTNESS TESTING</h3>
		 		<p >Preventing water leaks It is another key feature of TOSTEM. It is tested against rainwater leakage with for preventing damage to occur to the windows themselves. As well as home assets, TOSTEM's aluminum doors and windows are certified performance standards from Japa</p>
		  </div>
		 		
		  </div>

		  <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

				justifyContent: "center",
				paddingTop:"20px",
				paddingBottom:"20px"
				
		     }}
		  

		  >
		 
		   <ReactWow animation="fadeIn" delay="0.3s">
		 	 <div className="col-md-12" style={{

  				justifyContent:"center",
  				alignItems: "center",
  				textAlign:"center"
		 	 }}>
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img3.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  <div className="col-md-12" style={{textAlign:"center"}}>
		  <h3 >AIR TIGHTNESS TESTING</h3>
		  <p>Preventing air leaks from inside the chamber to outside through small gaps. Between the jamb and the shutters of the windows
Thi s efficiency helps to
control the air quality in the room to the desired level. TOSTEM doors and windows have passed the Japanese Industrial Standa rds JIS (A4702 2000 &
A4706 2000), ensuring that air leaks can be effectively prevented.</p>
		   <h3 >WIND LOAD RESISTANCE TESTING</h3>
		  <p>Structural strength test TOSTEM doors and windows have passed the test for performance against wind loads. Japanese Industria
l
Standards JIS (A4702 2000 and A4706 2000) to ensure that the doors and windows that were selected to install on the building at
each level were high. Will not break, warp, or become unusable after being exposed to strong winds</p>
		  </div>	
		  </div>
		  <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

				justifyContent: "center",
				textAlign:"center",
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  > 
		  <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img4.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  <div className="col-md-12">
		  <h3 >SOUND INSULATION TESTING</h3>
		 		<p>Good doors and windows are also important in helping to reduce the noise from the outside. That is because the door and windo
w h ave a joint and there is a gap
between the sash and the sash if the structure is not designed to be locked completely. Noise can escape that gap. Window door TOSTEM, It is designed to lock
tightly and reinforces a rubber seal to prevent water. Which contributes to reducing noise And if choosing an efficient glass In order to protect the sound together, it
will increase the protection efficiency to the next level.</p>
		  </div>
		 		
		  </div>

		 <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	textAlign:"center",
				justifyContent: "center",
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  >
		  
		  <ReactWow animation="fadeIn" delay="0.3s">
		 		<div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img5.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		   <div className="col-md-12">
		  <h3 >DURABILITY</h3>
		 		<p >Test the durability of the actual use of the product, such as repeated closing, opening, impact resistance.
And product strength</p>
		  </div>
		  </div>
		    <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	textAlign:"center",
				justifyContent: "center",
				
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  > <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img6.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  <div className="col-md-12">
		  <h3 >MATERIAL TESTING</h3>
		 		<p>Test tensile strength and compression strength to verify durability of aluminum bar and
hardware</p>
		  </div>
		 		
		  </div>
<div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	textAlign:"center",
				justifyContent: "center",
				
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  > <ReactWow animation="fadeIn" delay="0.3s">
		   <div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img7.png")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  <div className="col-md-12">
		  <h3 >ENVIRONMENTAL TESTING</h3>
		 		<p>Test ability in prevention of outside temperature penetration</p>
		  </div>
		 
		  
		 		
		  </div>

		  <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	textAlign:"center",
				justifyContent: "center",
				
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  >
		   <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img8.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		  
		  <div className="col-md-12">
		  <h3 >SUNSHINE WEATHER TESTING</h3>
		 		<p>Environmental endurance (sunlight and UV) test to verify surface coating performance</p>
		  </div>
		  
		 		
		  </div>
		 <div
			className="row"
		    data-stellar-background-ratio="0.2"
		    style={{

		    	textAlign:"center",
				justifyContent: "center",
				paddingTop:"20px",
				paddingBottom:"20px"
		     }}
		  

		  >
		  
		  <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="col-md-12">
		  <img src={require("../../assets/images/WhyTostem/QualityAssurance/img9.jpg")} alt="" style={{width: "500px"}}/>
		  </div>
		  </ReactWow>
		   <div className="col-md-12">
		  <h3 >LIGHT IRRADIATION TESTING</h3>
		 		<p >Environmental endurance (infrared heat) test to check material condition under heat
exposure to see sign of deformation or changes</p>
		  </div>
		 		
		  </div>
 <ReactWow animation="fadeIn" delay="0.3s">
		  <div className="row" style={{

		  	 alignItems: "center",
  			display: "flex",
  		justifyContent: "center"
		  }} >
		  <div className="col-md-6 col-sm-12 col-xs-12" >
		     <div className="player-wrapper">
                 <ReactPlayer
                                        className='react-player'
                                        url= "https://www.youtube.com/watch?v=qckismfZSrk"
                                        width='100%'
                                        height='100%'
                                        playing={false}
                                        controls = {true}

                                        />

                                        </div>
              </div>

		  		  </div>
		  		  </ReactWow>
		</div>	


    		   </section>
    <FooterOne />
  </Loader>
)
};

export default QualtyAssurance;
