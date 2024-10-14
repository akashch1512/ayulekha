import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // Implement logic to handle login with API call or authentication
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      // Check the login credentials
      if (emailOrPhone === 'admin_user' && password === 'user_password') {
        navigate('/user_dashboard'); // Redirect to user dashboard using navigate
      } else if (emailOrPhone === 'admin_doctor' && password === 'doctor_password') {
        navigate('/doctor_dashboard'); // Redirect to doctor dashboard
      } else if (emailOrPhone === 'universal_admin' && password === 'admin_password') {
        navigate('/universal_dashboard'); // Redirect to universal dashboard
      } else {
        setErrorMessage('Invalid credentials. Please try again.'); // Handle invalid credentials
      }
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage(error.message);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword'); 
  };

  const handlebiometriclogin = () => {
    // Simulating fingerprint authentication
    const enteredFingerprintId = prompt("Please scan your fingerprint or enter its ID:");

    // Check if a fingerprint ID is entered
    if (enteredFingerprintId) {
      console.log('Fingerprint ID entered:', enteredFingerprintId);
      // Redirect to the user dashboard
      navigate('/user_dashboard');
    } else {
      setErrorMessage('No fingerprint ID entered. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 pt-20">
      {/* Added pt-20 for padding-top to avoid collision with the top */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl text-blue-700 mb-4">Welcome to AyuLekha</h2>
        <p className="text-center text-gray-600 mb-6">Medical History Management Tool</p>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Email/Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-blue-700">
          <p className="cursor-pointer" onClick={handleForgotPassword}>Forgot Password?</p>
          <p className="mt-2 flex justify-center items-center cursor-pointer" onClick={handlebiometriclogin}>
            <FontAwesomeIcon icon={faFingerprint} className="mr-2" /> Biometric Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
