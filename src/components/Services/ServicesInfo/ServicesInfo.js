import React,{useState,Fragment} from "react";
import Slider from "react-id-swiper";
import dataHighlight from '../../../data/Services/services-construction-data.json'
import ReactWow from "react-wow";

const ServiceInfo = ({serviceID,animate})=>{
const settings = {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  };
  
return(
    <section className="grey-bg serviceInfo" style ={{paddingTop:"50px", paddingBottom:"50px"}} >
      <div className="container">
        <Fragment>
          {
            animate === false 
            ?
            dataHighlight
            .filter(i => i.id === parseInt(serviceID))
            .map((item)=>{
              return(
                <Fragment>
                  {/*<div className="row">
                      <div className="col-md-4">
                      </div>
                      <div className="col-md-4" style={{textAlign:"center"}}>
                        <h3  style={{fontWeight:"bold"}}>{item.title}</h3>
                      </div>
                   </div>*/}
                   <div className = "row">
      
                       <div className="col-md-12">
                            <div className="product-slider">
                              <Slider {...settings}>
                               
                                  {
                                    item.images
                                    .map((itemImage)=>(
                                        <div key={itemImage.ImageID}>
                                          <img
                                              key={itemImage.ImageID}
                                              src={require(`../../../assets/images/${itemImage.link}`)}
                                              className="img-responsive"
                                              alt="single-product"
                                            />
                                          </div>
                                    ))
                                  }
                     
                              </Slider>
                            </div>
                          </div>
                   </div>
                   </Fragment>

                )

            })
            :
            null            
          }
        </Fragment>
        </div>
      </section>





  )
}

export default ServiceInfo;