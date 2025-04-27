// scripts/reset.ts

import { PrismaClient } from '@prisma/client';
import readline from 'readline';

const prisma = new PrismaClient();

function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  const answer = await askQuestion('⚠️  Are you sure you want to RESET the database? This will DELETE all leaderboard and claim entries. (yes/no): ');

  if (answer.toLowerCase() !== 'yes') {
    console.log('❌ Reset aborted.');
    process.exit(0);
  }

  console.log('🔄 Resetting database...');

  await prisma.claim.deleteMany({});
  await prisma.leaderboard.deleteMany({});

  console.log('✅ Database reset complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
