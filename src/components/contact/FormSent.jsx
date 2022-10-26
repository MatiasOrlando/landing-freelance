import React from "react";

const FormSent = ({ setState }) => {
  return (
    <div className="flex flex-col gap-4 font-roboto">
      <div className="flex-col space-y-8 text-center pt-6">
        <h1 className="font-bold text-[24px] text-left">
          ¡Muchas gracias por tu consulta!
        </h1>
        <p className="w-[350px] xl:text-left lg:text-left md:text-left sm:text-left  xs:text-center">
          Te estaré respondiendo lo más pronto posible al correo indicado.
        </p>
        <button
          onClick={() => setState(false)}
          className=" w-[327px] lg:w-[370px] h-[64px] text-[#fff] bg-secondary rounded-[8px]"
        >
          Enviar otra consulta
        </button>
      </div>
    </div>
  );
};

export default FormSent;
