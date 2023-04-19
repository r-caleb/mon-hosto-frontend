import React, { useState } from "react";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import HospitalCardComponent from "./sections/HospitalCardComponent.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllhosto } from "../../redux/hospitalSlice/hospitalActions.js";
import UseGeolocation from "./sections/UseGeolocation";

const Hospital = () => {
  const { hospitalInfo } = useSelector((state) => state.hospital);


  const dispatch = useDispatch();
  const location = UseGeolocation();
  const actualPosition = {
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
  };
  useEffect(() => {
    dispatch(getAllhosto());
  }, [dispatch]);
 
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner2 />
          <FormBannerComponent />
          <HospitalCardComponent hospitalInfo={hospitalInfo} actualPosition={actualPosition} />
          <CallToAction />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default Hospital;
