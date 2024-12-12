import React from 'react';
import profilePic from '../assets/quote.png';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center py-20">
        <div className="w-full px-4 lg:w-1/2 lg:px-8">
          <div className="text-center">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-black pb-6 sm:pb-8 md:pb-12 lg:pb-16 text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold tracking-tight lg:mt-1"
            >
              Inspire, Innovate, Impact
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-black my-2 max-w-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 font-light tracking-tighter"
            >
              We offer programs, products and a supportive community to help reduce stress, improve health, boost fitness, and promote overall wellness.
            </motion.p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Follow @dailywellnessai
            </button>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-full px-4 lg:w-1/2 lg:px-8"
        >
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-2xl max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 py-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
