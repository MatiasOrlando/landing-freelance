import React from 'react';
import { Button } from './Button';

const Appointment = () => {
  return (
    <div className='h-[240px] bg-rose w-auto flex flex-col lg:flex-row items-center font-roboto justify-center select-none gap-6 lg:gap-20'>
      <div className='flex flex-col items-center lg:items-start'>
        <h2 className=' font-bold text-secondary text-xl lg:text-[35px]'>
          ¿Querés agendar una cita?
        </h2>
        <h3 className='text-primary text-[16px] lg:text-[24px]'>
          Mandanos un Whatsapp
        </h3>
      </div>
      <Button wsp={true} text='Agendá tu cita' />
    </div>
  );
};

export default Appointment;
