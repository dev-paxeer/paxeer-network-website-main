import React from 'react';
import { MessageCircle, Twitter, Send, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { VantaBackground } from '../components/VantaBackground';
import { FloatingElements } from '../components/FloatingElements';
import { AnimatedNumber } from '../components/AnimatedNumber';

export function Community() {
  const socialChannels = [
    {
      icon: <MessageCircle className="w-12 h-12 text-[#5865F2]" />,
      name: "Discord",
      description: "Join our developer community and get real-time support",
      members: "15,000+ members",
      href: "https://discord.gg/paxeer"
    },
    {
      icon: <Twitter className="w-12 h-12 text-[#1DA1F2]" />,
      name: "Twitter / X",
      description: "Follow us for the latest updates and announcements",
      members: "50,000+ followers",
      href: "https://twitter.com/paxeernetwork"
    },
    {
      icon: <Send className="w-12 h-12 text-[#0088cc]" />,
      name: "Telegram",
      description: "Connect with traders and DeFi enthusiasts",
      members: "25,000+ members",
      href: "https://t.me/paxeernetwork"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <VantaBackground effect="clouds" className="py-20">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our Global <span className="text-[#35b7ff]">Community</span>
            </h1>
          </AnimatedSection>
        </div>
      </VantaBackground>

      {/* Socials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {socialChannels.map((channel, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <a href={channel.href} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="text-center h-full hover:scale-105 transition-transform duration-300 group">
                    <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-200">{channel.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{channel.name}</h3>
                    <p className="text-white/80 mb-4">{channel.description}</p>
                    <div className="text-[#35b7ff] font-medium">
                      <AnimatedNumber value={parseInt(channel.members.split(',')[0].replace(/\D/g, ''))} suffix={channel.members.includes('followers') ? '+ followers' : '+ members'} />
                    </div>
                  </GlassCard>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <VantaBackground effect="fog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6">Shape the Future of Paxeer</h2>
                <p className="text-lg text-white/80 mb-6">
                  As a PAX token holder, you have the power to influence the direction of the Paxeer Network. 
                  Participate in governance proposals, vote on protocol upgrades, and help shape the future of DeFi.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Our governance system is designed to be transparent, inclusive, and community-driven. 
                  Every voice matters in building the next generation of financial infrastructure.
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium hover:scale-105 transition-transform duration-200"
                >
                  Participate in Governance
                </Button>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#35b7ff]/20 to-[#35b7ff]/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#35b7ff]/30">
                    <Users className="w-40 h-40 text-[#35b7ff] opacity-80" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#35b7ff]/10 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s' }} />
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#35b7ff]/5 to-transparent rounded-full animate-ping" style={{ animationDuration: '5s' }} />
                  
                  {/* Floating community stats */}
                  <div className="absolute -top-4 -right-4 bg-[#35b7ff]/20 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg p-3 animate-bounce" style={{ animationDelay: '1s' }}>
                    <div className="text-lg font-bold text-[#35b7ff]">
                      <AnimatedNumber value={90} suffix="K+" />
                    </div>
                    <div className="text-xs text-white/80">Community</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-[#35b7ff]/20 backdrop-blur-sm border border-[#35b7ff]/30 rounded-lg p-3 animate-bounce" style={{ animationDelay: '2s' }}>
                    <div className="text-lg font-bold text-[#35b7ff]">
                      <AnimatedNumber value={150} suffix="+" />
                    </div>
                    <div className="text-xs text-white/80">Countries</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </VantaBackground>

      {/* Brand Assets Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <GlassCard className="max-w-2xl mx-auto hover:scale-105 transition-transform duration-300">
              <div className="transform hover:scale-110 transition-transform duration-200 mb-6">
                <Download className="w-16 h-16 text-[#35b7ff] mx-auto" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Brand Assets</h2>
              <p className="text-lg text-white/80 mb-8">
                Access our official logos, brand guidelines, and media assets for use in your projects and integrations.
              </p>
              <Button 
                size="lg" 
                className="bg-[#35b7ff] hover:bg-[#35b7ff]/90 text-black font-medium hover:scale-105 transition-transform duration-200"
              >
                Download Media Kit
              </Button>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
