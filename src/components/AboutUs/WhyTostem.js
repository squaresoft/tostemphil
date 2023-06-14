import React,{useState,useEffect} from "react";
import ReactWow from "react-wow";
import Icofont from "react-icofont";
import ReactPlayer from "react-player"
const AboutUsOne = ({
  title,
  textButton,
  linkButton,
  image,
  linkImage,
  children,
  toggler,
  setToggler,
}) => {
  const [divHeight, setdivHeight] = useState(0);
   useEffect(() => {
    // Update the document title using the browser API
    setdivHeight(document.getElementById('column-pic').clientHeight);
  });


  return (
    <section className="white-bg" style={{paddingTop:"50px",paddingBottom:"50px"}}>
      <div className="container">
        <div className="row">
          <ReactWow animation="fadeLeft" delay="0.1s">
            <div className="col-md-6 mb-30" id='column-pic'>
              <h2 className="font-700 mt-0">{title}</h2>
              {children}
              <a
                href={linkButton}
              className="btn btn-gray btn-rounded btn-animate mt-20"
              >
                <span>
                  {textButton ? textButton : "Read more"}
                  <Icofont icon="arrow-right" />
                </span>
              </a>
            </div>
          </ReactWow>
          <ReactWow animation="fadeTop" delay="0.2s">
          <div className="col-md-6">
            <div className="arcon-video-box">
                 <ReactPlayer
                                        className='react-player fixed-bottom'
                                        url= "https://www.youtube.com/watch?v=qckismfZSrk"
                                        width='100%'
                                        height={divHeight}
                                        playing={false}
                                        controls = {true}

                                        />

            </div>
          </div>
          </ReactWow>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOne;
