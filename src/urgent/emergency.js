// EmergencyInfo.js
import React from 'react';

function EmergencyInfo() {
  // Simulating patient data (replace with actual data fetched from biometric scan in future)
  const patientData = {
    name: "Akash Chaudhari",
    age: 21,
    bloodGroup: "A+",
    allergies: "Penicillin, Pollen",
    pastOperations: "Appendectomy - 2020, Hernia Repair",
    medications: "Ibuprofen, Acetaminophen (Tylenol)",
    medicalConditions: "Asthma",
    vaccinations: "COVID-19, Influenza",
    emergencyContacts: [
      { relation: "Mom", number: "800741133" },
      { relation: "Dad", number: "7350641133" },
    ],
  };

  const ambulanceNumber = "108"; // Emergency ambulance contact

  // Open Google Maps to search for nearby hospitals
  const openMaps = () => {
    const query = "hospitals near me";
    window.open(`https://www.google.com/maps/search/${query}`, "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-red-50 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-500 text-center mb-4">
          Patient Emergency Information
        </h1>

        <div className="mb-4">
          <p className="text-lg">
            <strong>Name:</strong> {patientData.name}
          </p>
          <p className="text-lg">
            <strong>Age:</strong> {patientData.age}
          </p>
          <p className="text-lg">
            <strong>Blood Group:</strong> {patientData.bloodGroup}
          </p>
          <p className="text-lg">
            <strong>Allergies:</strong> {patientData.allergies}
          </p>
          <p className="text-lg">
            <strong>Past Operations:</strong> {patientData.pastOperations}
          </p>
          <p className="text-lg">
            <strong>Medications:</strong> {patientData.medications}
          </p>
          <p className="text-lg">
            <strong>Medical Conditions:</strong> {patientData.medicalConditions}
          </p>
          <p className="text-lg">
            <strong>Vaccinations:</strong> {patientData.vaccinations}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">Emergency Contacts:</p>
          {patientData.emergencyContacts.map((contact, index) => (
            <p key={index} className="text-lg">
              <strong>{contact.relation}:</strong> {contact.number}
            </p>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-lg font-bold text-gray-700">
            Ambulance Number: <span className="text-red-600">{ambulanceNumber}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={openMaps}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Find Nearest Hospital
          </button>
          {/* <button
            onClick={() => alert('Fingerprint Authentication In Progress')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Scan Fingerprint
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default EmergencyInfo;
