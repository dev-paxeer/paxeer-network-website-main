import React from 'react';
import { Compass, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { VantaBackground } from '../components/VantaBackground';
import { FloatingElements } from '../components/FloatingElements';

export function About() {
  const timelineEvents = [
    { quarter: "Q4 2024", title: "Foundation Launch", description: "Paxeer Network foundation established" },
    { quarter: "Q1 2025", title: "Testnet Release", description: "Public testnet deployment" },
    { quarter: "Q2 2025", title: "Mainnet Launch", description: "Production network goes live" },
    { quarter: "Q3 2025", title: "Ecosystem Growth", description: "Partner integrations and DeFi protocols" },
    { quarter: "Q4 2025", title: "Global Expansion", description: "Worldwide adoption and scaling" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <VantaBackground effect="clouds" className="py-20">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-[#35b7ff]">Paxeer Network</span>
            </h1>
          </AnimatedSection>
        </div>
      </VantaBackground>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#35b7ff]/30">
                    <Compass className="w-32 h-32 text-[#35b7ff] animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#35b7ff]/10 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#35b7ff]/5 to-transparent rounded-full animate-ping" style={{ animationDuration: '4s' }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-white/80 mb-6">
                  To democratize access to advanced financial infrastructure by building the most efficient, 
                  secure, and user-friendly Web3 protocol for the next generation of decentralized applications.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  Paxeer Network represents a paradigm shift in blockchain technology, combining the security 
                  of Ethereum with the performance requirements of modern financial applications.
                </p>
                <p className="text-lg text-white/80">
                  We believe that blockchain technology should be fast, affordable, and accessible to everyone, 
                  from individual developers to large institutions.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <VantaBackground effect="fog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#35b7ff]">Journey</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Building the future of decentralized finance, one milestone at a time.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#35b7ff] to-[#35b7ff]/20" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1" />
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 mx-8">
                      <div className="w-4 h-4 bg-[#35b7ff] rounded-full border-4 border-[#0A0B0E] hover:scale-125 transition-transform duration-200" />
                      <div className="absolute inset-0 bg-[#35b7ff] rounded-full animate-ping opacity-30" />
                    </div>

                    <div className="flex-1">
                      <GlassCard className={`max-w-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} hover:scale-105 transition-transform duration-300`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-[#35b7ff]" />
                          <span className="text-[#35b7ff] font-medium">{event.quarter}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-white/80">{event.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </VantaBackground>

      {/* Foundation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-6">The Paxeer Foundation</h2>
              <p className="text-lg text-white/80 mb-8">
                The Paxeer Foundation is a non-profit organization dedicated to supporting the development, 
                growth, and governance of the Paxeer Network ecosystem. We provide grants, technical resources, 
                and community support to developers and projects building on our platform.
              </p>
              <Button 
                size="lg" 
                className="bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium hover:scale-105 transition-transform duration-200"
              >
                Work With Us
              </Button>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
