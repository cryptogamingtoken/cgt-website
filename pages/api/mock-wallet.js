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

    // 4) Success log
    console.log('[mock-wallet] prisma create OK:', newEntry);

    return res.status(200).json({
      address:   newEntry.wallet,
      score:     newEntry.score,
      gameBlock: newEntry.gameBlock,
      createdAt: newEntry.createdAt,
    });
  } catch (err) {
    // 5) Error log
    console.error('[mock-wallet] ERROR in handler:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
