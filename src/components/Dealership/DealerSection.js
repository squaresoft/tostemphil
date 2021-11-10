import React from 'react'
import DealerForm from "./DealerForm";
const DealerSection = () =>{
	return(
		<section className = "white-bg" style={{minHeight:"900px"}}>
			<div className="container ">
				
				<div className ="row ">
		
					<div className="col-md-6 dark-grey-bg">
					<h4 style={{color:"white"}}>STEPS ON HOW TO BE A TOSTEM CERTIFIED DEALER (TCD)</h4>
						 <ol style={{color:"white",marginLeft:"10px"}}>
						  <li>
                              <p className="light-color" >
                            	Fill up the Application Form. <a  style = {{color:"#3249f1"}}

                            									 href={require("../../assets/excel/Dealer_App_Form.xlsx")}  
                            									 download="Dealer Application Form">Click here to download the form</a>
                              </p>
                           </li>
                            <li>
                              <p className="light-color" >
                            	Submit Business Registration/License, BIR, Financial Statements, etc.
                              </p>
                           </li>
                            <li>
                              <p className="light-color" >
                            	Application Documents Evaluation (3 Days)
                              </p>
                           </li>
                            <li>
                              <p className="light-color" >
                            	TOSTEM Dealer Program Presentation
                              </p>
                           </li>
                            <li>
                              <p className="light-color" >
                            	Approval and Release of Dealer Partner Agreement
                              </p>
                           </li>
                            <li>
                              <p className="light-color" >
                            	Sales and Technical Trainings
                              </p>
                           </li>
						 </ol>
					</div>
						<div className="col-md-1"></div>
					 <div className="col-about-left col-md-5 text-left" style={{border:"black 1px solid",paddingBottom:"40px",paddingLeft:"40px"}}>
		              <h3>Submit Dealer Application</h3>
		             
		              <DealerForm />
		            </div>
				</div>
			</div>
		
		</section>


		)
}


export default DealerSection;
