import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Components from "./views/components/Components.jsx";
import CustomComponents from "./views/custom-components/Custom-components.jsx";
import Home from "./views/home/home.jsx";
import Hospital from "./views/hospital/hospital.jsx";
import Contact from "./views/contact/contact.jsx";
import SignIn from "./views/signIn/signIn.jsx";
import SignUp from "./views/signUp/signUp.jsx";
import { useSelector } from "react-redux";
import OneHospital from "./views/oneHospital/oneHospital.jsx";

function App() {
  const { token, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  /* useEffect(() => {
    if (token == "null") {
      navigate("/sign-in");
    }
  }, [token, navigate]);
 */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-Up" element={<SignUp />} />
      <Route path="/find_hospital" element={<Hospital />} />
      <Route path="/a_hospital/:id" element={<OneHospital />} />
      <Route path="/contact_us" element={<Contact />} />
      <Route path="/component" element={<Components />} />
      <Route path="/custom-components" element={<CustomComponents />} />
    </Routes>
  );
}
export default App;
