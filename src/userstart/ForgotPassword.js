import React, { useState } from 'react';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Implement logic to handle password reset request
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone }),
      });

      const data = await response.json();
      setMessage(data.message || 'Password reset link sent!');
    } catch (error) {
      console.error('Error sending password reset link:', error.message);
      setErrorMessage("Contact Us for Reset Link");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100 px-4"> {/* Added px-4 for padding */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl text-blue-700 mb-4">Forgot Password?</h2>
        
        <form onSubmit={handleResetPassword}>
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

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Reset Password
          </button>
        </form>

        {message && (
          <p className="text-center text-gray-600 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
