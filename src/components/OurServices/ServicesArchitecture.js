import React, { forwardRef } from "react";
import dataServices from "../../data/Services/services-architecture.json";
import HeadingSection from "../HeadingSection/HeadingSection";
import Icofont from "react-icofont";

const ServicesArchitecture = forwardRef(({ title, tagline }, ref) => (
  <section id="service" className="dark-bg" ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingSection
          title={title}
          tagline={tagline}
          classAppend="white-color"
        />
      </div>
      <div className="row mt-50">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="col-md-4 feature-box text-left mb-50 col-sm-6"
          >
            <div className="pull-left">
              <Icofont icon={service.icon} className="font-50px default-icon" />
            </div>
            <div className="pull-right">
              <h5 className="mt-0 text-uppercase white-color">
                {service.title}
              </h5>
              <p className="white-color">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

export default ServicesArchitecture;
