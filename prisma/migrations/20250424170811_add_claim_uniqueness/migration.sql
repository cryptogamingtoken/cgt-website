/*
  Warnings:

  - A unique constraint covering the columns `[wallet,gameBlock]` on the table `Claim` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Claim_wallet_gameBlock_key" ON "Claim"("wallet", "gameBlock");
