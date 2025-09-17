import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function Blog() {
  const blogPosts = [
    {
      category: "ANNOUNCEMENT",
      title: "Paxeer Network Mainnet Launch",
      excerpt: "We're excited to announce the official launch of Paxeer Network mainnet, marking a new era in DeFi infrastructure.",
      date: "January 15, 2025",
      readTime: "5 min read",
      categoryColor: "bg-green-500"
    },
    {
      category: "ENGINEERING",
      title: "Deep Dive: Zero-Fee Architecture",
      excerpt: "Learn how our innovative architecture enables zero-fee transactions while maintaining network security and decentralization.",
      date: "January 10, 2025",
      readTime: "8 min read",
      categoryColor: "bg-blue-500"
    },
    {
      category: "PARTNERSHIP",
      title: "Strategic Partnership with Leading DeFi Protocols",
      excerpt: "Announcing partnerships with major DeFi protocols to expand the Paxeer ecosystem and provide more value to users.",
      date: "January 5, 2025",
      readTime: "4 min read",
      categoryColor: "bg-purple-500"
    },
    {
      category: "RESEARCH",
      title: "The Future of Layer 2 Scaling Solutions",
      excerpt: "Our research team explores the evolution of Layer 2 technologies and Paxeer's role in shaping the future.",
      date: "December 28, 2024",
      readTime: "12 min read",
      categoryColor: "bg-orange-500"
    },
    {
      category: "TUTORIAL",
      title: "Building Your First DApp on Paxeer",
      excerpt: "A step-by-step guide to building and deploying your first decentralized application on the Paxeer Network.",
      date: "December 20, 2024",
      readTime: "15 min read",
      categoryColor: "bg-cyan-500"
    },
    {
      category: "ANNOUNCEMENT",
      title: "Token Generation Event Details",
      excerpt: "Everything you need to know about the PAX token generation event and distribution mechanics.",
      date: "December 15, 2024",
      readTime: "6 min read",
      categoryColor: "bg-green-500"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0B0E] via-[#1a1b23] to-[#0A0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              News & Insights from the <span className="text-[#35b7ff]">Paxeer Ecosystem</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <GlassCard className="h-full flex flex-col hover:scale-105 transition-transform duration-300">
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${post.categoryColor} hover:scale-110 transition-transform duration-200`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-[#35b7ff] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-white/80 mb-6">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/60 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-1 hover:text-[#35b7ff] transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-[#35b7ff] transition-colors">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
