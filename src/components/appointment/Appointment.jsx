import React from "react";
import { Button } from "./Button";

const Appointment = ({ wsp = true }) => {
  return (
    <div className="h-[240px] bg-rose w-auto flex flex-col lg:flex-row items-center font-roboto justify-center select-none gap-6 lg:gap-20">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className=" font-bold text-secondary text-xl lg:text-[35px]">
          ¿Querés agendar una cita?
        </h2>
        <h3 className="text-primary text-[16px] lg:text-[24px]">
          Mandanos un Whatsapp
        </h3>
      </div>
      <a
        target="_blank"
        href={
          wsp
            ? "https://wa.me/3571458344/?text=Contacta%20con%20Aylen%20por%20mensaje!"
            : null
        }
      >
        <Button text="Agendá tu cita" />
      </a>
    </div>
  );
};

export default Appointment;
