import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { wallet, gameBlock } = req.body;

  if (!wallet || typeof gameBlock !== 'number') {
    return res.status(400).json({ error: 'Missing wallet or gameBlock' });
  }

  console.log('🔍 Looking for leaderboard entry with:');
  console.log('Wallet:', wallet);
  console.log('GameBlock:', gameBlock);

  const leaderboardEntry = await prisma.leaderboard.findFirst({
    where: { wallet, gameBlock },
  });

  console.log('📋 Leaderboard entry found:', leaderboardEntry);

  if (!leaderboardEntry) {
    return res.status(400).json({ error: 'Not on leaderboard for this game block' });
  }

  try {
    const claim = await prisma.claim.create({
      data: {
        wallet,
        gameBlock,
        leaderboardId: leaderboardEntry.id,
      },
    });

    return res.status(200).json({ success: true, claim });
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Already claimed for this game block' });
    }

    console.error('❌ Claim error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
