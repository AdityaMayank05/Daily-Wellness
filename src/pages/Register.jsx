import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful registration
    setMessage('User created successfully!');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center text-black">Welcome to DailyWellness!</h1>
      <Link to="/login" className="block text-center mt-2 text-black hover:underline">Already have an account? Login here</Link>
      <h2 className="text-xl font-semibold text-center text-gray-800 mt-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4 text-center text-yellow-500">{message}</p>}
    </div>
  );
};

export default Register;
