import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitlePortfolio from "../../components/PageTitle/PageTitlePortfolio";
import Portfolio from "../../components/Portfolio/Portfolio";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const PortfolioBoxedSpaceFour = () => (
  <Loader>
    <HeaderOne />
    <PageTitlePortfolio
      title="Boxed Space 4 Columns"
      tagline="Our Recent Works"
    />
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="four" layout="box" space="true" />
    </section>
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default PortfolioBoxedSpaceFour;
