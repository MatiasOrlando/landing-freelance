import React from "react";
import ContentCard from "./ContentCard";
import ImageCard from "./ImageCard";

const SectionCont = ({ img, title, text, icon, reverse }) => {
  return (
    <div
      className={`flex xl:flex-row lg:flex-row md:flex-row sm:flex-row  w-screen object-cover bg-no-repeat
      ${reverse ? "md:flex-col-reverse" : "md:flex-col"}  
      ${reverse ? "sm:flex-col-reverse" : "sm:flex-col"}  
      ${reverse ? "xs:flex-col-reverse" : "xs:flex-col"}`}
    >
      {reverse ? (
        <>
          <ContentCard title={title} text={text} icon={icon} />
          <ImageCard img={img} />
        </>
      ) : (
        <>
          <ImageCard img={img} />
          <ContentCard title={title} text={text} icon={icon} />
        </>
      )}
    </div>
  );
};

export default SectionCont;
