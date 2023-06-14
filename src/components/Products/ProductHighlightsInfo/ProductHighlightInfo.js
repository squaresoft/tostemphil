import React,{useState,Fragment} from "react";
import Slider from "react-id-swiper";
import dataHighlight from '../../../data/Products/product-highlights.json'
import ReactWow from "react-wow";

const ProductHighlightInfo = ({highlightID,animate})=>{
const settings = {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  };
  
return(
    <section className="white-bg" >
      <div className="container">
        <Fragment>
          {
            animate === false 
            ?
            dataHighlight
            .filter(i => i.id === parseInt(highlightID))
            .map((item)=>{
              return(
                <Fragment>
                  <div className="row">
                      <div className="col-md-4">
                      </div>
                      <div className="col-md-4" style={{textAlign:"center"}}>
                        <h3  style={{fontWeight:"bold"}}>{item.title}</h3>
                      </div>
                   </div>
                   <div className = "row">
            <div className="col-md-2">
                      </div>
                       <div className="col-md-8 ">
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

export default ProductHighlightInfo;