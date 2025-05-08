import prisma from '@/lib/prisma'; // Ensure this path is correct for your project

export default async function handler(req, res) {
  // ✅ Handle POST (submitting quiz scores)
  if (req.method === 'POST') {
    const { wallet, gameBlock, score } = req.body;

    if (!wallet || !gameBlock || typeof score !== 'number') {
      return res.status(400).json({ message: 'Missing or invalid data' });
    }

    try {
      const newEntry = await prisma.leaderboard.create({
        data: {
          wallet,
          gameBlock,
          score,
        },
      });

      return res.status(200).json({ message: 'Score submitted', entry: newEntry });
    } catch (error) {
      console.error('Error saving score:', error);
      return res.status(500).json({ message: 'Failed to save score' });
    }
  }

  // ✅ Handle GET (fetching leaderboard entries)
  if (req.method === 'GET') {
    const { limit = 10, offset = 0, gameBlock } = req.query;
    const where = gameBlock ? { gameBlock: Number(gameBlock) } : {};

    try {
      const [leaderboardEntries, totalCount] = await Promise.all([
        prisma.leaderboard.findMany({
          where,
          orderBy: { score: 'desc' },
          skip: Number(offset),
          take: Number(limit),
        }),
        prisma.leaderboard.count({ where }),
      ]);

      res.setHeader('X-Total-Count', totalCount);
      return res.status(200).json(leaderboardEntries);
    } catch (error) {
      console.error('Leaderboard fetch error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // ❌ Method not allowed
  return res.status(405).json({ message: 'Method Not Allowed' });
}
