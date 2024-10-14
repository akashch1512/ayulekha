import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Welcome from './userstart/Welcome'; // Importing the Welcome component
import Login from './userstart/Login'; // Importing the Login component
import SignUp from './userstart/SignUp'; // Importing the SignUp component
import ForgotPassword from './userstart/ForgotPassword'; // Importing the ForgotPassword component

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
