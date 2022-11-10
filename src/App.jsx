import React from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Appointment from "./components/appointment/Appointment";
import Banner from "./components/banner/Banner";
import Carrousel from "./components/Carrousel/Carrousel";
import ContactCont from "./components/contact/ContactCont";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SenContainer from "./components/sentence/SenContainer";
import ServicesContainer from "./components/services/ServicesContainer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <ServicesContainer />
      <SenContainer
        bgImg="/assets/medit.jpg"
        text="Un sanador no es alguien al que vas para que te cure. Un sanador es una
        persona que despierta en ti, tu propia consciencia para sanarte a ti
        mismo"
      />
      <Aboutme />
      <Appointment />
      <SenContainer
        bgImg="/assets/frase2.png"
        text="Hasta que lo inconsciente no se haga consciente, esto seguirá dirigiendo tu vida, y Tú lo 
llamaras destino"
      />
      <Carrousel />
      <ContactCont />
      <Footer />
    </div>
  );
};

export default App;
