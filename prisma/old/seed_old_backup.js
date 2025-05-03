const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Sample leaderboard entries
  await prisma.leaderboard.createMany({
    data: [
      { wallet: '0xWallet1', score: 1200, gameBlock: 1 },
      { wallet: '0xWallet2', score: 950, gameBlock: 1 },
      { wallet: '0xWallet3', score: 1450, gameBlock: 2 },
    ],
  });

  // ❌ Remove this section!
  // Sample claims (already in database)
  // await prisma.claim.createMany({
  //   data: [
  //     { wallet: '0xWallet1', gameBlock: 1 },
  //     { wallet: '0xWallet2', gameBlock: 1 },
  //   ],
  // });

  // ➡️ NEW: 100 random leaderboard entries
  const fakeEntries = [];

  for (let i = 1; i <= 100; i++) {
    fakeEntries.push({
      wallet: `0xWallet${Math.floor(Math.random() * 1000000)}`,
      score: Math.floor(Math.random() * 10000),
      gameBlock: Math.floor(Math.random() * 5) + 1, // Random gameblock between 1-5
    });
  }

  await prisma.leaderboard.createMany({
    data: fakeEntries,
  });

  console.log('✅ Seed complete! 100+ leaderboard entries and sample claims seeded.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
