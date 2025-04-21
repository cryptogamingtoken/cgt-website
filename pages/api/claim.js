import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { address } = req.body
  if (!address) return res.status(400).json({ error: 'No address provided' })

  try {
    const existing = await prisma.claim.findFirst({ where: { address } })
    if (existing) {
      return res.status(403).json({ error: 'Already claimed' })
    }

    await prisma.claim.create({ data: { address } })

    return res.status(200).json({ success: true, txHash: '0xMOCKHASH' })
  } catch (err) {
    console.error('Claim API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
