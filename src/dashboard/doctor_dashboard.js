import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {
  const navigate = useNavigate();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleLogout = () => {
    // Implement logout logic (e.g., clear user data, redirect to login)
    console.log('Logging out...');
    navigate('/login');
  };

  // Sample data for appointments and records (replace with actual data from API/database)
  const appointments = [
    { id: 1, patientName: 'John Doe', time: '10:30 AM', date: '2024-10-15', medicalRecord: 'Blood pressure issues, diabetes.' },
    { id: 2, patientName: 'Jane Smith', time: '12:00 PM', date: '2024-10-15', medicalRecord: 'Allergy to penicillin, asthma.' },
    // Add more appointments
  ];

  const analytics = {
    today: 3,
    week: 15,
    month: 45,
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-blue-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-blue-800 text-white p-6 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-6">Doctor Dashboard</h2>
        <ul className="space-y-4">
          <li>View Appointments</li>
          <li>Patient History</li>
          <li>Analytics</li>
          <li>Medical Records</li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl text-blue-700 mb-4">Welcome to Doctor Dashboard</h2>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-blue-600 text-xl">Today's Appointments</h3>
            <p className="text-gray-600 text-2xl">{analytics.today}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-blue-600 text-xl">This Week</h3>
            <p className="text-gray-600 text-2xl">{analytics.week}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-blue-600 text-xl">This Month</h3>
            <p className="text-gray-600 text-2xl">{analytics.month}</p>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl text-blue-700 mb-4">Appointments</h3>
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer"
                onClick={() => setSelectedAppointment(appointment)}
              >
                <div className="flex-1 mb-2 sm:mb-0">
                  <p className="font-semibold">{appointment.patientName}</p>
                  <p className="text-gray-600">{appointment.time} on {appointment.date}</p>
                </div>
                <p className="text-blue-500 sm:ml-4">View Details</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Medical Record Section */}
        {selectedAppointment && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-700 mb-4">Medical Records for {selectedAppointment.patientName}</h3>
            <p className="text-gray-600">{selectedAppointment.medicalRecord}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;
