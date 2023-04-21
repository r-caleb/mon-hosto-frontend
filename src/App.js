import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/home/home.jsx";
import Hospital from "./views/hospital/hospital.jsx";
import Contact from "./views/contact/contact.jsx";
import SignIn from "./views/signIn/signIn.jsx";
import SignUp from "./views/signUp/signUp.jsx";
import { useSelector } from "react-redux";
import OneHospital from "./views/oneHospital/oneHospital.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-Up" element={<SignUp />} />
      <Route path="/find_hospital" element={<Hospital />} />
      <Route path="/a_hospital/:id" element={<OneHospital />} />
      <Route path="/contact_us" element={<Contact />} />
    </Routes>
  );
}
export default App;
