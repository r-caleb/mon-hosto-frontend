import React from "react";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import Objectifs from "./sections/objectifs.jsx";
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction.jsx";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <Objectifs />
          <FormBannerComponent />
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
