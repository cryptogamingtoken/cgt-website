// pages/tournaments.js

import { useEffect, useState } from 'react';
import MockCryptoQuiz from '../components/MockCryptoQuiz';

export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState([]);
  const [joined, setJoined] = useState({});

  useEffect(() => {
    fetch('/api/tournaments')
      .then((res) => res.json())
      .then((data) => setTournaments(data));
  }, []);

  const handleJoin = async (tournamentId) => {
    const wallet = '0xABC123'; // Mock wallet
    const res = await fetch('/api/tournaments/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet, tournamentId }),
    });

    if (res.ok) {
      setJoined((prev) => ({ ...prev, [tournamentId]: true }));
    } else {
      alert('Failed to join tournament.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Active Tournaments</h1>
      {tournaments.map((t) => (
        <div
          key={t.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '1.5rem',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <h2>{t.title}</h2>
          <p>{t.description}</p>
          <p>
            <strong>Start:</strong> {new Date(t.startTime).toLocaleString()}<br />
            <strong>End:</strong> {new Date(t.endTime).toLocaleString()}
          </p>

          {joined[t.id] === true ? (
            <MockCryptoQuiz
              tournamentId={t.id}
              wallet="0xABC123"
              onComplete={(score) =>
                alert(`You scored ${score} and it has been submitted!`)
              }
            />
          ) : (
            <button onClick={() => handleJoin(t.id)}>Join Tournament</button>
          )}
        </div>
      ))}
    </div>
  );
}
