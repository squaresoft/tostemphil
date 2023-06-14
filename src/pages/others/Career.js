import React from "react";
import Loader from "./../../components/Loader/Loader";
import dataCarrers from "../../data/Careers/careers-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import Icofont from "react-icofont";
import FooterOne from "../../components/Footer/FooterOne";

const Career = () => (
  <Loader>
    <HeaderOne />
     <PageTitleAbout
       title="Careers"
      // tagline=""
      image=""
    />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 terms">
            <h2 className="font-700">Currently Opening</h2>
            <ul className="careers-listing">
              {dataCarrers.map((career) => (
                <li key={career.id}>
                  <div className="row">
                    <div className="career-main col-md-6">
                      <h5 className="font-700">{career.position}</h5>
                      <span className="default-color career-type">
                        {career.type}
                      </span>
                      <span className="career-location">
                        <Icofont icon="google-map-circle" />
                        {career.location}
                      </span>
                    </div>
                    <div className="col-md-3 career-category">
                      <span>Career Opportunities</span>
                    </div>
                    <div className="career-details col-md-3">
                      <a
                        href="!#"
                        className="btn btn-color btn-square btn-animate"
                      >
                        <span>
                          Apply Now
                          <Icofont icon="simple-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
         
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Career;
