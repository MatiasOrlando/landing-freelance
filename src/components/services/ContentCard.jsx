import React from "react";
import { WspIcon } from "./WspIcon";

const ContentCard = ({ title, text, icon }) => {
  return (
    <div className="w-screen h-[270px] lg:h-auto lg:w-[50%] flex justify-center items-center font-roboto">
      <div className="flex flex-col w-[369px]">
        <h2 className="w-[169px] text-left text-secondary capitalize text-[20px] lg:text-[35px] md:text-[20px] font-bold">
          {title}
        </h2>
        <div className="flex flex-row items-end">
          <p className="text-primary text-[10px] lg:text-[18px] md:text-[14px] sm:text-[12px] xs:text-[12px]  min-w-[369px]">
            {text}
          </p>
          {icon ? <WspIcon /> : null}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
