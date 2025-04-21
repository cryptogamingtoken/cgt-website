import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch('/api/leaderboard?page=1&limit=10');
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🏆 Leaderboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">#</th>
              <th className="p-2">Wallet</th>
              <th className="p-2">Score</th>
              <th className="p-2">Game Block</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => (
              <tr key={entry.id} className="border-t border-gray-300">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{entry.wallet}</td>
                <td className="p-2">{entry.score}</td>
                <td className="p-2">{entry.gameBlock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
