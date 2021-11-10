import React from "react";
import dataBlog from "../../data/Blog/blog-data.json";
import dataSocial from "../../data/Social/social-data.json";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import FooterOne from "../../components/Footer/FooterOne";
import SidebarForBlog from "../../components/Sidebar/SidebarForBlog";
import Icofont from "react-icofont";
import CommentsRespond from "../../components/Blog/CommentsRespond";

const BlogStandard = ({ sidebar }) => {
  const postId = new URLSearchParams(window.location.search).get("id");
  const post = dataBlog.find((post) => post.id === parseInt(postId));
  const featuredPost = dataBlog.find((post) => post.id === 1);

  return (
    <Loader>
      <HeaderOne />
       <PageTitleAbout
      title={post.title} 
      tagline={post.published} 
      background="/Tostem/Carousel-Image-4.jpg"
      image=""
    />
      {
       // <PageTitleBlog title={post.title} tagline={post.published} />
      }
      <section className = "white-bg">
        <div className="container ">
          <div className="row"> 
           <div className="col-md-1">
           </div>
          <div className="col-md-11">
          
             
                <div className="floated">
                <div className="col-md-6" style={{paddingLeft:"0px"}}>
                  <img
                    className="img-responsive"
                    src={require("../../assets/images/" + post.image)}
                    alt=""
                  />
                  </div>
                </div> 
         
             
                  <h2 className="font-700 mt-0">
                   {post.title}
                  </h2>
                  <h6>{post.published}</h6>
                  <p style = {{textAlign:"justify"}}>{post.text}</p>
                  
            
            </div>
          </div>
        </div>
      </section>
      <FooterOne/>
    </Loader>
  );
};

export default BlogStandard;
