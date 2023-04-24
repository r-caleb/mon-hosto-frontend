import React from "react";

// core components
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

// sections for this page
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnehosto } from "../../redux/hospitalSlice/hospitalActions.js";
import BannerComponent from "./sections/Bannercomponent.jsx";
import { useParams } from "react-router-dom";
import TeamComponent from "./sections/Teamcomponent.jsx";
import Services from "./sections/Services.jsx";
import HeaderBanner2 from "./sections/Banner2.jsx";

const OneHospital = () => {
  const { id } = useParams();
  const { pocessInfo } = useSelector((state) => state.pocess);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnehosto(id));
  }, [dispatch, id]);
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
  const onePocess = pocess.filter((pocess) => pocess.values[0]._id === id);
  //console.log(onePocess);
  const oneProcessValues = onePocess[0]?.values;
  //console.log("a", oneProcessValues);
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <BannerComponent oneHospitalInfo={oneProcessValues} />
          <TeamComponent oneHospitalInfo={oneProcessValues} />
          <Services oneHospitalInfo={oneProcessValues} />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default OneHospital;
