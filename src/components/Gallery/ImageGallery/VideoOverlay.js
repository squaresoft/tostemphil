import React from "react";
import ReactPlayer from 'react-player'
const VideoOverlay = ({ show, onClick ,videoLink}) => {

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
      <div className="row ">
      <div className='col-md-2 text-center' />
      {
        show === true
        ?
        
         <div className='col-md-8 ' style={{padding:"150px 0"}} >
          <ReactPlayer
            className='react-player fixed-bottom'
            url= {require("../../../assets/images/" + videoLink)}
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        :
        null
      }
       </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
