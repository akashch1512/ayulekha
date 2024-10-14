import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(''); // Added state for OTP
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [belongings, setBelongings] = useState('');
  const [relation, setRelation] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [otpMessage, setOtpMessage] = useState(''); // State to show OTP messages

  const handleGetOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }), // Sending email to request OTP
      });

      const data = await response.json();
      setOtpMessage(data.message);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      setOtpMessage('Error sending OTP.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement logic for user registration
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          otp, // Added OTP to the request body
          phoneNumber,
          name,
          city,
          state,
          country,
          address,
          belongings,
          relation,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("We are currently not accepting new users");
      }

      const data = await response.json();
      console.log('Sign-up successful:', data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Sign-up error:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 pt-20">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl text-blue-700 mb-4">Create an Account</h2>
        <p className="text-center text-gray-600 mb-6">
          Join us and manage your medical history easily.
        </p>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSignUp}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Get OTP Button */}
          <button
            type="button"
            onClick={handleGetOtp}
            className="mb-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Get OTP
          </button>

          {otpMessage && <p className="text-green-600 text-center mb-4">{otpMessage}</p>}

          {/* OTP Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Country</label>
            <input
              type="text"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          {/* State Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Belongings Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Belongings</label>
            <input
              type="text"
              placeholder="Enter your belongings"
              value={belongings}
              onChange={(e) => setBelongings(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Relation Field */}
          <div className="mb-4">
            <label className="block text-blue-700 mb-2">Relation to Belongings</label>
            <input
              type="text"
              placeholder="Enter relation to belongings"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Password Field */}
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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
