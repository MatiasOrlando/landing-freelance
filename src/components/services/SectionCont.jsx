import React from 'react';
import ContentCard from './ContentCard';
import ImageCard from './ImageCard';

const SectionCont = ({ img, title, text, icon, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'flex-col-reverse' : 'flex-col'
      } flex-wrap lg:flex-row w-screen h-auto lg:min-h-[546px]`}
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
