export function getSignatureMessage(address, walletType = 'evm') {
    return `Sign this message to verify wallet ownership (${walletType}): ${address}`;
  }
  