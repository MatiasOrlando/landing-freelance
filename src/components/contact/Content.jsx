import React from 'react';
import { Icons } from './Icons';

export const Content = () => {
  return (
    <div className='flex flex-col w-[325px]'>
      <h1 className='font-bold font-roboto text-[24px] pb-2'>
        Hacenos tu consulta por mail
      </h1>
      <p className='font-roboto w-[325px]'>
        Lorem ipsu dolor sit amet, consectetur adpiscing elit.
      </p>
      <div className='flex flex-col gap-10'>
        <Icons src='phone.png' title='Telefono' data='12345678' />
        <Icons src='letter.png' title='Mail' data='mail@example.com' />
      </div>
    </div>
  );
};
