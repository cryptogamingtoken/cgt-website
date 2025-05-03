// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Parse CLI arguments
const args = process.argv.slice(2);
let rows = 10; // Default number of rows
let gameBlock = 1; // Default gameBlock

args.forEach((arg) => {
  if (arg.startsWith('--rows=')) {
    rows = parseInt(arg.split('=')[1], 10);
  }
  if (arg.startsWith('--gameBlock=')) {
    gameBlock = parseInt(arg.split('=')[1], 10);
  }
});

async function main() {
  console.log(`Seeding ${rows} leaderboard entries with gameBlock ${gameBlock}...`);

  const data = Array.from({ length: rows }).map(() => ({
    wallet: faker.finance.ethereumAddress(),
    score: Math.floor(Math.random() * 10000), // random score between 0-9999
    gameBlock,
  }));
  
  await prisma.leaderboard.createMany({
    data,
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
