import React, { useEffect, useRef, useState, forwardRef,Fragment } from "react";
import dataGallery from '../../../data/ImageGallery/data-image-gallery.json'
import PortfolioFilter from "../../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "../../Portfolio/PortfolioItem";
import Shuffle from "shufflejs";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import Pagination from "../../Pagination/PaginationNew"
const Portfolio = forwardRef(
  ({galleryName,id,filter, layout, columns, space, items, classAppend, children,openVideo,show }, ref) => {
    const categories = ["all", "design", "web", "branding", "print"];

    const element = useRef();
    const [shuffle, setShuffle] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(()=>{
      setCurrentPage(1)
    },[show])
    useEffect(() => {
      if (element.current) {
        setShuffle(
          new Shuffle(element.current, {
            itemSelector: ".portfolio-item",
          })
        );
      }
      
    }, []);

    const filterElements = (evt) => {
      const btn = evt.currentTarget;
      evt.target.parentElement
        .querySelectorAll(".active")
        .forEach((e) => e.classList.remove("active"));
      evt.currentTarget.classList.add("active");
      const cat = btn.getAttribute("value");
      shuffle.filter((element) => {
        return element.getAttribute("data-groups").toLowerCase().includes(cat);
      });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState(0);
    
    
    const closeLightbox = (e) => {
       e.preventDefault();
      setIsOpen(false);
    };
    const openLightbox = (e, photo) => {
      e.preventDefault();
      setPhoto(photo);
      setIsOpen(true);
    };
    
  
     // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const imagesList = [];
    dataGallery.filter((item)=> parseInt(item.id) == parseInt(id))
               .map((itemImage)=>(
               itemImage.MediaList.map((image)=>(
                imagesList.push(image)
                ))
              )
            )

    const currentPosts = imagesList.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts)
    // Change page
    const paginate = (e,pageNumber) => {
      e.preventDefault();
       setCurrentPage(pageNumber)};
    return (
      <Fragment>
      <section 
        className={"pb-0 " + (classAppend ? classAppend : "")}
        id="work"
        ref={ref}
        style = {{background:"transparent"}}
      >

      {
        parseInt(id)==0
        ?
        null
        :
        <Fragment>
          <div className="container">
            <div className="row">
            <h3 style={{color:"white"}}>{galleryName}</h3>
            </div>
          </div>
       
        <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
          <div className="row">
            <div className="portfolio-container text-center">
              {filter === "true" ? (
                <PortfolioFilter
                  categories={categories}
                  handleClick={filterElements}
                />
              ) : null}

              <ul
                id="portfolio-grid"
                ref={element}
                className={(columns ? columns : "three") + "-column hover-two"}
              >
                {
                  // currentPosts
                  // .filter((item)=> parseInt(item.id) == parseInt(id))
                  // .map((itemImage)=>(
                  //   itemImage.MediaList.map((image)=>(
                  //     <li key={image.id} className=''>
                  //      <PortfolioItem
                  //         key={image.id}
                  //         imageThumbnail ={image.thumbnail}
                  //         imageType={image.type}
                  //         title={image.title}
                  //         category={[]}
                  //         image={image.location}
                  //         space= "true" 
                  //         openLightbox={openLightbox}
                  //         openVideo= {openVideo}
                  //        />
                  //     </li>
                  //     ))
                  //   )

                  // )
                   currentPosts                  
                   .map((image)=>(
                      <li key={image.id} className=''>
                       <PortfolioItem
                          key={image.id}
                          imageThumbnail ={image.thumbnail}
                          imageType={image.type}
                          title={image.title}
                          category={[]}
                          image={image.location}
                          space= "true" 
                          openLightbox={openLightbox}
                          openVideo= {openVideo}
                         />
                      </li>
                      ))
                    

                  
                
              }
              </ul>
               <Pagination
                postsPerPage={postsPerPage}
                totalPosts={imagesList.length}
                paginate={paginate}
              />
              {
                isOpen && (
                <Lightbox
                  mainSrc={require("../../../assets/images/" + photo)}
                  onCloseRequest={(e) => closeLightbox(e)}
                />
              )}
              
            </div>
          </div>
        </div>

        </Fragment>
      }
        
      </section>
      </Fragment>
    );
  }
);

export default Portfolio;
