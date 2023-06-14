import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import dataBlog from "../../data/Blog/blog-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import Icofont from "react-icofont";

const BlogSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "owl-carousel blog-slider",
    responsive: [
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section style={{paddingTop:"50px",paddingBottom:"50px"}}>
      <div className="dn-bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <HeadingSection title="Latest News" tagline="" />
        </div>
        <div className="row ">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {dataBlog.map((post) => (
                <div className="post" key={post.id}>
                  <div className="post-img">
                    <img
                      className="img-responsive"
                      src={require("../../assets/images/" + post.image)}
                      alt=""
                    />
                  </div>
                  <div className="post-info" style={{height:"380px"}}>
                    <h3>
                     {post.title}
                    </h3>
                    <h6 >{post.published}</h6>
                    <p>{post.text.substring(0,150)}...</p>
                   <a  className="btn btn-sm btn-gray btn-rounded btn-animate mt-20" href={`${process.env.PUBLIC_URL}/blog/${post.title}?id=${post.id}`}>
                      <span>Read More<Icofont icon="arrow-right" /></span>
                        
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
