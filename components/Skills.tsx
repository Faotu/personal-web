import React from 'react'
import {motion } from "framer-motion"
import Skill from './Skills/Skill'
import TypeScript from './Skills/TypeScript'
import ReactJS from './React'
import HTML from './Skills/HTML'
import NEXT from './Skills/NEXT'
import Redux from './Skills/Redux'
import Nodejs from './Skills/Nodejs'
import Jquery from './Skills/Jquery'
import SanityCMS from './Skills/SanityCMS'
import Tailwind from './Skills/Tailwind'
import Fire from './Skills/Fire'
import Python from './Skills/Python'
import CSS from './Skills/CSS'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
initial={{
    opacity: 0
}}
whileInView={{
    opacity: 1
}}
transition={{
    duration: 1.5
}}

    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p10 min-h-screen justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
       
       <h3 className='absolute top-36 uppercase tracking-[3px]'>Hover over to see more skills and tools</h3>
      
      <div className='grid grid-cols-4 gap-5'>
<Skill/>
<TypeScript />
<ReactJS/>
<HTML/>
<NEXT/>
<Redux/>
<Nodejs/>
<Jquery/>
<SanityCMS/>
<Tailwind/>
<Fire/>
<Python/>
<CSS/>

      </div>
        </motion.div>
  )
}