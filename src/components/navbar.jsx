import React from 'react';
import logo from '../assets/DWlogo.png';

const navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className='h-20 w-20 mx-4' />
        </div>
        <div className="m-8 flex items-center justify-center gap-5 text-3xl">
          <button className="text-black hover:text-gray-400">Login</button>
          <button className="text-black hover:text-gray-400">Register</button>
        </div>
      </nav>
    </div>
  )
}

export default navbar;