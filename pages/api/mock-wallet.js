/* // pages/api/mock-wallet.js
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
*/

// pages/api/mock-wallet.js

// pages/api/mock-wallet.js

// 1) Module‐load check
console.log('[mock-wallet] module loaded');

import prisma from '@/lib/prisma';

// 2) Prisma import check
console.log('[mock-wallet] prisma import OK');

export default async function handler(req, res) {
  // 3) Handler entry
  console.log('[mock-wallet] handler invoked; method=', req.method);

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    console.log('[mock-wallet] about to create leaderboard entry');

    // Your original random‐hex + Prisma code:
    const randomHex = [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
    const address = `0x${randomHex}`;
    const score = Math.floor(Math.random() * 9901) + 100;
    const gameBlock = 123;
    const createdAt = new Date().toISOString();

    const newEntry = await prisma.leaderboard.create({
      data: { wallet: address, score, gameBlock, createdAt },
    });

    console.log('[mock-wallet] prisma create OK:', newEntry);

    return res.status(200).json({
      address: newEntry.wallet,
      score: newEntry.score,
      gameBlock: newEntry.gameBlock,
      createdAt: newEntry.createdAt,
    });
  } catch (err) {
    console.error('[mock-wallet] ERROR in handler:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
