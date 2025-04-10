import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLink = (href, label) => (
    <Link href={href} className="hover:text-yellow-400">
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">CryptoGamingToken</div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLink('/', 'Home')}
          {navLink('/leaderboard', 'Leaderboard')}
          {navLink('/tournaments', 'Tournaments')}
          {navLink('/docs', 'Docs')}
          {navLink('/about', 'About')}
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
            Connect Wallet
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          {navLink('/', 'Home')}
          {navLink('/leaderboard', 'Leaderboard')}
          {navLink('/tournaments', 'Tournaments')}
          {navLink('/docs', 'Docs')}
          {navLink('/about', 'About')}
          <button className="w-full text-left bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
}
