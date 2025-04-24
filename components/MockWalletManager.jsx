import { useState, useEffect } from 'react';

export default function MockWalletManager() {
  const [wallets, setWallets] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load wallets from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('mockWallets') || '[]');
    setWallets(stored);
  }, []);

  const saveWallets = (walletList) => {
    localStorage.setItem('mockWallets', JSON.stringify(walletList));
    setWallets(walletList);
  };

  const generateWallet = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/mock-wallet', {
        method: 'POST',
      });
      const data = await res.json();

      if (!data.address) {
        throw new Error('Invalid response');
      }

      // Check if already exists
      const exists = wallets.some(w => w.address === data.address);
      if (!exists) {
        const newWallet = {
          address: data.address,
          createdAt: new Date().toISOString()
        };
        const updated = [...wallets, newWallet];
        saveWallets(updated);
        console.log('Wallet added:', newWallet);
      } else {
        console.log('Wallet already exists:', data.address);
      }
    } catch (err) {
      console.error('Error generating wallet:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteWallet = (address) => {
    const updated = wallets.filter(w => w.address !== address);
    if (selectedWallet === address) {
      setSelectedWallet(null);
    }
    saveWallets(updated);
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-6 border rounded shadow">
      <h2 className="text-lg font-medium mb-4 text-center text-gray-700">
  Generate mock wallets, select one to log in and test claims.
</h2>

{selectedWallet && (
  <div className="mb-2 text-center text-sm text-green-700">
    Currently selected: <span className="font-mono">{selectedWallet}</span>
  </div>
)}
<div className="mt-4 text-center">
  <button
    onClick={async () => {
      try {
        const res = await fetch('/api/claim', {
          method: 'POST',
          credentials: 'include',
        });
        const data = await res.json();

        if (res.ok) {
          alert(`Claim successful!\nTxHash: ${data.txHash}`);
        } else {
          alert(`Claim failed: ${data.error}`);
        }
      } catch (err) {
        console.error(err);
        alert('Claim error.');
      }
    }}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  >
    Claim Tokens
  </button>
</div>
<br></br>

      <div className="flex justify-center mb-4">
        <button
          onClick={generateWallet}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate New Wallet'}
        </button>
      </div>

      {wallets.length === 0 ? (
        <p className="text-center text-gray-500">No wallets found.</p>
      ) : (
        <div className="space-y-2">
          {wallets.map((wallet) => (
            <div
              key={wallet.address}
              className={`flex justify-between items-center border px-3 py-2 rounded ${
                selectedWallet === wallet.address ? 'bg-yellow-100 border-yellow-400' : 'bg-white'
              }`}
            >
              <div>
                <div className="font-mono text-sm">{wallet.address}</div>
                <div className="text-xs text-gray-500">
                  Created: {new Date(wallet.createdAt).toUTCString()}
                </div>
              </div>
              <div className="space-x-2">
                <button
                 onClick={async () => {
                    setSelectedWallet(wallet.address);
                    try {
                        const res = await fetch('/api/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ address: wallet.address }),
                            credentials: 'include', // <-- Required to store cookie in browser
                          });
                          
                      const data = await res.json();
                      console.log('Login response:', data);
                    } catch (err) {
                      console.error('Login failed:', err);
                    }
                  }}
                  
                  className="text-green-700 hover:underline text-sm"
                >
                  Select
                </button>
                <button
                  onClick={() => deleteWallet(wallet.address)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedWallet && (
        <div className="mt-4 text-center text-sm text-green-700">
          Selected Wallet: <span className="font-mono">{selectedWallet}</span>
        </div>
      )}
    </div>
    
  );
}

