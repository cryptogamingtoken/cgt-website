// pages/api/mock-wallet.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const randomHex = [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
    const address = `0x${randomHex}`;
  
    // Optional: Store in mock DB or session if needed
  
    return res.status(200).json({ address });
  }
  