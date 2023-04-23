import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.jsx";
import Hospital from "./views/hospital/Hospital.jsx";
import Contact from "./views/contact/contact.jsx";
import SignIn from "./views/signIn/SignIn.jsx";
import SignUp from "./views/signUp/SignUp.jsx";
import OneHospital from "./views/oneHospital/OneHospital.jsx";

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
