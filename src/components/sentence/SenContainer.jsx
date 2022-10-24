import React from "react";

const SenContainer = ({ text, bgImg }) => {
  return (
    <div
      className={` w-auto lg:w-screen h-[440px]  bg-center bg-cover bg-no-repeat flex items-center justify-center`}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <h1 className="text-center text-[40px] lg:text-[35px] md:text-[25px] sm:text-[20px] xs:text-[15px]  xl:w-[982px] lg:w-[782px]  md:w-[682px] sm:w-[482px] xs:w-[382px]  leading-[1.5] font-roboto text-[#fff]">
        "{text}"
      </h1>
    </div>
  );
};

export default SenContainer;
