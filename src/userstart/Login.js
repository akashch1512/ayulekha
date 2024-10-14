import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Implement logic to handle login with API call or authentication
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      // Handle successful login (e.g., store user data, redirect)
      console.log('Login successful:', data);
      // Redirect to dashboard or appropriate page
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage(error.message);
    }
  };

  const handleForgotPassword = () => {
    // Implement logic to handle password reset (e.g., redirect)
    console.log('Redirecting to password reset page');
  };

  const styles = {
    container: {
      backgroundColor: '#e3f2fd',
      height: '100vh',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      textAlign: 'center',
      color: '#0277bd',
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    paragraph: {
      textAlign: 'center',
      color: '#555',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#0277bd',
    },
    input: {
      width: '93%',
      padding: '12px',
      border: '1px solid #b0bec5',
      borderRadius: '5px',
      fontSize: '1rem',
      
    },
    loginBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#0277bd',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '10px',
    },
    options: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#0277bd',
      cursor: 'pointer',
    },
    fingerprintIcon: {
      marginRight: '5px',
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container} text-center >
      <div style={styles.box}>
        <h2 style={styles.heading}>Welcome to AyuLekha</h2>
        <p style={styles.paragraph}>Medical History Management Tool</p>

        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email/Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.loginBtn}>Login</button>
        </form>

        <div style={styles.options}>
          <p onClick={handleForgotPassword}>Forgot Password?</p>
          <p>
            <FontAwesomeIcon icon={faFingerprint} style={styles.fingerprintIcon} /> Biometric Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;