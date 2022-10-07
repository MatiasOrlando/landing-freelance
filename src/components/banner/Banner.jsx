import React from 'react';
import { Button } from '../appointment/Button';

const Banner = () => {
  return (
    <div className=' bg-[#8247b3] h-[480px] lg:h-[560px] w-auto flex flex-col items-center justify-center font-roboto pt-20 lg:pt-0 gap-8'>
      <div className='flex flex-col items-center gap-4 lg:gap-0'>
        <h1 className='text-[#fff] font-medium text-[24px] lg:text-[64px] lg:w-[787px] lg:min-h-[107px] lg:px-0 px-2 text-center'>
          Lorem ipsum dolor sit amet, consectetur.
        </h1>
        <p className='text-[#fff] text-[14px] lg:text-[21px] px-4 lg:px-0 font-normal w-auto h-auto md:w-[440px] lg:h-[89px] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Button text='Agendá tu cita' />
    </div>
  );
};

export default Banner;
