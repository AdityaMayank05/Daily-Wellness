import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just simulate a successful login for demonstration purposes
    setMessage('Login successful!');
    localStorage.setItem('userEmail', email);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border border-gray-300 rounded-md bg-white shadow-lg">
      <h2 className="text-black text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
      {message && (
        <div className="mt-4 p-2 bg-yellow-500 text-white rounded-md">
          {message}
        </div>
      )}
      <p className="text-black mt-4 text-center">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
