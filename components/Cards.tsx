import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Cards({}: Props) {
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
        src="data:image/png;base64,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"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Head of IT</h4>
        <p className="font-bold text-2xl mt-1">
          Nigerian Navy Secondary School Imeri
        </p>
      </div>
      <div className="flex space-x-2 my-2">
        {/* insert tech tool and give it a class and style it with h-10 w-10 rounded-full */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
      </div>
      <p className="upper py-5 text-gray-300">Started work: Sept 2020. Ended.Sept 2022</p>
      <ul className="list-desc space-y-4 ml-5 text-lg">
        <li>
          -Led the migration from Manual Result processing to Online Result
          processing and automated Result Analysis for management
          decision-making.
        </li>
        <li>
          -Manage and Work alongside other Technical support Team members in
          maintaining the School E-learning portal and Result Processing System.
        </li>
        <li>
          -Ensure all technical issues were ticked and reported to the Frontend
          and Backend developers to fix bugs.
        </li>
        <li>
          -Recommending regular maintenance and improvements of web applications
          to create a better experience for end users.{" "}
        </li>
      </ul>

      
    </article>
  );
}