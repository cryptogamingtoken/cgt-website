import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { wallet, gameBlock, minScore, maxScore, claimed, limit = '10', offset = '0' } = req.query;
const where: Record<string, any> = {};

  
  if (typeof wallet === 'string' && wallet.trim() !== '') {
    where.wallet = wallet.trim().toLowerCase()
  }
  if (gameBlock) {
    where.gameBlock = Number(gameBlock)
  }
  if (minScore) where.score = { ...(where.score || {}), gte: Number(minScore) };
  if (maxScore) where.score = { ...(where.score || {}), lte: Number(maxScore) };
  if (claimed === 'true') {
  where.claims = {
    some: {},
  };
  } else if (claimed === 'false') {
  where.claims = {
    none: {},
  };
}

  try {
    const [historyEntries, total] = await prisma.$transaction([
      prisma.leaderboard.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: Number(limit),
        skip: Number(offset),
      }),
      prisma.leaderboard.count({ where }),
    ])

    res.status(200).json({
      data: historyEntries,
      total,
      limit: Number(limit),
      offset: Number(offset),
    })
  } catch (err: any) {
    console.error('❌ History API Error:', err);
    res.status(500).json({
      message: 'Internal Server Error',
      error: err?.message || 'Unknown error',
    });
  }
  
}
