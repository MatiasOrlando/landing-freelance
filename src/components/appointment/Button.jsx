import React from "react";

export const Button = ({ text, wsp = false }) => {
  return (
    <button className="mb-8 font-[500] text-[#fff] bg-secondary rounded-lg w-[162px] lg:w-[280px] h-[39px] lg:h-[64px] hover:bg-[#f9f9f9] hover:text-secondary shadow-md ease-linear transition-all duration-200">
      <a
        target="_blank"
        href={
          wsp
            ? "https://wa.me/3571458344/?text=Contacta%20con%20Aylen%20por%20mensaje!"
            : null
        }
      >
        {text}
      </a>
    </button>
  );
};
