import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ img }) => {
  return (
    <div className={`w-screen lg:w-[50%] h-max`}>
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={img}
        className="h-auto w-full object-cover object-center "
      />
    </div>
  );
};

export default ImageCard;
