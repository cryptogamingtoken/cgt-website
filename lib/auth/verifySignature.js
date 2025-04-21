import { verifyMessage } from 'viem';

export async function verifySignature({ address, signature, message, walletType = 'evm' }) {
  if (walletType === 'evm') {
    return await verifyMessage({ address, message, signature });
  }

  // Future Solana verification goes here
  return false;
}
