import React from "react";
import { Link } from "react-router-dom";

const BlogItemSidebar = ({
  id,
  index,
  blogType,
  firstPost,
  image,
  title,
  published,
  excerpt,
}) => {
  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  return (
    <div
      className={
        "post " +
        ((blogType && index === firstPost) ||
        (blogType && index === firstPost + 1)
          ? ""
          : (index === firstPost)
          ? ""
          : "mt-50")
      }
    >
      <div className="post-img">
        <img
          className="img-responsive"
          src={require("../../assets/images/" + image)}
          alt=""
        />
      </div>
      <div className="post-info">
        <h3>
          <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{title}</Link>
        </h3>
        <h6>{published}</h6>
        <p>{excerpt}</p>
        <Link
          className="readmore dark-color"
          to={`${process.env.PUBLIC_URL + blogURL}`}
        >
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItemSidebar;
