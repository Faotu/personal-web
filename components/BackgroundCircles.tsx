import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#694E4E] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#413F42]  h-[300px] w-[300px] mt-52 animate-ping absolute" />
      <div className="rounded-full border border-[#413F42]  h-[500px] w-[500px] mt-52 animate-ping absolute" />

      <div className="rounded-full border border-[#413F42] opacity-20 h-[65px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#413F42]  h-[800px] w-[800px] mt-52 absolute" />

      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
