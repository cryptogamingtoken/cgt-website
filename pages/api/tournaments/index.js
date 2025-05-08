// pages/api/tournaments/index.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      const mockTournaments = [
        {
          id: 'tourn1',
          title: 'Crypto Market Showdown',
          description: 'Compete by predicting market moves!',
          startTime: '2025-05-08T00:00:00Z',
          endTime: '2025-05-10T00:00:00Z',
        },
        {
          id: 'tourn2',
          title: 'Altcoin Trivia Blitz',
          description: 'Test your knowledge of altcoins.',
          startTime: '2025-05-11T00:00:00Z',
          endTime: '2025-05-13T00:00:00Z',
        },
      ];
  
      res.status(200).json(mockTournaments);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  