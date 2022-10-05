import React from 'react';

export const Icons = (props) => {
  return (
    <div className='flex flex-col pt-6'>
      <div className='flex flex-row gap-4'>
        <img
          src={`assets/${props.src}`}
          className='w-[29px] h-[29px] object-contain'
        />
        <div className='flex- flex-col'>
          <h2 className='font-bold text-[20px] font-roboto'>{props.title}</h2>
          <p className='font-roboto'>{props.data}</p>
        </div>
      </div>
    </div>
  );
};
