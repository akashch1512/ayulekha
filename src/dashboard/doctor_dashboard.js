import React from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic (e.g., clear user data, redirect to login)
    console.log('Logging out...');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl text-blue-700 mb-4">Welcome to Doctor Dashboard</h2>
        <p className="text-gray-600 mb-4">Manage Others medical history and other details here.</p>
        
        {/* Add more functionality or components as needed */}
        
        <button
          onClick={handleLogout}
          className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default DoctorDashboard;
