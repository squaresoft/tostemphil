import React, {useState} from "react";
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
import Loader from 'react-loader'

const ContactFormSix = () => {
  const [load,setLoad]= useState(true)
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [message,setMessage] = useState("")

function sendEmail(e){
    e.preventDefault();
    if(!/\S/.test(email)|| !/\S/.test(name)|| !/\S/.test(mobile) || !/\S/.test(message)){
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
              Mobile:mobile,
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
          setName("");
          setMessage("")
          setMobile("")
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
  return (
    <Loader loaded = {load}
    >
      <div className="messages"></div>
      <div className="form-group">
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required="required"
          placeholder="Your Name"
          data-error="Your Name is Required"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          required="required"
          data-error="Please Enter Valid Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="phone">
          Your Phone
        </label>
        <input
          type="phone"
          name="phone"
          className="form-control"
          id="phone"
          placeholder="Your Phone"
          value={mobile}
           onChange={(e)=>{setMobile(e.target.value)}}
        />
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows="7"
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={message}
           onChange={(e)=>{setMessage(e.target.value)}}
        ></textarea>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <button onClick={(e)=>{sendEmail(e)}} name="submit" className="btn btn-color btn-gray btn-square">
        Send Message
      </button>
    </Loader>
  );
};

export default ContactFormSix;
