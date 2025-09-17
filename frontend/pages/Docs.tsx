import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Coins, FileText, Server, Clock } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function Docs() {
  const docCards = [
    {
      icon: <Book className="w-8 h-8 text-[#35b7ff]" />,
      title: "PaxDex Protocol Guide",
      description: "Learn how to integrate with our decentralized exchange protocol",
      href: "/docs/protocol",
      active: true
    },
    {
      icon: <Code className="w-8 h-8 text-[#35b7ff]" />,
      title: "React Integration Guide",
      description: "Build React applications with Paxeer Network integration",
      href: "/docs/react",
      active: true
    },
    {
      icon: <Coins className="w-8 h-8 text-[#35b7ff]" />,
      title: "PaxLend Protocol Guide", 
      description: "Implement lending and borrowing functionality",
      href: "/docs/lend",
      active: true
    },
    {
      icon: <FileText className="w-8 h-8 text-white/40" />,
      title: "Smart Contract Deep Dive",
      description: "Advanced smart contract development patterns",
      href: "/docs/contracts",
      active: false
    },
    {
      icon: <Server className="w-8 h-8 text-white/40" />,
      title: "Validator & Node Guide",
      description: "Run and maintain network infrastructure",
      href: "/docs/validator",
      active: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0B0E] via-[#1a1b23] to-[#0A0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Technical <span className="text-[#35b7ff]">Documentation</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Docs Hub Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCards.map((doc, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                {doc.active ? (
                  <Link to={doc.href}>
                    <GlassCard className="h-full">
                      <div className="mb-4">{doc.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{doc.title}</h3>
                      <p className="text-white/80">{doc.description}</p>
                    </GlassCard>
                  </Link>
                ) : (
                  <GlassCard className="h-full opacity-60 relative" hover={false}>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded text-xs">
                        <Clock className="w-3 h-3" />
                        <span>Coming Soon</span>
                      </div>
                    </div>
                    <div className="mb-4">{doc.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white/60">{doc.title}</h3>
                    <p className="text-white/40">{doc.description}</p>
                  </GlassCard>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
