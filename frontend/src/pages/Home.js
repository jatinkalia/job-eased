import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Job-Eased</h1>
      <p>Find your dream job or the perfect candidate for your company!</p>
      <a href="http://localhost:5000/auth/linkedin" style={styles.button}>
        Login with LinkedIn
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default Home;