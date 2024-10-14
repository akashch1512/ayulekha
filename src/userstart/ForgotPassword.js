import React, { useState } from 'react';

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Implement logic to handle password reset request
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setMessage(data.message || 'Password reset link sent!');
    } catch (error) {
      console.error('Error sending password reset link:', error.message);
      setMessage(error.message);
    }
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
    resetBtn: {
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
    message: {
      color: '#555',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Forgot Password?</h2>
        <form onSubmit={handleResetPassword}>
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
          <button type="submit" style={styles.resetBtn}>Reset Password</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
