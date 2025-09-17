import React from 'react';
import { ArrowRight, Zap, Shield, Layers, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { GlassCube } from '../components/GlassCube';
import { VantaBackground } from '../components/VantaBackground';
import { ParticleField } from '../components/ParticleField';
import { FloatingElements } from '../components/FloatingElements';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { WaveAnimation } from '../components/WaveAnimation';
import { useNavigate } from 'react-router-dom';

export function Homepage() {
  const technologies = [
    {
      icon: <Layers className="w-8 h-8 text-[#35b7ff]" />,
      title: "Arbitrum Nitro Core",
      description: "Built on Arbitrum's battle-tested infrastructure for maximum security and compatibility."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#35b7ff]" />,
      title: "Celestia Data Availability",
      description: "Leveraging Celestia's modular architecture for scalable and secure data availability."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#35b7ff]" />,
      title: "Paxeer Virtual Machine (VM)",
      description: "Custom virtual machine optimized for high-performance DeFi operations."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#35b7ff]" />,
      title: "Computable Token Machine (CTM)",
      description: "Revolutionary token computation engine enabling complex financial instruments."
    }
  ];

  const features = [
    {
      title: "Institutions & Pro Traders",
      description: "Advanced trading infrastructure with institutional-grade security and performance."
    },
    {
      title: "Powered by Elite Technology",
      description: "Cutting-edge blockchain technology stack delivering unmatched performance."
    },
    {
      title: "An Ecosystem For All",
      description: "Inclusive platform designed for developers, traders, and institutions alike."
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section with Vanta Background */}
      <VantaBackground effect="net" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center filter blur-sm opacity-20"></div>
        <div className="relative z-10">
          <FloatingElements />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Explore a{' '}
                <span className="text-[#35b7ff] bg-gradient-to-r from-[#35b7ff] to-[#00a8ff] bg-clip-text text-transparent">
                  Thriving Digital Economy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Paxeer Network is a high-performance Web3 protocol designed to power the next generation of decentralized finance applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#35b7ff]">
                    <AnimatedNumber value={2500} suffix="+" />
                  </div>
                  <div className="text-sm text-white/60">TPS</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#35b7ff]">ZERO</div>
                  <div className="text-sm text-white/60">FEES</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#35b7ff]">L2</div>
                  <div className="text-sm text-white/60">ROLLUP</div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/get-started')}
                className="mt-8 px-8 py-3 bg-[#35b7ff] text-white rounded-lg hover:bg-[#2a9bda] transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </AnimatedSection>
          </div>
          <WaveAnimation className="absolute bottom-0 left-0 right-0 h-32" />
        </div>
      </VantaBackground>

      {/* Showcase Section with Sticky Cube */}
      <section className="py-20 relative bg-gradient-to-b from-[#0A0B0E] to-[#1a1b23]/50">
        <ParticleField className="opacity-30" particleCount={30} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Sticky Cube */}
            <div className="lg:sticky lg:top-32">
              <AnimatedSection>
                <GlassCube />
              </AnimatedSection>
            </div>

            {/* Scrolling Content */}
            <div className="space-y-20">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <GlassCard>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/80 text-lg">{feature.description}</p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <VantaBackground effect="fog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built on <span className="text-[#35b7ff]">Elite Technology</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our technology stack combines the best of multiple blockchain innovations to deliver unparalleled performance.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="mb-4 flex justify-center transform hover:scale-110 transition-transform duration-200">{tech.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{tech.title}</h3>
                  <p className="text-white/80 text-sm">{tech.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </VantaBackground>

      {/* Advantage Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="text-[#35b7ff]">Paxeer Advantage</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <GlassCard className="hover:scale-105 transition-transform duration-300">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4">Feature</th>
                      <th className="text-center py-4 px-4 text-[#35b7ff]">Paxeer Network</th>
                      <th className="text-center py-4 px-4">Typical Optimistic Rollup</th>
                      <th className="text-center py-4 px-4">Typical ZK-Rollup</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Transaction Fees</td>
                      <td className="py-4 px-4 text-center text-[#35b7ff] font-bold">Zero Fees</td>
                      <td className="py-4 px-4 text-center text-white/60">$0.01 - $0.10</td>
                      <td className="py-4 px-4 text-center text-white/60">$0.05 - $0.50</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">TPS</td>
                      <td className="py-4 px-4 text-center text-[#35b7ff] font-bold">
                        <AnimatedNumber value={2500} suffix="+" />
                      </td>
                      <td className="py-4 px-4 text-center text-white/60">100-500</td>
                      <td className="py-4 px-4 text-center text-white/60">1000-2000</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Finality</td>
                      <td className="py-4 px-4 text-center text-[#35b7ff] font-bold">Instant</td>
                      <td className="py-4 px-4 text-center text-white/60">7 days</td>
                      <td className="py-4 px-4 text-center text-white/60">10-30 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <VantaBackground effect="waves" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Building on <span className="text-[#35b7ff]">Paxeer</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the next generation of DeFi applications with our developer-friendly tools and comprehensive documentation.
            </p>
            <Button 
              size="lg" 
              className="bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Read the Docs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </AnimatedSection>
        </div>
      </VantaBackground>
    </div>
  );
}
