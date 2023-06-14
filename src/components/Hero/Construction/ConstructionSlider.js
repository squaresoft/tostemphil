import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SliderButtons from "../../../elements/SliderButtons/SliderButtons";

var isEven = require('is-even');

const ConstructionSlider = ({ data }) => {
  const params = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    paginatiautoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },on: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
 //
  return (
    <section className="pt-0 pb-0">
      <div className="slider-bg flexslider">
        <ul className="slides">
          <Swiper {...params}>
            {data.map((slide) => (
              <li key={slide.id}>
                <div
                  className="slide-img"
                  style={{
                    background: `url(${require("../../../assets/images/" +
                      slide.image)}) center center / cover scroll no-repeat`,
                  }}
                ></div>
                <div
                  className="hero-text-wrap bgTransparent-1"
                
                >
                  <div className="hero-text black-color text-bottom ">
                    <div className={"bgTransparent " + (isEven(slide.id) ?" text-left":" text-right") } style={{marginLeft:"0px !important",paddingLeft:"10px"}}>
                        <p className=" black-color  bgTitle slider-text " style={{fontSize:"35px",lineHeight:"0px !important", marginBottom:"0"}}>
                          {slide.type}
                        </p>
                        <p className=" black-color  bgTitle  slider-text" style={{fontSize:"35px",lineHeight:"0px !important", marginBottom:"0"}}>
                          {slide.title}
                        </p>
                       
                      {slide.buttons.length !== 0 ? (
                        <p className="text-center mt-30">
                          <SliderButtons buttons={slide.buttons} />
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default ConstructionSlider;
