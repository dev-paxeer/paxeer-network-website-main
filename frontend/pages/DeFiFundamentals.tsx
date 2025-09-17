import React, { useState } from 'react';
import { NextPage } from 'next';
import { Header } from '../components/Header';
import { 
  FaBitcoin, 
  FaEthereum,
  FaExchangeAlt,
  FaCoins,
  FaWater,
  FaRocket
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export const DeFiFundamentals: NextPage = () => {
  const [activeTab, setActiveTab] = useState('crypto-basics');

  const tabs = [
    { id: 'crypto-basics', name: 'Crypto Fundamentals', icon: <FaBitcoin /> },
    { id: 'defi-intro', name: 'DeFi Introduction', icon: <FaExchangeAlt /> },
    { id: 'token-ecosystem', name: 'Token Ecosystem', icon: <FaCoins /> },
    { id: 'dexs-liquidity', name: 'DEXs & Liquidity', icon: <FaWater /> },
    { id: 'token-launches', name: 'Token Launches', icon: <FaRocket /> }
  ];

  // Top blockchains data (updated with Paxeer)
  const topBlockchains = [
    {
      name: "Paxeer Network",
      description: "Paxeer is an L2 solution combining Ethereum security, Arbitrum scalability and Celestia data availability",
      type: "Layer 2",
      marketCap: "$1.5B",
      consensus: "Optimistic Rollup",
      features: ["EVM Compatible", "Low Fees", "Fast Transactions", "Celestia DA"]
    },
    {
      name: "Ethereum (ETH)",
      description: "The leading smart contract platform that enables decentralized applications and DeFi",
      type: "Layer 1",
      marketCap: "$368B",
      consensus: "Proof of Stake",
      features: ["Smart Contracts", "dApps", "ERC-20 Tokens", "NFTs"]
    },
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency that introduced blockchain technology",
      type: "Layer 1",
      marketCap: "$1.2T",
      consensus: "Proof of Work",
      features: ["Store of Value", "Digital Gold", "Limited Smart Contracts"]
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>DeFi Fundamentals</h1>
        
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-8 border-b border-gray-700">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium ${activeTab === tab.id ? 'text-[#35b7ff] border-b-2 border-[#35b7ff]' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Crypto Basics Tab */}
        {activeTab === 'crypto-basics' && (
          <div className={styles.section}>
            <h2>Blockchain Technology Overview</h2>
            <div className={styles.card}>
              <h3>Key Blockchains</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4">Network</th>
                      <th className="text-left py-3 px-4">Description</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Market Cap</th>
                      <th className="text-left py-3 px-4">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topBlockchains.map((blockchain, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-medium">{blockchain.name}</td>
                        <td className="py-3 px-4">{blockchain.description}</td>
                        <td className="py-3 px-4">{blockchain.type}</td>
                        <td className="py-3 px-4">{blockchain.marketCap}</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc list-inside">
                            {blockchain.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* DeFi Introduction Tab */}
        {activeTab === 'defi-intro' && (
          <div className={styles.section}>
            <h2>Decentralized Finance (DeFi)</h2>
            <div className={styles.card}>
              <h3>What is DeFi?</h3>
              <p>
                DeFi refers to financial applications built on blockchain technologies, 
                typically using smart contracts. These applications aim to recreate 
                traditional financial systems (lending, borrowing, trading) in a 
                decentralized manner without intermediaries.
              </p>
              <h3 className="mt-4">Key DeFi Applications on Paxeer</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Decentralized Exchanges (DEXs)</li>
                <li>Lending and Borrowing Protocols</li>
                <li>Yield Farming and Staking</li>
                <li>Derivatives and Synthetic Assets</li>
                <li>Insurance Protocols</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DeFiFundamentals;
