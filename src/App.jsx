import React from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import ContactCont from './components/contact/contactCont';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Carrousel />
      <ContactCont />
    </div>
  );
};

export default App;
