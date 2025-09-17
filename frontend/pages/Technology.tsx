import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { CodeMatrix } from '../components/CodeMatrix';
import Image from 'next/image';

const partnerLogos = [
  { name: 'Ethereum', src: '/logos/ethereum.png' },
  { name: 'Arbitrum', src: '/logos/arbitrum.png' },
  { name: 'Celestia', src: '/logos/celestia.png' },
  { name: 'Binance', src: '/logos/binance.png' },
  { name: 'Coinbase', src: '/logos/coinbase.png' },
];

export function Technology() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navSections = [
    "Network Architecture",
    "Technology Stack", 
    "Comparison Table",
    "Partner Integrations",
    "Developer Resources"
  ];

  const techComparison = [
    {
      feature: "Consensus Mechanism",
      paxeer: "Optimistic Rollup",
      ethereum: "PoS",
      arbitrum: "Optimistic Rollup",
      celestia: "Data Availability"
    },
    {
      feature: "Throughput (TPS)",
      paxeer: "2,000+",
      ethereum: "15-30",
      arbitrum: "4,000",
      celestia: "N/A"
    },
    {
      feature: "Finality Time",
      paxeer: "5 min",
      ethereum: "12-15 min",
      arbitrum: "7 days",
      celestia: "Instant"
    },
    {
      feature: "Transaction Fees",
      paxeer: "$0.01",
      ethereum: "$1-10",
      arbitrum: "$0.10",
      celestia: "N/A"
    }
  ];

  return (
    <div className="pt-16 relative">
      <CodeMatrix className="opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold mb-4">On This Page</h3>
                <nav className="space-y-2">
                  {navSections.map((section) => (
                    <a
                      key={section}
                      href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-white/80 hover:text-[#35b7ff] transition-colors hover:translate-x-1 duration-200"
                    >
                      {section}
                    </a>
                  ))}
                </nav>
              </GlassCard>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <AnimatedSection>
              <h1 className="text-4xl font-bold mb-6">Paxeer Network Technology</h1>
              <p className="text-lg text-white/80 mb-8">
                Paxeer is a next-generation Layer 2 solution combining the best of Ethereum security,
                Arbitrum scalability, and Celestia's data availability.
              </p>
            </AnimatedSection>

            {/* Network Architecture */}
            <AnimatedSection delay={100}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="network-architecture" className="text-2xl font-bold mb-4">Network Architecture</h2>
                <div className="relative aspect-video bg-black/20 rounded-lg mb-6 overflow-hidden">
                  {/* Placeholder for architecture diagram */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/50">
                    [Paxeer Network Architecture Diagram]
                  </div>
                </div>
                <p className="text-white/80 mb-4">
                  Paxeer operates as an Optimistic Rollup securing transactions on Ethereum,
                  while leveraging Arbitrum's fraud proofs and Celestia for scalable data availability.
                </p>
                <div className="relative group">
                  <pre className="bg-black/50 p-4 rounded-lg text-[#35b7ff] overflow-x-auto border border-[#35b7ff]/20 group-hover:border-[#35b7ff]/40 transition-colors">
                    <code>Paxeer = Ethereum(Security) + Arbitrum(Scalability) + Celestia(Data Availability)</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('Paxeer = Ethereum(Security) + Arbitrum(Scalability) + Celestia(Data Availability)', 'architecture')}
                  >
                    {copiedCode === 'architecture' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Technology Comparison */}
            <AnimatedSection delay={200}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="comparison-table" className="text-2xl font-bold mb-4">Technology Comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4">Feature</th>
                        <th className="text-left py-3 px-4">Paxeer</th>
                        <th className="text-left py-3 px-4">Ethereum</th>
                        <th className="text-left py-3 px-4">Arbitrum</th>
                        <th className="text-left py-3 px-4">Celestia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {techComparison.map((row, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 font-medium">{row.feature}</td>
                          <td className="py-3 px-4 text-[#35b7ff]">{row.paxeer}</td>
                          <td className="py-3 px-4">{row.ethereum}</td>
                          <td className="py-3 px-4">{row.arbitrum}</td>
                          <td className="py-3 px-4">{row.celestia}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Partner Integrations */}
            <AnimatedSection delay={300}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="partner-integrations" className="text-2xl font-bold mb-6">Partner Integrations</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {partnerLogos.map((partner) => (
                    <div key={partner.name} className="flex flex-col items-center justify-center p-4 bg-black/20 rounded-lg hover:bg-[#35b7ff]/10 transition-colors">
                      <div className="relative w-16 h-16 mb-2">
                        {/* Placeholder for partner logo */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                          {partner.name[0]}
                        </div>
                      </div>
                      <span className="text-sm text-center">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
