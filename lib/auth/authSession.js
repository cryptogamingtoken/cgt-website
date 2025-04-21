import { SignJWT, jwtVerify } from 'jose'
import { useAccount } from 'wagmi'; // if not already present

// ⬇️ This defines the function you're trying to export
function createSessionReactSafe() {
  const { address } = useAccount();
  if (!address) {
    console.warn('No wallet address found');
    return false;
  }
  return true;
}

import { signMessage } from 'wagmi/actions'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function createJWT(address, walletType = 'evm') {
  return await new SignJWT({ address, walletType })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30m')
    .sign(secret)
}

export async function verifyJWT(token) {
  const { payload } = await jwtVerify(token, secret)
  return payload
}
export { createSessionReactSafe };

