import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '../components/GlassCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function CTM() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0B0E] via-[#1a1b23] to-[#0A0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Computable Token <span className="text-[#35b7ff]">Machine</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* CTM Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What is the CTM?</h2>
              <p className="text-lg text-white/80 mb-6">
                The Computable Token Machine (CTM) is Paxeer Network's revolutionary token computation engine 
                that enables complex financial instruments and automated trading strategies to be executed 
                directly on-chain with zero fees.
              </p>
              <p className="text-lg text-white/80">
                Built on advanced computational primitives, the CTM allows developers to create sophisticated 
                DeFi applications that were previously impossible or too expensive to implement on traditional blockchains.
              </p>
            </GlassCard>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection delay={200}>
              <GlassCard>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Zero-cost computational operations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Advanced mathematical primitives for DeFi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Automated strategy execution</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Cross-protocol composability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Real-time risk management</span>
                  </li>
                </ul>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <GlassCard>
                <h3 className="text-2xl font-bold mb-4">Use Cases</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Algorithmic trading strategies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Dynamic portfolio rebalancing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Yield farming optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Structured financial products</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#35b7ff] mt-1">•</span>
                    <span>Automated market making</span>
                  </li>
                </ul>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#1a1b23]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                CTM <span className="text-[#35b7ff]">Examples</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See how the CTM enables complex financial operations with simple, elegant code.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={200}>
              <GlassCard>
                <h3 className="text-xl font-bold mb-4">Simple Portfolio Rebalancing</h3>
                <div className="relative">
                  <pre className="bg-black/50 p-4 rounded-lg text-green-400 overflow-x-auto">
                    <code>{`// Define a rebalancing strategy
const strategy = new CTM.Strategy({
  assets: ['ETH', 'USDC', 'WBTC'],
  targets: [0.5, 0.3, 0.2],
  threshold: 0.05
});

// Execute rebalancing when deviation exceeds threshold
await strategy.execute();`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard('// Define a rebalancing strategy\nconst strategy = new CTM.Strategy({\n  assets: [\'ETH\', \'USDC\', \'WBTC\'],\n  targets: [0.5, 0.3, 0.2],\n  threshold: 0.05\n});\n\n// Execute rebalancing when deviation exceeds threshold\nawait strategy.execute();', 'rebalance')}
                  >
                    {copiedCode === 'rebalance' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <GlassCard>
                <h3 className="text-xl font-bold mb-4">Automated Yield Optimization</h3>
                <div className="relative">
                  <pre className="bg-black/50 p-4 rounded-lg text-blue-400 overflow-x-auto">
                    <code>{`// Create a yield optimization engine
const optimizer = new CTM.YieldOptimizer({
  protocols: ['PaxLend', 'UniswapV4', 'Curve'],
  riskProfile: 'moderate'
});

// Automatically find and execute best yield opportunities
const result = await optimizer.optimize(userBalance);
console.log(\`New APY: \${result.apy}%\`);`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard('// Create a yield optimization engine\nconst optimizer = new CTM.YieldOptimizer({\n  protocols: [\'PaxLend\', \'UniswapV4\', \'Curve\'],\n  riskProfile: \'moderate\'\n});\n\n// Automatically find and execute best yield opportunities\nconst result = await optimizer.optimize(userBalance);\nconsole.log(`New APY: ${result.apy}%`);', 'yield')}
                  >
                    {copiedCode === 'yield' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <GlassCard>
                <h3 className="text-xl font-bold mb-4">Risk Management System</h3>
                <div className="relative">
                  <pre className="bg-black/50 p-4 rounded-lg text-purple-400 overflow-x-auto">
                    <code>{`// Set up automated risk management
const riskManager = new CTM.RiskManager({
  maxDrawdown: 0.15,
  stopLoss: 0.10,
  volatilityThreshold: 0.25
});

// Monitor and protect positions in real-time
riskManager.monitor(portfolio, {
  onAlert: (risk) => console.log(\`Risk detected: \${risk.type}\`),
  onTrigger: (action) => executeProtectiveAction(action)
});`}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard('// Set up automated risk management\nconst riskManager = new CTM.RiskManager({\n  maxDrawdown: 0.15,\n  stopLoss: 0.10,\n  volatilityThreshold: 0.25\n});\n\n// Monitor and protect positions in real-time\nriskManager.monitor(portfolio, {\n  onAlert: (risk) => console.log(`Risk detected: ${risk.type}`),\n  onTrigger: (action) => executeProtectiveAction(action)\n});', 'risk')}
                  >
                    {copiedCode === 'risk' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
