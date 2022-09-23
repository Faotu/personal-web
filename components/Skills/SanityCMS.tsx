import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

export default function SanityCMS({directionLeft}: Props) {
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
src="https://repository-images.githubusercontent.com/252413723/e6f28180-8882-11ea-9e76-78d72dfa2af0"
      className="h-14 w-14 rounded-full border border-gray-500 object-cover xl:h-32 xl:w-32 md:h-24 md:w-24 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:h-32 xl:w-32 md:h-24 md:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">77%</p>
        </div>
      </div>
    </div>
  );
}
