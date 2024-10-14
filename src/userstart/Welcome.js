import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/Ayulekha.png'; // Replace with the path to your logo image

function Welcome() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleHelp = () => {
    console.log('Need help? Redirecting to help page.');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 pt-20 px-4"> {/* Added px-4 for padding */}
      {/* Logo */}
      <img src={logo} alt="AyuLekha Logo" className="w-60 mb-5" />

      {/* Heading */}
      <h2 className="text-center text-2xl text-blue-700 mb-5">Welcome to AyuLekha</h2>

      {/* Buttons */}
      <button
        className="bg-blue-700 text-white py-3 px-6 rounded-lg mb-4 shadow-lg hover:bg-blue-800 transition"
        onClick={handleLogin}
      >
        Log In
      </button>
      <button
        className="bg-blue-700 text-white py-3 px-6 rounded-lg mb-4 shadow-lg hover:bg-blue-800 transition"
        onClick={handleSignUp}
      >
        Sign Up
      </button>

      {/* Help text */}
      <p
        className="text-gray-600 mt-5 cursor-pointer underline"
        onClick={handleHelp}
      >
        Need help?
      </p>
    </div>
  );
}

export default Welcome;
