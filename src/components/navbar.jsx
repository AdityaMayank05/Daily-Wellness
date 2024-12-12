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
      <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className='h-20 w-20 mx-4' />
        </div>
        <div className="m-8 flex items-center justify-center gap-5 text-3xl">
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
