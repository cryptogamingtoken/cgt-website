import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">CryptoGamingToken</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/leaderboard" className="hover:text-yellow-400">Leaderboard</a>
          <a href="/tournaments" className="hover:text-yellow-400">Tournaments</a>
          <a href="/docs" className="hover:text-yellow-400">Docs</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="/" className="block hover:text-yellow-400">Home</a>
          <a href="/leaderboard" className="block hover:text-yellow-400">Leaderboard</a>
          <a href="/tournaments" className="block hover:text-yellow-400">Tournaments</a>
          <a href="/docs" className="block hover:text-yellow-400">Docs</a>
          <a href="/about" className="block hover:text-yellow-400">About</a>
          <button className="w-full text-left bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}
