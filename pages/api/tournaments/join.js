// pages/api/tournaments/join.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { wallet, tournamentId } = req.body;
  
      if (!wallet || !tournamentId) {
        return res.status(400).json({ message: 'Missing wallet or tournamentId' });
      }
  
      // Simulate successful join (you could also save this to memory or mock DB)
      console.log(`Wallet ${wallet} joined tournament ${tournamentId}`);
  
      return res.status(200).json({
        message: 'Successfully joined tournament',
        joinedAt: new Date().toISOString(),
        wallet,
        tournamentId,
      });
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  