import React from "react";
import { Button } from "../appointment/Button";

const Banner = () => {
  return (
    <div className=" bg-[url(/assets/hero.png)] bg-cover bg-no-repeat xl:h-[560px] lg:h-[480px] sm:h-[360px]  xs:h-[290px]  w-auto flex flex-col items-center justify-center font-roboto pt-20 lg:pt-0 gap-8">
      <div className="flex flex-col items-center gap-4 lg:gap-0 sm:w-[500px]">
        <h1 className="text-[#fff] font-medium  lg:text-[64px] md:text-[44px] xs:text-[25.6px] lg:w-[787px] lg:min-h-[107px] lg:px-0 px-2 text-center">
          TE INVITO A SANAR
        </h1>
        <p className="text-[#fff] text-[14px] lg:text-[21px]  sm:text-[16px] xs:text-[10px]  px-4 lg:px-0 font-normal w-auto h-auto lg:w-[503px] md:w-[440px] sm:w-[440px]  xs:w-[390px]  lg:h-[89px] text-center">
          Como terapeuta holística, encontraremos la herramienta que mas resuene
          con vos, y así lograr juntos tu más alto bienestar. ¿Estas listo?
        </p>
      </div>
      <Button text="Agendá tu cita" />
    </div>
  );
};

export default Banner;
