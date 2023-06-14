import React,{useState, useEffect, useCallback} from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";
import GallerySlider from "../../components/Gallery/ImageGallery/GallerySlider"
import GalleryOverlay from "../../components/Gallery/ImageGallery/GalleryOverlay"
import VideoOverlay from "../../components/Gallery/ImageGallery/VideoOverlay"
const ImageGallery = () => {

const [show,setShow] = useState(false)
const [galId,setGalId] = useState(0)
const [galName,setGalName]= useState("")
const resizeForm = useCallback(() => {
    var wHeight = window.innerHeight;
    const searchForm = document.getElementById("fullscreen-searchform");
    searchForm.style.top = wHeight / 2 + "px";
  }, []);

const [videoShow,setVideoShow] = useState(false);
const [videoLink,setVideoLink] = useState();

const openVideoOverlay = (e,image)=>{
  e.preventDefault();
  setVideoLink(image)
  setVideoShow(true)
}
const closeVideoOverlay = (e) =>{
  e.preventDefault();
  setVideoShow(false)
}


const showGallery=(e,index,GalleryName)=>{
  e.preventDefault();
  setGalId(parseInt(index))
  setGalName(GalleryName)
  setShow(true)
  document.body.style.overflow = "hidden"
  resizeForm();
}

const hideGallery = (e)=>{
    e.preventDefault();
    setGalId(parseInt(0))
    setShow(false);
    document.body.style.overflow = "scroll"
  };


  return (
  <Loader>
   <ScrollToTopOnMount/>
    <HeaderOne />
    <PageTitleAbout
      // title="About Tostem"
      // tagline=""
      image=""
       background="/Tostem/HEADER.jpg"
    />
  
    <GallerySlider
      openGallery ={showGallery}
     
    />
      <GalleryOverlay
      onClick = {hideGallery}
      show={show}
      galleryId = {galId}
      galleryName = {galName}
      openVideo={openVideoOverlay}
    />
     <VideoOverlay show={videoShow} videoLink = {videoLink} onClick={closeVideoOverlay}/>
    <FooterOne />
  </Loader>
)};

export default ImageGallery;
