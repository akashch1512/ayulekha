import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function UserDashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(null);
  const [files, setFiles] = useState([]);

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'health', label: 'Health Analytics' },
    { id: 'records', label: 'Medical Records' }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Welcome to your Dashboard</h3>
            <p>Manage your medical history, book appointments, and monitor your health analytics.</p>
          </div>
        );
      case 'appointments':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Book an Appointment</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border border-gray-300 rounded-md px-4 py-2"
              dateFormat="dd/MM/yyyy"
            />
            <button
              onClick={() => console.log('Appointment booked for:', selectedDate)}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Book Appointment
            </button>
          </div>
        );
      case 'health':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Health Analytics</h3>
            <div className="text-left">
              <p>Blood Pressure: 120/80 mmHg</p>
              <p>Glucose Level: 90 mg/dL</p>
              {/* Add more health metrics */}
            </div>
          </div>
        );
      case 'records':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Medical Records</h3>
            <input
              type="file"
              onChange={(event) => setFiles([...files, ...Array.from(event.target.files)])}
              multiple
              className="mb-4"
            />
            <div>
              {files.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
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
        <h2 className="text-2xl font-semibold mb-6">User Dashboard</h2>
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

export default UserDashboard;
