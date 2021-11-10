import React,{useState} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import OurSkillsTwo from "../../components/OurSkills/OurSkillsTwo";
import CounterOne from "../../components/Counters/CounterOne";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import FooterOne from "../../components/Footer/FooterOne";
import OurTeamDesc from "../../components/AboutUs/OurTeam/OurTeamDescription"
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const AboutUs = () => {
  const [idTeam,setID] = useState(1)
  const [animate,setAnimate] = useState(false)
  const [scroll,setScroll] = useState(false)
   function scrollVal(){
    if(scroll === false){
      setScroll(true);
    }
    else{
      setScroll(false)
    }
  }
  function getID (id){
    setID(id);
    setAnimate(true);
    setTimeout(()=>( setAnimate(false)), 1000 );
   scrollVal()
  }
 
  return(
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
   <TestimonialsTwo 
      title="Our Team"
      tagline=""
      getId={getID}
  
    />
    <OurTeamDesc
    id={idTeam}
    animate={animate}
    scroll={scroll}

    />
    <FooterOne />
  </Loader>
)};

export default AboutUs;
