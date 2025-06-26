import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataTable() {
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [filterUsername, setFilterUsername] = useState('');
  const [filterClassCode, setFilterClassCode] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3001/admin/users');
    setUsers(response.data);
  };

  const handleDelete = async () => {
    if (!userToDelete) return;
    await axios.delete(`http://localhost:3001/admin/users/${userToDelete.id}`);
    setUserToDelete(null);
    fetchUsers();
  };

  // Suodatettu lista käyttäjänimen ja luokkatunnuksen mukaan
  const filteredUsers = users.filter(user => {
    const usernameMatch = user.username.toLowerCase().includes(filterUsername.toLowerCase());
    const classCodeMatch = user.class_code.toLowerCase().includes(filterClassCode.toLowerCase());
    return usernameMatch && classCodeMatch;
  });

  return (
    <div
      style={{
        overflowY: 'scroll',
        maxHeight: '70vh',
        margin: 'auto',
        padding: 20,
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        width: '90%',
        maxWidth: 800,
        fontFamily: 'Inter, sans-serif',
        color: '#fff',
      }}
    >
      <h2 style={{ marginBottom: 16 }}>Opiskelijat, ja tehdyt tehtävät</h2>

      <div style={{ marginBottom: 20, display: 'flex', gap: 12 }}>
        <input
          type="text"
          placeholder="Suodata käyttäjänimellä..."
          value={filterUsername}
          onChange={e => setFilterUsername(e.target.value)}
          style={filterInputStyle}
        />
        <input
          type="text"
          placeholder="Suodata luokkatunnuksella..."
          value={filterClassCode}
          onChange={e => setFilterClassCode(e.target.value)}
          style={filterInputStyle}
        />
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#2c2c2c' }}>
            <th style={thStyle}>Opiskelija</th>
            <th style={thStyle}>Luokkatunnus</th>
            <th style={thStyle}>Week1</th>
            <th style={thStyle}>Week2</th>
            <th style={thStyle}>Week3</th>
            <th style={thStyle}>Week4</th>
            <th style={thStyle}>Week5</th>
            <th style={thStyle}>Toiminnot</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #333' }}>
              <td style={tdStyle}>{user.username}</td>
              <td style={tdStyle}>{user.class_code}</td>
              <td style={tdStyle}>{user.week1done ? '✅' : '❌'}</td>
              <td style={tdStyle}>{user.week2done ? '✅' : '❌'}</td>
              <td style={tdStyle}>{user.week3done ? '✅' : '❌'}</td>
              <td style={tdStyle}>{user.week4done ? '✅' : '❌'}</td>
              <td style={tdStyle}>{user.week5done ? '✅' : '❌'}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => setUserToDelete(user)}
                  style={deleteButtonStyle}
                >
                  Poista
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {userToDelete && (
        <div style={modalOverlay}>
          <div style={modalStyle}>
            <p>
              Haluatko varmasti poistaa käyttäjän{' '}
              <strong>{userToDelete.username}</strong>?
            </p>
            <div style={{ marginTop: 20 }}>
              <button onClick={handleDelete} style={confirmButtonStyle}>
                Kyllä, poista
              </button>
              <button onClick={() => setUserToDelete(null)} style={cancelButtonStyle}>
                Peruuta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const filterInputStyle = {
  flex: 1,
  padding: '8px 12px',
  borderRadius: 6,
  border: '1px solid #444',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: 16,
};

const thStyle = {
  padding: 12,
  textAlign: 'left',
  borderBottom: '2px solid #444',
};

const tdStyle = {
  padding: 12,
};

const deleteButtonStyle = {
  backgroundColor: '#e53935',
  color: '#fff',
  border: 'none',
  padding: '6px 10px',
  borderRadius: 6,
  cursor: 'pointer',
};

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#2c2c2c',
  padding: 30,
  borderRadius: 10,
  color: '#fff',
  textAlign: 'center',
  maxWidth: 400,
  width: '80%',
};

const confirmButtonStyle = {
  backgroundColor: '#d32f2f',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  marginRight: 10,
};

const cancelButtonStyle = {
  backgroundColor: '#555',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};

export default DataTable;
