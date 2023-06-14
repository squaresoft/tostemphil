import React from "react";
import GalleryItems from "./GalleryItems"
const GalleryOverlay = ({openVideo,galleryName,galleryId, show, onClick }) => {

  return (
    <div
      className={
        show === true
          ? "fullscreen-search-overlay fullscreen-search-overlay-show"
          : "fullscreen-search-overlay"
      }
      id="search-overlay"
      style={{overflowY:"scroll"}}
    >
      <a
        href="!#"
        className="fullscreen-close"
        onClick={onClick}
        id="fullscreen-close-button"
        style={{zIndex:999999}}
      >
        <i className="icofont icofont-close"></i>
      </a>
      <div id="fullscreen-search-wrapper">
        <GalleryItems 
        galleryName = {galleryName} 
        id={galleryId}  
        filter="false" 
        columns="four" 
        layout="box"
        show={show}
        openVideo={openVideo} />
      </div>
    </div>
  );
};

export default GalleryOverlay;
