import { useState } from 'react'

export default function ClaimButton() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleClaim = async () => {
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/claim', {
        method: 'POST',
        credentials: 'include',
      })

      const data = await res.json()

      if (res.ok) {
        setStatus(`✅ Claimed! TxHash: ${data.txHash}`)
      } else {
        setStatus(`❌ Error: ${data.error}`)
      }
    } catch (err) {
      console.error('Claim failed:', err)
      setStatus('❌ Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <div className="mt-6">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleClaim}
        disabled={loading}
      >
        {loading ? 'Claiming...' : 'Claim Reward'}
      </button>

      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  )
}
