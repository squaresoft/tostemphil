import React,{useState} from "react";
import Icofont from "react-icofont";
import dataGallery from '../../../data/ImageGallery/data-image-gallery.json'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Pagination from "../../Pagination/PaginationNew"
import SmartGallery from 'react-smart-gallery';
const GallerySlider = ({openGallery}) =>{
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const galleryList = []

  dataGallery.map((e)=>{
    galleryList.push(e)
  })
  const currentpost =  galleryList.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (e,pageNumber) => {
      e.preventDefault();
       setCurrentPage(pageNumber)};
  let image= []
 const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick testimonial",

  };


return (
  <section className="white-bg">
    <div className="container">
      <div className="row mt-10 startup-member hover">
    
        {currentpost.map((member) => {
          image=[]
          return( 
    
          <a onClick={(e)=>openGallery(e,member.id,member.GalleryName)}>
          <div className="col-md-4 col-sm-12 col-xs-12" key={member.id}>
           <div className="member text-center">
                  <div className="team-member-container">
            { member.MediaList
            .filter(media=>media.type == "jpg" && parseInt(media.id) <3)
            .map((media)=>{
              image.push(require(`../../../assets/images/${media.thumbnail}`))
               
              }
              )

          }
          <SmartGallery width="100%" height={500} images={image} />
            </div>
                  <div className="grey-bg pt-20 pb-20 ">
                    <h4 className="member-title text-uppercase">{member.GalleryName}</h4>
              
                  </div>
                </div>
               </div>
           </a>
        )})
      }

         </div> 
         <Pagination
                postsPerPage={postsPerPage}
                totalPosts={galleryList.length}
                paginate={paginate}
              />
    </div>
  </section>
)} 

export default GallerySlider;
