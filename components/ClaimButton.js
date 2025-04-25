import { useState } from 'react'
import { toast } from 'react-hot-toast';

export default function ClaimButton() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleClaim = async () => {
    const wallet = '0xWallet1'; // Replace with one that exists in your seed.js
    const gameBlock = 1;        // Also matches your seed
  
    try {
      const res = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, gameBlock }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        toast.success('🎉 Claim successful!');
        setStatus(`✅ Claimed! Claim ID: ${data.claim.id}`);
      } else {
        toast.error(data.error || '❌ Something went wrong.');
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      toast.error('🔥 Claim failed unexpectedly');
      console.error(err);
      setStatus('❌ Something went wrong.');
    }
  
    setLoading(false);
  };
  

  return (
    <div className="mt-6">
<button
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  onClick={() => handleClaim(1)} // <-- Important!
  disabled={loading}
>
  {loading ? 'Claiming...' : 'Claim Reward'}
</button>


      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  )
}
