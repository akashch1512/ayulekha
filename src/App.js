import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router, Route, Routes
import Welcome from './userstart/Welcome'; // Importing the Welcome component
import Login from './userstart/Login'; // Importing the Login component
import SignUp from './userstart/SignUp'; // Importing the SignUp component
import ForgotPassword from './userstart/ForgotPassword'; // Importing the ForgotPassword component
import UserDashboard from './dashboard/user_dashboard'; // Importing the UserDashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user_dashboard" element={<UserDashboard />} /> {/* User Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
