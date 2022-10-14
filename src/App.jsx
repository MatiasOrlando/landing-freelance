import React from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Appointment from "./components/appointment/Appointment";
import Banner from "./components/banner/Banner";
import Carrousel from "./components/Carrousel/Carrousel";
import ContactCont from "./components/contact/contactCont";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SenContainer from "./components/sentence/SenContainer";
import ServicesContainer from "./components/services/ServicesContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ServicesContainer />
      <SenContainer />
      <Aboutme />
      <Appointment />
      <SenContainer />
      <Carrousel />
      <ContactCont />
      <Footer />
    </div>
  );
};

export default App;
