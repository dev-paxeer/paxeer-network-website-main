import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  FaSkull,
  FaRocket,
  FaTractor,
  FaBalanceScale,
  FaChartLine
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const TradersGuide: NextPage = () => {
  const [activeScam, setActiveScam] = useState('rug-pull');

  const scamTypes = [
    {
      id: 'rug-pull',
      name: 'Rug Pull',
      icon: <FaSkull className="text-red-500" />,
      description: 'Developers abandon the project after raising funds, causing the token to crash.',
      warningSigns: [
        'Anonymous team with no verifiable history',
        'Unverified contracts',
        'Large percentage of tokens held by developers',
        'Liquidity not locked'
      ],
      prevention: [
        'Check token distribution',
        'Verify liquidity lock status',
        'Research the team thoroughly',
        'Be skeptical of unrealistic returns'
      ]
    },
    {
      id: 'pump-dump',
      name: 'Pump & Dump',
      icon: <FaRocket className="text-orange-500" />,
      description: 'Coordinated efforts to artificially inflate price before selling off holdings.',
      warningSigns: [
        'Sudden price spikes without news',
        'Influencer promotions with no substance',
        'Excessive hype on social media',
        'Urgent "buy now" messaging'
      ],
      prevention: [
        'Research fundamentals not hype',
        'Avoid FOMO buying',
        'Check trading volume patterns',
        'Look for real development progress'
      ]
    },
    {
      id: 'farming',
      name: 'Yield Farming Scams',
      icon: <FaTractor className="text-green-500" />,
      description: 'Projects offering unsustainable yields to attract liquidity before collapsing.',
      warningSigns: [
        'Unsustainably high APY (1000%+)',
        'Vague tokenomics',
        'Inflationary rewards model',
        'Anonymous teams with past failed projects'
      ],
      prevention: [
        'Understand the yield source',
        'Research token emission schedule',
        'Look for protocol revenue generation',
        'Avoid projects with no long-term plan'
      ]
    },
    {
      id: 'platform-scams',
      name: 'Platform Scams',
      icon: <FaBalanceScale className="text-blue-500" />,
      description: 'Exploiting launch platforms with fake activity and manipulated trading.',
      warningSigns: [
        'Wash trading between same wallets',
        'Artificial volume creation',
        'New wallets suddenly trading actively',
        'Identical tokens with different contracts'
      ],
      prevention: [
        'Investigate wallet activity',
        'Look for unnatural trade patterns',
        'Verify contracts thoroughly',
        'Check liquidity depth'
      ]
    },
    {
      id: 'kol-scams',
      name: 'KOL Scams',
      icon: <FaChartLine className="text-yellow-500" />,
      description: 'Influencers promoting tokens they hold to profit from followers buying in.',
      warningSigns: [
        'Suspiciously high win rates',
        'No disclosure of positions',
        'Urgent "last chance" messaging',
        'Deleted unsuccessful calls'
      ],
      prevention: [
        'Assume influencers hold positions',
        'Look for transparent disclosures',
        'Verify track records',
        'Develop your own analysis skills'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Traders Guide | Paxeer Network</title>
        <meta 
          name="description" 
          content="Learn to identify and avoid common crypto trading scams on Paxeer Network" 
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Traders Guide
        </h1>

        <p className={styles.description}>
          Recognize and avoid common scams in the crypto trading space
        </p>

        {/* Scam Types Navigation */}
        <div className="flex overflow-x-auto mb-8 border-b border-gray-700">
          {scamTypes.map(scam => (
            <button
              key={scam.id}
              onClick={() => setActiveScam(scam.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium ${activeScam === scam.id ? 'text-[#35b7ff] border-b-2 border-[#35b7ff]' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="mr-2">{scam.icon}</span>
              {scam.name}
            </button>
          ))}
        </div>

        {/* Active Scam Content */}
        {scamTypes.map(scam => (
          <div 
            key={scam.id}
            className={`${styles.section} ${activeScam === scam.id ? 'block' : 'hidden'}`}
          >
            <h2>{scam.name}</h2>
            
            <div className={styles.card}>
              <h3>Description</h3>
              <p>{scam.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={styles.card}>
                <h3>Warning Signs</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {scam.warningSigns.map((sign, i) => (
                    <li key={i}>{sign}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Prevention</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {scam.prevention.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Trading Tools */}
        <div className="w-full max-w-4xl mt-8 bg-[#1e1e2d] p-6 rounded-lg border border-[#2d2d3a]">
          <h2 className="text-xl font-bold text-white mb-4">Trading Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#2d2d3a] rounded-lg hover:bg-[#35b7ff]/10 transition-colors">
              <h3 className="font-medium text-white mb-2">Token Analyzer</h3>
              <p className="text-gray-300 text-sm">Check token distribution and contract risks</p>
            </div>
            <div className="p-4 bg-[#2d2d3a] rounded-lg hover:bg-[#35b7ff]/10 transition-colors">
              <h3 className="font-medium text-white mb-2">Approval Checker</h3>
              <p className="text-gray-300 text-sm">Review and revoke token approvals</p>
            </div>
            <div className="p-4 bg-[#2d2d3a] rounded-lg hover:bg-[#35b7ff]/10 transition-colors">
              <h3 className="font-medium text-white mb-2">Liquidity Checker</h3>
              <p className="text-gray-300 text-sm">Analyze pool liquidity and depth</p>
            </div>
            <div className="p-4 bg-[#2d2d3a] rounded-lg hover:bg-[#35b7ff]/10 transition-colors">
              <h3 className="font-medium text-white mb-2">Wallet Inspector</h3>
              <p className="text-gray-300 text-sm">Check wallet transaction history</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TradersGuide;
