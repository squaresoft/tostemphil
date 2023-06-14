import React, { useState,useEffect,useRef } from "react";
import dataTeam from "../../../data/Team/team-architecture.json";
import HeadingSection from "../../HeadingSection/HeadingSection";

import ReactWow from "react-wow";
import Icofont from "react-icofont";
const OurTeamDescription = ({id,animate,scroll}) => {
	const fieldRef = useRef(null);
	useEffect(()=>{

		  fieldRef.current.scrollIntoView();
	},[scroll])
  return (
    <section ref={fieldRef} className="white-bg" style={{paddingTop:"50px",paddingBottom:"50px"}}>
      <div className="container">
        <div className="row">
        
        {
        	animate
        	?
        	dataTeam
        	.filter(member=>parseInt(member.id) == parseInt(id))
        	.map((member)=>(
				<div>
			
		            <div className="col-md-8 mb-30">
		             <HeadingSection title={member.name} tagline={member.role} />
		               <ReactWow animation="fadeTop" delay="0.1s">
		               	<div>
		              {member.description}
		              	</div>
 						</ReactWow>
		            </div>
		       
		          <ReactWow animation="fadeTop" delay="0.1s">
		          <div className="col-md-4">
		             { <img className="img-responsive" src={require("../../../assets/images/" + member.image)} alt="" />}
		             
		          </div>
		          </ReactWow>
					</div>
        	))
        	:
        	dataTeam
        	.filter(member=>parseInt(member.id) == parseInt(id))
        	.map((member)=>(
				<div>
		            <div className="col-md-8 mb-30">
		             <HeadingSection title={member.name} tagline={member.role} />
		              
		              {member.description}

		            </div>
		      
		        
		          <div className="col-md-4">
		             { <img className="img-responsive" src={require("../../../assets/images/" + member.image)} alt="" />}
		             
		          </div>
		       
					</div>
        	))

        }
          
        </div>
      </div>
    </section>
  );
};
export default OurTeamDescription;