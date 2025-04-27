import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

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
    res.status(200).json(leaderboardEntries);
  } catch (error) {
    console.error('Leaderboard fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
