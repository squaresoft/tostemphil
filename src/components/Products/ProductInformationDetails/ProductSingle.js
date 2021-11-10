import React,{useState,Fragment} from "react";
import Slider from "react-id-swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "swiper/css/swiper.css";
import dataProductItem from "../../../data/Products/product-detail.json";
import SliderButtons from "../../../elements/SliderButtons/SliderButtons";
import EnquireProduct from "./EnquireProduct"
import ReactWow from "react-wow";
import ReactPlayer from "react-player"
import "../../../assets/css/style-pdf.css";
import AllPagesPDFViewer from "../../PDF/all-pages.js"
import PageTitleAbout from '../../PageTitle/PageTitleAbout'
const ProductSingle = ({categoryID,productID,animate}) => {
  const [imageString,setImageString]=useState("");
  const [isClick, setIsClick] = useState(false);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const TabChange =()=>{
    setIsClick(true);
    setTimeout(()=>( setIsClick(false)), 1000 );
  }
  const settings = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    }
  };
  
   
  return (
  
    dataProductItem
    .filter(index=>index.id===parseInt(categoryID))
    .map((item)=>(
      item.productList
      .filter(index=>index.detailID===parseInt(productID))
      .map((productMain)=>{
        if(Boolean(productMain.isPdf) == true){
     
            return(
              animate == false
                ?
                <section
                  key={productMain.detailID}
                 className="white-bg" >
                  <div key={productMain.detailID} >
                 <ReactWow animation="fadeIn" delay="0.1s">
                  <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                      </div>
                    <div className="col-md-4" style={{textAlign:"center"}}>
                        <h3  style={{fontWeight:"bold"}}>{productMain.detailName}</h3>
                    </div>
                  </div>
                  </div>
                  <div  key={productMain.detailID} className="row">
                  <div  key={productMain.detailID} className="col-md-12">
                    <div  key={productMain.detailID} className="App">
                  
                  
                      <AllPagesPDFViewer pdf={require("../../../assets/pdf/product" +
                      productMain.PdfFile)} />
                 

                   
                  </div>
                    
                
                 
                    </div>
                    
                   
                  </div>
                 </ReactWow>
                 </div>
                 </section>

                :
                null

              )
        }
        else{

          return(
            <section className="white-bg" >
                  <div className="container">
            <Fragment>
    {
      animate == false
      ?
       <ReactWow animation="fadeIn" delay="0.1s">
       {
        productMain.isImage == true ?
        <div className="row">
           <div className="col-md-4">
                      </div>
                    <div className="col-md-4" style={{textAlign:"center"}}>
                        <h3  style={{fontWeight:"bold"}}>{productMain.detailName}</h3>
                    </div>

        </div>
        :
      <div></div>
       }
      <div className="row">
      {productMain.isImage==true? <div className="col-md-2"></div>: null}
        <div className={productMain.isImage == false ? "col-md-6": "col-md-8 "} >
          <div className="product-slider">
            <Slider {...settings}>
             
                {
                  dataProductItem.filter(index=>index.id===parseInt(categoryID))
                  .map((item)=>(
                     item.productList.filter(index=>index.detailID===parseInt(productID))
                    .map((product)=>(
                      product.productImageList
                      .map((image)=>{ 
                        return(
                        <div key={image.id}>
                        <div style={{display:"table-cell",width:"100%",height:"100%"}}>
                        <img
                            key={image.id}
                            src={require(`../../../assets/images${image.img}`)}
                            className="img-responsive"
                            alt="single-product"
                          />
                          <div
                  className="hero-text-wrap bgTransparent-2"
                  
                >
                  <div className="hero-text black-color text-bottom ">
                    <div className="text-left bgTransparent" style={{marginLeft:"0px !important",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px"}}>
                        
                        <p className=" black-color  bgTitle  slider-text" style={{fontSize:"20px",lineHeight:"3px !important", marginBottom:"5px"}}>
                         {image.title}
                        </p>
                       
                
                    </div>
                  </div>
                </div>
                          </div>
                          
                        </div>
                          )
                        
                      })
                     ))
                  ))
                }
   
            </Slider>
          </div>
        </div>
       

        {
                  dataProductItem.filter(index=>index.id===parseInt(categoryID))
                  .map((item)=>(
                    item.productList.filter(index=>index.detailID===parseInt(productID))
                     .map((product)=>

                    {
                      if(product.isImage == false){
                      return (
                  <div  key={product.detailID}
                        className="col-md-6" 
                        style={{height:"721px",background:"#0000005c"}}
                    >
                      <h2 style={{
                          paddingTop: "10px"}}>{product.detailName}</h2>
                      <h3 className="grey">
                     
                      </h3>
                      <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>
                    <Tabs defaultActiveKey={1} className="light-tabs">
                      <TabList  className="nav nav-tabs">
                    
                        <Tab key={1}>
                          <span>Description</span>
                        </Tab>
                        <Tab key={3}>
                          <span>Specification</span>
                        </Tab>
                          <Tab key={4}>
                          <span>Enquire</span>
                        </Tab>
                    
                        </TabList>
                            <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>
                           <div className="tab-content " 
                                style={{textAlign:"justify",
                                        height:"450px"
                                        }}>
                         
                            <TabPanel key={1} className="tab-pane fade in active" onClick={()=>TabChange}>
                            {
                              isClick
                              ?
                              null
                              : 
                              <ReactWow animation="fadeIn" delay="0.1s">
                             <div className="single-product-details" style={{marginTop:"10px"}}>

                             {
                                          product.detailDescription
                                          .split("|")
                                          .map((val)=>(
                                          
                                              <p className="light-color" >
                                              {val}
                                              </p>
                                         


                                            ))
                                        }
                                 
                              </div>
                               <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                    paddingTop:"3px",
                                  marginBottom:"7px"}}></div>
                              <div className="video-area">
                              
                                   <div className="col-md-7 col-sm-5 col-xs-8"  style={{paddingLeft:0}}>
                                   { product.video != "" ?
                                      <ReactPlayer
                                        className=' fixed-bottom'
                                        url= {product.video.includes(".com") == true ? product.video : require("../../../assets/images/" + product.video)}
                                        width='100%'
                                        height='100%'
                                        controls = {true}

                                        />
                                        :
                                        null
                                   }
                                   </div>
                                </div>
                                </ReactWow>
                            }
                                
                            </TabPanel>
                          
                            <TabPanel key={3} className="tab-pane fade in active">
                              <ReactWow animation="fadeIn" delay="0.1s">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  {
                                    product.detailSpecification
                                    .split('|')
                                    .map((val)=>{
                                      let vctr =0
                                      return (
                                        <div className="row">

                                          {
                                            val
                                            .split(':')
                                            .map((valI)=>{
                                              ++vctr;
                                                return(
                                                  <Fragment>

                                                  {
                                                    vctr<=1
                                                    ?
                                                    
                                                      <div className="col-md-4 col-sm-5">
                                                      <p className="light-color">
                                                      { valI+":"}
                                                      </p>
                                                      </div>


                                                    :

                                                  <div className="col-md-8  col-sm-7">

                                                    {
                                                      valI.split(",")
                                                      .map((spec)=>(
                                                       <p className="light-color">
                                                      { spec}
                                                      </p>


                                                      ))

                                                    }
                                                    
                                                  </div>


                                                  }
                                                  </Fragment>




                                              )}
                                            )

                                          }

                                         </div>

                                      )})
                                  }
                                 <div className="row">
                                  {
                                    product.performanceImg !== "" && product.performanceImg !== null && product.performanceImg !== undefined
                                      ?
                                      <div className="col-md-12">
                                        <img id="imageH" src={require("../../../assets/images" + product.performanceImg)} alt="" style={{maxWidth:"100% "}}/>
                                      </div>
                                      :
                                      null
                                  }
                                 </div>
                                 <div className="row">
                                 {
                                    product.perfNotice !== "" && product.perfNotice !== null && product.perfNotice !== undefined
                                      ?
                                      <Fragment>
                                      <div className="col-md-1">
                                      </div>
                                      <div className="col-md-10">
                                      <ul style={{color:"white"}}>
                                        {
                                          product.perfNotice
                                          .split("|")
                                          .map((val)=>(
                                            <li>
                                              <p className="light-color" style={{fontSize:"16px"}}>
                                              {val}
                                              </p>
                                            </li>


                                            ))
                                        }</ul>
                                      </div>
                                      </Fragment>
                                      :
                                      null
                                  }
                                 </div>
                                </div>
                                </ReactWow>
                            </TabPanel>

                            <TabPanel key={4} className="tab-pane fade in active">
                              <ReactWow animation="fadeIn" delay="0.1s">
                             <div className="single-product" style={{marginTop:"10px"}}>
                                  <EnquireProduct
                                   productName = {product.detailName}
                                   />
                                </div>
                                </ReactWow>
                            </TabPanel>
                       
                        </div> 
                                    </Tabs>
                                    <div style={{borderTop:"1px solid rgb(29 29 29 / 0.15)",
                                   height: "1px",
                                  marginBottom:"7px"}}></div>{
                                    product.PdfFile == "" ||product.PdfFile == null || product.PdfFile == undefined 
                                    ? 
                                    <Fragment></Fragment>
                                    :
                                    <div className="tab-content align-bottom">
              
                            <a
                              href={product.PdfFile.charAt(0) == 'h' ? product.PdfFile :require("../../../assets/pdf/product" +
                      product.PdfFile)} download={
                                product.PdfFile
                                .substring(0, product.PdfFile.length - 4)
                                .substring(1)
                              }
                              target = {product.PdfFile.charAt(0) == 'h' ? "_blank" :""}
                              className="btn btn-sm btn-color btn-gray btn-square"
                             
                            >
                            Download Product Catalouge
                            </a>
                      
                      </div> 
                                  }
                                  
                    </div>

                        )
                    }

                    })
                  ))
          }



   
      </div>
      {
        productMain.footerImage === null ||  productMain.footerImage === undefined ||  productMain.footerImage === ""
        ?
        <Fragment></Fragment>
        : 

        <div style={{paddingTop:"20px",textAlign:"center"}}>
          <div className="row">

              <img src={require(`../../../assets/images${ productMain.footerImage}`)}/>
          </div>
          </div>
      }
      
   </ReactWow>
      :

      null
   

    }

   
    </Fragment>
    </div>
    </section>

            )

        }


                     




                     })

      ))
  
    
  );
};

export default ProductSingle;
