import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to CryptoGamingToken</h1>
        <p className="mt-2 text-gray-600">Your central hub for crypto-powered gaming tournaments.</p>
      </main>
    </>
  );
}
