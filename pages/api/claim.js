import { verifyJWT } from '@/lib/auth/authSession';
import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  let user;
  try {
    user = await verifyJWT(token);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid session' });
  }

  const { address } = user;

  const existing = await prisma.claim.findFirst({ where: { address } });
  if (existing) {
    return res.status(403).json({ error: 'Already claimed' });
  }

  await prisma.claim.create({ data: { address } });

  return res.status(200).json({ success: true, txHash: '0xMOCKHASH' });
}
