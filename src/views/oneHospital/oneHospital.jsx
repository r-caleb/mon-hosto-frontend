import React from "react";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnehosto } from "../../redux/hospitalSlice/hospitalActions.js";
import BannerComponent from "./sections/bannercomponent.jsx";
import { useParams } from "react-router-dom";
import TeamComponent from "./sections/teamcomponent.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";

const OneHospital = () => {
  const { id } = useParams();
  const { oneHospitalInfo } = useSelector((state) => state.hospital);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnehosto(id));
  }, [dispatch]);
  console.log(oneHospitalInfo);
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <BannerComponent oneHospitalInfo={oneHospitalInfo} />
          <TeamComponent oneHospitalInfo={oneHospitalInfo} />
          <BlogComponent />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default OneHospital;
