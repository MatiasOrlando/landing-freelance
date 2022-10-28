import React from "react";

export const Button = ({ text }) => {
  return (
    <button className="mb-8 font-[500] text-[#fff] bg-secondary rounded-lg w-[162px] lg:w-[280px] h-[39px] lg:h-[64px] hover:bg-[#f9f9f9] hover:text-secondary shadow-md ease-linear transition-all duration-200">
      {text}
    </button>
  );
};
