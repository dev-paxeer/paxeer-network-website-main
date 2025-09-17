import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiSearch } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

const searchablePages = [
  { path: '/docs', name: 'Developers' },
  { path: '/technology', name: 'Technology' },
  { path: '/token', name: 'Token' },
  { path: '/community', name: 'Community' },
  { path: '/about', name: 'About' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/docs', label: 'Developers' },
    { href: '/technology', label: 'Technology' },
    { href: '/token', label: 'Token' },
    { href: '/community', label: 'Community' },
    { href: '/about', label: 'About' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const matchedPage = searchablePages.find(page => 
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (matchedPage) {
      navigate(matchedPage.path);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <img src="https://raw.githubusercontent.com/dev-paxeer/paxeer-network-website-main/refs/heads/main/frontend/Untitled%20design%20(99).png" alt="Logo" className="w-35 h-15" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#35b7ff] hover:scale-105 ${
                  location.pathname === link.href
                    ? 'text-[#35b7ff] text-glow'
                    : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search pages..."
              className="bg-[#1E1E2D] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35b7ff] w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 animate-in slide-in-from-top duration-200">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-white/80 hover:text-[#35b7ff] transition-colors hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search pages..."
                  className="bg-[#1E1E2D] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35b7ff] w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
