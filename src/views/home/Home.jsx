import React from "react";

// core components
import Header from "../../components/header/Header.jsx";
import HeaderBanner from "../../components/banner/Banner.jsx";
import Footer from "../../components/footer/Footer.jsx";

// sections for this page
import Objectifs from "./sections/Objectifs.jsx";
import HowItWork from "./sections/HowItWork.jsx";
import TestimonialComponent from "./sections/TestimonialComponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction.jsx";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <Objectifs />
          <HowItWork />
          <TestimonialComponent />
          <CallToAction />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default Home;
