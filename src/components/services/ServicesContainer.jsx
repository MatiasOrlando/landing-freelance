import React from 'react';
import SectionCont from './SectionCont';

const ServicesContainer = () => {
  return (
    <div className='space-y-[-8px]'>
      <SectionCont
        img='/assets/cards.png'
        title='Servicio 1'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        icon={true}
      />
      <SectionCont
        img='/assets/pick2.png'
        title='Servicio 2'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        icon={false}
        reverse={true}
      />
      <SectionCont
        img='/assets/pick3.png'
        title='Servicio 3'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        icon={false}
      />
    </div>
  );
};

export default ServicesContainer;
