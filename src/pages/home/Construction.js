import React, { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Load from 'react-loader'
import dataSlider from "../../data/Slider/construction-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import ProductHighlights from "../../components/Products/ProductHighlights";
import ConstructionSlider from "../../components/Hero/Construction/ConstructionSlider";
import GalleryConstruction from "../../components/Gallery/Construction/GalleryConstructionSlider";
import CounterConstruction from "../../components/Counters/Construction/CounterConstruction";
import TeamConstruction from "../../components/Team/Construction/TeamConstruction";
import ContactConstruction from "../../components/ContactUs/Construction/ContactConstruction";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
import Modal from 'react-modal'
import ServicesConstruction from "../../components/Services/Construction/ServicesConstruction";
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
Modal.setAppElement('#main')


const Construction = () => {


const [load,setLoad]= useState(true)
const [toggler, setToggler] = useState(false);
const [mOpen, setmOpen] = useState(true);
const [name,setName]= useState("");
const [email,setEmail]= useState("");
const [contactNo, setContactNo] = useState("");
const [message, setMessage] = useState("");

const onChangeEmail = (e)=>{
    setEmail(e.target.value)
}
const onChangeContact = (e) =>{
    setContactNo(e.target.value)
}
const onChangeName = (e)=>{
    setName(e.target.value)
}
const onChangeMessage = (e) =>{
    setMessage(e.target.value)
}

function openModal() {
    setmOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  
  }

  function closeModal(){
    setmOpen(false);
  }

  function sendEmail(e){
    e.preventDefault();
    if(!/\S/.test(email)|| !/\S/.test(name)|| !/\S/.test(contactNo) || !/\S/.test(message)){
      confirmAlert({
                title: '',
                message: 'Please Fill out the form properly',
                buttons: [
                  {
                    label: 'Close'
                   
                  }
                  
                ]
              });
         return;

    }

     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!re.test(email)){
     confirmAlert({
                  title: '',
                  message: 'Please input a valid email!',
                  buttons: [
                    {
                      label: 'Close'
                     
                    }
                    
                  ]
                });
     return;
     }
     
    setLoad(false)
    
        axios({
            method:'POST',
            url:"https://heuristic-blackwell-f9f596.netlify.app/.netlify/functions/api/sendEmailBA",
            headers:{
                'Content-Type':'application/json'
             
            },
            data:{
              Name:name,
              Email:email,
              Mobile:contactNo,
              Message:message
            }
        })
        .then((res)=>{


            if(res.data == "email sent"){

              confirmAlert({
              title: '',
              message: 'Email Successfully Sent',
              buttons: [
                {
                  label: 'Close'
                 
                }
                
              ]
            });
       setmOpen(false)
          }
          else{
            confirmAlert({
              title: '',
              message: 'Error Sending Email',
              buttons: [
                {
                  label: 'Close'
                 
                }
                
              ]
            });
          }
            
        
          setLoad(true)
        })
        .catch((res)=>{
          confirmAlert({
                title: '',
                message: 'Inquiry Sending Failed',
                buttons: [
                  {
                    label: 'Close'
                   
                  }
                  
                ]
              });
           setLoad(true)  
        })

    
 
  }
  return(
  <Loader >
    <Modal
          isOpen={mOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        
          className="enquiremodal"
          overlayClassName = "enquireoverlay"
        >
        <Load loaded = {load}>
         <div className = "row" >
         
           
             <div className = "col-md-12"  style={{textAlign:'right'}}>

            <a onClick={closeModal} style={{cursor:'pointer'}}><p>X</p></a>
            </div>
          </div>
          <div className = "row">
      
            <div className = "col-md-12" style={{textAlign:'center'}}>
              <h4 >Book an Appointment</h4>
            </div>
             
          </div>
         
          <div className="row">
                 <div className = "col-md-12" style={{textAlign:'center' ,marginBottom:'10px'}}>
                 <input onChange={(e)=>onChangeName(e)} placeholder="Enter your Name" style={{ height: '48px' }} className="form-control"/>
                </div>
                <div className = "col-md-12" style={{textAlign:'center' ,marginBottom:'10px'}}>
                 <input  onChange={(e)=>onChangeEmail(e)} placeholder="Enter your Email Address" style={{ height: '48px' }} className="form-control"/>
                </div>
                <div className = "col-md-12" style={{textAlign:'center' ,marginBottom:'10px'}}>
                 <input onChange={(e)=>onChangeContact(e)} placeholder="Enter your Mobile Number" style={{ height: '48px' }} className="form-control"/>
                </div>
                 <div className = "col-md-12" style={{textAlign:'center' ,marginBottom:'10px'}}>
                 <textarea onChange={(e)=>onChangeMessage(e)} placeholder="Message"  className="form-control"/>
                </div>
                
            </div>
            <div className="row">
               
                <div className = "col-md-12" style={{textAlign:'center' ,marginBottom:'10px'}}>
                  <button onClick = {(e)=>{sendEmail(e)}}className="btn  btn-gray btn-square" style ={{backgroundColor:"black"}}> Enquire Now</button>
                </div>
               
                
                
          
          </div>
          </Load>
        </Modal>

    <HeaderOne />
    <ConstructionSlider data={dataSlider} />
     <AboutUsOne
      title="WHY TOSTEM?"
      textButton="Read more"
      linkButton={`${process.env.PUBLIC_URL}/about-us`}
      image={image}
      toggler={toggler}
      setToggler={setToggler}
      type="picture"
      serviceImg = {"WhyTostem.jpg"}
       hasbutton = {false}
       titleplacement ="middle"
    >
    <p className="mt-20" style={{textAlign:"justify"}}>
        As the leading Japanese brand for global housing and building materials, 
        TOSTEM stands apart as the one that deeply understands the needs of people. 
        TOSTEM’s comprehensive range of solutions ensures comfortable home living driven by a simple and seamless user experience. 
      </p>
      <p style={{textAlign:"justify"}}> 
         We develop our people-centric home solutions by drawing on a half-century of experience 
         and expertise in balancing design and technology
      </p>
      <p style={{textAlign:"justify"}}> 
         to anticipate the needs of people today and their families for generations to come. 
      </p>
    </AboutUsOne>

     <ServicesConstruction />
    <GalleryConstruction title ="Our Products"/>
   
    {<ProductHighlights title="Product Highlights" />}
    
   {/*<AboutUsOne
      title="About Our Company"
      textButton="Read more"
      linkButton={`${process.env.PUBLIC_URL}/about-us`}
      image={image}
      toggler={toggler}
      setToggler={setToggler}
      type="video"
      hasbutton = {true}
      serviceImg={"https://www.youtube.com/watch?v=qckismfZSrk"}
       autoplay={true}
    >
    <p className="mt-20" style={{textAlign:"justify"}}>
        Lixil is the world’s most comprehensive housing and building company made up 
        of many individual brands creating products that make better homes a 
        reality for everyone, everywhere.
      </p>
      <p style={{textAlign:"justify"}}> 
        TOSTEM is a recognized leading brand for global housing and building material in Japan. 
        It’s a complete line-up of high-quality aluminum doors and windows
      </p>
    </AboutUsOne>*/}
   
    {/*<BlogSlider />*/}
    {/* <TeamConstruction /><ContactConstruction /> <ClientsBrand />*/}
     
   
    <FooterOne/>
  </Loader>
)};

export default Construction;
