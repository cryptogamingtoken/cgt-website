import NavBar from '../components/NavBar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createSessionReactSafe } from '../lib/auth/authSession';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import ClaimButton from '@/components/ClaimButton'



export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      createSessionReactSafe().then(ok => {
        console.log(ok ? '✅ Auto login success' : '❌ Auto login failed');
      });
    }
    console.log("Rendering Home page UI");
  }, [isConnected, address]);
  

  return (
    <>
      <NavBar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to CryptoGamingToken
        </h1>
        <p className="mt-2 text-gray-600">
          Your central hub for crypto-powered gaming tournaments.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">CGT Auth Test</h2>
          <ConnectButton />
        </div>
        <ClaimButton />
        
      </main>
    </>
  );
}
