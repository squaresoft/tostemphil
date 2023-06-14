import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItem";
import testimonialsData from "../../data/Testimonials/testimonials-data.json";
import dataTeam from "../../data/Team/team-architecture.json";
import Icofont from "react-icofont";
const TestimonialsTwo = ({ title, tagline,getId}) => {
  const settings = {
    dots: true,
    centerMode: false,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slick testimonial",

  };
  return (
    <section className="light-bg">
      <div className="container">
        <div className="row">
          <HeadingSection
            title={title}
            tagline={tagline}
            classAppend="black-color"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
               {
               // testimonialsData.map((testimonial) => (
              //   <TestimonialItem
              //     key={testimonial.id}
              //     avatar={testimonial.avatar}
              //     name={testimonial.name}
              //     role={testimonial.role}
              //   >
              //     {testimonial.text}
              //   </TestimonialItem>
              // ))
            }
             {dataTeam.map((member) => (
          <div className="col-md-4" key={member.id}>
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="img-responsive"
                  alt="team-01"
                />
                <div className="member-caption">
                  <div className="member-description text-center">
                    <div className="member-description-wrap">
                      <ul className="member-icons">
                        {member.social.map((item) => (
                          <li className="social-icon" key={item.id}>
                            <a href={item.link}>
                              <Icofont icon={item.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-bg pt-20 pb-20 box-shadow-hover">
                <h4 className="member-title text-uppercase">{member.name}</h4>
                <p className="member-subtitle">{member.role.toUpperCase()}</p>
                <button className="btn btn-square btn-gray" onClick={()=>getId(member.id)}>Read More</button>
              </div>
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

export default TestimonialsTwo;