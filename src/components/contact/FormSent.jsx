import React from 'react';

const FormSent = ({ setState }) => {
  return (
    <div className='flex flex-col gap-4 font-roboto'>
      <h1 className='font-bold text-[24px]'>
        ¡Muchas gracias por tu consulta!
      </h1>
      <p className='w-auto'>
        Te estaremos respondiendo lo más pronto posible al correo indicado.
      </p>
      <button
        onClick={() => setState(false)}
        className=' w-[327px] lg:w-[370px] h-[64px] text-[#fff] bg-secondary rounded-[8px]'
      >
        Enviar otra consulta
      </button>
    </div>
  );
};

export default FormSent;
