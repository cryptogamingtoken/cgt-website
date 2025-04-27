import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function fetchLeaderboard() {
      const offset = page * limit;
      const res = await fetch(`/api/leaderboard?limit=${limit}&offset=${offset}`);
      const data = await res.json();
      const totalCount = res.headers.get('X-Total-Count');
      setEntries(data);
      setTotal(Number(totalCount));
    }
    fetchLeaderboard();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>

      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-md">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-3 px-4 border-b border-gray-600 text-left">Rank</th>
              <th className="py-3 px-4 border-b border-gray-600 text-left">Wallet</th>
              <th className="py-3 px-4 border-b border-gray-600 text-left">Score</th>
              <th className="py-3 px-4 border-b border-gray-600 text-left">Game Block</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-800">
                <td className="py-2 px-4 border-b border-gray-700">{page * limit + index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-700">{entry.wallet}</td>
                <td className="py-2 px-4 border-b border-gray-700">{entry.score}</td>
                <td className="py-2 px-4 border-b border-gray-700">{entry.gameBlock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-50 rounded"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {page + 1} of {totalPages}
        </span>
        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-50 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
