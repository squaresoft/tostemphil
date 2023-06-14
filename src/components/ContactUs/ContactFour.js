import React,{Fragment} from "react";
import ContactFormSix from "./ContactFormSix";
import Icofont from "react-icofont";
import Map from "../Maps/Map";

const ContactFour = () =>  (
    <Fragment>
      <section className="contact-us white-bg" id="contact" style={{minHeight:'868px'}}>
        <div className="container">
          <div className="clearfix">
            <div className="bg-flex-right col-md-6 map-section">
              <div className="bg-flex-holder bg-flex-cover">
                <div
                  className="bg-flex-holder bg-flex-cover"
                  style={{ backgroundImage: `url(${require("../../assets/images/LixilArea.JPG")})` }}
                ></div>
                </div>
            </div>
            <div className="col-about-left col-md-6 text-left">
              <h2>Get in Touch</h2>
             
              <ContactFormSix />
            </div>
          </div>
        </div>
      </section>
      <section className="p-0">
        <div className="container-fluid">
          <div className="row row-flex">
            <div className="col-md-4 col-sm-12" style={{  
                                                borderBottom: "1px solid #454545",
                                                borderTop: "1px solid #454545"
                                            }}>
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="google-map" className="font-50px white-icon" />
                  <h2>Office Address</h2>
                  <p>
                    Unit 2201-T, 22nd Floor, SM Aura Tower, <br/>26th Street corner McKinley Parkway, Bonifacio Global City, Taguig City, Philippines 1630
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12" style={{  
                                                borderBottom: "1px solid #454545",
                                                borderTop: "1px solid #454545"
                                            }}>
              <div className="col-inner spacer " style = {{backgroundColor:"#2d2d2d"}}>
                <div className="text-center white-color">
                  <Icofont icon="email" className="font-50px white-icon" />
                  <h2>Email Us</h2>
                  <p className="mb-0">email@tostem.com</p>
                  <p>email2@tostem.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12" style={{  
                                                borderBottom: "1px solid #454545",
                                                borderTop: "1px solid #454545"
                                            }}>
              <div className="col-inner spacer dark-bg">
                <div className="text-center white-color">
                  <Icofont icon="iphone" className="font-50px white-icon" />
                  <h2>Call Us</h2>
                  <p className="mb-0">(02) 893 3113</p>
         
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );

export default ContactFour;
