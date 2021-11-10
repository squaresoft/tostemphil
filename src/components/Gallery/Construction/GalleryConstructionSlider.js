import React,{useState,useCallback,useEffect} from "react";
import { Link } from "react-router-dom";
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import dataGallery from "../../../data/Products/product-detail.json";
import 'swiper/css/swiper.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const GalleryConstruction = (props) => {
  const [resizevar,setResizeForm] = useState(false)
  const settings = {
     autoplay: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
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
  const resizeForm = useCallback(()=>{
      var wWidth = window.innerWidth;
      if(wWidth <=900){
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
  return(
  
  <section className="pb-0" style={{paddingTop:"40px", paddingBottom:"40px"}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 section-heading" >
          <h2 className="">{props.title}</h2>
         
       {  
           // <p className="mt-20 frontPage" style={{fontSize:"15px !important"}}>
           //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
           //       vulputate dolor. Nullam venenatis enim in quam euismod fringilla. Donec
           //       in risus eget purus mattis varius. Nulla dapibus quis orci et tincidunt.
           //       Phasellus in rhoncus quam. Fusce a est lacinia, ultricies mi nec, rutrum
           //       dolor.
           //     </p>
           //     <p className="frontPage">
           //       Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
           //       auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
           //       facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
           //       tristique.
           //     </p>
          
        // <a className="btn btn-color btn-red btn-square" href={`${process.env.PUBLIC_URL}/products`}> Read More </a>
           }</div>
      </div>



      <div className="row">
      <div className = {"white-bg remove-padding"+ (resizevar== false ? " hideElement" : " showElement")}>
             <Slider {...settings}>
      {dataGallery.map((item) => (
         
          <div className="col-md-4 test-shine box-shadow-hover" key={item.id}>
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src= {require("../../../assets/images/" + item.image)}
                  className="img-responsive"
                  alt="team-01"
                />
                 
              </div>

             <div className="grey-bg pt-20 pb-20 ">
                <h4 className="member-title text-uppercase">{item.productName}</h4>
                <button className="btn btn-gray btn-square" onClick={()=>{window.open(`${process.env.PUBLIC_URL}/product-details?link=${item.id}`, '_blank');}}> View</button>
              </div>
            </div>
          </div>
     
        ))}
      </Slider>
      </div>
      <div className={"row mt-50"+ (resizevar ? " hideElement" : " showElement")} style = {{marginTop:"0px"}}>
        <div className="portfolio-container text-center">
        {resizevar ?
          null
          :
            <StyleRoot>
        <Coverflow
          width={960}
          height={500}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={true}
          media={{
        '@media (min-width:1025px)': {
          width: '100%',
          height: '300px'
        },
         '@media (max-width:1025px)': {
          width: '100%',
          height: '300px'
        },
        '@media (max-width: 900px)': {
          width: '100%',
          height: '300px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
        },
        '@media (min-width: 900px)': {
          width: '100%',
          height: '300px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
         
        },
        '@media (max-width: 1200px)': {
          width: '100%',
          height: '400px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
        },
        '@media (min-width: 1200px)': {
          width: '100%',
          height: '600px',
           '.coverflow__figure__3bk_C': {
          width: '150px !important'
        }
         
        }
      }}
        >
          
          {dataGallery.map((item) => (
             <img key = {item.id} src={require("../../../assets/images/" + item.image)} alt={item.productName} data-action={`${process.env.PUBLIC_URL}/product-details?link=${item.id}`}/>
              
            ))}

        </Coverflow>

      </StyleRoot>

        }
        
          {/*<ul id="portfolio-grid" className="three-column hover-two">
            {dataGallery.map((item) => (
              <li key={item.id} className="portfolio-item">
                <div className="portfolio photo-gallery">
                  <div className="dark-overlay"></div>
                  <img
                    src={require("../../../assets/images/" + item.image)}
                    alt=""
                  />
                  <div className="portfolio-wrap">
                    <div className="portfolio-description">
                      <h3 className="portfolio-title">{item.title}</h3>
                    </div>
                    <ul className="portfolio-details">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/single-portfolio`}>View Project </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>*/}
        </div>
      </div>
      </div>
    </div>
  </section>
)};

export default GalleryConstruction;
