// Welcome.js
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/Ayulekha.png'; // Replace with your logo path
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app, auth, db, storage } from '../firebaseConfig'; // Adjust the path if needed
import '../index.css'; // Import custom styles

const provider = new GoogleAuthProvider();

function Welcome() {
  const navigate = useNavigate();

  // Memoized array of texts to display
  const texts = useMemo(() => [
    "Your Health 🏥",
    "Your Records 📂",
    "At Your Fingertips ✋"
  ], []);

  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State for text visibility

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false); // Fade out text
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % texts.length);
        setCurrentText(texts[index]);
        setIsVisible(true); // Fade in new text
      }, 500); // Duration of fade-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [index, texts]); // Add texts to the dependency array

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user); // Handle user info
        navigate('/dashboard'); // Redirect after login
    } catch (error) {
        console.error('Login failed:', error.message);
        alert('Login failed. Please try again.');
        // Optionally log the error code for more context
        if (error.code) {
            console.error('Error code:', error.code);
        }
    }
};


  // Navigation handlers
  const handleLogin = () => navigate('/login');
  const handleSignUp = () => navigate('/signup');
  const handleHelp = () => console.log('Need help? Redirecting to help page.');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 pt-20 px-4 -mt-16">
      {/* Logo */}
      <img src={logo} alt="AyuLekha Logo" className="w-80 mb-5" />

      {/* Animated Heading */}
      <h2 className={`text-center text-xl text-blue-700 font-bold mb-5 transition-opacity duration-500  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {currentText}
      </h2>

      {/* Google Login Button */}
      <button
        className="bg-red-500 text-white py-3 px-6 rounded-lg mb-0 shadow-lg hover:bg-red-600 transition font-bold "
        onClick={handleGoogleLogin}
        aria-label="Sign in with Google" // Accessibility improvement
      >
        Sign in with Google
      </button>

      {/* Login and Signup Buttons */}
      <div className="flex space-x-4 -mt-14">
        <button
          className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition font-bold"
          onClick={handleLogin}
        >
          Log In
        </button>
        <button
          className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition font-bold"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>

      {/* Help Text */}
      <p className="text-gray-600 mt-5 cursor-pointer underline" onClick={handleHelp}>
        Need help?
      </p>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center py-4 bg-blue-700 text-white">
        <p className="font-bold">© 2024 AyuLekha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Welcome;
