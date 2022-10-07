import React from 'react';

export const Button = ({ text }) => {
  return (
    <button className='font-[500] text-[#fff] bg-secondary rounded-lg w-[162px] lg:w-[280px] h-[39px] lg:h-[64px]'>
      {text}
    </button>
  );
};
