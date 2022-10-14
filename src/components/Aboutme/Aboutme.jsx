import React from "react";

const Aboutme = () => {
  return (
    <div className="flex xl:flex flex-row lg:flex-row md:flex-row sm:flex-row xs:flex flex-col-reverse lg:w-full md:w-full sm:w-full xl:lg:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px]  bg-gray">
      <div className="flex items-center justify-center sm: justify-left  lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full lg:h-[500px] md:h-[400px] sm:h-[350px] xs:h-[300px] ">
        <div className="lg:w-2/5  md:w-1/2 sm:w-2/3 xs:w-[450px]  lg:h-[300px] md:h-[250px]  sm:h-[185px] xl:pb-[180px] lg:pb-[380px] md:pb-[320px] sm:pb-[270px] ">
          <h3 className="font-roboto font-[700] xl:text-[35px] lg:text-[30px] md:text-[25px]  sm:text-[20px] xs:text-[16px]  sm:pt-[8px] text-secondary">
            SOBRE MÍ
          </h3>
          <p className="xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-justify leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur minima inventore obcaecati maxime error deleniti harum
            sit excepturi, molestiae reiciendis architecto nisi veritatis est
            exercitationem reprehenderit! Corporis sapiente nemo dolore? Lorem
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full  xl:h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px] xs:h-[380px]   bg-cover">
        <img src="assets/aboutme.png" className="w-full h-full " />
      </div>
    </div>
  );
};

export default Aboutme;
