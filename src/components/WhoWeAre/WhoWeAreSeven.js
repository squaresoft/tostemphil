import React from "react";
import Icofont from "react-icofont";
import ReactWow from "react-wow";
import HeadingSection from "../HeadingSection/HeadingSection";
import aboutData from "../../data/About/about-home-agency-data.json";

const WhoWeAreSeven = () => (
  <section className="white-bg first-ico-box" style={{paddingTop:"20px",paddingBottom:"50px"}}>
    <div className="container">
      <div className="row">
        {
          // <HeadingSection
          //         title="Who We Are"
          //         // tagline="The world at your fingertips"
          //       >
          //       Manufactured under the brand name Tostem, its design technologies are originally developed in Japan. 
          //       Tostem provides materials that are indispensable to the home construction industry.
          //       </HeadingSection>
              }
      </div>
      <div className="row mt-50">
        {aboutData.map((service, i) => {
          return (
            <ReactWow
              key={service.id}
              animation="fadeTop"
              delay={`0.${i + 1}s`}
            >
              <div className="col-md-4 feature-box text-center radius-icon">
                <Icofont icon={service.icon} className="font-50px dark-icon" />
                <h4 className="text-uppercase">Sample Service</h4>
                <p>{service.text}</p>
              </div>
            </ReactWow>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhoWeAreSeven;
