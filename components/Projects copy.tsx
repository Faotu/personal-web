import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-90 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFABE1]/80 ">
        
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              src="https://drishtibharat.com/wp-content/uploads/2021/12/netflix.jpg"
              alt=""
              className=""
              // className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:round-lg md:w-64 h-95 xl:w-[500px] xl:h-[550px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold">
                <span className="underline decoration-pink-50/40">
                  {" "}
                </span>{" "}
                Netflix clone
              </h4>
              <p className="text-lg text-center md:text-left">
                {" "}
                A clone movie web application design with ReactJS, NextJS and
                fetching data from the API to displace movies. Using
                authentication for Registration and Login for users to be able
                to have access to stream movies.
              </p>
            </div>
          </div>
        
      </div>

      <div className="w-full absolute top-[30%] bg-[#FD841F]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
