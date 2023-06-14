import React,{Fragment} from "react";
import ReactWow from "react-wow";
const ProductInformation = ({ title, tagline,serviceImg,description,animate }) => {
  return(
  <section className="light-bg" style={{height:"1000px"}}>
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
      
      >
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
      </div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
      {
        animate == false
        ?
        <ReactWow animation="fadeLeft" delay="0.1s">
        <h2 className="font-700">{title}</h2>
        <h4 className="mt-10 line-height-26 default-color">{tagline}</h4>
         {
                                          description
                                          .split("|")
                                          .map((val)=>(
                                          
                                              <p className="mt-20" style={{textAlign:"justify"}}>
                                              {val}
                                              </p>
                                         


                                            ))
                                        }
        
        <p className="mt-30">
       
        </p> 
         </ReactWow>
         :
        null
      }
         
      </div>
    </div>
  </section>
)};

export default ProductInformation;
