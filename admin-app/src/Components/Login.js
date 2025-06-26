import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/admin/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard'); // ⬅️ siirrytään etusivulle
    } catch (error) {
      setMessage('Kirjautuminen epäonnistui. Tarkista tunnukset.');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
        color: '#ffffff',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ marginBottom: 40 }}>Cloud Service - Admin</h1>
      <form onSubmit={handleLogin} style={{ width: '90%', maxWidth: 360 }}>
        <input
          type="text"
          placeholder="Käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Kirjaudu sisään</button>
        {message && <p style={{ marginTop: 20 }}>{message}</p>}
      </form>
    </div>
  );
}

const inputStyle = {
  width: '90%',
  padding: '14px 16px',
  marginBottom: 16,
  borderRadius: 8,
  border: '1px solid #333',
  backgroundColor: '#1e1e1e',
  color: '#fff',
  fontSize: 16,
  outline: 'none',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#2979ff',
  border: 'none',
  borderRadius: 8,
  color: '#fff',
  fontWeight: 600,
  fontSize: 16,
  cursor: 'pointer',
};

export default Login;
