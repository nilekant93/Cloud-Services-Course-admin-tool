import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/admin/login', {
        username,
        password,
      });

      const token = response.data.token;
      setMessage('Kirjautuminen onnistui!');
      localStorage.setItem('token', token);
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
      <h1 style={{ marginBottom: 40, fontWeight: 600, fontSize: '2rem' }}>Cloud Service-kurssin "admin" työkalu</h1>
      <form onSubmit={handleLogin} style={{ width: '90%', maxWidth: 360 }}>
        <input
          type="text"
          placeholder="Käyttäjänimi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: '90%',
            padding: '14px 16px',
            marginBottom: 16,
            borderRadius: 8,
            border: '1px solid #333',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            fontSize: 16,
            outline: 'none',
          }}
        />
        <input
          type="password"
          placeholder="Salasana"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '90%',
            padding: '14px 16px',
            marginBottom: 24,
            borderRadius: 8,
            border: '1px solid #333',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            fontSize: 16,
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#2979ff',
            border: 'none',
            borderRadius: 8,
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#1565c0')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#2979ff')}
        >
          Kirjaudu sisään
        </button>
        {message && (
          <p style={{ marginTop: 20, textAlign: 'center', fontWeight: 500, color: '#f44336' }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
