import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Pagination: /api/leaderboard?page=1&limit=10
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const leaderboard = await prisma.leaderboard.findMany({
      orderBy: { score: 'desc' },
      skip,
      take: limit
    });

    const total = await prisma.leaderboard.count();

    res.status(200).json({
      page,
      total,
      data: leaderboard
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
}
