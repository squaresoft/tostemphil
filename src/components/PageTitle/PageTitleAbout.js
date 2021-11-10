import React from "react";

const PageTitleAbout = ({ title, tagline,image,background }) => {

  const im = require("../../assets/images" +background)

  return (
  <section
    className="title-hero-bg "
    data-stellar-background-ratio="0.2"
    style={{ backgroundImage: `url(${im})` }}
  >
    <div className="container">
      <div className= "page-title text-center white-color" >
      {
        image =="" ?
        <h1>{title}</h1>
        :
        <h1><img className = " logo-page-title" src={require("../../assets/images" +
                      image)} alt=""/></h1>
      }
       
        <h4 className="text-uppercase mt-30">{tagline}</h4>
      </div>
    </div>
  </section>
)};

export default PageTitleAbout;
