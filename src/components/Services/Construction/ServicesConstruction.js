import React, { useState }  from "react";
import dataServices from "../../../data/Services/services-construction-data.json";
import ServicesInfo from '../ServicesInfo/ServicesInfo'
import Icofont from "react-icofont";
import Modal from 'react-modal'

import AllPagesPDFViewer from "../../PDF/all-pages.js"
Modal.setAppElement('#main')

const ServicesConstruction = (props) => {

const [mTitle,setMTitle] = useState("");
const [sMID, setSmID] = useState(1);
const [mOpen, setmOpen] = useState(false);

function openModal(link) {
  window.open(`${process.env.PUBLIC_URL}/${link}`, '_blank')
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  
  }

  function closeModal(){
    setmOpen(false);
  }
  return (
  <section className="white-bg" style ={{paddingTop:'0px',paddingBottom:"0px"}}>

    <div className="container">
      {/*<div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="text-uppercase white-color">{props.title}</h2>
      <hr className="text-center yellow-bg" />
        </div>
      </div>*/}
      <div className="row service-box-style-01 mt-50">
        {dataServices.map((service) => (
          <a onClick={(e)=>{openModal(service.link)}} style ={{cursor:"pointer"}}>
          <div className="col-md-3 col-sm-3 col-xs-12" key={service.id}>
            <div className="flipper">
              <div className="text-center mb-50 main-box">
                <div className="box-front height-300px " style ={{backgroundColor:"#8a8a8a"}}>
                  <div className="content-wrap">
                   <img id="imageH" src={require("../../../assets/images" + service.icon)} alt="" style={{maxWidth:"60% "}}/>
                  {/*  <Icofont
                      icon={service.icon}
                      className="font-40px white-color"
                    />*/}
                    <h4 className="font-600 white-color">{service.title}</h4>
                   {/* <p className="font-400 mt-20 white-color">{service.text}</p>*/}
                  </div>
                </div>
                <div className="box-back height-300px grey-bg">
                  <div className="content-wrap">
                    <img id="imageH" src={require("../../../assets/images" + service.icon)} alt="" style={{maxWidth:"60% "}}/>
                    <h4 className="font-600">{service.title}</h4>
                    {/*<p className="font-400 mt-20 dark-color">{service.text}</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)};

export default ServicesConstruction;
