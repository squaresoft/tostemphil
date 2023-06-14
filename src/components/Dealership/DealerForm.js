import React, {useState, useCallback} from "react";
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
import Loader from 'react-loader'

const ContactFormSix = () => {
  const [load,setLoad]= useState(true)
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [DealerForm,setDealerForm] = useState("")
function sendEmail(e){
    e.preventDefault();
    if(!/\S/.test(email)|| !/\S/.test(name)|| !/\S/.test(mobile)|| DealerForm == "" ){
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
            url:"https://heuristic-blackwell-f9f596.netlify.app/.netlify/functions/api/SendApplication",
            headers:{
                'Content-Type':'application/json'
            },
            data:{
              Name:name,
              Email:email,
              mobile:mobile,
              DealerForm:DealerForm
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
          setDealerForm("")
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

  // const readFile = useCallback((file) => {
  //   let reader = new FileReader();

  //   reader.read

  // },[])

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    });


  const onHandleOnChange = useCallback((file, name) => {
      fileToDataUri(file)
      .then(dataUri => {
        // setDataUri(dataUri)
        if (name === 'dealerform') setDealerForm(dataUri);
        console.log('datauri', dataUri);
      })
  }, [])


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
        <h5  >
          Dealer Application Form
        </h5>
        <input
          name="DAF"
          className="form-control"
          id="message"
          type="file"
          
           onChange={(e)=>{
            // setDealerForm(e.target.files[0]);
            onHandleOnChange(e.target.files[0] || null, 'dealerform');
          }}
        ></input>
        <div className="help-block with-errors mt-20"></div>
      </div>
  
      <button onClick={(e)=>{sendEmail(e)}} name="submit" className="btn btn-color btn-gray btn-square">
        Submit
      </button>
    </Loader>
  );
};

export default ContactFormSix;
