import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Card2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[600] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
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
          once: true,
        }}
        className="w-30 h-30 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.glassdoor.com/sqll/4065571/gsoft-technologies-squarelogo-1661328413567.png"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Frontend Dev & Technical Support</h4>
        <p className="font-bold text-2xl mt-1">
          Gsoft Technology
        </p>
      </div>
      <div className="flex space-x-2 my-2">
        {/* insert tech tool and give it a class and style it with h-10 w-10 rounded-full */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
      </div>
      <p className="upper py-5 text-gray-300">Started work: 2018-10-20 Ended: 2020-08-15</p>
      <ul className="list-desc space-y-4 ml-5 text-lg">
        <li>
        -Building User-friendly Web Applications
        </li>
        <li>
        -Solving IT-related problems for troubleshooting hardware and software issues.
        </li>
        <li>
        -Monitored the system for equipment failure or errors in performance.  Responded to the program error messages by finding and correcting problems or terminating the program.
        </li>
        <li>
          -Trained over 7,00 IT Interns  .{" "}
        </li>
      </ul>

      
    </article>
  );
}
