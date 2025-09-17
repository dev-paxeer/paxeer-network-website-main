import React from 'react';
import { Vote, Shield, Gift } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { DonutChart } from '../components/DonutChart';
import { VantaBackground } from '../components/VantaBackground';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { FloatingElements } from '../components/FloatingElements';

export function Token() {
  const utilities = [
    {
      icon: <Vote className="w-8 h-8 text-[#35b7ff]" />,
      title: "Governance",
      description: "PAX token holders can participate in protocol governance, voting on proposals and network upgrades."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#35b7ff]" />,
      title: "Staking & Security",
      description: "Stake PAX tokens to secure the network and earn rewards while contributing to protocol security."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#35b7ff]" />,
      title: "Ecosystem Incentives",
      description: "PAX tokens power ecosystem incentives, rewarding developers, liquidity providers, and early adopters."
    }
  ];

  const tokenomicsData = [
    { label: "Ecosystem Fund", value: 35, color: "#35b7ff" },
    { label: "Liquidity Mining", value: 20, color: "#00a8ff" },
    { label: "Team & Advisors", value: 15, color: "#0095e8" },
    { label: "Public & Private Sale", value: 15, color: "#0082d1" },
    { label: "Community Airdrop", value: 15, color: "#006fba" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <VantaBackground effect="net" className="py-20">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Paxeer <span className="text-[#35b7ff]">Token Economy</span>
            </h1>
          </AnimatedSection>
        </div>
      </VantaBackground>

      {/* Token Utility Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Token <span className="text-[#35b7ff]">Utility</span>
              </h2>
              <p className="text-xl text-back max-w-3xl mx-auto">
                The PAX token is the native utility token of the Paxeer Network, designed to align incentives 
                across all network participants.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {utilities.map((utility, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="text-center hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 flex justify-center transform hover:scale-110 transition-transform duration-200">{utility.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{utility.title}</h3>
                  <p className="text-back">{utility.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <VantaBackground effect="waves" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tokenomics & <span className="text-[#35b7ff]">Distribution</span>
              </h2>
              <div className="text-2xl font-bold text-[#35b7ff] mb-4">
                Total Supply: <AnimatedNumber value={1000000000} /> PAX
              </div>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={200}>
              <div className="relative">
                <DonutChart segments={tokenomicsData} />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#35b7ff]/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#35b7ff]/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#35b7ff]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6">Distribution Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 transition-colors rounded px-2">
                    <span className="text-back">Ecosystem Fund</span>
                    <span className="font-bold"><AnimatedNumber value={350000000} /> PAX (35%)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 transition-colors rounded px-2">
                    <span className="text-back">Liquidity Mining</span>
                    <span className="font-bold"><AnimatedNumber value={200000000} /> PAX (20%)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 transition-colors rounded px-2">
                    <span className="text-back">Team & Advisors</span>
                    <span className="font-bold"><AnimatedNumber value={150000000} /> PAX (15%)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10 hover:bg-white/5 transition-colors rounded px-2">
                    <span className="text-back">Public & Private Sale</span>
                    <span className="font-bold"><AnimatedNumber value={150000000} /> PAX (15%)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 hover:bg-white/5 transition-colors rounded px-2">
                    <span className="text-back">Community Airdrop</span>
                    <span className="font-bold"><AnimatedNumber value={150000000} /> PAX (15%)</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </VantaBackground>
    </div>
  );
}
