import React from 'react';

const SenContainer = ({ bg }) => {
  return (
    <div
      className={` w-auto lg:w-screen h-[400px] bg-[url(/assets/frase1.png)] bg-center bg-fill flex items-center justify-center`}
    >
      <h1 className='text-center font-roboto text-sm sm:text-lg lg:text-[40px] text-[#fff]'>
        "Cita o frase inspiracional que describa el servicio"
      </h1>
    </div>
  );
};

export default SenContainer;
