import React from 'react';

const ImageCard = ({ img }) => {
  return (
    <div className={`w-screen lg:w-[50%] h-max`}>
      <img src={img} className='h-auto w-full object-cover object-center' />
    </div>
  );
};

export default ImageCard;
