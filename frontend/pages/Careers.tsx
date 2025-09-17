import React from 'react';
import { MapPin, DollarSign, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function Careers() {
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-[#35b7ff]" />,
      title: "Work Remotely",
      description: "Join our distributed team and work from anywhere in the world with flexible hours."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#35b7ff]" />,
      title: "Competitive Compensation",
      description: "Receive competitive salaries plus equity packages in one of the fastest-growing DeFi protocols."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#35b7ff]" />,
      title: "High-Impact Work",
      description: "Build the future of finance and make a meaningful impact on the global financial system."
    }
  ];

  const openPositions = [
    { title: "Senior Blockchain Engineer", department: "Engineering" },
    { title: "Frontend Developer", department: "Engineering" },
    { title: "DevRel Engineer", department: "Developer Relations" },
    { title: "Product Marketing Manager", department: "Marketing" },
    { title: "Security Auditor", department: "Security" },
    { title: "Community Manager", department: "Community" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0B0E] via-[#1a1b23] to-[#0A0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Help Us Build the <span className="text-[#35b7ff]">Future of Finance</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Work at <span className="text-[#35b7ff]">Paxeer</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Join a team of passionate builders creating the next generation of decentralized financial infrastructure.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#1a1b23]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Open <span className="text-[#35b7ff]">Positions</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our mission.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <GlassCard className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{position.title}</h3>
                      <p className="text-white/60">{position.department}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-[#35b7ff] text-[#35b7ff] hover:bg-[#35b7ff] hover:text-black"
                    >
                      Apply
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
