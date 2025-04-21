const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Sample leaderboard entries
  await prisma.leaderboard.createMany({
    data: [
      { wallet: '0xWallet1', score: 1200, gameBlock: 1 },
      { wallet: '0xWallet2', score: 950, gameBlock: 1 },
      { wallet: '0xWallet3', score: 1450, gameBlock: 2 },
    ]
  });

  // Sample claims
  await prisma.claim.createMany({
    data: [
      { wallet: '0xWallet1', gameBlock: 1 },
      { wallet: '0xWallet2', gameBlock: 1 },
    ]
  });

  console.log('🌱 Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
