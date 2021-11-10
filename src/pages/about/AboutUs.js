import React,{useState} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesThree from "../../components/OurServices/OurServicesThree";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import AboutUsOneLeftImage from  "../../components/AboutUs/AboutUsOneLeftImage";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import dataSlider from "../../data/About/tostem-timeline-data.json";
import HorizontalTimeline from "react-horizontal-timeline";
import ReactWow from "react-wow";
const AboutUs = () => {
  const [curIdx,setCurIdx] = useState(0)
  const [animate,setAnimate] = useState(false)
  const [prevIdx,setPrevIdx] = useState(-1)
  const [curStatus,setCurStatus] = useState(dataSlider[curIdx])
  return (
  <Loader>
     <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      background="/Tostem/Carousel-Image-4.jpg"
      image=""
    />
 
  {/* <OurServicesThree 
      title="About Us"
      tagline="Part of your success"

     />  */}
<div style={{minHeight:"450px"}}>
     <AboutUsOne
      title="ABOUT TOSTEM"
      textButton="Read more"
      linkButton={`${process.env.PUBLIC_URL}/about-us`}
      // image={image}
      // toggler={toggler}
      // setToggler={setToggler}
      type="video"
      hasbutton = {false}
      serviceImg={"https://www.youtube.com/watch?v=YUFlLe4N3rA"}
    >
    <p className="mt-20" style={{textAlign:"justify"}}>
       Because TOSTEM truly understands the needs of users, so we have stepped into the leading brand of residential building products from Japan.
       Complete solution of TOSTEM is designed to be easy and convenient to use. We design solutions that meet the needs of our users using our expertise.
      </p>
      <p style={{textAlign:"justify"}}> 
        And experience that has more than half a century, develop technology and create innovation that can meet user needs and family members in all eras Tostem is dedicated to product development, manufacturing, and marketing of a wide range of residential products, such as doors, windows, front doors, and outdoor products This product group itself will be delivered. 
        "Lifestyle solutions" that are flexible and compatible and meet the needs of customers to deliver satisfaction every time use
      </p>
    </AboutUsOne>
    </div>
<section className="white-bg" style={{paddingTop:'30px',paddingBottom:'30px'}}>
<hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'350px'}}></hr>
</section>
 <AboutUsOneLeftImage
      title="ABOUT LIXIL GROUP"
      textButton="Read more"
      linkButton={`${process.env.PUBLIC_URL}/about-us`}
      // image={image}
      // toggler={toggler}
      // setToggler={setToggler}
      type="video"
      hasbutton = {false}
      serviceImg={"https://www.youtube.com/watch?v=LyEx4kvb4e8"}
    >
    <p className="mt-20" style={{textAlign:"justify"}}>
       Living for the best quality of life is everyone's dream and Lixil helps to make that dream come true by pioneering home and sanitary products. Innovating since 2011 from the gathering of 5 leading Japanese building materials and products company. Lixil evolves from the past to the present to create world-leading technology and high-quality products that will make your home never be the same again. 
       We develop products with all users in mind, in every environment and terrain in which Lixil operates. 
      </p>
      <p style={{textAlign:"justify"}}> 
        And to sustain our planet Today, our concept has been transformed into real products under many world-recognized brands in the residential product industry such as TOSTEM, American Standard, GROHE and INAX. Lixil are proud that our products are a part of the daily lives of over one billion people around the world. And we won't stop there because we believe we have a lot of creative potential.
      </p>
        <ClientsBrand />
    </AboutUsOneLeftImage>
      
     {// <WhoWeAreSeven />
     //<OurSkillsTwo 
      //  title="Our Skills"
   //    tagline="We develop big ideas that sell"
   // />
    //   <CounterOne />
    // 
  
      // <OurTeamTwo title="MEET OUR TEAM" tagline="WE ARE STRONGER" />
      //   <TestimonialsOne 
      //     title="Testimonials"
      //     tagline="Happy clients"
      //   />
      //   <ClientsBrand />
      }
      <section className="white-bg" style={{paddingTop:'30px',paddingBottom:'30px'}}>
      <hr style={{color:'white',backgroundColor:"rgb(148 153 156)",width:'350px'}}></hr>
     <div className="container">
          <div className="row" style={{textAlign:"center"}}>
            <h2>Our History</h2>
            <p>For more than half a century, TOSTEM has overcome challenges int the 
            pursuit of quality and performance as an expert in the field of windows
            and doors, contributing to the comfort and safety of people's homes and enriching
            their lives.</p>
          </div>
          </div>
      </section>

       <section className="white-bg timeline-sec " style={{paddingTop:'30px',paddingBottom:'30px'}}>
        


        <div className="container" >
        <div className="row" style={{minHeight:"100px"}}>
         <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#54585A",
              outline: "#cfcfcf"
            }}
            index={curIdx}
            indexClick={(index) => {
               const cIdx = curIdx;
               setCurIdx(index)
               setPrevIdx(cIdx)
              setCurStatus(dataSlider[index]);
              setAnimate(false)
               setTimeout(() => {  
                                    setAnimate(true) }, 150);
              // this.setState({ curIdx: index, prevIdx: curIdx });
            }}            
            values={dataSlider.map(x => x.data)}
          />
          </div>
          <div className="row" style={{minHeight:"450px"}}>
          {
            animate == false
            ?
               <ReactWow animation="fadeTop" delay="0.2s">
            <AboutUsOne
                title={curStatus.title}
                textButton="Read more"
                linkButton={`${process.env.PUBLIC_URL}/about-us`}
                type="picture"
                serviceImg = {curStatus.imageLink}
                 hasbutton = {false}
              >
              <p className="mt-20" style={{textAlign:"justify"}}>
                  {curStatus.writeUp}
                </p>
              </AboutUsOne>
              </ReactWow>

            :

            <AboutUsOne
                title={curStatus.title}
                textButton="Read more"
                linkButton={`${process.env.PUBLIC_URL}/about-us`}
                type="picture"
                serviceImg = {curStatus.imageLink}
                 hasbutton = {false}
              >
              
                  {
                    curStatus.writeUp
                    .split('|')
                    .map((val)=>{
                      return(
                        <p className="" style={{textAlign:"justify"}}>{val}</p>
                        )
                    })
                  
                  }
              
              </AboutUsOne>
            
          }
         
                    </div>
          </div>
      </section>
    
    <FooterOne />
  </Loader>
)};

export default AboutUs;
