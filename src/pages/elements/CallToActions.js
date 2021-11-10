import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";

import FooterOne from "../../components/Footer/FooterOne";

const CallToActions = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Call To Action" />
    
    <FooterOne />
  </Loader>
);

export default CallToActions;
