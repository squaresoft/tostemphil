import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleAbout from "../../components/PageTitle/PageTitleAbout";
import FooterOne from "../../components/Footer/FooterOne";
import ScrollToTopOnMount from "../../elements/ScrollToTop.js";

const Privacy = () => (
  <Loader> 
  <ScrollToTopOnMount/>
    <HeaderOne />
   <PageTitleAbout
       title="Our Journey"
      // tagline=""
      image=""
       background="/Tostem/Carousel-Image-4.jpg"
    />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 terms">
            <h2 className="font-700">Tostem Philippines</h2>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget nisl gravida,
              <a href="!#">
                <span className="black-color"> Tostem Philippines </span>
              </a>
              faucibus ligula. Nam eu neque nunc. Suspendisse egestas dolor
              ante, nec tincidunt sem malesuada at. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Morbi vehicula metus sit amet turpis malesuada commodo.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <a href="!#">
                <span className="black-color"> Tostem Philippines </span>
              </a>
              Morbi eget nisl gravida, interdum nunc quis, faucibus ligula.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Praesent tincidunt, massa et porttitor imperdiet, lorem velit
              posuere erat,
              <a href="!#">
                <span className="black-color"> Tostem Philippines </span>
              </a>
              sit amet gravida odio magna in ex. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget nisl gravida, interdum nunc quis, faucibus ligula. Nam eu
              neque nunc. Suspendisse egestas dolor ante, nec tincidunt sem
              malesuada at. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Morbi vehicula metus
              sit amet turpis malesuada commodo.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget nisl gravida, interdum nunc quis, faucibus ligula.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Praesent tincidunt, massa et porttitor imperdiet, lorem velit
              posuere erat, sit amet gravida odio magna in ex. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Vivamus massa urna, pharetra eget malesuada eu, pharetra vitae
              arcu. Duis dapibus aliquam ante, ut posuere odio commodo sed.
              Pellentesque non hendrerit purus. Morbi tellus mauris, convallis
              non dictum non, elementum eget leo. Donec non ex est. Pellentesque
              magna urna, maximus ac augue id, pretium lobortis tortor.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Nam porttitor, mauris sit amet molestie dictum, ex velit viverra
              urna, eget euismod justo augue in eros. Duis ut erat ac erat
              scelerisque pulvinar in ut neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Nunc a tortor vitae nisl pharetra consectetur in eu purus.
              Pellentesque facilisis nunc mauris. Etiam finibus, lacus eu
              fringilla mattis, mi lectus consequat augue, in pharetra neque
              lacus sit amet velit. Donec imperdiet lacinia ullamcorper.
            </p>
            <p style={{color:"#434343",textAlign:"justify"}}>
              Ut consectetur risus ligula, quis feugiat enim malesuada ac.
              Nullam dapibus blandit maximus. Donec a orci dui. Vivamus porta
              varius metus in tempor.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Privacy;
