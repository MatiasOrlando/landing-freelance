import React from 'react';
import { WspIcon } from './WspIcon';

const ContentCard = ({ title, text, icon }) => {
  return (
    <div className='w-screen h-[270px] lg:h-auto lg:w-[50%] flex justify-center items-center font-roboto'>
      <div className='flex flex-col w-[566px] sm:w-[369px] xs:w-[369px]'>
        <h2 className='xl:w-[490px] lg:w-[470px] md:w-[400px] text-left text-secondary capitalize text-[20px] lg:text-[35px] md:text-[20px] pb-2 font-bold'>
          {title}
        </h2>
        <div className='flex flex-row items-end w-[369px]'>
          <p className='text-primary lg:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[10px]  min-w-[369px]'>
            {text}
          </p>
          <div className='min-h-[150px] px-4 hidden lg:flex items-center '>
            {icon ? <WspIcon /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
