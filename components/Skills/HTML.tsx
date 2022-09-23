import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

export default function HTML({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}

      transition={{
        duration: 1
      }}
      whileInView={{
        opacity: 1, x:0
      }}
src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
      className="h-14 w-14 rounded-full border border-gray-500 object-cover xl:h-32 xl:w-32 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:h-32 xl:w-32 md:h-24 md:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">90%</p>
        </div>
      </div>
    </div>
  );
}
