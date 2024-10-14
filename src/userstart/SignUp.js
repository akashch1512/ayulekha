import React, { useState } from 'react';

function SignUp() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement logic for user registration
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      console.log('Sign-up successful:', data);
      // Redirect to dashboard or appropriate page
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Sign-up error:', error.message);
      setErrorMessage(error.message);
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
    signUpBtn: {
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
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Create an Account</h2>
        <p style={styles.paragraph}>Join us and manage your medical history easily.</p>

        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

        <form onSubmit={handleSignUp}>
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

          <button type="submit" style={styles.signUpBtn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
