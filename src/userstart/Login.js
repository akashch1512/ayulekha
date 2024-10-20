import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ emailOrPhone, password }),
      // });

      // if (!response.ok) {
      //   const data = await response.json();
      //   setErrorMessage(data.message || 'Invalid credentials. Please try again.');
      //   return;
      // }

      if (emailOrPhone === 'user' && password === 'password') {
        navigate('/user_dashboard');
      } else if (emailOrPhone === 'doctor' && password === 'password') {
        navigate('/doctor_dashboard');
      } else if (emailOrPhone === 'admin' && password === 'password') {
        navigate('/universal_dashboard');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  const handleRegisterPasskey = async () => {
    try {
      const publicKey = {
        challenge: new Uint8Array(32).fill(0), // Static challenge for testing
        rp: { name: 'AyuLekha', id: window.location.hostname },
        user: {
          id: new Uint8Array(16), // Random unique ID (can be from backend)
          name: 'user@example.com',
          displayName: 'User',
        },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }], // ECDSA with SHA-256
        authenticatorSelection: { userVerification: 'preferred' }, // Prefer biometric
        timeout: 60000,
      };
  
      // Trigger passkey registration
      const credential = await navigator.credentials.create({ publicKey });
  
      // Store the rawId as a base64-encoded string
      const rawId = btoa(String.fromCharCode(...new Uint8Array(credential.rawId)));
      localStorage.setItem('credentialId', rawId);
  
      console.log('Passkey registration successful:', credential);
      alert('Passkey registered successfully!');
    } catch (error) {
      console.error('Passkey registration failed:', error);
      alert('Failed to register passkey. Please try again.');
    }
  };
  
  const handleBiometricLogin = async () => {
    try {
      // Check if biometric authentication is supported
      if (!navigator.credentials || !window.PublicKeyCredential) {
        setErrorMessage('Biometric authentication is not supported on this device.');
        return;
      }
  
      const storedCredentialId = localStorage.getItem('credentialId');
  
      if (!storedCredentialId) {
        handleRegisterPasskey(); // Call the function if storedCredentialId is falsy
        return; // Exit the current function after calling handleRegisterPasskey
      }
      
  
      // Convert the stored base64 credential back to a Uint8Array
      const credentialIdUint8Array = new Uint8Array(
        atob(storedCredentialId).split('').map((char) => char.charCodeAt(0))
      );
  
      const publicKey = {
        challenge: new Uint8Array(32).fill(0), // Static challenge for testing
        allowCredentials: [
          {
            id: credentialIdUint8Array,
            type: 'public-key',
          },
        ],
        timeout: 60000,
        userVerification: 'required',
      };
  
      // Trigger biometric authentication
      const assertion = await navigator.credentials.get({ publicKey });
  
      console.log('Login successful:', assertion);
      // alert('Biometric login successful!');
      navigate('/emergency'); // Redirect to dashboard
    } catch (error) {
      console.error('Biometric login failed:', error);
      setErrorMessage('Authentication failed. Please try again.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 pt-20">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl text-blue-700 mb-4">Welcome to AyuLekha</h2>
        <p className="text-center text-gray-600 mb-6">Medical History Management Tool</p>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

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
          <p className="cursor-pointer" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
          {/* <p
            className="mt-2 flex justify-center items-center cursor-pointer"
            onClick={handleRegisterPasskey}
          >
            <FontAwesomeIcon icon={faFingerprint} className="mr-2" /> Register Passkey
          </p> */}
          <p
            className="text-red-700 mt-2 flex justify-center items-center cursor-pointer"
            onClick={handleBiometricLogin}
          >
            <FontAwesomeIcon icon={faFingerprint} className="mr-2" /> Emergency Biometric Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
