import React from "react";

const Aboutme = () => {
  return (
    <div className="xl:flex flex-row lg:flex-row md:flex-row sm:flex-row xs:flex flex-col-reverse lg:mt-[0px] md:mt-[0px] sm:mt-[0px] xs:mt-[60px] lg:w-full md:w-full sm:w-full xl:lg:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px]  bg-gray">
      <div className="flex items-center sm:items-start justify-center sm: justify-left  lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full lg:h-[300px] md:h-[300px] sm:h-[350px] xs:h-[300px] ">
        <div className="lg:w-[474px] lg:h-[300px] md:w-[350px] md:h-[250px] sm:h-[50px]  sm:w-[250px] xs:w-[400px] xl:pt-4 lg:pt-3 md:pt-1 sm:pt-0 xs:pt-0">
          <h3 className="font-roboto font-[700] xl:text-[35px] lg:text-[25px] md:text-[20px]  sm:text-[20px] xs:text-[16px]  sm:pt-[8px] text-secondary">
            SOBRE MÍ
          </h3>
          <div className="xl:space-y-2 lg:space-y-0.5 md:space-y-0.5 sm:space-y-0 xs:space-y-2">
            <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] text-justify xl:leading-[28px] lg:leading-[28px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] font-roboto text-primary">
              Mi nombre real es Aylén Marianela Menichetti. Tengo 28 años y
              actualmente vivo en Córdoba capital. Mi aventura como Aymana Pley
              comenzó en aquellos tiempos de encierro, donde la pandemia nos
              tenia ofuscados a todos.{" "}
            </p>
            <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] text-justify xl:leading-[28px] lg:leading-[28px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] font-roboto text-primary">
              La salida en ese momento fue hacia adentro. Encontré en el camino
              a grandes maestros, que me guiaron y acompañaron en mi proceso de
              sanación personal. Aprendí muchas cosas, tome consciencia de “La
              verdad”, y me prepare para entregarle esto al mundo.
            </p>
            <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] text-justify xl:leading-[28px] lg:leading-[28px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] font-roboto text-primary">
              Si bien estudio ingeniería en sistemas y trabajo en una empresa de
              software, el llamado fue grande, y atendí. Aquí me encuentro,
              desarrollándome como terapeuta holística y ayudando a muchas
              personas que así me lo pidan. Es importantísimo atender al llamado
              del alma, y liberar los “debe ser”, los “que hubiera pasado si”.
              El momento es hoy, y aquí me encuentro trabajando para esto ¡Yes,
              si!
            </p>
            <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[10px] text-justify xl:leading-[28px] lg:leading-[28px] md:leading-[20px] sm:leading-[16px] xs:leading-[16px] font-roboto text-primary">
              ¡Soy una trabajadora de la luz! ¡¡¡Me presento!!!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full  xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px] xs:h-[380px]   bg-cover">
        <img src="assets/aboutme.png" className="w-full h-full " />
      </div>
    </div>
  );
};

export default Aboutme;
