import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Timer() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date('January 1, 2025 00:00:00').getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-container bg-gray-600 text-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 py-4 md:py-8">
        The Website is ready. Will you be??
      </h2>
      <p className="text-white font-bold mb-2 sm:mb-4 py-2 md:py-4">
        DailyWellness AI website launches in:
      </p>
      <div className="countdown-grid flex flex-wrap justify-center py-4 sm:py-6 md:py-10">
        {countdown && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="countdown-item flex flex-col items-center justify-center mx-2 px-4 sm:px-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {countdown.days}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold">DAYS</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="countdown-item flex flex-col items-center justify-center mx-2 px-4 sm:px-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {countdown.hours}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold">HOURS</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="countdown-item flex flex-col items-center justify-center mx-2 px-4 sm:px-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {countdown.minutes}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold">MINUTES</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="countdown-item flex flex-col items-center justify-center mx-2 px-4 sm:px-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  {countdown.seconds}
                </span>
                <span className="text-white text-xs sm:text-sm font-bold">SECONDS</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
      <div className="text-center mt-4 pb-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-2xl">
          Sign Up to Get Early Access
        </button>
      </div>
    </div>
  );
}

export default Timer;
