import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Card3({}: Props) {
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
        src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/302044630_462126462594411_2576443244471068010_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=-Uw5ZpfDpb8AX9Gib8p&_nc_ht=scontent.flos5-2.fna&oh=00_AT-bC7wHBvKJomjQRC6OsCGWeY8QrA6npPVODKPGOyxA0A&oe=63321D6B"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">IT Instructor</h4>
        <p className="font-bold text-2xl mt-1">
          ST. BRENDAN COLLEGE
        </p>
      </div>
      <div className="flex space-x-2 my-2">
        {/* insert tech tool and give it a class and style it with h-10 w-10 rounded-full */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
        {/* tech used */}
      </div>
      <p className="upper py-5 text-gray-300">
        Started work: Sept 2014. Ended.Oct 2018
      </p>
      <ul className="list-desc space-y-4 ml-5 text-lg">
        <li>-Teaches Introduction to Computing</li>
        <li>
          -Guide students on practical aspects of computer science using
          application packages like Excel, Word, PowerPoint, search engines, etc
        </li>
        <li>
          -Teaches students an introduction to programming using Visual Basic
          -Prepares student’s terminal results using a spreadsheet (Microsoft
          Excel)
        </li>
        <li>
        Manage the school database, prepares terminal results and ensure all students' records are updated
        </li>
      </ul>
    </article>
  );
}
