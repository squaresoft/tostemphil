import React from "react";

const TestimonialItem = ({ avatar, name, role, children }) => (
  <a onClick={(e)=>{e.preventDefault(); alert("Clicked")}}>
  <div className="testimonial-item hover">
    <div className="testimonial-content">
      <img
        className="img-responsive img-circle"
        src={require("../../assets/images/" + avatar)}
        alt="avatar-1"
      />
      <h5>{name}</h5>
      <p>{role}</p>
      <h4>{children}</h4>
    </div>
  </div>
  </a>
);

export default TestimonialItem;
