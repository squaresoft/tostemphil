import React from "react";

const PageTitleBlog = ({ title, tagline }) => (
  <section
    className="title-hero-bg blog-cover-bg"
    data-stellar-background-ratio="0.2"
  >
    <div className="container">
      <div className="page-title text-center">
        <h1>{title}</h1>
        <h4 className="text-uppercase mt-30 white-color">{tagline}</h4>
      </div>
    </div>
  </section>
);

export default PageTitleBlog;
