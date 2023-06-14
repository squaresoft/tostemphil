import React,{useState,useEffect} from "react";
import ReactWow from "react-wow";
import Icofont from "react-icofont";
import ReactPlayer from "react-player"
import {isMobile} from 'react-device-detect';
const AboutUsOne = ({
  hasbutton,
  title,
  textButton,
  linkButton,
  image,
  linkImage,
  children,
  toggler,
  setToggler,
  type,
  serviceImg,
  autoplay,
  titleplacement
}) => {
  const [divHeight, setdivHeight] = useState(0);
  const [imageHeight,setimageHeight] = useState(0);
   useEffect(() => {
    // Update the document title using the browser API
    setdivHeight(document.getElementById('column-pic').clientHeight);
    setimageHeight(document.getElementById('imageH').clientHeight);
  });


  return (
    <section className="white-bg" style={{paddingTop:"50px",paddingBottom:"50px",maxHeight:"100%"}}>
    {titleplacement == "middle"?    
      <div>
      <h2 className="font-1000 mt-0" style={{textAlign:"center"}}>{title}</h2> 
      <section className="white-bg" style={{paddingTop:'0px',paddingBottom:'20px'}}>
        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
        </section>
        </div>
    :null}
      <div className="container">
        <div className="row">
          <ReactWow animation="fadeLeft" delay="0.1s">
            <div className="col-md-6 mb-30" id='column-pic'>
              {titleplacement == "middle" ? null : <h2 className="font-700 mt-0">{title}</h2>}
              {children}
              {
                hasbutton 
                ?
                  <a
                href={linkButton}
              className="btn btn-gray btn-rounded btn-animate mt-20"
              >
                <span>
                  {textButton ? textButton : "Read more"}
                  <Icofont icon="arrow-right" />
                </span>
              </a>
                :
                null
              }
              
            </div>
          </ReactWow>
          <ReactWow animation="fadeTop" delay="0.2s">
          <div className="col-md-6">
          {
            type == 'picture' ?
             <div
            className="player-wrapper"
            style = {{paddingTop:"0px"}}
           
          >
            <img id="imageH" src={require("../../assets/images/" + serviceImg)} alt="" style={{maxWidth:"90% "}}/></div>

            :
                 <div className="player-wrapper">
                 <ReactPlayer
                                        className='react-player'
                                        url= {serviceImg}
                                        width='100%'
                                        height='100%'
                                        playing={autoplay}
                                        controls = {true}

                                        />

                                        </div>

          }
           
            
          </div>
          </ReactWow>
        </div>
      </div>
      {titleplacement == "middle" ?<section className="white-bg" style={{paddingTop:'0px',paddingBottom:'0px'}}>
        <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'75%'}}></hr>
        </section>:null}
    </section>
  );
};

export default AboutUsOne;
