import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UniversalDashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Manage Users' },
    { id: 'doctors', label: 'Manage Doctors' },
    { id: 'appointments', label: 'Manage Appointments' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">System Overview</h3>
            <p>Overview of system health, recent activities, and alerts.</p>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Manage Users</h3>
            <p>View, edit, or delete user profiles and their medical records.</p>
          </div>
        );
      case 'doctors':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Manage Doctors</h3>
            <p>View, edit, or delete doctor profiles and their schedules.</p>
          </div>
        );
      case 'appointments':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Manage Appointments</h3>
            <p>View, schedule, or cancel appointments for users and doctors.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Analytics</h3>
            <p>View system-wide analytics: doctor performance, patient health stats, etc.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-100 to-blue-300 text-gray-700">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-blue-800 text-white p-6 lg:min-h-screen flex flex-col items-center lg:items-start">
        <h2 className="text-2xl font-semibold mb-6">Universal Dashboard</h2>
        <ul className="w-full space-y-4 text-center lg:text-left">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-3 rounded-lg ${
                selectedTab === tab.id ? 'bg-blue-600 text-white' : 'hover:bg-blue-700 hover:text-white'
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition text-white"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dashboard</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default UniversalDashboard;
