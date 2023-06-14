import React,{useState} from "react";
import emailjs,{ init } from 'emailjs-com'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Loader from "react-loader";
import axios from 'axios';
const EnquireProduct = (productName) => {
  const [load,setLoad]= useState(true)
  const [emailDetails,setEmailDetails] = useState();
  const [email,setEmail]= useState("");
  const [contactNo, setContactNo] = useState("");
  // init("user_tsdKKqKj9LskPDJS6SAx7");
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const onChangeContact = (e) =>{
    setContactNo(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!/\S/.test(email)|| !/\S/.test(contactNo)){
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
      setLoad(false);
     
        axios({
            method:'POST',
            url:"https://heuristic-blackwell-f9f596.netlify.app/.netlify/functions/api/sendEmailPE",
            headers:{
                'Content-Type':'application/json'
             
            },
            data:{
              
             Email: email,
             Mobile: contactNo,
             Product: productName.productName
           
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
        setContactNo("")
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
            
        
          setLoad(true)
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
            setLoad(true)
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


 //    var templateParams = {
 //      senderEmail:email,
 //      Product:productName.productName,
 //      Contact:contactNo
 //    }
 //    setLoad(false)
 //    emailjs.send('service_icqjgr9', 'template_f375yn8', templateParams)
 //    .then(function(response) {
 //     confirmAlert({
 //      title: '',
 //      message: 'Inquiry Successfully Sent',
 //      buttons: [
 //        {
 //          label: 'Close'
         
 //        }
        
 //      ]
 //    });
 //     setLoad(true)
 //    }, function(error) {
 //     confirmAlert({
 //      title: '',
 //      message: 'Inquiry Sending Failed',
 //      buttons: [
 //        {
 //          label: 'Close'
         
 //        }
        
 //      ]
 //    });
 // setLoad(true)
 //    });
   
  }

  return (
    <Loader loaded ={load}>
  <div id="respond" className="">
    <form method="post" id="form-comments" className="comment-form">
    
      <div className="row-form row">
        <div className="col-form col-md-12">
          <div className="form-group">
            <p className="light-color">Email Address</p>
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>onChangeEmail(e)}
            />
          </div>
        </div>
        
      </div>
        <div className="row-form row">
        <div className="col-form col-md-12">
          <div className="form-group">
            <p className="light-color">Contact Number</p>
            <input
              name="author"
              type="text"
              className="form-control"
              placeholder="Contact Number"
              value={contactNo}
              onChange={(e)=>onChangeContact(e)}
            />
          </div>
        </div>
        
      </div>
      <p className="form-submit">
        <input
          name="submit"
          type="submit"
          id="submit-btn"
          className="btn btn-color btn-gray btn-square"
          value="Enquire Now"
          onClick={(e)=>handleSubmit(e)}
        />
       
      </p>
       
    </form>
  </div>
  </Loader>
)};

export default EnquireProduct;
