import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub,
  FaNpm,
  FaTwitter,
  FaTelegram,
  FaEnvelope,
  FaDiscord,
  FaReddit,
  FaMedium
} from 'react-icons/fa';

export const Footer = () => {
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/defi-fundamentals', name: 'DeFi Fundamentals' },
    { path: '/developers', name: 'Developers' },
    { path: '/rpc-endpoints', name: 'RPC Endpoints' },
    { path: '/security-guide', name: 'Security Guide' },
    { path: '/traders-guide', name: 'Traders Guide' },
    { path: '/wallet-guide', name: 'Wallet Guide' },
    { path: '/about', name: 'About' },
    { path: '/token', name: 'Token' },
    { path: '/technology', name: 'Technology' },
    { path: '/community', name: 'Community' },
    { path: '/blog', name: 'Blog' },
  ];

  return (
    <footer className="bg-[#0A0B0E] text-white py-8">
    <h3 className="text-lg font-semibold mb-4 text-[#35b7ff]">Connect</h3>
    <div className="grid grid-cols-2 gap-4">
      <a href="https://github.com/organizations/Paxeer-Network" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center">
        <FaGithub className="mr-2" /> GitHub
      </a>
      <a href="https://www.npmjs.com/package/@paxeer-foundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center">
        <FaNpm className="mr-2" /> NPM
      </a>
      <a href="https://x.com/@paxeer_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center">
        <FaTwitter className="mr-2" /> Twitter
      </a>
      <a href="https://t.me/paxeer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center">
        <FaTelegram className="mr-2" /> Telegram
      </a>
      <a href="mailto:infopaxeer@paxeer.app" className="text-gray-400 hover:text-white flex items-center">
        <FaEnvelope className="mr-2" /> Email
      </a>
    </div>
  </footer>   
  );
};
