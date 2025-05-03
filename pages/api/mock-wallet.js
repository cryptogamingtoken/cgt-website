// pages/api/mock-wallet.js
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Generate random 40-character hex for wallet
  const randomHex = [...Array(40)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
  const address = `0x${randomHex}`;

  // Generate score like seeder: 100–10000
  const score = Math.floor(Math.random() * 9901) + 100;

  // Use fixed Game Block for now
  const gameBlock = 123;

  // Timestamp
  const createdAt = new Date().toISOString();

  try {
    // Insert into leaderboard table
    const newEntry = await prisma.leaderboard.create({
      data: {
        wallet: address,
        score,
        gameBlock,
        createdAt,
      },
    });

    return res.status(200).json({
      address: newEntry.wallet,
      score: newEntry.score,
      gameBlock: newEntry.gameBlock,
      createdAt: newEntry.createdAt,
    });
  } catch (err) {
    console.error('Failed to insert mock wallet into leaderboard:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
