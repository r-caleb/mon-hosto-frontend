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
  const { pocessInfo } = useSelector((state) => state.pocess);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnehosto(id));
  }, [dispatch]);
  const pocessAll = pocessInfo?.map((pocess) => {
    return { ...pocess.serviceID, ...pocess.hospitalID };
  });
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items?.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { name: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };
  const pocess = groupObjectByField(pocessAll, "name");
  const onePocess = pocess.filter((pocess) => pocess.values[0]._id == id);
  console.log(onePocess);
  const oneProcessValues = onePocess[0]?.values;
  console.log("a", oneProcessValues);
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <BannerComponent oneHospitalInfo={oneProcessValues[0]} />
          <TeamComponent oneHospitalInfo={oneProcessValues[0]} />
          <BlogComponent oneHospitalInfo={oneProcessValues} />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default OneHospital;
