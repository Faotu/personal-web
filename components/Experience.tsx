import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import Card2 from "./Card2";
import Card3 from "./Card3";
type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFABE1]/80 ">
        <Cards />
        <Card2/>
        <Card3/>
        {/* <Cards />
        <Cards />
        <Cards /> */}
      </div>
    </motion.div>
  );
}
