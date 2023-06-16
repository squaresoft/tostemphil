import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages

import Construction from "./pages/home/Construction";

//About Us
import AboutUs from "./pages/about/AboutUs";
import AboutLixil from "./pages/about/AboutLixil";
import OurJourney from "./pages/about/OurJourney";
import ContactUs from "./pages/about/ContactUs"
import OurTeam from "./pages/about/OurTeam"
import OurBrand from "./pages/about/OurBrand"
import WhyChooseUs from "./pages/about/WhyChooseUs"

//Products
import ProductPage from "./pages/products/ProductsPage"
import ProductDetail from './pages/products/ProductDetails'
import ProductSinglePage from './pages/products/ProductSingleDetails'
import ProductSearch from './pages/products/ProductSearch'
//Gallery
import ImageGallery from  "./pages/imagegallery/ImageGallery"
import ProductHighlight from  "./pages/imagegallery/ProductHighlight"
// Pages
import  Dealership from './pages/others/Dealership'
import Page404 from "./pages/others/Page404";
import ComingSoon from "./pages/others/ComingSoon";
import FAQs from "./pages/others/FAQs";
import Career from "./pages/others/Career";
import DealerLocator from "./pages/others/DealerLocator"

// Blog
import BlogStandard from "./pages/blog/BlogStandard";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogSidebar from "./pages/blog/BlogSidebar";
import BlogMasonry from "./pages/blog/BlogMasonry";
import BlogCarousel from "./pages/blog/BlogCarousel";
import BlogSidebarRight from "./pages/blog/BlogSidebarRight";
import BlogSidebarLeft from "./pages/blog/BlogSidebarLeft";


// Shops
import ShopFullwidth from "./pages/shops/ShopFullwidth";
import ShopStandard from "./pages/shops/ShopStandard";
import ShopBoxed from "./pages/shops/ShopBoxed";
import ShopMasonry from "./pages/shops/ShopMasonry";
import ShopSingleProduct from "./pages/shops/ShopSingleProduct";
import ShopCart from "./pages/shops/ShopCart";
import ShopCheckout from "./pages/shops/ShopCheckout";

// Elements
import Buttons from "./pages/elements/Buttons";
import Typography from "./pages/elements/Typography";
import Alerts from "./pages/elements/Alerts";
import PricingTables from "./pages/elements/PricingTables";
import CallToActions from "./pages/elements/CallToActions";
import ParallaxSections from "./pages/elements/ParallaxSections";
import Tabs from "./pages/elements/Tabs";
import Accordions from "./pages/elements/Accordions";
import Sliders from "./pages/elements/Sliders";
import ProgressBars from "./pages/elements/ProgressBars";
import ContactForms from "./pages/elements/ContactForms";
import GoogleMaps from "./pages/elements/GoogleMaps";
import ProgressBarRing from "./pages/elements/ProgressBarRing";
import ThemeIcons from "./pages/elements/ThemeIcons";
import BoxedIcons from "./pages/elements/BoxedIcons";
import GridColumns from "./pages/elements/GridColumns";
import TeamMembers from "./pages/elements/TeamMembers";
import Countdowns from "./pages/elements/Countdowns";
import ScrollToTop from "./helpers/ScrollToTop";

//Why Tostem
import Preengineered from  "./pages/whyTostem/Preengineered"
import TotalHousing from  "./pages/whyTostem/TotalHousing"
import SurfaceColor from  "./pages/whyTostem/SurfaceColor"
import QualityAssurance from  "./pages/whyTostem/QualityAssurance"

import {createBrowserHistory} from 'history'
const history = createBrowserHistory();
function App() {

  return (
    <Router  history={history} basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Construction} />
       
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/construction`}
            component={Construction}
          />
        
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dealership`}
            component={Dealership}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-us`}
            component={AboutUs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-lixil`}
            component={AboutLixil}
          />
            <Route
            exact
            path={`${process.env.PUBLIC_URL}/our-journey`}
            component={OurJourney}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-us`}
            component={ContactUs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/our-team`}
            component={OurTeam}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/our-brand`}
            component={OurBrand}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/why-choose-us`}
            component={WhyChooseUs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/products`}
            component={ProductPage}
          />
          
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/product-single-detail`}
            component={ProductSinglePage}
            // getComponent={(location, cb) => {import('./pages/products/ProductSingleDetails').then((component) => { cb(null, component.default || component); }); }}
          />
          
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/product-details`}
            component={ProductDetail}
           
          />
           <Route
            exact
            path={`${process.env.PUBLIC_URL}/product-search`}
            component={ProductSearch}
           
          />
           <Route
            exact
            path={`${process.env.PUBLIC_URL}/Gallery`}
            component={ImageGallery}
           
          />
         
        <Route
            exact
            path={`${process.env.PUBLIC_URL}/product-highlight`}
            component={ProductHighlight}
           
          />
         
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404-page`}
            component={Page404}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/coming-soon`}
            component={ComingSoon}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/faqs`}
            component={FAQs}
          />

           <Route
            exact
            path={`${process.env.PUBLIC_URL}/dealer-locator`}
            component={DealerLocator}
          />
         
         
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/for-professionals`}
            component={Career}
          />
         
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog/:blogID`}
            component={BlogStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-grid`}
            component={BlogGrid}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar`}
            component={BlogSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-masonry`}
            component={BlogMasonry}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-carousel`}
            component={BlogCarousel}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar-right`}
            component={BlogSidebarRight}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar-left`}
            component={BlogSidebarLeft}
          />
          
          
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-fullwidth`}
            component={ShopFullwidth}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-standard`}
            component={ShopStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-boxed`}
            component={ShopBoxed}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-masonry`}
            component={ShopMasonry}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-product`}
            component={ShopSingleProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-cart`}
            component={ShopCart}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-checkout`}
            component={ShopCheckout}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/buttons`}
            component={Buttons}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/typography`}
            component={Typography}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/alerts`}
            component={Alerts}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/pricing-tables`}
            component={PricingTables}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/call-to-action`}
            component={CallToActions}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parallax-section`}
            component={ParallaxSections}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tabs`}
            component={Tabs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/accordions`}
            component={Accordions}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/sliders`}
            component={Sliders}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progress-bar`}
            component={ProgressBars}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForms}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/google-maps`}
            component={GoogleMaps}
          />

          <Route
            exact
           path={`${process.env.PUBLIC_URL}/Preengineered`}
            component={Preengineered}
          />

           <Route
            exact
           path={`${process.env.PUBLIC_URL}/TotalHousing`}
            component={TotalHousing}
          />

          <Route
            exact
           path={`${process.env.PUBLIC_URL}/SurfaceColor`}
            component={SurfaceColor}
          />

           <Route
            exact
           path={`${process.env.PUBLIC_URL}/QualityAssurance`}
            component={QualityAssurance}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
