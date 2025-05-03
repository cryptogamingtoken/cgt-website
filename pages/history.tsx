import { useState, useEffect } from 'react'
import axios from 'axios'
type HistoryEntry = {
  id: string;
  wallet: string;
  gameBlock: number;
  score: number;
  claimed: boolean;
  createdAt: string;
};

type HistoryApiResponse = {
  data: HistoryEntry[];
  total: number;
  limit: number;
  offset: number;
};

export default function HistoryPage() {
  const [wallet, setWallet] = useState('')
  const [gameBlock, setGameBlock] = useState('')
  const [data, setData] = useState<HistoryEntry[]>([])
  const [total, setTotal] = useState(0)
  const [minScore, setMinScore] = useState('');
  const [maxScore, setMaxScore] = useState('');
  const [limit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [claimed, setClaimed] = useState('');


  const fetchHistory = async () => {
    setLoading(true)
    try {
      const params: Record<string, any> = { limit, offset }
      if (wallet) params.wallet = wallet
      if (gameBlock) params.gameBlock = gameBlock
      if (minScore) params.minScore = minScore;
      if (maxScore) params.maxScore = maxScore;
      if (claimed) params.claimed = claimed;
      const res = await axios.get<HistoryApiResponse>('/api/history', { params })
      setData(res.data.data)
      setTotal(res.data.total)
    } catch (err) {
      console.error('Failed to fetch history', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHistory()
  }, [offset])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setOffset(0) // Reset to first page on new search
    fetchHistory()
  }

  const pageCount = Math.ceil(total / limit)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">History Explorer</h1>

      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Game Block"
          value={gameBlock}
          onChange={(e) => setGameBlock(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
         type="number"
        placeholder="Min Score"
        className="border p-2 rounded w-full md:w-1/3"
        value={minScore}
         onChange={(e) => setMinScore(e.target.value)}
          />
        <input
        type="number"
        placeholder="Max Score"
        className="border p-2 rounded w-full md:w-1/3"
        value={maxScore}
        onChange={(e) => setMaxScore(e.target.value)}
        />
        <select
       className="border p-2 rounded w-full md:w-1/5"
        value={claimed}
        onChange={(e) => setClaimed(e.target.value)}
    >
  <option value="">All Entries</option>
  <option value="true">Claimed</option>
  <option value="false">Unclaimed</option>
</select>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr>
                <th className="border p-2">Wallet</th>
                <th className="border p-2">Game Block</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry: any, idx) => (
                <tr key={idx}>
                  <td className="border p-2">{entry.wallet}</td>
                  <td className="border p-2">{entry.gameBlock}</td>
                  <td className="border p-2">{entry.score}</td>
                  <td className="border p-2">{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center">
            <button
              disabled={offset === 0}
              onClick={() => setOffset(Math.max(offset - limit, 0))}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {offset / limit + 1} of {pageCount || 1}
            </span>
            <button
              disabled={offset + limit >= total}
              onClick={() => setOffset(offset + limit)}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
