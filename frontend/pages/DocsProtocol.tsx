import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { CodeMatrix } from '../components/CodeMatrix';

export function DocsProtocol() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navSections = [
    "API Base URL",
    "Authentication", 
    "REST API",
    "WebSocket API",
    "Supported Tokens",
    "Error Codes"
  ];

  const supportedTokens = [
    { symbol: "ETH", name: "Ethereum", address: "0x0000000000000000000000000000000000000000" },
    { symbol: "USDC", name: "USD Coin", address: "0xA0b86a33E6776839c5A7A4C3f9bC0b3c4f8c3c8c" },
    { symbol: "USDT", name: "Tether USD", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
    { symbol: "WBTC", name: "Wrapped Bitcoin", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" }
  ];

  const errorCodes = [
    { code: "400", name: "Bad Request", description: "Invalid request parameters" },
    { code: "401", name: "Unauthorized", description: "Missing or invalid API key" },
    { code: "404", name: "Not Found", description: "Requested resource not found" },
    { code: "429", name: "Rate Limited", description: "Too many requests" },
    { code: "500", name: "Internal Error", description: "Server error occurred" }
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
              <h1 className="text-4xl font-bold mb-6">PaxDex Protocol Guide</h1>
              <p className="text-lg text-white/80 mb-8">
                Complete documentation for integrating with the PaxDex decentralized exchange protocol.
              </p>
            </AnimatedSection>

            {/* API Base URL */}
            <AnimatedSection delay={100}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="api-base-url" className="text-2xl font-bold mb-4">API Base URL</h2>
                <p className="text-white/80 mb-4">
                  All API requests should be made to the following base URL:
                </p>
                <div className="relative group">
                  <pre className="bg-black/50 p-4 rounded-lg text-[#35b7ff] overflow-x-auto border border-[#35b7ff]/20 group-hover:border-[#35b7ff]/40 transition-colors">
                    <code>https://api.paxeer.network/v1</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('https://api.paxeer.network/v1', 'base-url')}
                  >
                    {copiedCode === 'base-url' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Authentication */}
            <AnimatedSection delay={200}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="authentication" className="text-2xl font-bold mb-4">Authentication</h2>
                <p className="text-white/80 mb-4">
                  Authentication is required for all API requests. Include your API key in the request headers:
                </p>
                <div className="relative group">
                  <pre className="bg-black/50 p-4 rounded-lg text-green-400 overflow-x-auto border border-green-400/20 group-hover:border-green-400/40 transition-colors">
                    <code>{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY\nContent-Type: application/json', 'auth')}
                  >
                    {copiedCode === 'auth' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* REST API */}
            <AnimatedSection delay={300}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="rest-api" className="text-2xl font-bold mb-4">REST API</h2>
                
                <h3 className="text-xl font-bold mb-3">Get Market Data</h3>
                <p className="text-white/80 mb-4">Retrieve current market data for a trading pair:</p>
                <div className="relative mb-6 group">
                  <pre className="bg-black/50 p-4 rounded-lg text-yellow-400 overflow-x-auto border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors">
                    <code>GET /markets/{pair}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('GET /markets/{pair}', 'market-data')}
                  >
                    {copiedCode === 'market-data' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                <h3 className="text-xl font-bold mb-3">Place Order</h3>
                <p className="text-white/80 mb-4">Submit a new trading order:</p>
                <div className="relative group">
                  <pre className="bg-black/50 p-4 rounded-lg text-blue-400 overflow-x-auto border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                    <code>{`POST /orders
{
  "pair": "ETH/USDC",
  "side": "buy",
  "type": "limit",
  "amount": "1.0",
  "price": "2000.00"
}`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('POST /orders\n{\n  "pair": "ETH/USDC",\n  "side": "buy",\n  "type": "limit",\n  "amount": "1.0",\n  "price": "2000.00"\n}', 'place-order')}
                  >
                    {copiedCode === 'place-order' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* WebSocket API */}
            <AnimatedSection delay={400}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="websocket-api" className="text-2xl font-bold mb-4">WebSocket API</h2>
                <p className="text-white/80 mb-4">
                  Connect to real-time market data streams:
                </p>
                <div className="relative group">
                  <pre className="bg-black/50 p-4 rounded-lg text-purple-400 overflow-x-auto border border-purple-400/20 group-hover:border-purple-400/40 transition-colors">
                    <code>{`wss://ws.paxeer.network/v1

// Subscribe to ticker updates
{
  "method": "subscribe",
  "params": ["ticker.ETH/USDC"]
}`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200"
                    onClick={() => copyToClipboard('wss://ws.paxeer.network/v1\n\n// Subscribe to ticker updates\n{\n  "method": "subscribe",\n  "params": ["ticker.ETH/USDC"]\n}', 'websocket')}
                  >
                    {copiedCode === 'websocket' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Supported Tokens */}
            <AnimatedSection delay={500}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="supported-tokens" className="text-2xl font-bold mb-4">Supported Tokens</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4">Symbol</th>
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Contract Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supportedTokens.map((token, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 font-medium text-[#35b7ff]">{token.symbol}</td>
                          <td className="py-3 px-4">{token.name}</td>
                          <td className="py-3 px-4 font-mono text-sm text-white/80">{token.address}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Error Codes */}
            <AnimatedSection delay={600}>
              <GlassCard className="hover:scale-105 transition-transform duration-300">
                <h2 id="error-codes" className="text-2xl font-bold mb-4">Error Codes</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4">Code</th>
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {errorCodes.map((error, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3 px-4 font-medium text-red-400">{error.code}</td>
                          <td className="py-3 px-4 font-medium">{error.name}</td>
                          <td className="py-3 px-4 text-white/80">{error.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
