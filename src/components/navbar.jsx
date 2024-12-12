import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/DWlogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <nav className="flex items-center justify-between mb-20 sm:px-8 lg:px-16">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className="h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mx-2" />
        </div>
        <div className="flex items-center justify-center gap-5 text-base sm:text-xl lg:text-3xl m-8">
          <button onClick={handleLoginClick} className="text-black hover:text-gray-400">
            Login
          </button>
          <button onClick={handleRegisterClick} className="text-black hover:text-gray-400">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
