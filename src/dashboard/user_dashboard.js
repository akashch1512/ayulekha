import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import akash_photo from '../images/image.avif';
import report from '../images/Sample_Medical.jpg';
import appointmentsImage from '../images/akash.png';

function UserDashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(null);
  const [files, setFiles] = useState([]);

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const userDetails = {
    name: 'Akash Chaudhari',
    photo: akash_photo,
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'health', label: 'Health Analytics' },
    { id: 'records', label: 'Medical Records' },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Welcome to your Dashboard</h3>
            <p>Manage your medical history, book appointments, and monitor your health analytics.</p>
            <div className="mt-6">
              {/* <h4 className="text-lg font-semibold mb-2">User Demographics</h4> */}
              {/* <div className="flex space-x-4">
                <div className="p-4 bg-gray-200 rounded-lg flex-1">
                  <p><strong>Age:</strong> 21</p>
                  <p><strong>Gender:</strong> Male</p>
                  <p><strong>Blood Group:</strong> A+</p>
                </div>
              </div> */}
            </div>
          </div>
        );
      case 'appointments':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Book an Appointment</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="border rounded-md px-4 py-2"
              dateFormat="dd/MM/yyyy"
            />
            <button
              onClick={() => {
                if (selectedDate) {
                  console.log('Appointment booked for:', selectedDate);
                  alert(`Appointment booked for: ${selectedDate.toLocaleDateString()}`);
                } else {
                  alert('Please select a date.');
                }
              }}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Book Appointment
            </button>
            <img src={appointmentsImage} alt="Appointments" className="mt-4 w-full h-auto rounded-lg" />
          </div>
        );
      case 'health':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Health Analytics</h3>
            <div className="text-left mt-4">
              <p>Blood Pressure: 120/80 mmHg</p>
              <p>Glucose Level: 90 mg/dL</p>
            </div>
          </div>
        );
      case 'records':
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Medical Records</h3>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles([...files, ...Array.from(e.target.files)])}
              className="mb-4"
            />
            {files.length > 0 && (
              <div className="mt-2">
                <h4 className="text-lg font-semibold">Uploaded Files:</h4>
                {files.map((file, index) => (
                  <p key={index}>{file.name}</p>
                ))}
              </div>
            )}
            <h4 className="text-lg font-semibold mt-4">Uploaded Reports</h4>
            <div className="grid grid-cols-2 gap-4">
              <img src={report} alt="Report 1" className="rounded-lg" />
              <img src={report} alt="Report 2" className="rounded-lg" />
              <img src={report} alt="Report 3" className="rounded-lg" />
              <img src={report} alt="Report 4" className="rounded-lg" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex lg:flex-row">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-blue-800 text-white p-6 sticky top-0 h-screen flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">User Dashboard</h2>
        <div className="flex items-center mb-6">
          <img src={userDetails.photo} alt="User" className="w-24 h-24 rounded-full mr-4" />
          <div>
            <h3 className="text-xl">{userDetails.name}</h3>
          </div>
        </div>
        <ul className="space-y-4">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-3 rounded-lg ${
                selectedTab === tab.id ? 'bg-blue-600' : 'hover:bg-blue-700'
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gradient-to-r from-blue-100 to-blue-300">
        {renderContent()}
      </div>
    </div>
  );
}

export default UserDashboard;
