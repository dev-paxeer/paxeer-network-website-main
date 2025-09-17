import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium glow-blue hover:scale-105 transition-transform duration-200">
              Launch App
            </Button>
          </div>

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
              <Button className="w-full bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium mt-4 glow-blue hover:scale-105 transition-transform duration-200">
                Launch App
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
