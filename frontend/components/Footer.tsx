import React from 'react';
import { Link } from 'react-router-dom';

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
    <footer className="bg-[#0A0B0E] border-t border-[#1E1E2D] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#35b7ff]">Resources</h3>
            <ul className="space-y-2">
              {pages.slice(1, 6).map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-400 hover:text-white transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#35b7ff]">Guides</h3>
            <ul className="space-y-2">
              {pages.slice(6, 10).map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-400 hover:text-white transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#35b7ff]">Company</h3>
            <ul className="space-y-2">
              {pages.slice(10).map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-400 hover:text-white transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#35b7ff]">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/paxeer" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="https://github.com/paxeer" className="text-gray-400 hover:text-white">GitHub</a>
              <a href="https://discord.gg/paxeer" className="text-gray-400 hover:text-white">Discord</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#1E1E2D] text-center text-gray-500">
          {new Date().getFullYear()} Paxeer Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
