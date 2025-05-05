// pages/api/mock-wallet.js

import prisma from '@/lib/prisma';

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {

    // Generate mock data
    const randomHex = [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
    const address   = `0x${randomHex}`;
    const score     = Math.floor(Math.random() * 9901) + 100;
    const gameBlock = 123;
    const createdAt = new Date().toISOString();

    // Attempt DB insert
    const newEntry = await prisma.leaderboard.create({
      data: { wallet: address, score, gameBlock, createdAt },
    });

    return res.status(200).json({
      address:   newEntry.wallet,
      score:     newEntry.score,
      gameBlock: newEntry.gameBlock,
      createdAt: newEntry.createdAt,
    });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
