import React,{Fragment} from "react";
import ReactWow from "react-wow";
import Icofont from "react-icofont";
import VideoThumbnail from 'react-video-thumbnail';
const PortfolioItem = ({
  imageThumbnail,
  imageType,
  title,
  category,
  image,
  links,
  space,
  groups,
  type,
  openLightbox,
  openVideo
}) => (
  <ReactWow animation="fadeIn">
    <li
      className={
        "portfolio-item " +
        (type === "product" ? "portfolio-masonry-item " : "") +
        (space === "true" ? "gutter-space" : "")
      }
      data-wow-delay="0.2s"
      data-groups={groups ? "[" + groups.map((val) => `"${val}"`) + "]" : null}
    >
      <ReactWow animation="fadeIn">
        <div
          className={
            "portfolio gallery-image-hover " +
            (type === "masonry" ? "portfolio-masonry-item" : "")
          }
        >
    
          <Fragment>
          <div className="dark-overlay"></div>
         <img src={require("../../assets/images/" + imageThumbnail)} alt="" />
          {imageType === "mp4"  ?
         <div className="arcon-video-box_overlay">
                <div className="center-layout">
                  <div className="v-align-middle">
                    <a
                      className="popup-youtube"
                      href ="#"
                     onClick={(e)=>openVideo(e,image)}
                    >
                      <div className="play-button">
                        <Icofont icon="youtube-play" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
          :
          null
          }
          {
            imageType === "jpg" 
            ?
              <div className="portfolio-wrap">
            <div className="portfolio-description">
              <h3 className="portfolio-title">{title}</h3>
              <a
                href={`${process.env.PUBLIC_URL}/single-portfolio`}
                className="links"
              >
                {category}
              </a>
            </div>
            <ul className="portfolio-details">
              <li>

                <a
                href="#"
                  className="alpha-lightbox"
                  onClick={ (e) => openLightbox(e, image)}
                >
                  <Icofont icon="search-1" />
                </a>
              </li>
        
            </ul>
          </div>
            :
            null
          }
         
          </Fragment>
         
          
        </div>
      </ReactWow>
    </li>
  </ReactWow>
);

export default PortfolioItem;
