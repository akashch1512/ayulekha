import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../images/Ayulekha.png'; // Replace with the path to your logo image

function Welcome() {
  const navigate = useNavigate(); // Create a navigate function

  const handleLogin = () => {
    navigate('/login'); // Use navigate to go to the login page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Use navigate to go to the sign-up page
  };

  const handleHelp = () => {
    console.log('Need help? Redirecting to help page.');
  };

  const styles = {
    container: {
      backgroundColor: '#e3f2fd', // Remove the background image
      height: '100vh',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingTop: '80px', // Shift the content downward
    },
    logo: {
      width: '250px', // Adjust the size of the logo as needed
      marginBottom: '20px', // Add some space below the logo
    },
    heading: {
      textAlign: 'center',
      color: '#0277bd',
      fontSize: '2rem',
      marginBottom: '20px',
    },
    button: {
      margin: '10px',
      padding: '12px 20px',
      backgroundColor: '#0277bd',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    helpText: {
      marginTop: '20px',
      color: '#555',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      {/* Add your logo above the text */}
      <img src={logo} alt="AyuLekha Logo" style={styles.logo} />

      <h2 style={styles.heading}>Welcome to AyuLekha</h2>
      <button style={styles.button} onClick={handleLogin}>Log In</button>
      <button style={styles.button} onClick={handleSignUp}>Sign Up</button>
      <p style={styles.helpText} onClick={handleHelp}>Need help?</p>
    </div>
  );
}

export default Welcome;
