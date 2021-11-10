import React, { forwardRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import dataGallery from "../../data/Gallery/gallery-architecture-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import Icofont from "react-icofont";

const GalleryArchitecture = forwardRef(({ title, tagline }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };

  return (
    <section className="pt-0 pb-0 white-bg" id="project" ref={ref}>
      <div className="container-fluid">
        <div className="row">
          <HeadingSection title={title} tagline={tagline} />
        </div>
        <div className="row mt-50">
          <div className="portfolio-container text-center">
            <ul id="portfolio-grid" className="three-column hover-two">
              {dataGallery.map((item) => (
                <li className="portfolio-item" key={item.id}>
                  <div className="portfolio photo-gallery">
                    <div className="dark-overlay"></div>
                    <img
                      src={require("../../assets/images/" + item.image)}
                      alt=""
                    />
                    <div className="portfolio-wrap">
                      <ul className="portfolio-details">
                        <li>
                          <a
                            className="alpha-lightbox"
                            href={"assets/images/" + item.link}
                            onClick={(e) => openLightbox(e, item.image)}
                          >
                            <Icofont icon="search-1" className="font-40px" />
                          </a>
                        </li>
                      </ul>
                      {isOpen && (
                        <Lightbox
                          mainSrc={require("../../assets/images/" + photo)}
                          onCloseRequest={() => closeLightbox()}
                        />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default GalleryArchitecture;
