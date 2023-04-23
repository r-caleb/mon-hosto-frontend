import React from "react";

// core components
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";

const Contact = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <ContactComponent />
        </div>
      </div>
      <div className="bg-white p-4"></div>
      <Footer />
    </div>
  );
};

export default Contact;
