import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from './Datatable';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Jos tokenia ei ole, ohjataan takaisin login-sivulle
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        padding: 40,
        fontFamily: 'Inter, sans-serif',
        
      }}
    >
      <h1>Tervetuloa Cloud service kurssin Admin sivulle!</h1>
      <p>Taulukossa näkyvät kaikki rekisteröityneet opiskelijat (käyttäjätunnus) ja läpäistyt viikot. Tällä työkalulla on myös mahdollista poistaa opiskelijan tunnukset tietokannasta. (Lienee suositeltavaa, kunnes tehtävät läpäisty) </p>

        <DataTable />

      <button
        onClick={handleLogout}
        style={{
          marginTop: 40,
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: 16,
        }}
      >
        Kirjaudu ulos
      </button>
    </div>
  );
}

export default Dashboard;
