import { useEffect } from 'react';
import { getWalletClient, disconnect } from 'wagmi/actions';

const ClearSession = () => {
  useEffect(() => {
    const clearWalletSession = async () => {
      try {
        // Test if a WalletConnect client exists
        const client = await getWalletClient();
        if (client?.transport?.name === 'walletConnect') {
          await disconnect(); // cleanly disconnect WalletConnect session
        }
      } catch (err) {
        console.warn('No WalletConnect client to clear:', err.message);
      }

      // Also clear lingering localStorage entry
      localStorage.removeItem('walletconnect');
    };

    clearWalletSession();
  }, []);

  return null;
};

export default ClearSession;
