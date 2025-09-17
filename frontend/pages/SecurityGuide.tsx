import React, { useState } from 'react';
import { Header } from '../components/Header';
import { 
  FaShieldAlt,
  FaKey,
  FaExclamationTriangle,
  FaCheckCircle,
  FaLock
} from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const SecurityGuide = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', name: 'Security Basics', icon: <FaShieldAlt /> },
    { id: 'approvals', name: 'Token Approvals', icon: <FaKey /> },
    { id: 'scams', name: 'Common Scams', icon: <FaExclamationTriangle /> },
    { id: 'recovery', name: 'Scam Recovery', icon: <FaCheckCircle /> }
  ];

  return (
    <div className={styles.container}>
      <title>Security Guide | Paxeer Network</title>
      <meta 
        name="description" 
        content="Essential security practices for protecting your crypto assets on Paxeer Network" 
      />

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Security Guide
        </h1>

        <p className={styles.description}>
          Protect your assets with these essential security practices
        </p>

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

        {/* Security Basics Tab */}
        {activeTab === 'basics' && (
          <div className={styles.section}>
            <h2>Essential Security Practices</h2>
            
            <div className={styles.card}>
              <h3>Wallet Security</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use a hardware wallet for significant holdings</li>
                <li>Never share your seed phrase or private keys</li>
                <li>Store your seed phrase securely offline</li>
                <li>Use separate wallets for different purposes</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Transaction Safety</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Always verify transaction details before confirming</li>
                <li>Double-check recipient addresses</li>
                <li>Be cautious with contract interactions</li>
                <li>Use test transactions for large amounts</li>
              </ul>
            </div>
          </div>
        )}

        {/* Token Approvals Tab */}
        {activeTab === 'approvals' && (
          <div className={styles.section}>
            <h2>Managing Token Approvals</h2>
            
            <div className={styles.card}>
              <h3>Understanding Approvals</h3>
              <p>
                Token approvals allow smart contracts to spend your tokens. 
                While necessary for DeFi, excessive approvals pose security risks.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Approval Best Practices</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regularly review and revoke unused approvals</li>
                <li>Use limited approvals instead of unlimited when possible</li>
                <li>Be cautious when approving new contracts</li>
                <li>Use a dedicated wallet for DeFi interactions</li>
              </ul>
            </div>
          </div>
        )}

        {/* Common Scams Tab */}
        {activeTab === 'scams' && (
          <div className={styles.section}>
            <h2>Recognizing Common Scams</h2>
            
            <div className={styles.card}>
              <h3>Phishing Attacks</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fake websites mimicking legitimate services</li>
                <li>Emails or messages asking for your seed phrase</li>
                <li>Impersonation of support staff in social media</li>
                <li>Always verify URLs and official channels</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Malicious Contracts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contracts with hidden drainer functions</li>
                <li>Fake token approvals</li>
                <li>Always research contracts before interacting</li>
                <li>Use tools to check contract code</li>
              </ul>
            </div>
          </div>
        )}

        {/* Scam Recovery Tab */}
        {activeTab === 'recovery' && (
          <div className={styles.section}>
            <h2>Recovering From Scams</h2>
            
            <div className={styles.card}>
              <h3>Immediate Actions</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Transfer remaining funds to a new secure wallet</li>
                <li>Revoke all token approvals for the compromised wallet</li>
                <li>Document all suspicious transactions</li>
                <li>Report the incident to relevant authorities</li>
              </ol>
            </div>

            <div className={styles.card}>
              <h3>Preventing Future Incidents</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use hardware wallets for significant holdings</li>
                <li>Enable transaction previews in your wallet</li>
                <li>Keep software and extensions updated</li>
                <li>Educate yourself on emerging scam tactics</li>
              </ul>
            </div>
          </div>
        )}

        {/* Security Resources */}
        <div className="w-full max-w-4xl mt-8 bg-[#1e1e2d] p-6 rounded-lg border border-[#2d2d3a]">
          <h2 className="text-xl font-bold text-white mb-4">Additional Resources</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><a href="https://docs.paxeer.network/security" className="text-[#35b7ff] hover:underline">Paxeer Security Documentation</a></li>
            <li><a href="https://revoke.cash" className="text-[#35b7ff] hover:underline">Token Approval Revocation Tool</a></li>
            <li><a href="https://etherscan.io/tokenapprovalchecker" className="text-[#35b7ff] hover:underline">Approval Checker</a></li>
            <li><a href="https://community.paxeer.network/security" className="text-[#35b7ff] hover:underline">Paxeer Security Forum</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default SecurityGuide;
