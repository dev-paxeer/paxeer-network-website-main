import React from 'react';
import { Eye, Zap, Shield } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function Mission() {
  const corePillars = [
    {
      icon: <Eye className="w-12 h-12 text-[#35b7ff]" />,
      title: "Accessibility",
      description: "Making advanced financial tools accessible to everyone, regardless of technical expertise or financial background."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#35b7ff]" />,
      title: "Performance",
      description: "Delivering institutional-grade performance with 2500+ TPS and zero fees to enable new categories of applications."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#35b7ff]" />,
      title: "Transparency",
      description: "Building on principles of transparency, open-source development, and community-driven governance."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0B0E] via-[#1a1b23] to-[#0A0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="text-[#35b7ff]">Mission</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-3xl font-bold mb-8">Democratizing Advanced Financial Infrastructure</h2>
              <p className="text-xl text-white/80 mb-6">
                Our mission is to build the most efficient, secure, and user-friendly Web3 protocol that enables 
                the next generation of decentralized financial applications.
              </p>
              <p className="text-lg text-white/80 mb-6">
                We believe that everyone should have access to sophisticated financial tools and services, 
                regardless of their location, background, or financial status. By eliminating traditional barriers 
                like high fees, slow transactions, and complex interfaces, we're creating a more inclusive financial future.
              </p>
              <p className="text-lg text-white/80">
                Paxeer Network represents more than just technology—it's a commitment to building a fair, 
                transparent, and accessible financial system for the digital age.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Core <span className="text-[#35b7ff]">Pillars</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our mission is built on three fundamental pillars that guide every decision we make.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={300 + index * 100}>
                <GlassCard className="text-center h-full">
                  <div className="mb-6 flex justify-center">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-white/80">{pillar.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#1a1b23]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Vision for the Future</h2>
              <p className="text-xl text-white/80 mb-6">
                We envision a world where financial services are truly global, instant, and accessible to all. 
                A world where innovation isn't constrained by legacy infrastructure, and where developers can 
                build the financial applications of tomorrow without compromise.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Through Paxeer Network, we're not just building better blockchain technology—we're laying the 
                foundation for a new economic paradigm that puts users first and unlocks human potential through 
                financial inclusion and innovation.
              </p>
              <p className="text-lg text-white/80">
                Join us in building this future. The next chapter of finance starts here.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
