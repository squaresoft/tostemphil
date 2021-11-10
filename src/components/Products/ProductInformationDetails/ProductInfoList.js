import React,{useState,useEffect,useCallback} from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductInfoList = ({dataTeam,categoryID}) =>{
const [resizeVar,setResizeForm]= useState(false)
const resizeForm = useCallback(()=>{
      var wWidth = window.innerWidth;
      if(wWidth <=991){
        setResizeForm(true)
      }
      else{
        setResizeForm(false)
      }
  },[])

 useEffect(() => {
    window.addEventListener("resize", resizeForm);
    resizeForm();
    return () => {
      window.removeEventListener("resize", resizeForm);

    };
  }, [resizeForm]);
 const settings = {
    dots: true,
    centerMode: false,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 2,
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
  <section className="white-bg" id="Prod">
    <div className="container">
      <div className="row mt-10 startup-member hover">

        {
            resizeVar
            ?
            (
            dataTeam.length < 2 
            ?
              dataTeam.map((member) => (
              <div className="col-md-4 test-shine box-shadow-hover" key={member.detailID}>
              <div className="member text-center">
                <div className="team-member-container">
                  <img
                    src= {require(`../../../assets/images${member.img}`)}
                    className="img-responsive"
                    alt="team-01"
                  />
                   
                </div>
                <div className="grey-bg pt-20 pb-20 ">
                  <h4 className="member-title text-uppercase">{member.detailName}</h4>
                  <button className="btn btn-square btn-gray" 
                          onClick={()=>{window.open(`${process.env.PUBLIC_URL}/product-single-detail?categoryID=${categoryID}&productID=${member.detailID}`,"_self")}}>
                          Read More</button>
                </div>
              </div>
            </div>
             ))
            :
            <Slider {...settings}>
            {
              dataTeam.map((member) => (
              <div className="col-md-4 test-shine box-shadow-hover" key={member.detailID}>
              <div className="member text-center">
                <div className="team-member-container">
                  <img
                    src= {require(`../../../assets/images${member.img}`)}
                    className="img-responsive"
                    alt="team-01"
                  />
                   
                </div>
                <div className="grey-bg pt-20 pb-20 ">
                  <h4 className="member-title text-uppercase">{member.detailName}</h4>
                  <button className="btn btn-square btn-gray" 
                          onClick={()=>{window.open(`${process.env.PUBLIC_URL}/product-single-detail?categoryID=${categoryID}&productID=${member.detailID}`,"_self")}}>
                          Read More</button>
                </div>
              </div>
            </div>
             ))
            }
            </Slider>
            )
            :

          dataTeam.map((member) => (
          <Link to={`${process.env.PUBLIC_URL}/product-single-detail?categoryID=${categoryID}&productID=${member.detailID}`}>
          <div className="col-md-4 test-shine box-shadow-hover" key={member.detailID}>
            <div className="member text-center">
              <div className="team-member-container" style={{border:"1px #abababb3 solid"}}>
                <img
                  src= {require(`../../../assets/images${member.img}`)}
                  className="img-responsive"
                  alt="team-01"
                />
                 
              </div>
              <div className="white-bg pt-20 pb-20 " style={{border:"1px #abababb3 solid"}}>
                <h3 className="member-title text-uppercase" >{member.detailName}</h3>
          
              </div>
            </div>
          </div>
          </Link>
        ))


        }
      </div>
    </div>
  </section>
);


} 

export default ProductInfoList;
