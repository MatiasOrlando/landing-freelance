import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footContainer flex justify-around bg-secondary h-[320px] md: h-[280px] ">
        <div className="test md: flex text-center justify-center">
          <div className="lastQuote flex-column w-[270px]">
            <div className="pt-[60px] text-[white]">LOGO</div>
            <div className="text-[white] font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, molestias nostrum iste quae reiciendis libero
              voluptate rerum est sunt official
            </div>
          </div>
        </div>
        <div className="contactInfo flex-col  flex justify-between pt-[60px]  h-[200px] font-roboto">
          <p className="text-[white]">Telefono</p>
          <p className="text-[white]">Mail</p>
          <p className="text-[white]">Dirección</p>
        </div>
      </div>
      <div className="flex-column  bg-secondary h-[60px] w-full">
        <div className="flex justify-center">
          <hr className="hrFooter" />
        </div>
        <div className="flex justify-center">
          <div className="w-[75%] flex justify-between ">
            <p className="text-[#F9F9F9] text-[10px] pt-4 font-roboto">
              © 2010 - 2022
            </p>
            <div className="flex text-[#F9F9F9] text-[10px] pt-4 space-x-2">
              <BsInstagram className="w-[22px] h-[22px]" />
              <ImFacebook className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
