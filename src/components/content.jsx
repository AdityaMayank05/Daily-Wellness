import React from 'react'
import profilePic from '../assets/quote.png'
import { motion } from "framer-motion"

const content = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center"> 
            <motion.h1 
              whileInView={{opacity:1, x: 0}}
              initial={{ opacity:0, x:-100}}
              transition={{duration:0.5}}
              className="text-black pb-16 text-6xl font-bold tracking-tight lg:mt-1 lg:text-6xl">
              Inspire, Innovate, Impact
            </motion.h1>
            <motion.p 
              whileInView={{opacity:1, x: 0}}
              initial={{ opacity:0, x:100}}
              transition={{duration:0.5}}
              className="text-black my-2 max-w-xl py-6 pl-20 font-light tracking-tighter text-center"> 
              We offer programs, products and a supportive community to help reduce stress, improve health, boost fitness, and promote overall wellness
            </motion.p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Follow @dailywellnessai
            </button>
          </div>
        </div>
            <motion.div 
            whileInView={{opacity:1, y: 0}}
            initial={{ opacity:0, y:100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img
                     src={profilePic} alt="Aditya Mayank Sinha" className='rounded-2xl mh-200px'/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default content;
