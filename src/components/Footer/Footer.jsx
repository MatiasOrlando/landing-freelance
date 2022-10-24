import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footContainer flex justify-around bg-secondary h-[320px] md: h-[280px] ">
        <div className="test md: flex text-center justify-center">
          <div className="lastQuote flex-column w-[270px]">
            <img
              className="w-[268px] h-[57px] mt-[50px] mb-[8px]"
              src="assets/logoFooter.png"
            />
            <div className="text-[white] font-roboto text-[10px]">
              Para ayudarte a superar tus problemas y que logres la vida más
              plena que deseas, vamos a realizar juntos un tratamiento
              personalizado a domicilio partiendo de una base de confianza,
              respeto y confidencialidad. Encontremos la luz en tu interior para
              que tus dificultades se marchen.
            </div>
          </div>
        </div>
        <div className="contactInfo flex-col  flex justify-between pt-[60px]  h-[200px] font-roboto">
          <div className="flex w-[100px] justify-between">
            <p className="text-[white] ">Telefono </p>
            <img
              src="assets/whitephone.png"
              className="w-[19.5px] h-[19.5px]"
            />
          </div>
          <div className="flex w-[100px] justify-between">
            <p className="text-[white]">Mail</p>
            <img src="assets/whiteletter.png" className="w-[20px] h-[16px]" />
          </div>
          <div className="flex w-[100px] justify-between">
            <p className="text-[white]"> Dirección</p>
            <img src="assets/address.png" className="w-[15.6px] h-[19.5px]" />
          </div>
        </div>
      </div>
      <div className="socialFooter flex-column  bg-secondary h-[80px] pt-[30px] w-full">
        <div className="flex justify-center">
          <hr className="hrFooter" />
        </div>
        <div className="flex justify-center">
          <div className="w-[75%] flex justify-between">
            <p className="text-[#F9F9F9] text-[10px] pt-4 font-roboto">
              © 2010 - 2020
            </p>
            <div className="flex text-[#F9F9F9] text-[10px] pt-4 space-x-2">
              <img
                src="/assets/instagram.png"
                style={{ color: "#FDCAE1" }}
                className="w-[22px] h-[22px]"
              />{" "}
              <img
                src="/assets/facebook.png"
                style={{ color: "#FDCAE1" }}
                className="w-[9.34px] h-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
