import React,{Fragment,useState} from "react";
import FooterCopyright from "./FooterCopyright";
import logoWhite from "../../assets/images/logotostem.png";
import dataForms from "../../data/Footer/app-downloadable-form.json";
import RegionalSite from "../../data/Footer/regional-site.json";
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 

const FooterOne = () => {

const [email,setEmail] = useState("");
function sEmail(e){
   setEmail(e.target.value)
}
function sendEmail(e){ 
 e.preventDefault();
 let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email == ""){
    confirmAlert({
                title: '',
                message: 'Please Complete the Form!',
                buttons: [
                  {
                    label: 'Close'
                   
                  }
                  
                ]
              });
  }
  else{
     if ( re.test(email) ) {
 

        axios({
            method:'POST',
            url:"https://heuristic-blackwell-f9f596.netlify.app/.netlify/functions/api/sendEmailNL",
            headers:{
                'Content-Type':'application/json',
             
            },
            data:{
              
              Email:email,
           
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
        setEmail("")
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
            
        
        
        })
        .catch((res)=>{
          confirmAlert({
                title: '',
                message: 'Email Sending Failed',
                buttons: [
                  {
                    label: 'Close'
                   
                  }
                  
                ]
              });
          
        })

     
     
    }
    else {
       confirmAlert({
                title: '',
                message: 'Please input a valid email!',
                buttons: [
                  {
                    label: 'Close'
                   
                  }
                  
                ]
              });
    }
   

  }
 
 
}

return (
  <Fragment>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoWhite}
                      alt=""
                    />
                  </a>
                </div>
                <p style={{textAlign:"justify",fontSize:"20px"}}>
                 TOSTEM is a recognized leading brand for global housing and building material in Japan. It’s a complete
                  line-up of high-quality aluminum doors and windows. Design technologies are originally developed in
                  Japan while extrusion dies, aluminum billets, extrusion profiles, coating, pre-fabrication and hardware
                  assembly processes are all done in TOSTEM factory in Thailand.
                </p>
                 <p style={{textAlign:"justify",fontSize:"20px"}}>
                TOSTEM Philippines under Lixil Philippines Ltd. Co. is working hand in hand with its various offices across
                the region to provide a comprehensive range of doors and windows solutions to Filipino homes to
                ensure safety and comfort through advanced technologies.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Dowloadable Forms</h5>
                <ul>
                  {dataForms.map((forms,i)=>(
                    <li key={i} >
                    <a key={i} 
                       target="_blank"
                       href={forms.link}>{forms.title}</a>
                     </li>
                    ))}
                </ul>
              </div>
            </div>
             <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Regional Sites</h5>
                <ul>
                  {RegionalSite.map((forms,i)=>(
                    <li key={i} >
                    <a key={i} 
                       target="_blank"
                       href={forms.link}>{forms.title}</a>
                     </li>
                    ))}
                </ul>
              </div>
            </div>
             <div className="col-sm-6 col-md-4">
              <div className="widget widget-links">
                <h5 className="widget-title">Signup for Newsletter</h5>
                <div className="input-group">
                <input value = {email} onChange = {(e)=>{sEmail(e)}} placeholder="Email Address" type="search"  style={{ height: '48px' }} className="form-control"/>
                <span className="input-group-btn">
                <button className="btn btn-gray btn-square" onClick = {(e)=>{sendEmail(e)}} type="button"> Signup</button>
                </span>
                </div>
                </div>
                </div>
            
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </Fragment>
);

}
export default FooterOne;
