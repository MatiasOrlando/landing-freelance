import React from "react";
import Appointment from "./components/appointment/Appointment";
import Banner from "./components/banner/Banner";
import Carrousel from "./components/Carrousel/Carrousel";
import ContactCont from "./components/contact/contactCont";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SenContainer from "./components/sentence/SenContainer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <Appointment />
      <SenContainer />
      <Carrousel />
      <ContactCont />
      <Footer />
    </div>
  );
};

export default App;
