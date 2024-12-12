import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pic from '../assets/DWlogo.png';
import { motion } from 'framer-motion';
import '../index.css';

const Front = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/chat');
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative">
      <div className="flex flex-col items-center w-full pt-6">
        <motion.div
          className="absolute top-6 text-3xl font-bold text-black z-50 p-2 rounded" // Ensure high z-index, change color to black, add background for contrast
          style={{
            whiteSpace: 'nowrap',
            left: 0, 
          }}
          animate={{
            x: [0, 1500], 
          }}
          transition={{
            duration: 5, 
            repeat: Infinity, 
            repeatType: 'loop',
          }}
        >
          Coming Soon!
        </motion.div>
        
        <motion.img 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }} 
          src={Pic} 
          alt="logo" 
          className="h-auto w-auto"
        />
        <div className="mt-10 text-xl font-semibold text-black z-40 p-2 rounded"> Every Step Counts with the New Social Share Wellness Products & Services Website and App </div>
        <button 
          onClick={handleButtonClick}
          className="mt-6 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600"
        >
          Talk to our AI Guru
        </button>
      </div>
    </div>
  );
};

export default Front;
