import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icofont from "react-icofont";

var isEven = require('is-even');

const ProductItems = ({title,details,id,serviceImg,link})=>{

	return(
		<>
		{isEven(id) == true
			?
				
			<Link 
				to = {`${process.env.PUBLIC_URL}/product-details?link=${link}`}
			
			>
			 
			<section className="grey-bg " style={{marginTop:"30px",height:"727px"}}>
		    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right ">
		      <div
		        className="bg-flex-holder bg-flex-cover"
		      
		      >
		       <div
		        className="bg-flex-holder bg-flex-cover test-shine"
		        style={{ backgroundImage: `url(${serviceImg})` }}
		      ></div>
		      </div>
		    </div>
		    <div className="container ">
		      <div className="col-md-5 col-sm-7">
		        <h2 className="font-700">{title}</h2>
				<div style ={{overflowY:"auto",height:"450px"}}>
		        <p className="mt-20"  style={{textAlign:'justify'}}>
		       {details}
		        </p>
		        </div>
		        <p className="mt-30">
		         
		        </p>
		      </div>
		    </div>
		  </section>

		  </Link>
			:
				<Link 
					to = {`${process.env.PUBLIC_URL}/product-details?link=${link}`}
				
				>
				  <span></span>
			<section className="grey-bg " style={{marginTop:"30px",height:"727px"}}>
		    
		    <div className="container  ">
		          <div className="col-md-6 col-sm-4">
		       
		      </div>
		      <div className="col-md-5 col-sm-7">
		        <h2 className="font-700">{title}</h2>
		       <div style ={{overflowY:"auto",height:"450px"}}>
		        
		       {details.split('|')
		   		.map(val=>(

		   			<p className="mt-20" style={{textAlign:'justify'}}>
		   			{val}
						 </p>
		   			))}
		       
		        </div>
		        <p className="mt-30">
		         
		        </p>
		      </div>
		    </div>
		    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left test-shine ">
		      <div
		        className="bg-flex-holder bg-flex-cover"
		      
		      >
		       <div
		        className="bg-flex-holder bg-flex-cover"
		        style={{ backgroundImage: `url(${serviceImg})` }}
		      ></div>
		      </div>
		    </div>
		  </section>
		   
		    </Link>	}
		
		</>
			

		)

};
export default ProductItems;