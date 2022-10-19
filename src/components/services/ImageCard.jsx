import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ img }) => {
  return (
    <div className="overflow-hidden w-screen lg:w-[50%] lg:h-max sm:h-[360px]">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={img}
        className="transition duration-[1000ms]  w-full object-cover object-center"
      />
    </div>
  );
};

export default ImageCard;
