import React, { useState } from "react";
import Loader from "../../components/Loader/Loader";
import Load from 'react-loader'
import dataSlider from "../../data/Slider/construction-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import ProductHighlights from "../../components/Products/ProductHighlights";
import ConstructionSlider from "../../components/Hero/Construction/ConstructionSlider";
import GalleryConstruction from "../../components/Gallery/Construction/GalleryConstructionSlider";
import CounterConstruction from "../../components/Counters/Construction/CounterConstruction";
import TeamConstruction from "../../components/Team/Construction/TeamConstruction";
import ContactConstruction from "../../components/ContactUs/Construction/ContactConstruction";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
import Modal from 'react-modal'
import ServicesConstruction from "../../components/Services/Construction/ServicesConstruction";
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; 
Modal.setAppElement('#main')


const Construction2 = () => {

window.open(`${process.env.PUBLIC_URL}/Atis`,"_self")
};

export default Construction2;
