import React from "react";

// core components
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

// sections for this page

import CallToAction from "../../components/call-to-action/CallToAction.jsx";
import HeaderBanner2 from "../../components/banner2/Banner2.jsx";
import HospitalCardComponent from "./sections/HospitalCardComponent.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllhosto } from "../../redux/hospitalSlice/hospitalActions.js";
import UseGeolocation from "./sections/UseGeolocation.js";
import { getAllService } from "../../redux/serviceSlice/serviceActions.js";
import { useNavigate } from "react-router-dom";
import { getAllPocess } from "../../redux/pocessSlice/pocessActions.js";

const Hospital = () => {
  const { serviceInfo } = useSelector((state) => state.service);
  const { pocessInfo } = useSelector((state) => state.pocess);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = UseGeolocation();
  const actualPosition = {
    lat: location?.coordinates?.lat,
    lng: location?.coordinates?.lng,
  };
  useEffect(() => {
    dispatch(getAllhosto());
    dispatch(getAllService());
    dispatch(getAllPocess());
  }, [dispatch]);
  let treat = serviceInfo?.map((service) => {
    return service.service;
  });
  if (serviceInfo) {
    treat = ["Tout", ...treat];
  }
  //console.log(treat);
  //console.log(pocessInfo);
  const pocessAll = pocessInfo?.map((pocess) => {
    return { ...pocess.serviceID, ...pocess.hospitalID };
  });
  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [token, navigate]);

  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner2 />
          <HospitalCardComponent
            hospitalInfo={pocessAll}
            actualPosition={actualPosition}
            treat={treat}
          />
          <CallToAction />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default Hospital;
