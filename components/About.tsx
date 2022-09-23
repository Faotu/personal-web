import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/279421231_4517021521731067_1900675327668116142_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GdzAKXb4EuYAX_sJ_4u&_nc_ht=scontent-los2-1.xx&oh=00_AT_33MHalxIJE9adx1OSQtHRE84t-292wr-R50XfzGr5rQ&oe=632F36BC"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:round-lg md:w-64 h-95 xl:w-[500px] xl:h-[550px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A Quick{" "}
          <span className="underline decoration-{#ffc0b}/40">snap </span> about
          me
        </h4>
        <h4 className="text-m">
          Hey there, I am a talented frontend developer with a keen eye for
          designing user-friendly, responsive and fast-loading web applications.
          Over the past 6years, I have built and managed e_learning
          applications, company portfolio applications and personal blogging
          applications for small brands. I have taught and trained over 1,500
          Interns, undergraduates and college students on Web and IT tools.
          ReactJS, NextJS, JavaScript, TailwindCSS and Sanity are my magical
          tools.
        </h4>
      </div>
    </motion.div>
  );
}
