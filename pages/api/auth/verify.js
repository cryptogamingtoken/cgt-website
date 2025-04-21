import { verifyMessage } from 'viem';
import { serialize } from 'cookie';
import { getSignatureMessage } from '@/lib/getSignatureMessage';
import { createJWT } from '@/lib/authSession';

export default async function handler(req, res) {
  const { address, message, signature } = req.body;

  const expectedMessage = getSignatureMessage(address);
  const valid = await verifyMessage({ address, message, signature });

  if (!valid || message !== expectedMessage) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // ✅ create JWT using your existing function
  const jwt = await createJWT(address, 'evm');

  const cookie = serialize('session', jwt, {
    httpOnly: true,
    sameSite: 'Lax',
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  res.setHeader('Set-Cookie', cookie);
  res.status(200).json({ success: true });
}
